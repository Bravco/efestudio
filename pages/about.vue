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
                <div class="md:ml-26">
                    <div class="md:w-[10vw] w-auto h-8 md:float-left"></div>
                    <Paragraph>
                        Sme — váš strategický partner v podnikaní. Našim klientom pomáhame vybudovať zrozumiteľnú značku s definovanou pozíciou na trhu
                    </Paragraph>
                </div>
                <div class="grid md:grid-cols-[var(--section-gap)_1fr] grid-cols-1 md:gap-0 gap-4">
                    <h2 class="text-sm text-nowrap">(O NÁS)</h2>
                    <p class="text-animate max-w-169 md:text-xl text-base">Nie sme externá agentúra, sme váš strategický partner v podnikaní. Nečakáme so založenými rukami. Sme iniciatívni, každý projekt má jasný cieľ, na ktorom spoločne pracujeme ako tím. Marketing realizujeme rozvažne s dôrazom na výsledky, rozpočet a očakávanú návratnosť.</p>
                </div>
            </div>
        </section>

        <section class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <div class="flex flex-col gap-4">
                <NuxtImg 
                    v-if="false"
                    src="/images/patrikvojtus.webp"
                    alt="Patrik Vojtuš"
                    class="w-full max-h-[734px] aspect-3/4 object-cover object-center"
                />
                <div v-else class="max-h-[734px] aspect-3/4 bg-(--color-gray)"></div>
                <div class="flex justify-between lg:text-lg text-sm">
                    <span>Patrik Vojtuš</span>
                    <span>(COFOUNDER)</span>
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <NuxtImg 
                    v-if="false"
                    src="/images/jurajgoldberger.webp"
                    alt="Juraj Goldberger"
                    class="w-full max-h-[734px] aspect-3/4 object-cover object-center"
                />
                <div v-else class="max-h-[734px] aspect-3/4 bg-(--color-gray)"></div>
                <div class="flex justify-between lg:text-lg text-sm">
                    <span>Juraj Goldberger</span>
                    <span>(COFOUNDER)</span>
                </div>
            </div>
        </section>
        
        <section class="flex flex-col md:gap-8 gap-4">
            <h2 class="text-sm text-nowrap">(EFE V ČÍSLACH)</h2>
            <div class="grid lg:grid-cols-4 grid-cols-2 gap-y-14 md:gap-x-14 gap-x-4">
                <div>
                    <span class="text-animate lg:text-[78px] md:text-[62px] text-[32px]">(120+)</span>
                    <p class="md:text-lg text-sm">Leadov vygenerovaných pre našich klientov.</p>
                </div>
                <div>
                    <span class="text-animate lg:text-[78px] md:text-[62px] text-[32px]">(32)</span>
                    <p class="md:text-lg text-sm">Leadov vygenerovaných pre našich klientov.</p>
                </div>
                <div>
                    <span class="text-animate lg:text-[78px] md:text-[62px] text-[32px]">(1/2)</span>
                    <p class="md:text-lg text-sm">Leadov vygenerovaných pre našich klientov.</p>
                </div>
                <div>
                    <span class="text-animate lg:text-[78px] md:text-[62px] text-[32px]">(13)</span>
                    <p class="md:text-lg text-sm">Leadov vygenerovaných pre našich klientov.</p>
                </div>
            </div>
        </section>

        <NuxtImg class="lg:my-12 md:my-6 my-0 mx-auto" width="64" src="/images/logo.svg" alt="logo"/>

        <section class="flex flex-col gap-4">
            <h2 class="text-sm text-nowrap">(NÁŠ PRÍSTUP)</h2>
            <div v-for="(approach, index) in approaches" :key="index" class="relative">
                <div v-gsap.whenVisible.once.from="{ scaleX: 0 }"  class="absolute inset-0 h-px bg-[var(--color-black)] origin-left"></div>
                <div class="max-w-160 flex flex-col gap-8 mx-auto pt-4 md:pb-[168px] pb-[128px]">
                    <div class="grid grid-cols-[var(--section-gap)_1fr] md:gap-0 gap-4">
                        <span class="text-sm text-nowrap">(0{{ index+1 }})</span>
                        <h3 class="text-animate lg:text-[62px] md:text-[48px] text-[32px]">{{ approach.title }}</h3>
                    </div>
                    <p class="text-animate w-auto md:ml-26 md:text-lg text-sm">{{ approach.description }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio - o nás" });

    const approaches = [
        {
            title: "Interný tím",
            description: "Nie sme externá agentúra, sme váš partner, ktorého máte vždy po ruke, keď to najviac potrebujete.",
        },
        {
            title: "Férová komunikácia",
            description: "Veci rozprávame na rovinu, dôvera je základným pilierom našej filozofie."
        },
        {
            title: "Dôraz na detaily",
            description: "Záleží nám na každej vete, písmenku aj bodke. Dáme si potrpieť na dôslednosť."
        },
        {
            title: "Ťah na bránu",
            description: "Záleží nám na každej vete, písmenku aj bodke. Dáme si potrpieť na dôslednosť."
        }
    ];
</script>