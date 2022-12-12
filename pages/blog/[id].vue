<template>
    <div>

        <Head>
            <Title>Nuxt CrudForm | {{ products.title }}</Title>
            <Meta name="description" :content="products.description">
            </Meta>
        </Head>
        <BlogDetail :products="products" />
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

//fetch products
const { data: products } = await useFetch(uri, { key: id })

//error page
if (!products.value) {
    throw createError({ statusCode: 404, statusMessage: 'products not found', fatal: true })
}

definePageMeta({
    layout: 'custom'
})
</script>