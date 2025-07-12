<template>
    <section class="flex flex-col gap-4">
        <h2 class="small-alt-text">(NÁŠ PRÍSTUP)</h2>
        <div v-for="(approach, index) in approaches" :key="index" class="relative">
            <div v-gsap.whenVisible.once.from="{ scaleX: 0 }"  class="absolute inset-0 h-px bg-[var(--color-black)] origin-left"></div>
            <div class="max-w-160 flex flex-col gap-8 mx-auto pt-4 md:pb-[168px] pb-[128px]">
                <div class="grid grid-cols-[var(--section-gap)_1fr] gap-4">
                    <span class="small-alt-text">(0{{ index+1 }})</span>
                    <h3 class="text-animate paragraph">{{ approach.title }}</h3>
                    <p class="text-animate small-paragraph col-start-2">{{ approach.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const approaches = [
        {
            title: "Interný tím",
            description: "Nie sme externá agentúra, sme váš partner, ktorého máte vždy po ruke, keď to najviac potrebujete.",
        },
        {
            title: "Férová komunikácia",
            description: "Veci rozprávame na rovinu, dôvera je základným pilierom našej filozofie."
        },
        {
            title: "Dôraz na detaily",
            description: "Záleží nám na každej vete, písmenku aj bodke. Dáme si potrpieť na dôslednosť."
        },
        {
            title: "Ťah na bránu",
            description: "Záleží nám na každej vete, písmenku aj bodke. Dáme si potrpieť na dôslednosť."
        }
    ];
</script>