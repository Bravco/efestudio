<template>
    <section class="bg-[var(--color-white)] flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-6">
            <h2 class="small-alt-text col-start-2">(NEDÁVNE PROJEKTY)</h2>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <ProjectCard v-for="project in projects.slice(0, 2)" :key="project.title" :project="project"/>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { data: projects } = await useAsyncData("projects", () => {
        return queryCollection("projects").all();
    });
</script>