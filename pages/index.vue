<template>
    <section id="hero" class="flex flex-col justify-between">
        <p class="text-4xl mb-60">
            Sme marketingové štúdio
            <br>
            Budujeme — realizujeme pre klientov marketingové
            <br class="hidden md:inline">
            stratégie poctivo, meratelne a bez zbytočných omáčok
        </p>
        <div class="flex justify-between">
            <span>2025/</span>
            <span>(SCROLL)</span>
        </div>
        <h1 class="2xl:text-[352px] xl:text-[300px] lg:text-[224px] md:text-[172px] sm:text-[96px] text-[64px] font-medium">efestudio</h1>
    </section>

    <section id="about" class="flex md:flex-row flex-col md:gap-12 gap-4">
        <h2 class="text-nowrap">(ABOUT US)</h2>
        <p class="font-medium md:text-6xl text-4xl">
            <span class="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            Sme digitálne marketingové štúdio. Klientom prinášame komplexné riešenia v oblasti značky, obsahu a webov. Každý projekt staviame na jasnej stratégii a merateľných cieľoch.
        </p>
    </section>

    <section id="works" class="flex flex-col gap-4 pt-26">
        <div class="grid grid-cols-2 gap-6">
            <NuxtLink class="flex items-center gap-1" to="/"> <!-- TODO: link -->
                Viac projektov
                <NuxtImg src="images/arrow.svg" height="16" width="16" alt="viac projektov"/>
            </NuxtLink>
            <h2 class="text-nowrap">(VYBRANÉ PROJEKTY)</h2>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <div v-for="project in projects" class="flex flex-col gap-4">
                <div
                    class="max-h-[56rem] aspect-3/4 bg-(--color-gray) bg-cover bg-center"
                    :style="project.imageUrl ? { backgroundImage: 'url(' + project.imageUrl + ')' } : {}"
                ></div>
                <div class="flex justify-between">
                    <span>{{ project.title }}</span>
                    <span>({{ project.year }})</span>
                </div>
            </div>
        </div>
    </section>

    <section id="services" class="flex flex-col gap-12">
        <div class="flex md:flex-row flex-col md:gap-12 gap-4 py-26">
            <h2 class="text-nowrap">(NÁŠ PROCES)</h2>
            <p class="font-medium md:text-6xl text-4xl">
                <span class="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Ako dokážeme doručiť výsledky, na ktorých sme sa dohodli?
            </p>
        </div>
        <div class="flex flex-col gap-12">
            <div class="flex md:flex-row flex-col justify-between md:gap-16 gap-12 pt-8 pb-16 border-t">
                <NuxtImg class="mr-16" src="images/circle1.svg" width="80" height="80" alt="explore"/>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-16">
                        <span class="text-lg">(01)</span>
                        <h3 class="text-xl font-medium">Explore</h3>
                    </div>
                    <p class="md:ml-22">Kto ste, čo robíte a prečo na tom záleží? V tomto prvom kroku je dôležité identifikovať piliere, na ktorých bude naša spolupráca stáť. Preto detailne zanalyzujeme minulosť, súčasný stav a príležitosti, ktoré nám ležia pri nohách. Po identifikovaní kľúčových elementov vám objektívne vykreslíme realitu a nastavíme jasný obraz spolupráce ako takej.</p>
                </div>
            </div>
            <div class="flex md:flex-row flex-col justify-between md:gap-16 gap-12 pt-8 pb-16 border-t">
                <NuxtImg class="mr-16" src="images/circle2.svg" width="80" height="80" alt="form"/>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-16">
                        <span class="text-lg">(02)</span>
                        <h3 class="text-xl font-medium">Form</h3>
                    </div>
                    <p class="md:ml-22">Po hĺbkovej analýze dát a vašich konkurentov prichádza čas na strategické plánovanie. Ako každý úspešný veliteľ pripravíme plán ešte pred samotnou „vojnou“. Odpovieme si na dôležité otázky ako: – Čo od nás klient skutočne chce?  Proti komu súťažíme?  Čo jedinečné vieme doručiť? Tým zasadíme víťaznú vlajku do zeme a na jej základe si stanovíme objektívne, merateľné ciele, ktoré sa stanú našou svätyňou.</p>
                </div>
            </div>
            <div class="flex md:flex-row flex-col justify-between md:gap-16 gap-12 pt-8 pb-16 border-t">
                <NuxtImg class="mr-16" src="images/circle3.svg" width="80" height="80" alt="experience"/>
                <div class="flex flex-col gap-2">
                    <div class="flex gap-16">
                        <span class="text-lg">(03)</span>
                        <h3 class="text-xl font-medium">Experience</h3>
                    </div>
                    <p class="md:ml-22">Po jasne stanovených cieľoch prichádza na rad kreatíva. Nie však hocijaká – u nás sa veci robia inak. Našu kreatívu staviame na tvrdých faktoch, nie na domnienkach ani na „pekných trendoch“. V tejto fáze zvolíme konkrétne taktiky, ktoré čo najlepšie naplnia ciele, prinesú vysokú návratnosť a budú v súlade so stanovenou stratégiou a rozpočtom.</p>
                </div>
            </div>
            <NuxtLink to="/" class="w-fit py-3 px-6 flex items-center gap-2 border rounded-full md:ml-[300px]"> <!-- TODO: link -->
                NIEČO VIAC O NÁS
                <NuxtImg src="images/arrow.svg" height="16" width="16" alt="more about us"/>
            </NuxtLink>
        </div>
    </section>

    <section>

    </section>
</template>

<script lang="ts" setup>
    const projects = ref([
        {
            title: "LAVARCH",
            imageUrl: "/images/lavarch.webp",
            year: 2024
        },
        {
            title: "Marmet - SK",
            year: 2025
        },
        {
            title: "Nario",
            imageUrl: "/images/nario.webp",
            year: 2023
        },
        {
            title: "Bagrespiš",
            imageUrl: "/images/bagrespis.webp",
            year: 2025
        }
    ]);
</script>