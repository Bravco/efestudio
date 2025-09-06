<template>
    <div>
        <NuxtRouteAnnouncer/>
        <VueLenis root :options="{ autoRaf: false }"/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div class="transition-overlay" :class="{ 'overlay-slide-up': isTransitioning }"></div>
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

    const isTransitioning = ref<boolean>(false);
    const trailer = ref<HTMLDivElement | null>(null);

    router.beforeEach(async (to, from, next) => {
        if (to.path === from.path) return next();

        isTransitioning.value = true;
        await new Promise(resolve => setTimeout(resolve, 600));
        next();
    });

    router.afterEach(() => {
        isTransitioning.value = false;
        
        if (trailer.value) {
            trailer.value.style.opacity = "0";
        }
    });

    watchEffect((onInvalidate) => {
        if (!lenis.value) return;

        lenis.value.on("scroll", ScrollTrigger.update);

        function update(time: number) {
            lenis.value!.raf(time * 1000);
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
                    trailer.value!.style.transform = `translate(${x}px, ${y}px)`;
                    trailer.value!.style.opacity = `${interacting ? "1" : "0"}`;
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
</style>