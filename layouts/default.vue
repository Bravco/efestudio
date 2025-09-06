<template>
    <div>
        <header>
            <nav
                :class="[ !mixBlend || isMenuOpen ? 'mix-blend-normal' : 'mix-blend-difference' ]"
                class="fixed w-full px-[var(--content-padding)] py-8 grid grid-cols-2 items-center z-50"
            >
                <NuxtLink 
                    @click="closeMenu"
                    class="w-fit invert z-10" 
                    to="/"
                >
                    <NuxtImg height="32" width="64" src="images/logo.svg" alt="logo"/>
                </NuxtLink>

                <div class="flex md:justify-between justify-end items-center gap-6 text-sm text-nowrap text-white">
                    <ul class="md:flex hidden gap-6 w-full mix-blend-difference">
                        <NuxtLink to="/works">WORKS</NuxtLink>
                        <NuxtLink to="/about">O NÁS</NuxtLink>
                        <NuxtLink to="/services">SLUŽBY</NuxtLink>
                        <NuxtLink class="flex items-center gap-2 ml-auto" :to="{ name: router.hasRoute(route.name) ? '' : 'index', hash: '#contact' }">
                            <span>KONTAKT</span>
                            <NuxtImg class="invert" src="images/arrow.svg" height="16" width="16" alt="arrow"/>
                        </NuxtLink>
                    </ul>

                    <button 
                        @click="toggleMenu" 
                        class="md:hidden block z-10 pointer"
                    >{{ isMenuOpen ? 'CLOSE' : 'MENU' }}</button>
                </div>

                <div
                    v-if="isMenuOpen"
                    :style="{
                        clipPath: clipPath ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)',
                        transition: 'clip-path 500ms ease-in-out'
                    }"
                    class="md:hidden absolute inset-0 h-dvh bg-black text-white flex flex-col items-start justify-between p-[var(--content-padding)] pt-32"
                >
                    <ul class="flex flex-col gap-6">
                        <li><NuxtLink @click="closeMenu" to="/works" class="underlined">WORKS</NuxtLink></li>
                        <li> <NuxtLink @click="closeMenu" to="/about" class="underlined">O NÁS</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="/services" class="underlined">SLUŽBY</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" :to="{ name: router.hasRoute(route.name) ? '' : 'index', hash: '#contact' }" class="underlined">KONTAKT</NuxtLink></li>
                        <li><NuxtLink @click="closeMenu" to="https://www.instagram.com/efestudio.sk/" class="underlined">INSTAGRAM</NuxtLink></li>
                    </ul>
                    <div class="flex flex-col">
                        <span>efestudio.sk</span>
                        <span>2025&copy;</span>
                        <p class="mt-2">Sme marketingové štúdio<br>Budujeme pre klientov marketingové stratégie poctivo — meratelne a bez zbytočných omáčok</p>
                    </div>
                </div>
            </nav>
        </header>

        <main>
            <slot/>
            <section id="contact" class="mt-[calc(var(--section-gap)+32px)] md:min-h-dvh flex flex-col justify-between md:gap-[168px] gap-[var(--section-gap)] bg-black text-white">
                <div class="flex lg:flex-row flex-col-reverse justify-between gap-4">
                    <p class="footer-paragraph">
                        <span class="md:block inline">Vytvorme spolu zrozumiteľnú značku. </span>
                        <span class="md:block inline">Výziev sa nebojíme — či už veľkých, alebo malých. </span>
                        <span class="md:block inline">Poďme sa porozprávať o tej vašej.</span>
                    </p>
                    <span class="small-alt-text">(5 VOĽNÝCH MIEST V 2025)</span>
                </div>
                <NuxtLink to="https://p7l04e24.forms.app/efe-web" target="_blank" class="paragraph !leading-none cta-underlined cursor-pointer">
                    ⮡ Zabookuj si call
                </NuxtLink>
                <NuxtImg class="md:inline hidden w-full mx-auto" src="/images/efestudio.svg" alt="efestudio"/>
            </section>
        </main>
        
        <footer class="grid md:grid-cols-3 grid-cols-1 gap-12 bg-black text-white !pt-[var(--section-gap)]">
            <NuxtImg class="md:hidden inline w-full invert" src="/images/logo.svg" alt="logo"/>
            <ul class="flex flex-col">
                <li>{{ time }} SNV</li>
                <li>KOLLÁROVA 3</li>
                <li>SLOVAKIA 052 01</li>
                <li class="md:inline hidden mt-auto">efestudio 2025&copy;</li>
            </ul>
            <ul class="flex flex-col gap-2 md:order-0 order-[-1] text-sm">
                <li class="flex flex-wrap items-center justify-start md:gap-8 gap-[33%]">
                    <NuxtLink class="underlined" to="https://www.instagram.com/efestudio.sk/" target="_blank">Instagram</NuxtLink>
                    <NuxtLink class="underlined" to="/vop">Vop & GDPR</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="underlined" to="https://www.facebook.com/efectivask/" target="_blank">Facebook</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="underlined" to="https://dribbble.com/efestudio--" target="_blank">Dribbble</NuxtLink>
                </li>
                <li class="mt-8 flex md:flex-row flex-col md:justify-around justify-start gap-2">
                    <NuxtLink class="underlined" to="mailto:hello@efestudio.sk">hello@efestudio.sk</NuxtLink>
                    <NuxtLink class="underlined md:mx-auto mx-0" to="tel:+421918502487">+421 918 502 487</NuxtLink>
                </li>
            </ul>
            <div class="flex flex-col gap-4 text-sm">
                <p class="mt-auto">Sme marketingové štúdio<br>Budujeme pre klientov marketingové stratégie poctivo — merateľne a bez zbytočných omáčok</p>
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
    const mixBlend = ref<boolean>(true);
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
        const heroSection = document.querySelector("#hero");
        if (heroSection) {
            const heroRect = heroSection.getBoundingClientRect();
            if (heroRect.top < 0) {
                mixBlend.value = true;
            } else {
                mixBlend.value = false;
            }
        } else {
            mixBlend.value = true;
        }
    };

    const updateTime = () => {
        const now = new Date();
        time.value = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    watch(() => route.path, () => {
        handleSroll();
        animateTextElements();
    });

    onMounted(() => {
        window.addEventListener("scroll", handleSroll);
        handleSroll();

        updateTime();
        timer = setInterval(updateTime, 1000);

        document.fonts.ready.then(() => animateTextElements());
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleSroll);
        
        if (timer) {
            clearInterval(timer);
        }
    });

    function animateTextElements() {
        const splitElements = document.querySelectorAll(".text-animate");

        splitElements.forEach(element => {
            const split = SplitText.create(element, {
                type: "lines",
                mask: "lines",
                autoSplit: true
            });

            gsap.from(split.lines, {
                delay: 0.3,
                duration: 0.5,
                yPercent: 100,
                stagger: 0.15,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%"
                },
                onComplete: () => {
                    split.revert();
                }
            });
        });
    }
</script>