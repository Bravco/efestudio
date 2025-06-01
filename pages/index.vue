<template>
    <div>
        <section id="hero" class="pt-26 flex flex-col justify-between">
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

        <section id="about" class="flex md:flex-row flex-col md:gap-12 gap-4 py-26">
            <span class="text-nowrap">(ABOUT US)</span>
            <p class="font-medium md:text-6xl text-4xl">
                <span class="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Sme digitálne marketingové štúdio. Klientom prinášame komplexné riešenia v oblasti značky, obsahu a webov. Každý projekt staviame na jasnej stratégii a merateľných cieľoch.
            </p>
        </section>

        <section id="works" class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-6">
                <NuxtLink class="flex items-center gap-1" to="/"> <!-- TODO: link -->
                    Viac projektov
                    <NuxtImg src="images/arrow.svg" height="16" width="16" alt="viac projektov"/>
                </NuxtLink>
                <span>(VYBRANÉ PROJEKTY)</span>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
                <div class="flex flex-col gap-4">
                    <div
                        class="max-h-[56rem] aspect-3/4 bg-(--color-gray) bg-cover bg-center"
                        style="background-image: url('/images/lavarch.webp');"
                    ></div>
                    <div class="flex justify-between">
                        <span>LAVARCH</span>
                        <span>(2024)</span>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div
                        class="max-h-[56rem] aspect-3/4 bg-(--color-gray) bg-cover bg-center"
                    ></div>
                    <div class="flex justify-between">
                        <span>Marmat - SK</span>
                        <span>(2025)</span>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div
                        class="max-h-[56rem] aspect-3/4 bg-(--color-gray) bg-cover bg-center"
                        style="background-image: url('/images/nario.webp');"
                    ></div>
                    <div class="flex justify-between">
                        <span>Nario</span>
                        <span>(2023)</span>
                    </div>
                </div>
                <div class="flex flex-col gap-4">
                    <div
                        class="max-h-[56rem] aspect-3/4 bg-(--color-gray) bg-cover bg-center"
                        style="background-image: url('/images/bagrespis.webp');"
                    ></div>
                    <div class="flex justify-between">
                        <span>Bagrespiš</span>
                        <span>(2025)</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>