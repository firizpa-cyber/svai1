// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: 'static'
  },

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
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.com',
    name: 'Завод винтовых свай СтройМонтаж-86',
  },

  // Sitemap config (for @nuxtjs/sitemap v8)
  sitemap: {
    exclude: ["/api/**", "/_nuxt/**", "/orders", "/auth", "/cart", "/order"],
    autoLastmod: true,
    defaultPriority: 0.8,
    defaultChangefreq: 'weekly',
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
    sitemap: `${process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.com'}/sitemap.xml`,
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
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.com',
      yandexMetrikaId: process.env.NUXT_PUBLIC_YANDEX_METRIKA_ID || '',
      yandexTagManagerId: process.env.NUXT_PUBLIC_YANDEX_TAG_MANAGER_ID || '',
      googleAnalyticsId: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || '',
      googleTagManagerId: process.env.NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '',
      yandexVerificationCode: process.env.NUXT_PUBLIC_YANDEX_VERIFICATION_CODE || '',
      googleVerificationCode: process.env.NUXT_PUBLIC_GOOGLE_VERIFICATION_CODE || '',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght=600;700;800&family=Inter:wght=400;500;600;700&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
      ],
      script: [
        // Google Tag Manager
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K26NF24N');`,
        },
        // Yandex.Metrika
        {
          innerHTML: `(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109825207', 'ym');

ym(109825207, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});`,
        },
      ],
    },
  },



  compatibilityDate: '2025-01-01',
})
