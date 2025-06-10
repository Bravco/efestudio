<template>
    <div class="flex flex-col gap-4">
        <NuxtImg 
            v-if="project.imageUrl"
            :src="project.imageUrl"
            :alt="project.title"
            class="interactable w-full max-h-[56rem] aspect-3/4 object-cover object-center"
        />
        <div v-else class="max-h-[56rem] aspect-3/4 bg-(--color-gray)"></div>
        <div class="flex justify-between md:text-lg">
            <span>{{ project.title }}</span>
            <span>({{ project.label }})</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        project: {
            type: Object,
            required: true
        }
    });
</script>