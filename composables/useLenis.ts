import Lenis from "lenis";

export function useLenis() {
    const router = useRouter();
    const lenis = ref<Lenis | null>(null);

    onMounted(() => {
        const _lenis = new Lenis({
            smoothWheel: true
        });
        lenis.value = _lenis;

        const raf = (time: number) => {
            _lenis.raf(time);
            requestAnimationFrame(raf);
        };
        
        requestAnimationFrame(raf);
    });

    onUnmounted(() => {
        lenis.value?.destroy();
    });

    return lenis;
}