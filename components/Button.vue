<template>
    <NuxtLink 
        :to="to" 
        :class="[
            'w-fit py-3 px-6 flex items-center gap-2 rounded-full text-nowrap',
            outlined ? 'border text-[var(--color-black)]' : 'bg-[var(--color-black)] text-[var(--color-white)]'
        ]"
    >
        {{ text }}
        <NuxtImg v-if="arrow" :class="outlined ? '' : 'invert'" src="images/arrow.svg" height="16" width="16" alt="more about us"/>
    </NuxtLink>
</template>

<script lang="ts" setup>
    defineProps({
        to: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        outlined: {
            type: Boolean,
            default: false
        },
        arrow: {
            type: Boolean,
            default: false
        }
    });
</script>