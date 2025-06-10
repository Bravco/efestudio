<template>
    <NuxtLayout>
        <div>
            <section class="min-h-dvh flex flex-col justify-end">
                <span class="md:text-[62px] text-[32px]">STRÁNKA NENÍ DOSTUPNÁ</span>
                <h1>{{ error.statusCode }}</h1>
            </section>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    const error = useError();
</script>