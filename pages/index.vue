<template>
    <div>
        <section 
            id="hero" 
            class="min-h-dvh flex flex-col md:justify-between justify-end text-[var(--color-white)] md:pt-52 md:gap-0 gap-26 !pb-8 px-8 -mt-26 -mx-8 mb-26"
            style="background: linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.1)), url('/images/hero.webp') center/cover no-repeat;"
        >
            <p class="text-4xl text-shadow-sm">
                Sme marketingové štúdio
                <br>
                Budujeme pre klientov marketingové stratégie
                <br class="hidden md:inline">
                poctivo — meratelne a bez zbytočných omáčok
            </p>
            <div class="md:order-0 -order-1 flex justify-between">
                <span>2025/</span>
                <span>(SCROLL)</span>
            </div>
            <NuxtImg class="w-full mx-auto invert" src="/images/efestudio.svg" alt="efestudio"/>
        </section>

        <section class="flex flex-col gap-26">
            <div class="relative flex md:flex-row flex-col md:gap-12 gap-4">
                <h2 class="md:absolute inline text-nowrap">(ABOUT US)</h2>
                <p class="md:text-6xl text-4xl">
                    <span class="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Sme digitálne marketingové štúdio. Klientom prinášame komplexné riešenia v oblasti značky obsahu a webov. Každý projekt staviame na jasnej stratégii a cieľoch.
                </p>
            </div>
            <div class="ml-auto md:w-2/5 w-full flex flex-col gap-8">
                <p>Sme iniciatívni, každý projekt má jasný cieľ, na ktorom spoločne pryacujeme ako tím. Marketing realizujeme rozvažne ss dôrazom na výsledky, rozpočet a očakávanú návratnosť.</p>
                <Button to="/about" text="ZOBRAZIŤ VIAC O NÁS" arrow/>
            </div>
        </section>

        <section class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-6">
                <NuxtLink class="flex items-center gap-2" to="/works">
                    Viac projektov
                    <NuxtImg src="/images/arrow.svg" height="16" width="16" alt="more projects"/>
                </NuxtLink>
                <h2 class="text-nowrap">(VYBRANÉ PROJEKTY)</h2>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
                <div v-for="project in projects" class="flex flex-col gap-4">
                    <NuxtImg 
                        v-if="project.imageUrl"
                        :src="project.imageUrl"
                        :alt="project.title"
                        class="interactable w-full max-h-[56rem] aspect-3/4 object-cover object-center"
                    />
                    <div v-else class="max-h-[56rem] aspect-3/4 bg-(--color-gray)"></div>
                    <div class="flex justify-between">
                        <span>{{ project.title }}</span>
                        <span>({{ project.label }})</span>
                    </div>
                </div>
            </div>
            <Button class="md:hidden flex mx-auto mt-12" to="/works" text="VIAC PROJEKTOV" arrow/>
        </section>

        <section class="flex flex-col gap-12">
            <div class="relative flex md:flex-row flex-col md:gap-12 gap-4 py-26">
                <h2 class="md:absolute inline text-nowrap">(NÁŠ PROCES)</h2>
                <p class="md:text-6xl text-4xl">
                    <span class="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    Ako dokážeme doručiť výsledky, na ktorých sme sa dohodli?
                </p>
            </div>
            <div class="flex flex-col gap-12">
                <div class="flex md:flex-row flex-col justify-between items-start md:gap-16 gap-12 pt-8 pb-16 border-t">
                    <NuxtImg class="mr-16" src="/images/circle1.svg" width="80" height="80" alt="explore"/>
                    <div class="grid grid-cols-[auto_1fr] gap-4 gap-x-26">
                        <span class="md:row-span-full text-2xl">(01)</span>
                        <h3 class="text-2xl">Explore</h3>
                        <div class="md:inline hidden"></div>
                        <p class="md:col-span-1 col-span-full">Kto ste, čo robíte a prečo na tom záleží? V tomto prvom kroku je dôležité identifikovať piliere, na ktorých bude naša spolupráca stáť. Preto detailne zanalyzujeme minulosť, súčasný stav a príležitosti, ktoré nám ležia pri nohách. Po identifikovaní kľúčových elementov vám objektívne vykreslíme realitu a nastavíme jasný obraz spolupráce ako takej.</p>
                    </div>
                </div>
                <div class="flex md:flex-row flex-col justify-between items-start md:gap-16 gap-12 pt-8 pb-16 border-t">
                    <NuxtImg class="mr-16" src="/images/circle2.svg" width="80" height="80" alt="form"/>
                    <div class="grid grid-cols-[auto_1fr] gap-4 gap-x-26">
                        <span class="md:row-span-full text-2xl">(02)</span>
                        <h3 class="text-2xl">Form</h3>
                        <div class="md:inline hidden"></div>
                        <p class="md:col-span-1 col-span-full">Po hĺbkovej analýze dát a vašich konkurentov prichádza čas na strategické plánovanie. Ako každý úspešný veliteľ pripravíme plán ešte pred samotnou „vojnou“. Odpovieme si na dôležité otázky ako: – Čo od nás klient skutočne chce?  Proti komu súťažíme?  Čo jedinečné vieme doručiť? Tým zasadíme víťaznú vlajku do zeme a na jej základe si stanovíme objektívne, merateľné ciele, ktoré sa stanú našou svätyňou.</p>
                    </div>
                </div>
                <div class="flex md:flex-row flex-col justify-between items-start md:gap-16 gap-12 pt-8 pb-16 border-t">
                    <NuxtImg class="mr-16" src="/images/circle3.svg" width="80" height="80" alt="experience"/>
                    <div class="grid grid-cols-[auto_1fr] gap-4 gap-x-26">
                        <span class="md:row-span-full text-2xl">(03)</span>
                        <h3 class="text-2xl">Experience</h3>
                        <div class="md:inline hidden"></div>
                        <div class="flex flex-col gap-26 md:col-span-1 col-span-full">
                            <p class="">Po jasne stanovených cieľoch prichádza na rad kreatíva. Nie však hocijaká – u nás sa veci robia inak. Našu kreatívu staviame na tvrdých faktoch, nie na domnienkach ani na „pekných trendoch“. V tejto fáze zvolíme konkrétne taktiky, ktoré čo najlepšie naplnia ciele, prinesú vysokú návratnosť a budú v súlade so stanovenou stratégiou a rozpočtom.</p>
                            <Button to="/services" text="ZOBRAZIŤ SLUŽBY" arrow/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex flex-col gap-16">
            <div class="xl:ml-[60%] flex md:flex-row flex-col md:gap-16 gap-4">
                <h2 class="text-nowrap">(NAŠI KLIENTI)</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Potenti quis eget neque amet tincidunt. Scelerisque eu amet massa in purus.</p>
            </div>
            <Partners/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const projects = ref([
        {
            title: "LAVARCH",
            imageUrl: "/images/lavarch.webp",
            label: "ARCHITEKTONICKÉ ŠTÚDIO"
        },
        {
            title: "Marmat - SK",
            imageUrl: "/images/marmat.webp",
            label: "ČISTENIE POVRCHOV"
        },
        {
            title: "Nario",
            imageUrl: "/images/nario.webp",
            label: "INTERIÉROVÉ ŠTÚDIO"
        },
        {
            title: "Bagrespiš",
            imageUrl: "/images/bagrespis.webp",
            label: "BAGRE"
        }
    ]);
</script>