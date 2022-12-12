// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt'],
    app: {
        head: {
            title: 'Nuxt CrudForm',
            meta: [
                {name: 'descripstion', content: 'ini product nuxt3'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ]
        }
    }
})
