<script setup lang="ts">
import { useSeoMeta, useHead, useRuntimeConfig } from '#imports'

interface Props {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  ogImageAlt?: string
  pageType?: string
  modifiedTime?: string
  publishedTime?: string
  author?: string
}

const props = withDefaults(defineProps<Props>(), {
  keywords: '',
  ogImage: '/gallery/hero-piles.webp',
  ogType: 'website',
  canonicalUrl: '',
  ogImageAlt: 'Винтовые сваи и монтаж фундамента в Сургуте и Новом Уренгое',
  pageType: 'website',
  modifiedTime: '',
  publishedTime: '',
  author: 'СтройМонтаж-86'
})

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://zavod-vintovikh-svai.com'
const fullCanonicalUrl = props.canonicalUrl || siteUrl
const fullOgImage = props.ogImage.startsWith('http') ? props.ogImage : `${siteUrl}${props.ogImage}`

useSeoMeta({
  // Основные мета-теги
  title: props.title,
  description: props.description,
  keywords: props.keywords,
  author: props.author,
  viewport: 'width=device-width, initial-scale=1',
  
  // Robots
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  
  // Open Graph (Facebook, ВКонтакте, Одноклассники)
  ogTitle: props.title,
  ogDescription: props.description,
  ogImage: fullOgImage,
  ogImageAlt: props.ogImageAlt,
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/webp',
  ogType: props.ogType,
  ogUrl: fullCanonicalUrl,
  ogSiteName: 'СтройМонтаж-86 — Завод винтовых свай',
  ogLocale: 'ru_RU',
  ogLocaleAlternate: ['ru_RU'],
  ogDeterminer: 'auto',
  
  // Twitter Cards
  twitterCard: 'summary_large_image',
  twitterTitle: props.title,
  twitterDescription: props.description,
  twitterImage: fullOgImage,
  twitterImageAlt: props.ogImageAlt,
  twitterSite: '@stroi_montazh86',
  twitterCreator: '@stroi_montazh86',
  
  // Яндекс специфичные мета-теги
  'yandex-verification': config.public.yandexVerificationCode || '4ecc4eb380c7a940',
  'yandex:verify': config.public.yandexVerificationCode || '4ecc4eb380c7a940',
  
  // Google специфичные мета-теги
  'google-site-verification': config.public.googleVerificationCode || 'btiEwaXYRMCzsRtjlRHKiaDmq30vS3eaapz1c9NQliw',
  
  // ГEO мета-теги (для локального SEO)
  'geo.region': 'RU-KHM',
  'geo.placename': 'Сургут, Новый Уренгой, ХМАО-ЯНАО',
  'geo.position': '61.254;73.396',
  'ICBM': '61.254, 73.396',
  'geo.country': 'RU',
  
  // Apple Meta Tags
  'apple-mobile-web-app-capable': 'yes',
  'apple-mobile-web-app-status-bar-style': 'black-translucent',
  'apple-mobile-web-app-title': 'СтройМонтаж-86',
  
  // Microsoft Meta Tags
  'msapplication-TileColor': '#CD2122',
  'msapplication-TileImage': '/favicon.png',
  'theme-color': '#CD2122',
  
  // Content Type and Language
  'content-language': 'ru',
  
  // Article Meta Tags (для страниц услуг и новостей)
  'article:author': props.author,
  'article:publisher': siteUrl,
  'article:section': 'Строительные услуги',
  'article:tag': props.keywords,
  'article:published_time': props.publishedTime,
  'article:modified_time': props.modifiedTime,
  
  // Profile Meta Tags
  'profile:first_name': 'СтройМонтаж-86',
  'profile:username': 'stroi_montazh86',
  
  // Additional Open Graph
  'og:image:secure_url': fullOgImage,
  'og:see_also': [siteUrl],
  
  // Additional SEO Meta Tags
  'format-detection': 'telephone=yes',
  'mobile-web-app-capable': 'yes',
  
  // Link rel tags (через useHead)
})

useHead({
  link: [
    { rel: 'canonical', href: fullCanonicalUrl },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    { rel: 'apple-touch-icon', href: '/favicon.png' },
    { rel: 'image_src', href: fullOgImage },
    { rel: 'publisher', href: siteUrl },
    { rel: 'author', href: siteUrl },
    { rel: 'help', href: `${siteUrl}/contacts` },
    { rel: 'home', href: siteUrl },
    { rel: 'index', href: siteUrl },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
  ],
  script: [
    // Schema.org: LocalBusiness
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'СтройМонтаж-86 — Завод винтовых свай',
        alternateName: 'Завод винтовых свай',
        description: 'Производство и монтаж винтовых свай в Сургуте и Новом Уренгое, по всему ХМАО-ЯНАО. Диаметры Ø57–325 мм, монтаж за 1 день, гарантия по договору.',
        url: siteUrl,
        telephone: '+79992568800',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+79992568800',
          contactType: 'customer service',
          availableLanguage: ['Russian'],
          areaServed: ['RU-KHM', 'RU-TYU']
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Сургут',
          addressRegion: 'Ханты-Мансийский автономный округ — Югра',
          addressCountry: 'RU',
          postalCode: '628400'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 61.254,
          longitude: 73.396
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '20:00'
        },
        priceRange: '₽₽',
        priceCurrency: 'RUB',
        areaServed: [
          'Сургут', 'Новый Уренгой', 'ХМАО-ЯНАО', 'Нефтеюганск', 'Нягань', 'Когалым', 'Пыть-Ях', 'Советский', 'Мегион', 'Лангепас', 'Югорск', 'Радужный', 'Пойковский'
        ],
        serviceType: [
          'Производство винтовых свай',
          'Монтаж винтовых свай',
          'Свайный фундамент под ключ',
          'Фундамент под дом',
          'Фундамент под баню',
          'Зимний монтаж свай',
          'Установка свай',
          'Свайный фундамент'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Каталог винтовых свай',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø57 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø76 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø89 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø108 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø133 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø159 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø219 мм' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Винтовая свая Ø325 мм' } }
          ]
        },
        sameAs: [
          'https://vk.com/stroi_montazh86',
          'https://t.me/stroi_montazh86'
        ],
        image: fullOgImage,
        logo: `${siteUrl}/favicon.png`
      })
    },
    // Schema.org: WebSite
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'СтройМонтаж-86 — Завод винтовых свай',
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/catalog?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      })
    },
    // Schema.org: Organization
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'СтройМонтаж-86',
        alternateName: 'Завод винтовых свай',
        url: siteUrl,
        logo: `${siteUrl}/favicon.png`,
        email: 'info@zavod-vintovikh-svai.com',
        telephone: '+79992568800',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Сургут',
          addressRegion: 'ХМАО-ЯНАО',
          addressCountry: 'RU'
        },
        areaServed: 'Ханты-Мансийский автономный округ — Югра',
        sameAs: [
          'https://vk.com/stroi_montazh86',
          'https://t.me/stroi_montazh86'
        ]
      })
    }
  ]
})
</script>

<template></template>
