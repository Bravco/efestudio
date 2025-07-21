<template>
    <section class="flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-6">
            <h2 class="small-alt-text col-start-2">(NEDÁVNE PROJEKTY)</h2>
        </div>
        <div class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <ProjectCard v-for="project in projects" :key="project.slug" :project="project"/>
        </div>
    </section>
</template>

<script setup lang="ts">
    const { data: projects } = await useAsyncData("latestProjects", () => {
        return queryCollection("projects")
            .orWhere(query => query.where("slug", "=", "lavarch").where("slug", "=", "marmat-sk"))
            .all();
    });
</script>