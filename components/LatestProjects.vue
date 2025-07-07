<template>
    <section class="bg-[var(--color-white)] flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-6">
            <NuxtLink class="flex items-center gap-2" to="/works">
                Viac projektov
                <NuxtImg src="/images/arrow.svg" height="16" width="16" alt="more projects"/>
            </NuxtLink>
            <h2 class="small-alt-text">(NEDÁVNE PROJEKTY)</h2>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <ProjectCard v-for="project in projects" :key="project.title" :project="project"/>
        </div>
        <Button class="md:hidden flex mx-auto mt-12" to="/works" text="VIAC PROJEKTOV" arrow/>
    </section>
</template>

<script setup lang="ts">
    const { data: projects } = await useAsyncData("projects", () => {
        return queryCollection("projects").limit(2).all();
    });
</script>