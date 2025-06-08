<template>
    <NuxtLink 
        :to="to" 
        :class="[
            'group relative overflow-clip w-fit py-3 px-6 rounded-full text-nowrap',
            outlined ? 'border text-[var(--color-black)]' : 'bg-[var(--color-black)] text-[var(--color-white)]'
        ]"
    >
        <div class="flex items-center gap-2 absolute translate-y-[200%] transition-transform duration-300 group-hover:-translate-y-0">
            <span>{{ text }}</span>
            <NuxtImg v-if="arrow" :class="outlined ? '' : 'invert'" src="images/arrow.svg" height="16" width="16" alt="arrow"/>
        </div>
        <div class="flex items-center gap-2 transition-transform duration-300 group-hover:translate-y-[-200%]">
            <span>{{ text }}</span>
            <NuxtImg v-if="arrow" :class="outlined ? '' : 'invert'" src="images/arrow.svg" height="16" width="16" alt="arrow"/>
        </div>
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