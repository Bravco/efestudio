<template>
    <div>
        <header>
            <nav class="fixed w-full p-8 flex justify-between z-50 backdrop-blur-xs">
                <NuxtLink to="/#hero">
                    <NuxtImg src="images/logo.svg" height="32" alt="logo"/>
                </NuxtLink>

                <button 
                    @click="toggleMenu" 
                    class="md:hidden block bg-(--color-black) text-(--color-white) py-2 px-6 rounded-full z-10">
                    {{ isMenuOpen ? 'CLOSE' : 'MENU' }}
                </button>

                <div v-if="isMenuOpen" class="flex md:hidden absolute inset-0 h-dvh bg-(--color-black) text-(--color-white) flex flex-col items-start justify-between p-8">
                    <NuxtLink class="invert" to="/#hero">
                        <NuxtImg src="images/logo.svg" height="32" alt="logo"/>
                    </NuxtLink>
                    <ul class="flex flex-col gap-6 text-4xl font-medium">
                        <li>
                            <NuxtLink @click="toggleMenu" to="/#works" class="nav-link">WORKS</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" to="/#about" class="nav-link">O NÁS</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" to="/" class="nav-link">SLUŽBY</NuxtLink> <!-- TODO: link -->
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" to="/" class="nav-link">KONTAKT</NuxtLink> <!-- TODO: link -->
                        </li>
                    </ul>
                    <ul class="flex flex-col gap-2 underline text-lg">
                        <li>
                            <NuxtLink @click="toggleMenu" to="/">Instagram</NuxtLink> <!-- TODO: link -->
                        </li>
                        <li>
                            <NuxtLink @click="toggleMenu" to="/">Contact us</NuxtLink> <!-- TODO: link -->
                        </li>
                    </ul>
                </div>

                <ul class="md:flex hidden gap-2 text-(--color-white)">
                    <li class="bg-(--color-black) py-2 px-6 rounded-full">
                        <NuxtLink to="/#works" class="nav-link">WORKS</NuxtLink>
                    </li>
                    <li class="bg-(--color-black) py-2 px-6 rounded-full">
                        <NuxtLink to="/#about" class="nav-link">O NÁS</NuxtLink>
                    </li>
                    <li class="bg-(--color-black) py-2 px-6 rounded-full">
                        <NuxtLink to="/" class="nav-link">SLUŽBY</NuxtLink> <!-- TODO: link -->
                    </li>
                    <li class="bg-(--color-black) py-2 px-6 rounded-full">
                        <NuxtLink to="/" class="nav-link">KONTAKT</NuxtLink> <!-- TODO: link -->
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <div class="mx-8 mb-8">
                <slot/>
            </div>
        </main>
        
        <footer>

        </footer>
    </div>
</template>

<script lang="ts" setup>
    const isMenuOpen = ref<boolean>(false);

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    };
</script>