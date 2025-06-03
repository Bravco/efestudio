<template>
    <div>
        <NuxtRouteAnnouncer/>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
        <div ref="overlay" class="transition-overlay"></div>
    </div>
</template>

<script lang="ts" setup>
    const router = useRouter();
    const overlay = ref<HTMLDivElement | null>(null);
    
    router.beforeEach(async (to, from, next) => {
        if (to.path === from.path) {
            next();
            return;
        }

        if (overlay.value) {
            overlay.value.classList.add("overlay-slide-up");
            await new Promise(resolve => setTimeout(resolve, 600));
        }

        next();
    });

    router.afterEach(() => {
        if (overlay.value) {
            overlay.value?.classList.remove("overlay-slide-up");
        }
    });
</script>

<style scoped>
    .transition-overlay {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: 9999;
        transition: bottom 600ms ease-in-out;
    }

    .overlay-slide-up {
        bottom: 0;
    }
</style>