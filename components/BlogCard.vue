<template>
    <div class="card text-center">
        <img :src="product.image" alt="product tumbnail" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/blog/${product.id}`">
            <p class="btn my-4">View Detail</p>
        </NuxtLink>
    </div>
</template>

<script setup>
// props product
const { product } = defineProps(['product'])
</script>

<style scoped>

</style>