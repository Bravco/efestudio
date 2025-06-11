<template>
    <div>
        <section 
            id="hero" 
            class="min-h-dvh flex flex-col justify-between text-[var(--color-white)] -z-1"
            style="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.2)), url('/images/hero.webp') center/cover no-repeat;"
        >
            <p class="text-animate md:text-[40px] md:leading-none text-xl">
                Sme marketingové štúdio
                <br>
                Budujeme pre klientov marketingové stratégie
                <br class="hidden md:inline">
                poctivo — meratelne a bez zbytočných omáčok
            </p>
            <div v-gsap.entrance.once.from="{ opacity: 0, y: 100 }" class="flex justify-between text-sm">
                <span>2025/</span>
                <span>(SCROLL)</span>
            </div>
            <NuxtImg v-gsap.entrance.once.from="{ opacity: 0, y: 100 }" class="w-full mx-auto invert" src="/images/efestudio.svg" alt="efestudio"/>
        </section>

        <section class="bg-[var(--color-white)] -mb-[var(--section-gap)] flex flex-col gap-[var(--section-gap)]">
            <div class="text-animate">
                <h2 class="md:w-[15vw] w-auto h-8 md:float-left text-sm text-nowrap">(ABOUT US)</h2>
                <p class="tracking-tight leading-none" style="font-size: clamp(32px, 5vw, 62px);">
                    Sme digitálne marketingové štúdio. Klientom prinášame komplexné riešenia v oblasti značky obsahu a webov. Každý projekt staviame na jasnej stratégii a cieľoch.
                </p>
            </div>
            <div class="ml-auto md:w-2/5 w-full flex flex-col gap-8">
                <p class="text-animate md:text-xl">Sme iniciatívni, každý projekt má jasný cieľ, na ktorom spoločne pryacujeme ako tím. Marketing realizujeme rozvažne ss dôrazom na výsledky, rozpočet a očakávanú návratnosť.</p>
                <Button  v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }" to="/about" text="ZOBRAZIŤ VIAC O NÁS" arrow/>
            </div>
        </section>

        <section class="bg-[var(--color-white)] flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-6">
                <NuxtLink v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }" class="flex items-center gap-2" to="/works">
                    Viac projektov
                    <NuxtImg src="/images/arrow.svg" height="16" width="16" alt="more projects"/>
                </NuxtLink>
                <h2 v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }" class="text-sm text-nowrap">(VYBRANÉ PROJEKTY)</h2>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
                <ProjectCard v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }" v-for="project in projects" :key="project.title" :project="project"/>
            </div>
            <Button class="md:hidden flex mx-auto mt-12" to="/works" text="VIAC PROJEKTOV" arrow/>
        </section>

        <section class="flex flex-col gap-[var(--section-gap)]">
            <div class="text-animate">
                <h2 class="md:w-[15vw] w-auto h-8 md:float-left text-sm text-nowrap">(NÁŠ PROCES)</h2>
                <p class="tracking-tight leading-none" style="font-size: clamp(32px, 5vw, 62px);">
                    Ako dokážeme doručiť výsledky, na ktorých sme sa dohodli?
                </p>
            </div>
            <div class="flex flex-col gap-[var(--section-gap)]">
                <div v-for="(item, index) in process" :key="index" class="relative md:text-xl">
                    <div class="lg:max-w-200 lg:w-1/2 mx-auto flex flex-col gap-6 pb-[var(--section-gap)] border-b">
                        <div class="lg:grid lg:grid-cols-[32px_1fr] flex gap-20 lg:-ml-28">
                            <span class="text-animate">(0{{ index+1 }})</span>
                            <h3 class="text-animate"v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }">{{ item.title }}</h3>
                        </div>
                        <p class="text-animate">{{ item.description }}</p>
                    </div>
                    <NuxtImg v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }" class="absolute right-0 top-0 lg:w-20 w-10 lg:h-20 h-10" :src="item.imageUrl" width="80" height="80" :alt="item.title"/>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-8">
            <h2 class="text-animate xl:ml-[60%] text-sm text-nowrap">(NAŠI KLIENTI)</h2>
            <Partners v-gsap.whenVisible.once.from="{ opacity: 0, y: 100 }"/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    import ScrollTrigger from "gsap/ScrollTrigger";
    
    const gsap = useGSAP();

    const projects = useState<Project[]>("projects");

    const process = [
        {
            title: "Explore",
            description: "Kto ste, čo robíte a prečo na tom záleží? V tomto prvom kroku je dôležité identifikovať piliere, na ktorých bude naša spolupráca stáť. Preto detailne zanalyzujeme minulosť, súčasný stav a príležitosti, ktoré nám ležia pri nohách. Po identifikovaní kľúčových elementov vám objektívne vykreslíme realitu a nastavíme jasný obraz spolupráce ako takej.",
            imageUrl: "/images/circle1.svg"
        },
        {
            title: "Form",
            description: "Po hĺbkovej analýze dát a vašich konkurentov prichádza čas na strategické plánovanie. Ako každý úspešný veliteľ pripravíme plán ešte pred samotnou „vojnou“. Odpovieme si na dôležité otázky ako: – Čo od nás klient skutočne chce?  Proti komu súťažíme?  Čo jedinečné vieme doručiť? Tým zasadíme víťaznú vlajku do zeme a na jej základe si stanovíme objektívne, merateľné ciele, ktoré sa stanú našou svätyňou.",
            imageUrl: "/images/circle2.svg"
        },
        {
            title: "Experience",
            description: "Po jasne stanovených cieľoch prichádza na rad kreatíva. Nie však hocijaká – u nás sa veci robia inak. Našu kreatívu staviame na tvrdých faktoch, nie na domnienkach ani na „pekných trendoch“. V tejto fáze zvolíme konkrétne taktiky, ktoré čo najlepšie naplnia ciele, prinesú vysokú návratnosť a budú v súlade so stanovenou stratégiou a rozpočtom.",
            imageUrl: "/images/circle3.svg"
        }
    ];

    onMounted(() => {
        ScrollTrigger.create({
            trigger: "#hero",
            start: "top top",
            pin: true,
            pinSpacing: false
        });
    });
</script>