<template>
    <div>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div ref="overlay" class="transition-overlay"></div>
        <div id="trailer" class="fixed inset-0 z-10000 w-20 h-20 rounded-full pointer-events-none opacity-0 transition-all duration-200 ease-out"></div>
    </div>
</template>

<script lang="ts" setup>
    const router = useRouter();
    const overlay = ref<HTMLDivElement | null>(null);
    
    router.beforeEach(async (to, from, next) => {
        if (to.path === from.path) {
            next();
            return;
        }

        if (overlay.value) {
            overlay.value.classList.add("overlay-slide-up");
            await new Promise(resolve => setTimeout(resolve, 600));
        }

        next();
    });

    router.afterEach(() => {
        if (overlay.value) {
            overlay.value?.classList.remove("overlay-slide-up");
        }
    });

    onMounted(() => {
        const trailer: HTMLDivElement | null = document.querySelector("#trailer");

        let x = 0;
        let y = 0;
        let isAnimating = false;

        const animateTrailer = (e: MouseEvent, interacting: boolean) => {
            if (!trailer) return;

            x = e.clientX - trailer.offsetWidth / 2;
            y = e.clientY - trailer.offsetHeight / 2;

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(() => {
                    trailer.style.transform = `translate(${x}px, ${y}px)`;
                    trailer.style.opacity = `${interacting ? "1" : "0"}`;
                    isAnimating = false;
                });
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!e.target) return;

            const interactable = (e.target as HTMLElement).closest(".interactable");
            const interacting: boolean = interactable !== null;

            animateTrailer(e, interacting);
        };

        window.addEventListener("mousemove", handleMouseMove);

        onUnmounted(() => {
            window.removeEventListener("mousemove", handleMouseMove);
        });
    });
</script>

<style scoped>
    .transition-overlay {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 9999;
        transition: bottom 600ms ease-in-out;
    }

    .overlay-slide-up {
        bottom: 0;
    }

    #trailer {
        backdrop-filter: grayscale(1) invert(1);
    }
</style>