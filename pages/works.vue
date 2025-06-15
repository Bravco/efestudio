<template>
    <div>
        <section class="h-[90dvh] flex items-end -mb-[calc(var(--section-gap)+64px)]">
            <div v-gsap.entrance.once.from="{ opacity: 0, y: 100 }" class="flex gap-2">
                <h1>WORK</h1>
                <span class="md:text-xl">(0{{ projects.length }})</span>
            </div>
        </section>

        <section class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12">
            <ProjectCard v-gsap.entrance.once.from="{ opacity: 0, y: 100 }" v-for="project in projects" :key="project.title" :project="project"/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio - works" });

    const projects = useState<Project[]>("projects");
</script>