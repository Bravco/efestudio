<template>
    <div>
        <NuxtRouteAnnouncer/>
        <VueLenis root ref="lenisRef" :options="{ autoRaf: false }"/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div ref="overlay" class="transition-overlay"></div>
        <div id="trailer" class="fixed inset-0 z-10000 flex w-32 h-32 bg-[var(--color-black)] rounded-full pointer-events-none opacity-0 transition-all duration-200 ease-out">
            <NuxtImg class="m-auto invert rotate-45" width="32" src="/images/arrow.svg" alt="arrow"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { VueLenis } from "lenis/vue";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import SplitText from "gsap/SplitText";

    const router = useRouter();
    const gsap = useGSAP();

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

    const lenisRef = ref();

    watchEffect((onInvalidate) => {
        if (!lenisRef.value?.lenis) return;

        lenisRef.value.lenis.on("scroll", ScrollTrigger.update);

        function update(time: number) {
            lenisRef.value.lenis.raf(time * 1000);
        }
        
        gsap.ticker.add(update);

        gsap.ticker.lagSmoothing(0);

        onInvalidate(() => {
            gsap.ticker.remove(update);
        });
    });

    onBeforeMount(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
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
</style>