<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <NuxtLink to="/blog" class="font-bold">Nuxt layout Custom</NuxtLink>
            </nav>
        </header>

        <!-- output the content pages -->
        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/blog">Blog</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>

<style  scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>