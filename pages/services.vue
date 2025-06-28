<template>
    <div>
        <section class="flex flex-col justify-end md:gap-8 gap-[var(--section-gap)]">
            <div class="w-fit ml-auto flex flex-col gap-4 mb-auto">
                <NuxtImg height="240" src="/images/lavarch.webp" alt="lavarch"/>
                <div class="flex justify-between">
                    <span>(01)</span>
                    <NuxtLink to="" class="flex items-center gap-2">
                        Vybraný projekt
                        <NuxtImg src="/images/arrow.svg" height="16" width="16" alt="selected project"/>
                    </NuxtLink>
                </div>
            </div>
            <div class="flex gap-2">
                <h1>SLUŽBY</h1>
                <span class="md:text-xl">(04)</span>
            </div>
        </section>

        <section class="grid md:grid-cols-[2fr_1fr] grid-cols-1 gap-4 place-items-start">
            <span class="text-sm">(ZRUČNOSTI)</span>
            <p class="text-animate md:text-xl">Naším klientom pomáhame vybudovať zrozumiteľnú značku s jasne definovanou pozíciou na trhu. S akým zadaním sa na nás môžete obrátiť?</p>
        </section>

        <section class="service-list h-dvh relative">
            <div v-for="(service, index) in services" :key="index" class="service-item absolute inset-0 mx-8 border-t bg-[var(--color-white)]">
                <div class="flex flex-col gap-8 pt-8">
                    <h2 class="w-full md:grid md:grid-cols-2 flex md:gap-0 gap-8 lg:text-[62px] md:text-[48px] text-[32px] leading-none tracking-tight">
                        <span>(0{{ index + 1 }})</span>
                        <span class="-ml-2 text-nowrap">{{ service.title }}</span>
                    </h2>
                    <p class="md:ml-auto md:w-1/2 md:pr-[10%] pr-0 md:pb-8 pb-4 md:text-xl">{{ service.description }}</p>
                    <ul class="md:ml-auto md:w-1/2 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 md:text-xl md:text-black text-[var(--color-dark-gray)]">
                        <li v-for="(item, index) in service.items" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="flex flex-col items-center md:gap-12 gap-8">
            <p class="text-animate max-w-[1280px] text-center lg:text-[62px] md:text-[48px] text-[32px] -tracking-[2%] leading-[115%]">"It's not every day you get to work with a team that instantly understands your visual style and motion needs, and foresees crafting a future-proof space. We worked together in a very collaborative way when it came to small interactions and finding ways to integrate my animated type style into the site's structure. "</p>
            <div class="flex flex-col items-center gap-2">
                <span clas="lg:text-lg">Patrik Vojtuš</span>
                <span class="lg:text-sm text-xs">(DESIGN LEAD)</span>
            </div>
        </section>

        <section id="splash" class="min-h-dvh relative my-8">
            <NuxtImg class="h-full w-full absolute inset-0 object-cover object-center" src="/images/services.webp" alt="services"/>
        </section>

        <section class="flex flex-col gap-4">
            <h2 class="xl:ml-[60%] text-sm text-nowrap">(NAŠI KLIENTI)</h2>
            <Partners/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio - služby" });

    const gsap = useGSAP();

    const serviceItems = ref(null);

    const services = [
        {
            title: "Web design",
            description: "V efestudio navrhujeme weby, ktoré sú prehľadné, zrozumiteľné a s vizuálne príťažlivou identitou. Celý proces uchopíme komplexne, od analýzy a návrhu štruktúry až po dizajn, identitu a vývoj.",
            items: [
                "Design UI / UX",
                "Web stratégia",
                "Prototyping",
                "Development",
                "SEO Optimalizácia",
                "Správa webu"
            ]
        },
        {
            title: "Branding",
            description: "Prečo sa k vám klienti vracajú a čo im naozaj viete ponúknuť? Definujeme zrozumiteľnosť vašej značky s jasne nastavenou pozíciou na trhu oproti vašej konkurencii. Tento postup nám zaručí konkurenčnú výhodu a udržateľný rast.",
            items: [
                "Logo design",
                "Naming",
                "Brand stratégia",
                "Development",
                "Messaging and voice",
                "Brand guidelines"
            ]
        },
        {
            title: "Obsah",
            description: "Obsah tvoríme obsah strategicky. V efestudio pripravujeme vizuály, videá a príspevky, ktoré kričia originalitou, jasne pomenúvajú podstatu a bez mihnutia oka posúvajú zákazníka k akcii. Zameriavame sa na kvalitu, silný nápad.",
            items: [
                "Video obsah",
                "Idea making",
                "Social media obsah",
                "Copywriting a scripting",
                "Kreativa a posty",
                "Content stratégia"
            ]
        },
        {
            title: "Propagácia",
            description: "Vytvoriť peknú reklamu dnes nestačí. Všetko začína a končí pri ponuke. V rámci propagácie zastrešujeme celý proces  od návrhu ponuky offer creation, cez realizáciu jednotlivých kanálov, až po médiá a reporting.",
            items: [
                "Offer creation",
                "Affiliate marketing",
                "Brand kampane",
                "Email marketing",
                "Výkonnostné kampane",
                "Reporting a optimalizácia"
            ]
        }
    ];

    onMounted(() => {
        serviceItems.value = document.querySelectorAll(".service-item");

        setTimeout(() => {
            setTitleOffset();

            if (serviceItems.value?.length) {
                serviceItems.value.forEach((item, index) => {
                    if (index !== 0) {
                        gsap.set(item, { yPercent: 100 });
                    }
                });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".service-list",
                        start: "top 104px",
                        //end: () => `+=${serviceItems.value.length*100}%`,
                        pin: true,
                        pinSpacing: true,
                        scrub: true
                    }
                });

                serviceItems.value.forEach((item, index) => {
                    if (index !== 0) {
                        timeline.to(item, { yPercent: 0, }, ">");
                    }
                });
            }
        }, 1000);
        
        window.addEventListener("resize", setTitleOffset);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", setTitleOffset);
    });

    function setTitleOffset() {
        if (!serviceItems.value) return;
    
        const isMobile = window.innerWidth <= 768;
        const titleHeight = isMobile ? 96 : 126;

        serviceItems.value.forEach((item, index) => {
            if (index !== 0) {
                gsap.set(item, { top: `${titleHeight*index}px` });
            }
        });
    }
</script>