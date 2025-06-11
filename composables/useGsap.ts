import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export function useGsap() {
    const lenis = useLenis();

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

    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    });


    return { gsap, ScrollTrigger, SplitText };
}