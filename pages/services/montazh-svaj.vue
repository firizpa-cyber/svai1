<template>
  <SeoHead title="Монтаж винтовых свай по всему ХМАО-ЯНАО — установка под ключ за 1 день | СтройМонтаж-86" description="Профессиональный монтаж винтовых свай по всему ХМАО-ЯНАО. До 50 свай в день, работаем при −40°C. Монтаж под ключ от 900 ₽/сваю. Бесплатный выезд замерщика." keywords="монтаж свай ХМАО-ЯНАО, установка винтовых сваи ХМАО-ЯНАО, монтаж фундамента под ключ, установка свай цена ХМАО-ЯНАО, свайный фундамент монтаж" />
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-[oklch(0.85_0.02_70)] bg-[oklch(0.18_0.01_40)] py-16 text-[oklch(0.93_0.025_80)]">
      <div class="absolute inset-0 opacity-20 wood-texture" />
      <div class="relative container mx-auto px-4 max-w-4xl">
        <nav class="text-xs text-[oklch(0.93_0.025_80)]/50 mb-4 flex items-center gap-1">
          <NuxtLink to="/" class="hover:text-[oklch(0.93_0.025_80)]">Главная</NuxtLink>
          <span>/</span>
          <span>Монтаж свай</span>
        </nav>
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD2122] text-[oklch(0.98_0.01_80)] text-xs font-semibold uppercase tracking-wider mb-4">
          <span class="h-1.5 w-1.5 rounded-full bg-[#CD2122] animate-pulse" /> Услуга
        </div>
        <h1 class="font-display text-4xl sm:text-5xl font-bold leading-tight text-[#CD2122]">
          Монтаж винтовых свай по всему ХМАО-ЯНАО
        </h1>
        <p class="mt-4 text-lg text-[oklch(0.93_0.025_80)]/80 max-w-2xl">
          Профессиональная установка свайного фундамента под ключ. Монтируем до 50 свай в день собственной техникой.
          Работаем круглый год, в том числе при −40°C.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/calculator">
            <button class="inline-flex items-center gap-2 h-12 px-6 text-base font-semibold rounded-md bg-[#CD2122] hover:bg-[#8F1618] text-[oklch(0.98_0.01_80)] transition">
              Рассчитать стоимость
            </button>
          </NuxtLink>
          <a href="tel:+79992568800">
            <button class="inline-flex items-center gap-2 h-12 px-6 text-base font-semibold rounded-md border border-[oklch(0.93_0.025_80)]/30 text-[oklch(0.93_0.025_80)] hover:bg-[oklch(0.93_0.025_80)]/10 transition">
              +7 999 256-88-00
            </button>
          </a>
        </div>
      </div>
      <div class="ornament-divider absolute bottom-0 left-0 right-0" />
    </section>

    <!-- What's included -->
    <section class="container mx-auto px-4 py-16 max-w-5xl">
      <h2 class="font-display text-3xl font-bold mb-10">Что входит в монтаж под ключ</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="step in STEPS" :key="step.title" class="p-6 rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] relative">
          <div class="izba-roof absolute top-0 left-0 right-0 h-1" />
          <div class="font-display text-4xl font-bold text-[#CD2122]/20 mb-3">{{ step.num }}</div>
          <h3 class="font-display text-lg font-bold">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-[oklch(0.45_0.02_50)] leading-relaxed">{{ step.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Prices -->
    <section class="bg-[oklch(0.93_0.015_75)]/40 border-y border-[oklch(0.85_0.02_70)] py-16">
      <div class="container mx-auto px-4 max-w-4xl">
        <h2 class="font-display text-3xl font-bold mb-2 text-[#CD2122]">Стоимость монтажа свай по всему ХМАО-ЯНАО</h2>
        <p class="text-sm text-[oklch(0.45_0.02_50)] mb-8">Цены актуальны на 2026 год. Минимальный объём — от 100 м².</p>
        <div class="overflow-x-auto rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)]">
          <table class="w-full text-sm text-left">
            <thead>
              <tr class="bg-[#CD2122] text-[oklch(0.98_0.01_80)] text-xs uppercase tracking-wider">
                <th class="p-4">Услуга</th>
                <th class="p-4 text-right">Цена</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[oklch(0.85_0.02_70)]">
              <tr v-for="p in PRICES" :key="p.name" class="hover:bg-[oklch(0.93_0.015_75)]/40">
                <td class="p-4 font-medium">{{ p.name }}</td>
                <td class="p-4 text-right font-bold text-brand">{{ p.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Why us -->
    <section class="container mx-auto px-4 py-16 max-w-5xl">
      <h2 class="font-display text-3xl font-bold mb-10">Почему выбирают нас для монтажа свай</h2>
      <div class="grid gap-5 sm:grid-cols-2">
        <div v-for="r in REASONS" :key="r.title" class="flex gap-4 p-5 rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)]">
          <CheckCircle2Icon class="h-6 w-6 text-brand shrink-0 mt-0.5" />
          <div>
            <div class="font-semibold">{{ r.title }}</div>
            <div class="text-sm text-[oklch(0.45_0.02_50)] mt-1">{{ r.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container mx-auto px-4 pb-16 max-w-5xl">
      <div class="rounded-2xl wood-texture text-[oklch(0.93_0.025_80)] p-8 md:p-12 text-center relative overflow-hidden">
        <div class="izba-roof absolute top-0 left-0 right-0 h-3" />
        <h2 class="font-display text-3xl font-bold text-[#CD2122]">Бесплатный выезд замерщика по всему ХМАО-ЯНАО</h2>
        <p class="mt-3 text-[oklch(0.93_0.025_80)]/80">Пробы грунта, расчёт свай, точная смета — бесплатно</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <NuxtLink to="/calculator">
            <button class="h-12 px-8 font-semibold rounded-md bg-[#CD2122] hover:bg-[#8F1618] text-[oklch(0.98_0.01_80)] transition">
              Рассчитать онлайн
            </button>
          </NuxtLink>
          <a href="tel:+79992568800">
            <button class="h-12 px-8 font-semibold rounded-md bg-[oklch(0.93_0.025_80)] text-[oklch(0.18_0.01_40)] hover:bg-[oklch(0.72_0.13_75)] transition">
              Позвонить
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2 as CheckCircle2Icon } from 'lucide-vue-next'
import SeoHead from '~/components/SeoHead.vue'



useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Монтаж винтовых свай',
        provider: {
          '@type': 'LocalBusiness',
          name: 'СтройМонтаж-86',
          address: { '@type': 'PostalAddress', addressLocality: 'Сургут', addressCountry: 'RU' },
        },
        areaServed: { '@type': 'City', name: 'Сургут' },
        description: 'Профессиональный монтаж винтовых свай под ключ по всему ХМАО-ЯНАО',
        offers: { '@type': 'Offer', price: '900', priceCurrency: 'RUB', priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'за сваю' } },
      }),
    },
  ],
})

