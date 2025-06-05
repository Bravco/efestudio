<template>
    <NuxtLayout>
        <div>
            <section class="min-h-dvh flex items-end -my-26">
                <h1 class="text-[15vw] leading-none text-nowrap">{{ error.statusCode }} ERROR</h1>
            </section>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    const error = useError();
</script>