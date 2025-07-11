<template>
    <div>
        <section 
            v-gsap.timeline
            id="hero" 
            class="relative min-h-dvh flex flex-col justify-between text-[var(--color-white)] -z-1"
            style="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('/images/hero.webp') center/cover no-repeat;"
        >
            <p class="text-animate index-hero-paragraph">
                Sme marketingové štúdio
                <br>
                Budujeme pre klientov marketingové stratégie
                <br class="hidden md:inline">
                poctivo — meratelne a bez zbytočných omáčok
            </p>
            <div v-gsap.add.from="{ opacity: 0, y: 100 }" class="small-alt-text flex justify-between">
                <span>2025/</span>
                <span>(SCROLL)</span>
            </div>
            <NuxtImg v-gsap.add.from="{ opacity: 0, y: 100 }" class="w-full mx-auto" src="/images/efestudio.svg" alt="efestudio"/>
            <div class="hero-overlay absolute inset-0 bg-black opacity-0 pointer-events-none z-10"></div>
        </section>

        <section class="bg-[var(--color-white)] -mb-[var(--section-gap)] flex flex-col gap-[var(--section-gap)] !pt-16 !pb-[var(--section-gap)]">
            <div>
                <h2 class="small-alt-text md:w-[15vw] w-auto h-8 md:float-left">(ABOUT US)</h2>
                <Paragraph>
                    Sme digitálne marketingové štúdio. Klientom prinášame komplexné riešenia v oblasti značky obsahu a webov. Každý projekt staviame na jasnej stratégii a cieľoch.
                </Paragraph>
            </div>
            <div class="ml-auto md:w-2/5 w-full flex flex-col gap-8">
                <p class="text-animate small-paragraph">Sme iniciatívni, každý projekt má jasný cieľ, na ktorom spoločne pryacujeme ako tím. Marketing realizujeme rozvažne ss dôrazom na výsledky, rozpočet a očakávanú návratnosť.</p>
                <Button to="/about" text="ZOBRAZIŤ VIAC O NÁS" arrow/>
            </div>
        </section>

        <section class="bg-[var(--color-white)] flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-6">
                <h2 class="small-alt-text col-start-2">(VYBRANÉ PROJEKTY)</h2>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
                <ProjectCard v-for="project in projects" :key="project.title" :project="project"/>
            </div>
            <Button class="md:hidden flex mx-auto mt-12" to="/works" text="VIAC PROJEKTOV" arrow/>
        </section>

        <section class="flex flex-col gap-[var(--section-gap)]">
            <div class="grid md:grid-cols-[384px_1fr] grid-cols-1">
                <h2 class="small-alt-text">(NÁŠ PROCES)</h2>
                <Paragraph class="index-process-paragraph">
                    Ako dokážeme doručiť výsledky, na ktorých sme sa dohodli?
                </Paragraph>
            </div>
            <div class="flex flex-col gap-[var(--section-gap)]">
                <div
                    v-for="(process, index) in processes"
                    :key="index"
                    class="relative grid md:grid-cols-[384px_1fr_1fr] md:gap-0 gap-6 place-items-start pt-[var(--content-padding)]"
                >
                    <div v-gsap.whenVisible.once.from="{ scaleX: 0 }" class="absolute inset-0 h-px bg-[var(--color-black)] origin-left"></div>
                    <div class="w-full flex md:flex-row flex-col justify-between gap-6 pr-[30%]">
                        <NuxtImg class="aspect-square lg:w-[100px] md:w-[80px] w-[71px]" :src="process.imageUrl" width="100" height="100" :alt="process.title"/>
                        <span class="small-alt-text">(0{{ index+1 }})</span>
                    </div>
                    <h3 class="text-animate paragraph">
                        <span v-for="line in process.title.split('\n')">{{ line }}<br></span>
                    </h3>
                    <p class="text-animate small-paragraph">{{ process.description }}</p>
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
        return queryCollection("projects").all();
    });

    const processes = [
        {
            title: "Explore\nideas",
            description: "V prvom kroku je dôležité identifikovať piliere, na ktorých bude naša spolupráca stáť.  Preto detailne zanalyzujeme minulosť, súčasný stav a príležitosti, ktoré nám ležia pri nohách. Po identifikovaní kľúčových elementov vám  vykreslíme realitu a nastavíme jasný obraz spolupráce ako takej.",
            imageUrl: "/images/circle1.svg"
        },
        {
            title: "Form\nideas",
            description: "V prvom kroku je dôležité identifikovať piliere, na ktorých bude naša spolupráca stáť.  Preto detailne zanalyzujeme minulosť, súčasný stav a príležitosti, ktoré nám ležia pri nohách. Po identifikovaní kľúčových elementov vám  vykreslíme realitu a nastavíme jasný obraz spolupráce ako takej.",
            imageUrl: "/images/circle2.svg"
        },
        {
            title: "Experience\nthe moment",
            description: "Po jasne stanovených cieľoch prichádza na rad kreatíva. Nie však hocijaká u nás sa veci robia inak. Našu kreatívu staviame na tvrdých faktoch, nie na domnienkach ani na „pekných trendoch“. V tejto fáze zvolíme konkrétne taktiky, ktoré naplnia ciele, prinesú vysokú návratnosť a budú v súlade so stanovenou stratégiou a rozpočtom.",
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