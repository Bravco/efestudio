<template>
    <div>
        <section class="min-h-[80dvh] flex items-end !pb-0 -mb-[var(--section-gap)]">
            <h1>O NÁS</h1>
        </section>

        <section id="splash" class="max-h-dvh lg:h-[741px] md:h-[558px] h-[331px] relative my-8 !pt-0">
            <NuxtImg class="h-full w-full absolute inset-0 object-cover object-center" src="/images/about.webp" alt="about"/>
        </section>

        <section>
            <div class="flex flex-col gap-[var(--section-gap)] md:ml-[10vw]">
                <div>
                    <div class="md:w-[10vw] w-auto h-8 md:float-left"></div>
                    <Paragraph>
                        Sme efestudio — váš strategický partner v podnikaní. Klientom pomáhame vybudovať zrozumiteľnú značku s jasne definovanou pozíciou na trhu
                    </Paragraph>
                </div>
                <div class="grid md:grid-cols-[1fr_auto] grid-cols-1 md:gap-0 gap-4">
                    <p class="text-animate md:max-w-1/2 small-paragraph">Nie sme externá agentúra, sme váš strategický partner v podnikaní. Nečakáme so založenými rukami. Každý projekt má jasný cieľ, na ktorom spoločne pracujeme ako tím. Marketing realizujeme komplexne s dôrazom na výsledky, rozpočet a očakávanú návratnosť.</p>
                    <h2 class="small-alt-text md:order-1 -order-1">(O NÁS)</h2>
                </div>
            </div>
        </section>

        <section class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <div class="flex flex-col gap-4">
                <NuxtImg 
                    src="/images/patrik_vojtus.webp"
                    alt="Patrik Vojtuš"
                    class="w-full max-h-[80vh] aspect-3/4 object-cover object-top grayscale-100"
                />
                <div class="flex justify-between lg:text-lg text-sm">
                    <span>Patrik Vojtuš</span>
                    <span>(COFOUNDER)</span>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <NuxtImg 
                    src="/images/juraj_goldberger.webp"
                    alt="Juraj Goldberger"
                    class="w-full max-h-[80vh] aspect-3/4 object-cover object-top grayscale-100"
                />
                <div class="flex justify-between lg:text-lg text-sm">
                    <span>Juraj Goldberger</span>
                    <span>(COFOUNDER)</span>
                </div>
            </div>
        </section>
        
        <section class="flex flex-col md:gap-8 gap-4">
            <h2 class="small-alt-text">(EFE V ČÍSLACH)</h2>
            <div class="grid lg:grid-cols-4 grid-cols-2 gap-y-14 md:gap-x-14 gap-x-4">
                <div class="flex flex-col gap-4">
                    <span class="text-animate paragraph">(3.4×)</span>
                    <p class="md:text-lg small-paragraph">ROI - Návratnosť investície pri našich kampaniach</p>
                </div>
                <div class="flex flex-col gap-4">
                    <span class="text-animate paragraph">(1.2K+)</span>
                    <p class="md:text-lg small-paragraph">Počet získaných leadov naprieč rôznymi segmentmi.</p>
                </div>
                <div class="flex flex-col gap-4">
                    <span class="text-animate paragraph">(5+)</span>
                    <p class="md:text-lg small-paragraph">Dlhodobé spolupráce Spolupráce trvajúce 2 + rokov</p>
                </div>
                <div class="flex flex-col gap-4">
                    <span class="text-animate paragraph">(4)</span>
                    <p class="md:text-lg small-paragraph">Členov core tímu, ktorí sú vždy po ruke.</p>
                </div>
            </div>
        </section>

        <NuxtImg class="lg:my-12 md:my-6 my-0 mx-auto" width="64" src="/images/logo.svg" alt="logo"/>

        <OurApproach/>

        <LatestProjects/>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio - o nás" });
</script>