<template>
  <SeoHead 
    title="Цены на винтовые сваи и монтаж фундамента в Сургуте и Новом Уренгое 2026 — Прайс-лист" 
    description="Актуальные цены на винтовые сваи Ø57–325 мм и услуги монтажа свайного фундамента в Сургуте и Новом Уренгое, по всему ХМАО-ЯНАО. Монтаж от 900 ₽/сваю. Скачайте официальный прайс-лист." 
    keywords="цены на винтовые сваи ХМАО-ЯНАО, прайс-лист сваи, стоимость монтажа свай, свайный фундамент цена 2026, фундамент под ключ цена, монтаж свай цена, цены на сваи Сургут, цены на сваи Новый Уренгой, стоимость свай Сургут, стоимость свай Новый Уренгой"
    ogImage="/gallery/hero-piles.webp"
    ogImageAlt="Прайс-лист на винтовые сваи в Сургуте"
    ogType="website"
    canonicalUrl="https://zavod-vintovikh-svai.com/prices"
  />
  <div>
    <!-- HEADER HERO -->
    <section class="relative overflow-hidden border-b border-[oklch(0.85_0.02_70)] bg-[oklch(0.18_0.01_40)] py-16 text-[oklch(0.93_0.025_80)]">
      <div class="absolute inset-0 opacity-20 wood-texture" />
      <div class="relative container mx-auto px-4 text-center max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD2122] text-[oklch(0.98_0.01_80)] text-xs font-semibold uppercase tracking-wider mb-4">
          <span class="h-1.5 w-1.5 rounded-full bg-[#CD2122] animate-pulse" /> Прайс-лист 2026
        </div>
        <h1 class="font-display text-4xl sm:text-5xl font-bold">Цены на винтовые сваи и услуги</h1>
        <p class="mt-4 text-lg text-[oklch(0.93_0.025_80)]/80">
          Собственное производство в Сургуте. Прозрачное ценообразование без скрытых наценок. Гарантия на работы по договору.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a href="/price-list-surgut.txt" download>
            <button class="inline-flex items-center gap-2 h-12 px-6 font-semibold rounded-md bg-[#CD2122] hover:bg-[#CD2122]/90 text-[oklch(0.18_0.01_40)] transition">
              <FileDownIcon class="h-5 w-5" /> Скачать прайс-лист TXT
            </button>
          </a>
          <a href="tel:+79992568800">
            <button class="inline-flex items-center gap-2 h-12 px-6 font-semibold rounded-md border border-[oklch(0.93_0.025_80)]/30 text-[oklch(0.93_0.025_80)] hover:bg-[oklch(0.93_0.025_80)]/10 transition">
              <PhoneIcon class="h-4 w-4" /> Связаться с нами
            </button>
          </a>
        </div>
      </div>
      <div class="ornament-divider absolute bottom-0 left-0 right-0" />
    </section>

    <!-- PRODUCT CARDS -->
    <section class="container mx-auto px-4 py-16 max-w-6xl">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Сваи в наличии</span>
        <h2 class="mt-2 font-display text-3xl font-bold text-[#CD2122]">Цены на винтовые сваи</h2>
        <p class="mt-2 text-sm text-[oklch(0.45_0.02_50)]">
          Готовые к монтажу сваи для заборов, домов, бань и промышленных объектов. Фото соответствует реальным изделиям.
        </p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          <div v-for="item in SCREW_CARDS" :key="item.diameter" class="group overflow-hidden rounded-[2rem] bg-white border border-[#CD2122] shadow-lg hover:shadow-2xl transition hover:-translate-y-1">
          <div class="relative overflow-hidden bg-[oklch(0.95_0.01_95)]">
            <img :src="`/gallery/${item.image}`" :alt="item.title" class="h-[340px] w-full object-contain" />
            <button type="button" class="absolute bottom-4 left-4 rounded-md bg-red-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg transition hover:bg-red-800">
              Подробнее
            </button>
          </div>
          <div class="p-6">
            <div class="text-xs uppercase tracking-[0.2em] text-[#CD2122] mb-3">Свая</div>
            <div class="font-display text-xl font-bold tracking-tight text-[#CD2122]">{{ item.title }}</div>
            <div class="mt-3 text-sm text-[#CD2122] leading-relaxed">{{ item.subtitle }}</div>
            <div class="mt-6 pt-5">
              <div class="text-[0.75rem] uppercase tracking-[0.2em] text-[#CD2122]">от</div>
              <div class="mt-1 text-2xl font-display font-black text-[#CD2122]">{{ item.price }}</div>
              <div class="mt-5 text-[0.7rem] uppercase tracking-[0.18em] text-[#CD2122]">С монтажом</div>
              <div class="mt-1 text-lg font-semibold text-[#CD2122]">{{ item.priceWithInstallation }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE SERVICES -->
    <section class="container mx-auto px-4 py-16 max-w-5xl">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Стоимость работ</span>
        <h2 class="mt-2 font-display text-3xl font-bold text-[#CD2122]">Цены на строительно-монтажные работы</h2>
        <p class="mt-2 text-sm text-[oklch(0.45_0.02_50)]">
          Минимальный объем работ — от 100 м². Итоговая цена рассчитывается индивидуально.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(s, idx) in SERVICES"
          :key="idx"
          class="bg-white rounded-lg border border-[oklch(0.91_0.01_75)] p-6 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition duration-300"
        >
          <div class="izba-roof absolute top-0 left-0 right-0 h-1.5" />
          <div>
            <span class="text-[10px] uppercase font-bold text-[oklch(0.98_0.01_80)] bg-[#CD2122] px-2 py-0.5 rounded">
              {{ s.type }}
            </span>
            <h3 class="mt-3 font-display text-lg font-bold leading-snug">{{ s.name }}</h3>
          </div>
          <div class="mt-6 pt-4 border-t border-[oklch(0.85_0.02_70)] flex items-baseline justify-between">
            <span class="text-xs text-[oklch(0.45_0.02_50)]">Цена</span>
            <span class="font-display text-2xl font-black text-brand">{{ s.price }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICE TABLE IMAGE -->
    <section class="bg-[oklch(0.93_0.015_75)]/40 border-y border-[oklch(0.85_0.02_70)] py-16">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Прайс-таблица</span>
            <h2 class="mt-2 font-display text-3xl font-bold text-[#CD2122]">Официальная сетка цен</h2>
            <p class="mt-4 text-sm text-[oklch(0.45_0.02_50)] leading-relaxed">
              Ниже представлена скан-копия официальной сетки цен нашего завода. Мы производим сваи любой длины (от 1.5 до 12 метров) и любой толщины стенки (до 12 мм). Все изделия покрываются специальным антикоррозийным составом на основе мастики.
            </p>
            <div class="mt-6 space-y-3">
              <div v-for="(text, i) in specList" :key="i" class="flex items-center gap-2 text-xs text-[oklch(0.18_0.02_40)]/80">
                <CheckCircle2Icon class="h-4 w-4 text-brand shrink-0" />
                <span>{{ text }}</span>
              </div>
            </div>
            <div class="mt-8">
              <a href="/price-list-surgut.txt" download>
                <button class="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[#CD2122] text-brand hover:bg-[#CD2122]/10 text-sm font-medium transition">
                  <FileDownIcon class="h-4 w-4" /> Скачать прайс-лист TXT
                </button>
              </a>
            </div>
          </div>
          <div class="relative rounded-lg border border-[oklch(0.85_0.02_70)] overflow-hidden bg-white p-3 shadow-elevated">
            <div class="absolute top-4 right-4 bg-[#CD2122] text-[oklch(0.98_0.01_80)] px-2 py-1 rounded text-[10px] font-bold z-10 flex items-center gap-1 shadow">
              <BadgeInfoIcon class="h-3.5 w-3.5" /> Сургут
            </div>
            <img
              src="/prices-table.webp"
              alt="Прайс-лист завода винтовых свай Сургут"
              class="w-full h-auto object-contain rounded hover:scale-[1.02] transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCTS PRICE LIST BY CATEGORY -->
    <section class="container mx-auto px-4 py-16 max-w-5xl">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Цены на продукцию</span>
        <h2 class="mt-2 font-display text-3xl font-bold text-[#CD2122]">Каталог цен на винтовые сваи</h2>
        <p class="mt-2 text-sm text-[oklch(0.45_0.02_50)]">
          Популярные диаметры всегда в наличии на складе в Сургуте. Цены указаны за 1 единицу.
        </p>
      </div>

      <div v-if="pending" class="space-y-4">
        <div v-for="i in 3" :key="i" class="h-32 rounded-lg bg-[oklch(0.93_0.015_75)] animate-pulse" />
      </div>

      <div v-else>
        <div v-for="category in productCategories" :key="category" class="mb-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-8 w-1 bg-[#CD2122]" />
            <h3 class="font-display text-2xl font-bold">{{ category }}</h3>
          </div>
          <div class="overflow-x-auto rounded-lg border border-[oklch(0.85_0.02_70)] shadow-card bg-[oklch(0.99_0.005_80)]">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-[#CD2122] text-[oklch(0.98_0.01_80)] font-display text-xs uppercase tracking-wider">
                  <th class="p-4">Наименование / Диаметр</th>
                  <th class="p-4">Длина</th>
                  <th class="p-4">Стенка</th>
                  <th class="p-4 text-right">Цена сваи</th>
                  <th class="p-4 text-right">С монтажом</th>
                  <th class="p-4 text-center">Заказ</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[oklch(0.85_0.02_70)]">
                <tr
                  v-for="p in productsByCategory(category)"
                  :key="p.id"
                  class="hover:bg-[oklch(0.93_0.015_75)]/40 transition"
                >
                  <td class="p-4 font-semibold">
                    <NuxtLink :to="`/product/${p.slug}`" class="hover:text-brand transition-colors">
                      Ø {{ p.diameter_mm }} мм ({{ p.name }})
                    </NuxtLink>
                  </td>
                  <td class="p-4 text-[oklch(0.45_0.02_50)]">{{ p.length_m }} м</td>
                  <td class="p-4 text-[oklch(0.45_0.02_50)]">{{ p.wall_thickness_mm }} мм</td>
                  <td class="p-4 text-right font-semibold text-brand">{{ formatRub(p.price) }}</td>
                  <td class="p-4 text-right font-medium">{{ formatRub(p.price + p.install_price) }}</td>
                  <td class="p-4 text-center">
                    <NuxtLink :to="`/calculator?d=${p.diameter_mm}`">
                      <button class="px-3 py-1 text-xs font-semibold rounded text-brand hover:text-[oklch(0.98_0.01_80)] hover:bg-[#CD2122] border border-[#CD2122] transition">
                        В калькулятор
                      </button>
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- GUARANTEE -->
    <section class="bg-[oklch(0.18_0.01_40)] text-[oklch(0.93_0.025_80)] py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 wood-texture" />
      <div class="relative container mx-auto px-4 max-w-4xl grid gap-8 md:grid-cols-2">
        <div class="border-l-4 border-[oklch(0.72_0.13_75)] pl-6">
          <h3 class="font-display text-xl font-bold text-gold">Гарантия качества завода</h3>
          <p class="mt-3 text-sm text-[oklch(0.93_0.025_80)]/80 leading-relaxed">
            Мы являемся непосредственным производителем винтовых свай в Сургуте. Каждая свая проходит строгий контроль качества сварных швов и покрывается двухкомпонентной антикоррозийной мастикой. Срок службы фундамента превышает 100 лет.
          </p>
        </div>
        <div class="border-l-4 border-[oklch(0.72_0.13_75)] pl-6">
          <h3 class="font-display text-xl font-bold text-gold">Сроки и доставка</h3>
          <p class="mt-3 text-sm text-[oklch(0.93_0.025_80)]/80 leading-relaxed">
            Большинство типоразмеров свай (57, 73, 89, 108, 133 мм) всегда в наличии на нашем складе. Возможна отгрузка в день заказа. Доставляем собственной техникой по всей территории ХМАО — Югры и Тюменской области.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  FileDown as FileDownIcon,
  Phone as PhoneIcon,
  CheckCircle2 as CheckCircle2Icon,
  BadgeInfo as BadgeInfoIcon,
} from 'lucide-vue-next'
import { formatRub } from '@/utils/format'
import { PRODUCTS } from '~/utils/productsData'
import SeoHead from '~/components/SeoHead.vue'

const SCREW_CARDS = [
  {
    diameter: 'Ø57',
    title: 'Свая Ø57',
    subtitle: 'под забор, теплицу, мангал, крыльцо',
    price: 'от 1 250 ₽',
    priceWithInstallation: 'от 2 050 ₽',
    image: 'СВАЯ Ø57.jpg',
  },
  {
    diameter: 'Ø76',
    title: 'Свая Ø76',
    subtitle: 'под забор, теплицу, мангал, крыльцо',
    price: 'от 1 500 ₽',
    priceWithInstallation: 'от 2 400 ₽',
    image: 'СВАЯ Ø76.jpg',
  },
  {
    diameter: 'Ø89',
    title: 'Свая Ø89',
    subtitle: 'под пристройку, террасу, беседку',
    price: 'от 1 600 ₽',
    priceWithInstallation: 'от 2 500 ₽',
    image: 'СВАЯ Ø89.jpg',
  },
  {
    diameter: 'Ø108',
    title: 'Свая Ø108',
    subtitle: 'под дома, коттеджи, бани, ангары',
    price: 'от 2 100 ₽',
    priceWithInstallation: 'от 3 050 ₽',
    image: 'СВАЯ Ø108.jpg',
  },
  {
    diameter: 'Ø133',
    title: 'Свая Ø133',
    subtitle: 'под тяжёлые дома, бани, ангары',
    price: 'от 2 750 ₽',
    priceWithInstallation: 'от 3 950 ₽',
    image: 'СВАЯ Ø133.jpg',
  },
  {
    diameter: 'Ø159',
    title: 'Свая Ø159',
    subtitle: 'под промышленные сооружения',
    price: 'от 5 650 ₽',
    priceWithInstallation: 'договорная',
    image: 'СВАЯ Ø159.jpg',
  },
]

const pending = false

const productCategories = computed(() => {
  return Array.from(new Set(PRODUCTS.map((p) => p.category || 'Стандарт'))) as string[]
})

const productsByCategory = (category: string) => {
  return PRODUCTS.filter((p) => (p.category || 'Стандарт') === category)
}

const SERVICES = [
  { name: 'Строительство свайного фундамента', price: '900 ₽', type: 'Рыночная цена' },
  { name: 'Установка винтовых свай', price: '900 ₽', type: 'Рыночная цена' },
  { name: 'Строительство винтового свайного фундамента', price: '900 ₽', type: 'Рыночная цена' },
  { name: 'Строительство ленточного фундамента', price: '900 ₽', type: 'Рыночная цена' },
  { name: 'Устройство отмостки фундамента', price: '900 ₽', type: 'Рыночная цена' },
  { name: 'Монтаж готового фундамента', price: 'от 1 000 ₽', type: 'Рыночная цена' },
  { name: 'Утепление фундамента', price: 'от 900 ₽', type: 'Рыночная цена' },
  { name: 'Фундамент «под ключ»', price: 'от 1 000 ₽', type: 'Рыночная цена' },
  { name: 'Консультация специалиста', price: 'Бесплатно', type: 'Акция' },
]

const specList = [
  'Толщина стенки свай от 4 мм до 12 мм',
  'Специальное покрытие мастикой для защиты от коррозии',
  'Срок службы свай более 100 лет',
  'Монтаж осуществляется за 1 рабочий день техникой или вручную',
]
</script>
