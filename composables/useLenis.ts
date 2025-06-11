import Lenis from "lenis";

export function useLenis() {
    const lenis = ref<Lenis | null>(null);

    onMounted(() => {
        lenis.value = new Lenis({
            autoRaf: true,
            smoothWheel: true
        });
    });

    onUnmounted(() => {
        lenis.value?.destroy();
    });

    return lenis;
}