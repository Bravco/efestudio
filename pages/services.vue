<template>
    <div>
        <section class="flex flex-col justify-end md:gap-8 gap-[var(--section-gap)]">
            <div class="w-fit ml-auto flex flex-col gap-4 mb-auto">
                <NuxtImg height="240" src="/images/lavarch.webp" alt="lavarch"/>
                <div class="small-alt-text flex justify-between">
                    <span>(01)</span>
                    <NuxtLink to="/projects/lavarch" class="flex items-center gap-2">
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
            <span class="small-alt-text">(ZRUČNOSTI)</span>
            <p class="text-animate small-paragraph">Naším klientom pomáhame vybudovať zrozumiteľnú značku s jasne definovanou pozíciou na trhu. S akým zadaním sa na nás môžete obrátiť?</p>
        </section>

        <section class="service-list h-dvh relative mb-[100dvh] -z-1">
            <div v-for="(service, index) in services" :key="index" class="service-item absolute inset-0 mx-[var(--content-padding)] border-t bg-[var(--color-light-gray)]">
                <div class="flex flex-col gap-8 pt-8">
                    <h2 class="paragraph w-full md:grid md:grid-cols-2 flex md:gap-0 gap-8">
                        <span>(0{{ index + 1 }})</span>
                        <span class="text-nowrap">{{ service.title }}</span>
                    </h2>
                    <p class="small-paragraph md:ml-auto md:w-1/2 md:pr-[10%] pr-0 md:pb-8 pb-4">{{ service.description }}</p>
                    <ul class="small-paragraph md:ml-auto md:w-1/2 grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 md:text-black text-[var(--color-dark-gray)]">
                        <li v-for="(item, index) in service.items" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-4 md:!py-[168px]">
            <Video/>
            <div class="small-alt-text flex items-center justify-between flex-wrap">
                <div class="flex items-center sm:gap-[10vw] gap-4">
                    <span>(WEB DESIGN)</span>
                    <span>(BRANDING)</span>
                </div>
                <div class="flex items-center sm:gap-[10vw] gap-4">
                    <span>(OBSAH)</span>
                    <span>(PROPAGÁCIA)</span>
                </div>
            </div>
        </section>

        <OurApproach/>

        <section class="flex flex-col items-center md:gap-12 gap-8">
            <p class="text-animate paragraph max-w-[80vw] text-center">„Nie každý deň natrafíte na agentúru, ktorá okamžite pochopí podstatu vašej firmy a dokáže z nej vyťažiť to najdôležitejšie. Vďaka chalanom z efestudio máme konečne komunikáciu od webu, cez vizuál až po obsah, ktorá presne odráža to, o čom značka LAVARCH je.“</p>
            <div class="flex flex-col items-center gap-2">
                <span clas="lg:text-lg md:text-base text-sm">Martin Jurčo</span>
                <span class="small-alt-text">(Konateľ)</span>
            </div>
        </section>

        <section class="flex flex-col gap-4">
            <h2 class="xl:ml-[60%] small-alt-text">(NAŠI KLIENTI)</h2>
            <Partners/>
        </section>

        <ContactUs/>

        <LatestProjects/>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio - služby" });

    const gsap = useGSAP();

    const services = [
        {
            title: "Web design",
            description: "V efestudio navrhujeme weby, ktoré sú prehľadné, zrozumiteľné s vizuálne príťažlivou identitou. Celý proces realizujeme komplexne, od analýzy a návrhu štruktúry až po dizajn, identitu a vývoj.",
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
            description: "Obsah tvoríme strategicky. V efestudio pripravujeme vizuály, videá a príspevky, ktoré kričia originalitou, jasne pomenúvajú podstatu a bez mihnutia oka posúvajú zákazníka k akcii. Zameriavame sa na kvalitu a silný nápad.",
            items: [
                "Video obsah",
                "Idea making",
                "Social media obsah",
                "Copywriting a scripting",
                "Kreatíva a posty",
                "Content stratégia"
            ]
        },
        {
            title: "Propagácia",
            description: "Vytvoriť peknú reklamu dnes nestačí. Všetko sa začína a končí pri ponuke. V rámci propagácie zastrešujeme celý proces  od návrhu ponuky “offer creation”, cez realizáciu jednotlivých kanálov, až po médiá a reporting.",
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

    let cleanupFns: (() => void)[] = [];

    onMounted(() => {
        nextTick(() => {
            const cleanupService = setupScrollListAnimation(
                ".service-list",
                ".service-item",
            );

            if (cleanupService) cleanupFns.push(cleanupService);
        });
    });

    onUnmounted(() => {
        cleanupFns.forEach((fn) => fn());
    });

    function setupScrollListAnimation(listSelector: string, itemSelector: string) {
        const items = document.querySelectorAll<HTMLElement>(itemSelector);

        if (!items.length) return;

        items.forEach((item, index) => {
            if (index !== 0) {
                gsap.set(item, { yPercent: 100 });
            }
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: listSelector,
                start: "top 96px",
                scrub: true,
                pin: true,
                pinSpacing: false
            }
        });

        items.forEach((item, index) => {
            if (index !== 0) {
                timeline.to(item, { yPercent: 0 }, ">");
            }
        });

        function setOffset() {
            const width = window.innerWidth;
            let titleHeight: number;

            switch (true) {
                case (width < 1024):
                    titleHeight = 6;
                    break;
                case (width < 1440):
                    titleHeight = 7;
                    break;
                case (width < 1920):
                    titleHeight = 8;
                    break;
                case (width < 2560):
                    titleHeight = 10;
                    break;
                case (width < 2880):
                    titleHeight = 11;
                    break;
                case (width >= 2880):
                    titleHeight = 12;
                    break;
                default:
                    titleHeight = 6;
            }

            items.forEach((item, index) => {
                if (index !== 0) {
                    gsap.set(item, { y: `${titleHeight * index}rem` });
                }
            });
        }

        setOffset();
        window.addEventListener("resize", setOffset);

        return () => {
            window.removeEventListener("resize", setOffset);
        };
    }
</script>