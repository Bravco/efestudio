<template>
    <div v-if="project">
        <section class="min-h-dvh flex flex-col justify-end gap-[var(--section-gap)]">
            <div class="max-w-[1480px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-12 text-sm">
                <ul>
                    <li class="md:mb-[38px] mb-4">LAVARCH</li>
                    <li>
                        <p>V spolupráci s architektonickým ateliérom LAVARCH sme vytvorili strategický digitálny základ pre ich novú online identitu.</p>
                    </li>
                </ul>
                <ul>
                    <li class="md:mb-[38px] mb-4">Služby</li>
                    <li>
                        <ul>
                            <li>Web</li>
                            <li>Content</li>
                            <li>Stratégia a research</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li class="md:mb-[38px] mb-4">Ciele</li>
                    <li>
                        <p>Počet zaslaných životopisov minimálne na úrovni minuloročnej kampane – 273 životopisov</p>
                    </li>
                </ul>
            </div>
            <h1 class="ml-auto">LV 01</h1>
        </section>
        
        <section id="splash" class="max-h-dvh h-256 my-8">
            <NuxtImg class="h-full w-full object-cover object-center" src="/images/about.webp" alt="about"/>
        </section>

        <section>
            <span class="md:w-[15vw] w-auto h-8 md:float-left"></span>
            <Paragraph>
                V spolupráci s architektonickým ateliérom LAVARCH sme vytvorili strategický digitálny základ pre ich novú online identitu. Projekt zahŕňal detailný
            </Paragraph>
        </section>

        <section class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <NuxtImg 
                src="/images/lavarch.webp"
                alt="lavarch"
                class="w-full max-h-[56rem] aspect-3/4 object-cover object-center"
            />
            <NuxtImg 
                src="/images/lavarch.webp"
                alt="lavarch"
                class="w-full max-h-[56rem] aspect-3/4 object-cover object-center"
            />
        </section>

        <section class="flex flex-col gap-[var(--section-gap)]">
            <div class="grid md:grid-cols-[304px_1fr] grid-cols-1 md:gap-0 gap-4">
                <h2 class="text-sm">(CIELE)</h2>
                <p class="text-animate max-w-[794px] md:text-xl text-base">Cieľom je opäť vytvoriť minimálne takú silnú kampaň ako minulý rok (Expert na metal, expert na financovanie bývania), ktorá priniesla vysoký záujem o prácu v PSS: 1) MARKETINGOVÝ CIEĽ: Počet zaslaných životopisov minimálne na úrovni minuloročnej kampane – 273 životopisov 2) KOMUNIKAČNÝ CIEĽ: Vytvoriť kampaň, ktorá dokáže dostatočne zaujať svoje špecifické publikum a tým zvýšiť dosah a performance kampane na sociálnych sieťach (Impresie, dosah, počet prehratí kampaňového videa do konca..). Dôkazom splna</p>
            </div>
            <div class="grid md:grid-cols-[304px_1fr] grid-cols-1 md:gap-0 gap-4">
                <h2 class="text-sm">(STRATÉGIA)</h2>
                <div class="max-w-[794px] md:text-xl text-base">
                    <p class="text-animate">Mladí uchádzači často vnímajú prácu vo finančnom sektore ako stereotypnú, nudnú a spojenú s pracovným režimom, ktorý zrovna neumožňuje tak populárny work-life balance, nejaké to zaujímavé vzdelávanie a veľa voľna na kreatívne hobby meniace svet (čítaj netflixovanie a scrollovanie). .</p>
                    <br>
                    <p class="text-animate">ieto predsudky sú dôvodom, prečo si mladí hľadajú uplatnenie skôr v dynamických odvetviach alebo u značiek s inovatívnym a moderným imidžom. PSS sa musela posnažiť a vyvrátiť tieto stereotypy o sebe. Potrebovali sme ich však vyvrátiť absolútne výrazne.</p>
                </div>
            </div>
        </section>

        <section class="relative flex flex-col gap-4">
            <h2 class="md:absolute inline text-sm">(VÝSLEDKY)</h2>
            <ul class="text-animate flex flex-col items-center text-nowrap tracking-tight leading-none"  style="font-size: clamp(32px, 9vw, 122px);">
                <li>200 DOPYTOV</li>
                <li>10 PROJEKTOV DOMOV</li>
                <li>+5% KONVERZIE</li>
                <li>30 000€ V TRŽBÁCH</li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts" setup>
import Paragraph from '../../components/Paragraph.vue';

    const route = useRoute();

    const { data: project } = await useAsyncData(route.params.slug, () => {
        return queryCollection("projects")
            .where("slug", "=", route.params.slug)
            .first()
    })

    if (!project.value) {
        throw createError({
            statusCode: 404,
            statusMessage: "Project Not Found"
        });
    }
</script>