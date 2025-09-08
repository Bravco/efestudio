<template>
    <div>
        <section 
            v-gsap.timeline
            id="hero" 
            class="relative min-h-dvh flex flex-col justify-between text-white -z-1"
            style="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('/images/hero.webp') center/cover no-repeat;"
        >
            <div class="grid sm:grid-cols-2 grid-cols-1">
                <p class="text-animate index-hero-paragraph md:col-start-2 col-start-1">
                    <span class="block">Sme marketingové štúdio </span>
                    <span class="md:block inline">Budujeme pre klientov marketingové stratégie </span>
                    <span class="md:block inline">poctivo — merateľne a bez zbytočných omáčok</span>
                </p>
            </div>
            <div v-gsap.add.from="{ delay: 0.5, opacity: 0, yPercent: 100, ease: 'power1.out' }" class="small-alt-text flex justify-between">
                <span>2025/</span>
                <span>(SCROLL)</span>
            </div>
            <NuxtImg v-gsap.add.withPrevious.from="{ delay: 0.5, opacity: 0, yPercent: 30, ease: 'power1.out' }" class="w-full mx-auto" src="/images/efestudio.svg" alt="efestudio"/>
            <div class="hero-overlay absolute inset-0 bg-black opacity-0 pointer-events-none z-10"></div>
        </section>

        <section class="bg-[var(--color-light-gray)] -mb-[var(--section-gap)] flex flex-col gap-[var(--section-gap)] !pt-16 !pb-[var(--section-gap)]">
            <div>
                <h2 class="small-alt-text md:w-[15vw] w-auto h-8 md:float-left">(ABOUT US)</h2>
                <Paragraph>
                    Sme digitálne marketingové štúdio. Klientom pomáhame vybudovať zrozumiteľnú značku s jasne definovanou pozíciou na trhu
                </Paragraph>
            </div>
            <div class="ml-auto md:w-2/5 w-full flex flex-col gap-8">
                <p class="text-animate small-paragraph">Váš interný tím pre digitálny marketing. Klientom ponúkame komplexné riešenia v oblasti značky, obsahu a webov.</p>
                <Button to="/about" text="ZOBRAZIŤ VIAC O NÁS" arrow/>
            </div>
        </section>

        <section v-if="projects" class="bg-[var(--color-light-gray)] flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-6">
                <h2 class="small-alt-text col-start-2">(VYBRANÉ PROJEKTY)</h2>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
                <LazyProjectCard v-for="project in projects" :key="project.slug" :project="project"/>
            </div>
        </section>

        <section class="flex flex-col gap-[var(--section-gap)]">
            <div class="grid md:grid-cols-[384px_1fr] grid-cols-1">
                <h2 class="small-alt-text">(NÁŠ PROCES)</h2>
                <Paragraph class="index-process-paragraph">
                    Ako si môžeme byť istí, že vám doručíme očakávané výsledky?
                </Paragraph>
            </div>
            <div class="flex flex-col gap-[168px]">
                <div
                    v-for="(process, index) in processes"
                    :key="index"
                    class="relative grid md:grid-cols-[384px_1fr_1fr] md:gap-0 gap-6 place-items-start pt-[var(--content-padding)]"
                >
                    <div v-gsap.whenVisible.once.from="{ scaleX: 0 }" class="absolute inset-0 h-px bg-[var(--color-black)] origin-left"></div>
                    <div class="w-full flex md:flex-row flex-col justify-between gap-6 pr-[30%]">
                        <NuxtImg class="aspect-square lg:w-[100px] md:w-[80px] w-[71px]" :src="process.imageUrl" width="100" height="100" :alt="process.title"/>
                        <span class="small-alt-text md:inline hidden">(0{{ index+1 }})</span>
                    </div>
                    <div class="grid md:grid-cols-1 grid-cols-[100px_1fr]">
                        <span class="small-alt-text md:hidden inline">(0{{ index+1 }})</span>
                        <h3 class="text-animate paragraph">
                            <span v-for="line in process.title.split('\n')">{{ line }}<br></span>
                        </h3>
                    </div>
                    <p class="text-animate small-paragraph">{{ process.description }}</p>
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

        <section class="flex flex-col gap-8">
            <h2 class="small-alt-text xl:ml-[60%]">(NAŠI KLIENTI)</h2>
            <Partners/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio" });

    const gsap = useGSAP();
    
    const { data: projects } = await useAsyncData("projects", () => {
        return queryCollection("projects").order("ordering", "ASC").all();
    }, { lazy: true });

    const processes = [
        {
            title: "Explore \nideas",
            description: "V prvom kroku je kľúčové identifikovať piliere, na ktorých bude naša spolupráca stáť. Preto detailne zanalyzujeme minulosť, súčasný stav a príležitosti, ktoré máme k dispozícii. Po identifikovaní kľúčových elementov vám vykreslíme realitu a nastavíme očakávania ďalšej spolupráce.",
            imageUrl: "/images/circle1.svg"
        },
        {
            title: "Form \noptions",
            description: "Po hĺbkovej analýze dát a konkurentov prichádza na rad plánovanie. Odpovieme si na dôležité otázky, ako napríklad: Čo od nás klient skutočne chce? Proti komu súťažíme? Čo jedinečné vieme doručiť? Tým zasadíme víťaznú vlajku do zeme a na jej základe postavíme budúcu stratégiu.",
            imageUrl: "/images/circle2.svg"
        },
        {
            title: "Experience \nthe moment",
            description: "Po jasne stanovených cieľoch prichádza na rad kreativita. Nie však hocijaká, kreativitu staviame na tvrdých faktoch, nie na domnienkach ani na „pekných trendoch“. V tejto fáze zvolíme konkrétne taktiky, ktoré naplnia ciele a prinesú vysokú návratnosť v súlade so stanovenou stratégiou.",
            imageUrl: "/images/circle3.svg"
        }
    ];

    onMounted(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                scrub: true,
                pin: true,
                pinSpacing: false
            }
        });

        tl.to(".hero-overlay", {
            opacity: 0.7,
            ease: "none"
        });
    });
</script>