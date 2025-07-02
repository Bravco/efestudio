<template>
    <div v-if="project">
        <section class="min-h-[80dvh] flex flex-col gap-[var(--section-gap)] !pb-0 -mb-[var(--section-gap)]">
            <div class="max-w-[1480px] grid md:grid-cols-4 grid-cols-1 md:gap-16 gap-12 text-sm">
                <ul class="grid grid-cols-1 gap-[38px]">
                    <li>LAVARCH</li>
                    <li>
                        <p>V spolupráci s architektonickým ateliérom LAVARCH sme vytvorili strategický digitálny základ pre ich novú online identitu.</p>
                    </li>
                </ul>
                <ul class="grid md:grid-cols-1 grid-cols-2 gap-[38px]">
                    <li>Kategória</li>
                    <li>Architektonické štúdio</li>
                </ul>
                <ul class="grid md:grid-cols-1 grid-cols-2 gap-[38px]">
                    <li>Služby</li>
                    <li>
                        <ul>
                            <li>Web</li>
                            <li>Content</li>
                            <li>Stratégia a research</li>
                        </ul>
                    </li>
                </ul>
                <ul class="grid md:grid-cols-1 grid-cols-2 gap-[38px]">
                    <li>Model</li>
                    <li>
                        <ul>
                            <li>B2B</li>
                            <li>B2C</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <h1 class="ml-auto">LVRCH</h1>
        </section>
        
        <section id="splash" class="max-h-dvh h-256 my-8">
            <NuxtImg class="h-full w-full object-cover object-center" src="/images/about.webp" alt="about"/>
        </section>

        <section class="flex flex-col gap-[var(--section-gap)]">
            <div class="grid md:grid-cols-[304px_1fr] grid-cols-1 md:gap-0 gap-4 -tracking-[2%] leading-[115%]" style="font-size: clamp(32px, 5vw, 62px);">
                <h2>(01)</h2>
                <Paragraph>A strategic transformation from note-taking app to digital paper ecosystem.</Paragraph>
            </div>
            <div class="grid md:grid-cols-[304px_1fr] grid-cols-1 md:gap-0 gap-4">
                <h2 class="text-sm">(VÝZVA)</h2>
                <div class="max-w-[794px] md:text-xl text-base">
                    <p class="test-animate">In 2011, Goodnotes started as an improvement to physical paper notes with the ability to take handwritten digital notes, search handwritten text, and organize everything into a digital library. Now, Goodnotes is pioneering generative AI for digital handwriting and its applications in education. The Goodnotes rebrand and release of Goodnotes 6 is the next big step in delivering Goodnotes’ long-term vision of making technology-fueled learning accessible for all.</p>
                </div>
            </div>
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
            <div class="grid md:grid-cols-[304px_1fr] grid-cols-1 md:gap-0 gap-4 -tracking-[2%] leading-[115%]" style="font-size: clamp(32px, 5vw, 62px);">
                <h2>(02)</h2>
                <Paragraph>A strategic transformation from note-taking app to digital paper ecosystem.</Paragraph>
            </div>
            <div class="grid md:grid-cols-[304px_1fr] grid-cols-1 md:gap-0 gap-4">
                <h2 class="text-sm">(VÝZVA)</h2>
                <div class="max-w-[794px] md:text-xl text-base">
                    <p class="test-animate">In 2011, Goodnotes started as an improvement to physical paper notes with the ability to take handwritten digital notes, search handwritten text, and organize everything into a digital library. Now, Goodnotes is pioneering generative AI for digital handwriting and its applications in education. The Goodnotes rebrand and release of Goodnotes 6 is the next big step in delivering Goodnotes’ long-term vision of making technology-fueled learning accessible for all.</p>
                </div>
            </div>
        </section>

        <section id="splash" class="max-h-dvh h-256 my-8">
            <NuxtImg class="h-full w-full object-cover object-center" src="/images/lavarch.webp" alt="lavarch"/>
        </section>

        <section class="grid place-items-center">
            <NuxtLink :to="{ hash: '#contact' }" class="md:text-[62px] text-[32px] leading-none cta-underlined">
                ⮡ Kontaktujte nás
            </NuxtLink>
        </section>
    </div>
</template>

<script lang="ts" setup>
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