<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p.id">
                <BlogCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})

// mendapatkan data dari api
const { data: products } = await useFetch('https://fakestoreapi.com/products')

//title anda meta tags
useHead({
    title: 'Nuxt crudForm | Blog Index',
    meta: [
        { name: 'description', content: 'blog description' }
    ]
})
</script>

<style scoped>

</style>