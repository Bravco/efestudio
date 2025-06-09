<template>
    <NuxtLayout>
        <div>
            <section class="min-h-dvh flex items-end">
                <h1 style="font-size: clamp(64px, 15vw, 360px);">{{ error.statusCode }} ERROR</h1>
            </section>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    const error = useError();
</script>