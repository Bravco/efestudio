<template>
    <NuxtLink class="flex flex-col gap-4" :to="`/projects/${project.slug}`">
        <NuxtImg 
            v-if="project.imageUrl"
            :src="project.imageUrl"
            :alt="project.title"
            class="interactable w-full max-h-[56rem] aspect-3/4 object-cover object-center"
        />
        <div v-else class="interactable max-h-[56rem] aspect-3/4 bg-(--color-gray)"></div>
        <div class="flex justify-between lg:text-lg text-sm">
            <span>{{ project.title }}</span>
            <span>({{ project.label }})</span>
        </div>
    </NuxtLink>
</template>

<script lang="ts" setup>
    defineProps({
        project: {
            type: Object,
            required: true
        }
    });
</script>