const STEPS = [
  { num: '01', title: 'Выезд замерщика', desc: 'Бесплатно приедем на объект, сделаем пробы грунта и рассчитаем необходимое количество свай.' },
  { num: '02', title: 'Составление сметы', desc: 'Подготовим точную смету с указанием диаметров, длин, количества и стоимости всех работ.' },
  { num: '03', title: 'Заключение договора', desc: 'Официальный договор с прописанными сроками, стоимостью и гарантийными обязательствами.' },
  { num: '04', title: 'Монтаж свай', desc: 'Завинчиваем сваи механизированным способом или вручную. До 50 штук в день.' },
  { num: '05', title: 'Обвязка свай', desc: 'По желанию — обвязка швеллером или брусом, выравнивание по уровню.' },
  { num: '06', title: 'Акт приёмки', desc: 'Подписываем двусторонний акт, выдаём гарантийную расписку на фундамент.' },
]

const PRICES = [
  { name: 'Монтаж винтовой сваи (диаметр до 89 мм)', price: 'от 900 ₽' },
  { name: 'Монтаж винтовой сваи (диаметр 108–133 мм)', price: 'от 1 100 ₽' },
  { name: 'Монтаж сваи в промёрзший грунт', price: 'от 1 200 ₽' },
  { name: 'Обвязка свай швеллером', price: 'от 500 ₽/пм' },
  { name: 'Бурение лидерных скважин', price: 'от 600 ₽' },
  { name: 'Фундамент под ключ (сваи + монтаж + обвязка)', price: 'от 2 500 ₽/сваю' },
]

const REASONS = [
  { title: 'Собственная техника', desc: 'Не арендуем оборудование — наша техника всегда готова к работе' },
  { title: 'Работаем при −40°C', desc: 'Монтируем сваи зимой в промёрзший грунт без доплат за сезон' },
  { title: 'До 50 свай в день', desc: 'Бригада из 5–20 мастеров выполнит работу в кратчайшие сроки' },
  { title: 'Работа по договору', desc: 'Официальный договор, смета, акт приёмки и гарантийная расписка' },
  { title: 'Гарантия 5 лет', desc: 'Даём гарантию на все виды работ и используемые материалы' },
  { title: 'Бесплатный замер', desc: 'Выезд инженера для пробы грунта и расчёта свай — бесплатно' },
]
</script>
