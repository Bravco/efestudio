<template>
    <div>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div ref="overlay" class="transition-overlay"></div>
        <div id="trailer" class="fixed inset-0 z-10000 flex w-20 h-20 bg-[var(--color-black)] rounded-full pointer-events-none opacity-0 transition-all duration-200 ease-out">
            <NuxtImg class="m-auto invert rotate-45" width="32" src="/images/arrow.svg" alt="arrow"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ScrollTrigger from "gsap/ScrollTrigger";
    import SplitText from "gsap/SplitText";

    const router = useRouter();
    const lenis = useLenis();
    const gsap = useGSAP();
    
    const projects = useState<Project[]>("projects", () => [
        {
            title: "LAVARCH",
            imageUrl: "/images/lavarch.webp",
            label: "ARCHITEKTONICKÉ ŠTÚDIO"
        },
        {
            title: "Marmat - SK",
            imageUrl: "/images/marmat.webp",
            label: "ČISTENIE POVRCHOV"
        },
        {
            title: "Nario",
            imageUrl: "/images/nario.webp",
            label: "INTERIÉROVÉ ŠTÚDIO"
        },
        {
            title: "Bagrespiš",
            imageUrl: "/images/bagrespis.webp",
            label: "BAGRE"
        }
    ]);

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

    watchEffect((onInvalidate) => {
        if (!lenis.value) return;

        lenis.value.on("scroll", ScrollTrigger.update);

        function update(time: number) {
            if (!lenis.value) return;
            lenis.value.raf(time * 1000);
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