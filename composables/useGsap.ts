import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

export function useGsap() {
    gsap.registerPlugin(ScrollTrigger, SplitText);
    return { gsap, ScrollTrigger, SplitText };
}