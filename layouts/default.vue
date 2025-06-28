<template>
    <div>
        <header>
            <nav class="fixed w-full px-[var(--content-padding)] py-8 flex justify-between items-center z-50">
                <NuxtLink 
                    @click="closeMenu" :class="{ invert: (navInvert && !isMenuOpen) || isMenuOpen }" 
                    class="min-w-18 transition-all z-10" 
                    to="/"
                >
                    <NuxtImg height="32" width="64" src="images/logo.svg" alt="logo"/>
                </NuxtLink>

                <button 
                    @click="toggleMenu" 
                    :class="[
                        navInvert && !isMenuOpen
                            ? 'bg-(--color-white) text-(--color-black)'
                            : 'bg-(--color-black) text-(--color-white)'
                    ]"
                    class="md:hidden block py-2 px-6 rounded-full z-10 pointer transition-all md:text-sm text-xs"
                >{{ isMenuOpen ? 'CLOSE' : 'MENU' }}</button>

                <div
                    v-if="isMenuOpen"
                    :style="{
                        clipPath: clipPath ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)',
                        transition: 'clip-path 500ms ease-in-out'
                    }"
                    class="md:hidden absolute inset-0 h-dvh bg-(--color-black) text-(--color-white) flex flex-col items-start justify-between p-[var(--content-padding)] pt-32"
                >
                    <ul class="flex flex-col gap-6">
                        <li><NuxtLink @click="closeMenu" to="/works" class="underlined">WORKS</NuxtLink></li>
                        <li> <NuxtLink @click="closeMenu" to="/about" class="underlined">O NÁS</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/services" class="underlined">SLUŽBY</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" :to="{ name: router.hasRoute(route.name) ? '' : 'index', hash: '#contact' }" class="underlined">KONTAKT</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/services" class="underlined">INSTAGRAM</NuxtLink></li>
                    </ul>
                    <div class="flex flex-col">
                        <span>efestudio.sk</span>
                        <span>2025&copy;</span>
                        <p class="mt-2">Sme marketingové štúdio<br>Budujeme pre klientov marketingové stratégie poctivo — meratelne a bez zbytočných omáčok</p>
                    </div>
                </div>

                <ul class="md:flex hidden gap-2 text-(--color-white) text-sm">
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink to="/works">WORKS</NuxtLink></li>
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink to="/about">O NÁS</NuxtLink></li>
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink to="/services">SLUŽBY</NuxtLink></li>
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink :to="{ name: router.hasRoute(route.name) ? '' : 'index', hash: '#contact' }">KONTAKT</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <main>
            <slot/>
            <section id="contact" class="mt-[calc(var(--section-gap)+32px)] md:min-h-dvh flex flex-col justify-between gap-[var(--section-gap)] bg-(--color-black) text-(--color-white)">
                <div class="flex md:flex-row flex-col-reverse justify-between md:gap-[20%] gap-4">
                    <p class="lg:md-text-[50px] md:text-[40px] text-[28px] leading-none">Vytvorme spolu zrozumiteľnú značku. Výziev sa nebojíme — či už veľkých, alebo malých. Poďme sa porozprávať o tej vašej.</p>
                    <span class="text-sm text-nowrap">(5 VOĽNÝCH MIEST V 2025)</span>
                </div>
                <NuxtLink to="/" class="md:text-[62px] text-[32px] leading-none cta-underlined">
                    ⮡ Zabookuj si call
                </NuxtLink>
                <NuxtImg class="md:inline hidden w-full mx-auto" src="/images/efestudio.svg" alt="efestudio"/>
            </section>
        </main>
        
        <footer class="grid md:grid-cols-3 grid-cols-1 gap-12 bg-(--color-black) text-(--color-white) !pt-[var(--section-gap)]">
            <NuxtImg class="md:hidden inline w-full invert" src="/images/logo.svg" alt="logo"/>
            <ul class="flex flex-col">
                <li>{{ time }} SNV</li>
                <li>SLOVAKIA 052 01</li>
                <li class="md:inline hidden mt-auto">efestudio 2025&copy;</li>
            </ul>
            <ul class="flex flex-col gap-2 md:order-0 order-[-1] text-sm">
                <li class="flex flex-wrap items-center justify-start md:gap-8 gap-[33%]">
                    <NuxtLink class="underlined" to="" target="_blank">Instagram</NuxtLink>
                    <NuxtLink class="underlined" to="/vop">Vop & GDPR</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="underlined" to="" target="_blank">Facebook</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="underlined" to="" target="_blank">Béhance</NuxtLink>
                </li>
                <li class="mt-8 flex md:flex-row flex-col md:justify-around justify-start gap-2">
                    <NuxtLink class="underlined" to="mailto:hello@efestudio.sk">hello@efestudio.sk</NuxtLink>
                    <NuxtLink class="underlined md:mx-auto mx-0" to="tel:+421918502487">+421 918 502 487</NuxtLink>
                </li>
            </ul>
            <div class="flex flex-col gap-4 text-sm">
                <p class="mt-auto">Sme marketingové štúdio<br>Budujeme pre klientov marketingové stratégie poctivo — meratelne a bez zbytočných omáčok</p>
                <span class="md:hidden inline">efestudio 2025&copy;</span>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
    import SplitText from "gsap/SplitText";

    const route = useRoute();
    const router = useRouter();
    const gsap = useGSAP();

    const isMenuOpen = ref<boolean>(false);
    const navInvert = ref<boolean>(false);
    const clipPath = ref<boolean>(false);
    const time = ref<string>("");
    let timer: ReturnType<typeof setInterval> | null = null;

    const openMenu = () => {
        if (isMenuOpen.value) return;

        isMenuOpen.value = true;
        nextTick(() => {
            requestAnimationFrame(() => {
            clipPath.value = true;
            });
        });
    };

    const closeMenu = () => {
        if (!isMenuOpen.value) return;

        clipPath.value = false;
        setTimeout(() => {
            isMenuOpen.value = false;
        }, 500);
    };

    const toggleMenu = () => {
        if (isMenuOpen.value) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const handleSroll = () => {
        const navHeight = 104;
        let invert = false;

        const heroSection = document.querySelector("#hero");
        if (heroSection) {
            const heroRect = heroSection.getBoundingClientRect();
            if (heroRect.top + navHeight/2 >= 0) {
                invert = true;
            }
        }

        const contactSection = document.querySelector("#contact");
        if (contactSection) {
            const contactRect = contactSection.getBoundingClientRect();
            if (contactRect.top - navHeight/2 <= 0) {
                invert = true;
            }
        }

        const splashSection = document.querySelector("#splash");
        if (splashSection) {
            const splashRect = splashSection.getBoundingClientRect();
            if (splashRect.top - navHeight/2 <= 0 &&
                splashRect.bottom - navHeight/2 >= 0) {
                invert = true;
            }
        }

        navInvert.value = invert;
    };

    const updateTime = () => {
        const now = new Date();
        time.value = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    watch(route, (to, from) => {
        handleSroll();
    });

    onMounted(() => {
        window.addEventListener("scroll", handleSroll);
        handleSroll();

        updateTime();
        timer = setInterval(updateTime, 1000);

        document.fonts.ready.then(() => {
            const splitElements = document.querySelectorAll(".text-animate");

            splitElements.forEach(element => {
                const split = SplitText.create(element, {
                    type: "lines",
                    mask: "lines",
                    autoSplit: true
                });

                gsap.from(split.lines, {
                    duration: 1,
                    yPercent: 100,
                    stagger: 0.2,
                    ease: "expo.inOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%"
                    },
                    onComplete: () => {
                        split.revert();
                    }
                });
            });
        });
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleSroll);
        
        if (timer) {
            clearInterval(timer);
        }
    });
</script>