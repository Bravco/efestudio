<template>
    <section class="flex flex-col gap-12">
        <div class="w-fit ml-auto flex flex-col gap-4">
            <NuxtImg height="240" src="/images/lavarch.webp" alt="lavarch"/>
            <div class="flex justify-between">
                <span>(01)</span>
                <NuxtLink to="" class="flex items-center gap-2">
                    Vybraný projekt
                    <NuxtImg src="/images/arrow.svg" height="16" width="16" alt="selected project"/>
                </NuxtLink>
            </div>
        </div>
        <div class="flex">
            <h1 class="xl:text-[300px] lg:text-[224px] md:text-[172px] text-[20vw] font-medium">SLUŽBY</h1>
            <span class="text-xl font-medium">(04)</span>
        </div>
        <div class="flex md:flex-row flex-col gap-4 justify-between items-start">
            <span>(ZRUČNOSTI)</span>
            <p class="md:max-w-[30%] text-xl">Naším klientom pomáhame vybudovať zrozumiteľnú značku s jasne definovanou pozíciou na trhu. S akým zadaním sa na nás môžete obrátiť?</p>
        </div>
    </section>
</template>