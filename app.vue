<template>
    <div>
        <NuxtRouteAnnouncer/>
        <VueLenis root :options="{ autoRaf: false }"/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div ref="overlay" class="transition-overlay overlay-slide-up"></div>
        <div ref="trailer" class="fixed inset-0 z-10000 flex w-32 h-32 bg-[var(--color-black)] rounded-full pointer-events-none opacity-0 transition-all duration-200 ease-out">
            <NuxtImg class="m-auto invert rotate-45" width="32" src="/images/arrow.svg" alt="arrow"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { VueLenis, useLenis } from "lenis/vue";
    import ScrollTrigger from "gsap/ScrollTrigger";

    const router = useRouter();
    const gsap = useGSAP();
    const lenis = useLenis();

    const trailer = ref<HTMLDivElement | null>(null);
    const overlay = ref<HTMLDivElement | null>(null);

    router.beforeEach(async (to, from, next) => {
        if (to.path === from.path) return next();

        if (import.meta.client && overlay.value) {
            overlay.value.classList.add("overlay-slide-up");
            await new Promise(resolve => setTimeout(resolve, 600));
        }

        next();
    });

    router.afterEach(() => {
        if (trailer.value) {
            trailer.value.style.opacity = "0";
        }

        if (overlay.value) {
            overlay.value?.classList.remove("overlay-slide-up");
        }
    });

    watchEffect((onInvalidate) => {
        if (!lenis.value) return;

        lenis.value.on("scroll", ScrollTrigger.update);

        function update(time: number) {
            lenis.value.raf(time * 1000);
        }
        
        gsap.ticker.add(update);

        gsap.ticker.lagSmoothing(0);

        onInvalidate(() => {
            gsap.ticker.remove(update);
        });
    });

    onMounted(() => {
        let x = 0;
        let y = 0;
        let isAnimating = false;

        const animateTrailer = (e: MouseEvent, interacting: boolean) => {
            if (!trailer.value) return;

            x = e.clientX - trailer.value.offsetWidth / 2;
            y = e.clientY - trailer.value.offsetHeight / 2;

            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(() => {
                    trailer.value.style.transform = `translate(${x}px, ${y}px)`;
                    trailer.value.style.opacity = `${interacting ? "1" : "0"}`;
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

        if (overlay.value) {
            overlay.value.offsetHeight;
            overlay.value?.classList.remove("overlay-slide-up");
        }

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
</style>