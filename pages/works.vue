<template>
    <div>
        <section class="min-h-[80dvh] flex items-end !pb-0 -mb-[var(--section-gap)]">
            <div class="flex gap-2">
                <h1>WORK</h1>
                <span class="md:text-xl">(0{{ projects?.length ?? 0 }})</span>
            </div>
        </section>

        <section class="grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 !pt-0">
            <LazyProjectCard v-for="project in projects" :key="project.slug" :project="project"/>
        </section>
    </div>
</template>

<script lang="ts" setup>
    useHead({ title: "efestudio - works" });

    const { data: projects } = await useAsyncData("projects", () => {
        return queryCollection("projects").order("ordering", "ASC").all();
    }, { lazy: true });
</script>