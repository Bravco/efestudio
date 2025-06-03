<template>
    <div>
        <header>
            <nav class="fixed w-full p-8 flex justify-between z-50 backdrop-blur-xs">
                <NuxtLink :class="{ invert: navInvert }" class="transition-all" to="/">
                    <NuxtImg src="images/logo.svg" height="32" alt="logo"/>
                </NuxtLink>

                <button 
                    @click="toggleMenu" 
                    :class="[ navInvert && !isMenuOpen ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                    class="md:hidden block py-2 px-6 rounded-full z-10 pointer transition-all">
                    {{ isMenuOpen ? 'CLOSE' : 'MENU' }}
                </button>

                <div v-if="isMenuOpen" class="flex md:hidden absolute inset-0 h-dvh bg-(--color-black) text-(--color-white) flex flex-col items-start justify-between p-8">
                    <NuxtLink @click="toggleMenu" to="/" class="invert">
                        <NuxtImg src="images/logo.svg" height="32" alt="logo"/>
                    </NuxtLink>
                    <ul class="flex flex-col gap-6 text-4xl font-medium">
                        <li>
                            <NuxtLink @click="toggleMenu" to="/" class="nav-link">WORKS</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" to="/about" class="nav-link">O NÁS</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" to="/services" class="nav-link">SLUŽBY</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" :to="{ hash: '#contact' }" class="nav-link">KONTAKT</NuxtLink>
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-2 underline text-lg">
                        <li>
                            <NuxtLink @click="toggleMenu" to="/">Instagram</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" :to="{ hash: '#contact' }">Contact us</NuxtLink>
                        </li>
                    </ul>
                </div>

                <ul class="md:flex hidden gap-2 text-(--color-white)">
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink to="/" class="nav-link">WORKS</NuxtLink></li>
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink to="/about" class="nav-link">O NÁS</NuxtLink></li>
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink to="/services" class="nav-link">SLUŽBY</NuxtLink></li>
                    <li
                        :class="[ navInvert ? 'bg-(--color-white) text-(--color-black)' : 'bg-(--color-black) text-(--color-white)' ]"
                        class="py-2 px-6 rounded-full transition-all"
                    ><NuxtLink :to="{ hash: '#contact' }" class="nav-link">KONTAKT</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <main>
            <div class="mx-8 mb-8 flex flex-col gap-26 py-26">
                <slot/>
            </div>
            <section id="contact" class="flex flex-col gap-32 bg-(--color-black) text-(--color-white) p-8 md:pb-8 pb-26">
                <div class="flex md:flex-row flex-col-reverse justify-between md:gap-[20%] gap-4">
                    <p class="text-5xl font-medium">Visual narratives  meant to evoke feeling. our work spans disciplines, unified by the spans disciplines,</p>
                    <span class="text-nowrap">(5 VOĽNÝCH MIEST V 2025)</span>
                </div>
                <NuxtLink to="/" class="text-5xl font-medium underline">⮡ Zabookuj si call</NuxtLink>
                <h1 class="md:inline hidden 2xl:text-[352px] xl:text-[300px] lg:text-[224px] text-[172px] font-medium">efestudio</h1>
            </section>
        </main>
        
        <footer class="grid md:grid-cols-3 grid-cols-1 gap-12 bg-(--color-black) text-(--color-white) p-8">
            <NuxtImg class="md:hidden inline w-full invert" src="/images/logo.svg" alt="logo"/>
            <ul class="flex flex-col">
                <li>{{ time }} SNV</li>
                <li>SLOVAKIA 052 01</li>
                <li class="md:inline hidden mt-auto">efestudio 2025&copy;</li>
            </ul>
            <ul class="md:order-0 order-[-1] underline">
                <li class="flex items-center md:justify-start justify-between gap-8">
                    <NuxtLink to="" class="">Instagram</NuxtLink>
                    <NuxtLink to="">Vop & GDPR</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Facebook</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">Béhance</NuxtLink>
                </li>
                <li class="mt-8">
                    <NuxtLink to="mailto:hello@efestudio.sk">hello@efestudio.sk</NuxtLink>
                </li>
            </ul>
            <div class="flex flex-col gap-4">
                <p class="mt-auto">Sme marketingové štúdio<br>Budujeme — realizujeme pre klientov marketingové stratégie poctivo, meratelne a bez zbytočných omáčok</p>
                <span class="md:hidden inline">efestudio 2025&copy;</span>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
    const isMenuOpen = ref<boolean>(false);
    const navInvert = ref<boolean>(false);
    const time = ref<string>("");
    let timer: ReturnType<typeof setInterval> | null = null;

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };

    const handleSroll = () => {
        const contactSection = document.querySelector("#contact");
        if (!contactSection) return;

        const contactTop = contactSection.getBoundingClientRect().top;

        if (contactTop <= 56) {
            navInvert.value = true;
        } else {
            navInvert.value = false;
        }
    };

    const updateTime = () => {
        const now = new Date();
        time.value = now.toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    onMounted(() => {
        window.addEventListener("scroll", handleSroll);
        handleSroll();

        updateTime();
        timer = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleSroll);
        
        if (timer) {
            clearInterval(timer);
        }
    });
</script>