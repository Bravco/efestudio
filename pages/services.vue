<template>
    <div>
        <section class="min-h-dvh flex flex-col gap-12">
            <div class="w-fit ml-auto flex flex-col gap-4">
                <NuxtImg height="240" src="/images/lavarch.webp" alt="lavarch"/>
                <div class="flex justify-between">
                    <span>(01)</span>
                    <NuxtLink to="" class="flex items-center gap-2">
                        Vybraný projekt
                        <NuxtImg src="/images/arrow.svg" height="16" width="16" alt="selected project"/>
                    </NuxtLink>
                </div>
            </div>
            <div class="flex">
                <h1 class="text-[15vw] leading-none text-nowrap">SLUŽBY</h1>
                <span class="text-xl">(04)</span>
            </div>
            <div class="flex md:flex-row flex-col gap-4 justify-between items-start">
                <span>(ZRUČNOSTI)</span>
                <p class="md:max-w-[30%] text-xl">Naším klientom pomáhame vybudovať zrozumiteľnú značku s jasne definovanou pozíciou na trhu. S akým zadaním sa na nás môžete obrátiť?</p>
            </div>
        </section>

        <section>
            <div v-for="(service, index) in services" :key="index" class="border-t" :class="[index == services.length-1 ? 'border-b' : '']">
                <div class="flex flex-col md:gap-8 gap-4 pt-8 pb-64">
                    <h2 class="w-full md:grid md:grid-cols-2 flex justify-between gap-4 md:text-6xl text-5xl">
                        <span>(0{{ index + 1 }})</span>
                        <span class="text-nowrap">{{ service.title }}</span>
                    </h2>
                    <p class="md:ml-auto md:w-1/2 md:pr-[10%] pr-0">{{ service.description }}</p>
                    <div class="md:ml-auto md:w-1/2 md:flex md:flex-col grid grid-cols-2 md:gap-4 gap-8 md:pr-[10%] pr-0">
                        <span class="md:hidden inline">(01)</span>
                        <ul class="flex md:flex-row flex-col md:justify-between gap-2">
                            <li>{{ service.items[0] }}</li>
                            <li>{{ service.items[1] }}</li>
                            <li>{{ service.items[2] }}</li>
                        </ul>
                        <span class="md:hidden inline">(02)</span>
                        <ul class="flex md:flex-row flex-col md:justify-between gap-2">
                            <li>{{ service.items[3] }}</li>
                            <li>{{ service.items[4] }}</li>
                            <li>{{ service.items[5] }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="splash" class="-mx-8">
            <NuxtImg class="h-dvh w-full object-cover object-center" src="/images/services.webp" alt="services"/>
        </section>

        <section class="flex flex-col gap-16">
            <div class="xl:ml-[60%] flex md:flex-row flex-col md:gap-16 gap-4">
                <h2 class="text-nowrap">(NAŠI KLIENTI)</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Potenti quis eget neque amet tincidunt. Scelerisque eu amet massa in purus.</p>
            </div>
            <Partners/>
            <Button class="ml-auto md:mr-[30%] mt-8" to="/" text="PRIDAŤ SA K NIM" arrow outlined/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const services = ref([
        {
            title: "Web design",
            description: "Pred tvorbou vizuálnej identity musíme v prvom rade obrátiť na vás. Prečo podnikáte? Čo vás odlišuje oproti konkurencii? Definujeme zrozumiteľnosť vašej značky s jasne nastavenou pozíciou na trhu oproti vašej konkurencii. Tento postup nám zaručí konkurenčnú výhodu a udržateľný rast.",
            items: [
                "Development",
                "Analytics",
                "Prototyping",
                "User experience",
                "Design",
                "Správa webu"
            ]
        },
        {
            title: "Branding",
            description: "Pred tvorbou vizuálnej identity musíme v prvom rade obrátiť na vás. Prečo podnikáte? Čo vás odlišuje? Prečo sa k vám klienti vracajú a čo im naozaj viete ponúknuť? Definujeme zrozumiteľnosť vašej značky s jasne nastavenou pozíciou na trhu oproti vašej konkurencii. Tento postup nám zaručí konkurenčnú výhodu a udržateľný rast.",
            items: [
                "Development",
                "Analytics",
                "Prototyping",
                "User experience",
                "Design",
                "Správa webu"
            ]
        },
        {
            title: "Obsah",
            description: "Obsah tvoríme obsah strategicky. V efestudio pripravujeme vizuály, videá a príspevky, ktoré kričia originalitou, jasne pomenúvajú podstatu a bez mihnutia oka posúvajú zákazníka k akcii. Zameriavame sa na kvalitu, silný nápad.",
            items: [
                "Development",
                "Analytics",
                "Prototyping",
                "User experience",
                "Design",
                "Správa webu"
            ]
        },
        {
            title: "Propagácia",
            description: "Vytvoriť peknú reklamu dnes nestačí. Všetko začína a končí pri ponuke. V rámci propagácie zastrešujeme celý proces  od návrhu ponuky - offer creation, cez realizáciu jednotlivých kanálov, až po médiá a reporting.",
            items: [
                "Development",
                "Analytics",
                "Prototyping",
                "User experience",
                "Design",
                "Správa webu"
            ]
        }
    ]);
</script>