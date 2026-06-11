// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
  ],

  // Site config (for @nuxtjs/sitemap and @nuxtjs/robots)
  // @ts-ignore: nuxt-site-config types
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.ru',
    name: 'Завод винтовых свай СтройМонтаж-86',
  },

  // Robots config
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/orders', '/auth', '/cart', '/order'],
      },
    ],
    sitemap: `${process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.ru'}/sitemap.xml`,
  },

  // Nuxt Image config
  image: {
    quality: 88,
    formats: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  css: ['~/assets/css/main.css'],

  devServer: {
    port: 3000,
  },


  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST || 'smtp.gmail.com',
    smtpPort: process.env.SMTP_PORT || '465',
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    senderEmail: process.env.SENDER_EMAIL || '',
    recipientEmail: process.env.RECIPIENT_EMAIL || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.ru',
      yandexMetrikaId: process.env.NUXT_PUBLIC_YANDEX_METRIKA_ID || '',
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
      yandexVerificationCode: process.env.NUXT_PUBLIC_YANDEX_VERIFICATION_CODE || '',
      googleVerificationCode: process.env.NUXT_PUBLIC_GOOGLE_VERIFICATION_CODE || '',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Завод винтовых свай СтройМонтаж-86 — производство и монтаж по всему ХМАО-ЯНАО',
      meta: [
        {
          name: 'description',
          content: 'Производство и монтаж винтовых свай по всему ХМАО-ЯНАО. Диаметры Ø57–325 мм, монтаж за 1 день, гарантия по договору. Бесплатный выезд замерщика. Калькулятор онлайн.',
        },
        { name: 'keywords', content: 'винтовые сваи ХМАО-ЯНАО, монтаж свай ХМАО-ЯНАО, фундамент на винтовых сваях, купить сваи, установка свай под ключ' },
        { name: 'google-site-verification', content: process.env.NUXT_PUBLIC_GOOGLE_VERIFICATION_CODE || 'JYhOrjtzM2VzfGfrEtRZeGETLNR4ha0Yh1Ch3bCllBI' },
        { name: 'yandex-verification', content: process.env.NUXT_PUBLIC_YANDEX_VERIFICATION_CODE || 'b76a76f205429830' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'СтройМонтаж-86 — Завод винтовых свай' },
        { property: 'og:locale', content: 'ru_RU' },
        { name: 'geo.region', content: 'RU-KHM' },
        { name: 'geo.placename', content: 'Сургут' },
        { name: 'geo.position', content: '61.254;73.396' },
        { name: 'ICBM', content: '61.254, 73.396' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },



  compatibilityDate: '2025-01-01',

  // Silence router warnings for non-Nuxt paths (Vite HMR, service workers, etc.)
  routeRules: {
    '/@vite/**': { redirect: { to: '/', statusCode: 404 } },
    '/src/**': { redirect: { to: '/', statusCode: 404 } },
    '/@react-refresh': { redirect: { to: '/', statusCode: 404 } },
    '/sw.js': { redirect: { to: '/', statusCode: 404 } },
  },
})
