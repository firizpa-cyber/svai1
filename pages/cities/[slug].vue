<template>
  <SeoHead
    v-if="city"
    :title="`Винтовые сваи в ${city.name_loc} — монтаж фундамента | СтройМонтаж-86 Сургут`"
    :description="`Производство и монтаж винтовых свай в ${city.name_loc}. Выезд из Сургута, ${city.km} км. Сваи Ø57–325 мм, монтаж за 1 день, гарантия по договору.`"
    :keywords="`винтовые сваи ${city.name}, монтаж свай ${city.name}, фундамент на сваях ${city.name}, сваи под дом ${city.name}, свайный фундамент ${city.name} цена, винтовые сваи купить ${city.name}`"
    og-image="/gallery/hero-piles.webp"
    :og-image-alt="`Винтовые сваи в ${city.name_loc}`"
    :canonical-url="`${useRuntimeConfig().public.siteUrl}/cities/${slug}`"
    og-type="website"
  />
  <div v-if="city">
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-[oklch(0.85_0.02_70)] bg-[oklch(0.18_0.01_40)] py-16 text-[oklch(0.93_0.025_80)]">
      <div class="absolute inset-0 opacity-20 wood-texture" />
      <div class="relative container mx-auto px-4 max-w-4xl">
        <nav class="text-xs text-[oklch(0.93_0.025_80)]/50 mb-4 flex items-center gap-1">
          <NuxtLink to="/" class="hover:text-[oklch(0.93_0.025_80)]">Главная</NuxtLink>
          <span>/</span>
          <span>{{ city.name }}</span>
        </nav>
        <h1 class="font-display text-4xl sm:text-5xl font-bold leading-tight text-[#CD2122]">
          Винтовые сваи и монтаж фундамента в {{ city.name_loc }}
        </h1>
        <p class="mt-4 text-lg text-[oklch(0.93_0.025_80)]/80 max-w-2xl">
          Производство и монтаж винтовых свай в {{ city.name_loc }}. Выезжаем из Сургута.
          Сваи Ø57–325 мм, монтаж за 1 день, гарантия по договору.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/calculator">
            <button class="h-12 px-6 font-semibold rounded-md bg-[#CD2122] hover:bg-[#8F1618] text-[oklch(0.98_0.01_80)] transition">
              Рассчитать стоимость
            </button>
          </NuxtLink>
          <a href="tel:+79992568800">
            <button class="h-12 px-6 font-semibold rounded-md border border-[oklch(0.93_0.025_80)]/30 text-[oklch(0.93_0.025_80)] hover:bg-[oklch(0.93_0.025_80)]/10 transition">
              +7 999 256-88-00
            </button>
          </a>
        </div>
      </div>
      <div class="ornament-divider absolute bottom-0 left-0 right-0" />
    </section>

    <!-- About delivery -->
    <section class="container mx-auto px-4 py-16 max-w-5xl">
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h2 class="font-display text-3xl font-bold text-[#CD2122]">Работаем в {{ city.name_loc }}</h2>
          <p class="mt-4 text-[oklch(0.45_0.02_50)] leading-relaxed">
            Завод СтройМонтаж-86 базируется в Сургуте и выполняет заказы по всему ХМАО-ЯНАО.
            До {{ city.name_gen }} {{ city.km }} км от Сургута — наши бригады выезжают на объект в день согласования.
          </p>
          <ul class="mt-6 space-y-3 text-sm">
            <li v-for="f in city.features" :key="f" class="flex items-center gap-2">
              <CheckCircle2Icon class="h-5 w-5 text-brand shrink-0" />
              {{ f }}
            </li>
          </ul>
        </div>
        <div class="rounded-xl border border-[oklch(0.85_0.02_70)] overflow-hidden bg-[oklch(0.93_0.015_75)] p-6">
          <div class="font-display text-lg font-bold mb-4 text-[#CD2122]">Стоимость выезда в {{ city.name }}</div>
          <div class="space-y-3 text-sm">
            <div class="flex justify-between border-b border-[oklch(0.85_0.02_70)] pb-2">
              <span class="text-[oklch(0.45_0.02_50)]">Расстояние от Сургута</span>
              <span class="font-semibold">{{ city.km }} км</span>
            </div>
            <div class="flex justify-between border-b border-[oklch(0.85_0.02_70)] pb-2">
              <span class="text-[oklch(0.45_0.02_50)]">Выезд замерщика</span>
              <span class="font-semibold text-brand">Бесплатно*</span>
            </div>
            <div class="flex justify-between border-b border-[oklch(0.85_0.02_70)] pb-2">
              <span class="text-[oklch(0.45_0.02_50)]">Доставка свай</span>
              <span class="font-semibold">По договорённости</span>
            </div>
            <div class="flex justify-between">
              <span class="text-[oklch(0.45_0.02_50)]">Монтаж</span>
              <span class="font-semibold">от 900 ₽/сваю</span>
            </div>
          </div>
          <p class="text-xs text-[oklch(0.45_0.02_50)] mt-4">* При объёме от 20 свай</p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="bg-[oklch(0.93_0.015_75)]/40 border-y border-[oklch(0.85_0.02_70)] py-16">
      <div class="container mx-auto px-4 max-w-5xl">
        <h2 class="font-display text-3xl font-bold mb-10 text-[#CD2122]">Наши услуги в {{ city.name_loc }}</h2>
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink v-for="s in SERVICES" :key="s.href" :to="s.href"
            class="p-5 rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] hover:border-[#CD2122] hover:shadow-card transition block relative">
            <div class="izba-roof absolute top-0 left-0 right-0 h-1" />
            <div class="font-display font-bold">{{ s.name }}</div>
            <div class="text-sm text-[oklch(0.45_0.02_50)] mt-1">{{ s.desc }}</div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="container mx-auto px-4 py-16 max-w-5xl">
      <div class="rounded-2xl wood-texture text-[oklch(0.93_0.025_80)] p-8 md:p-12 text-center relative overflow-hidden">
        <div class="izba-roof absolute top-0 left-0 right-0 h-3" />
        <h2 class="font-display text-3xl font-bold text-[#CD2122]">Нужны сваи в {{ city.name_loc }}?</h2>
        <p class="mt-3 text-[oklch(0.93_0.025_80)]/80">Позвоните — согласуем выезд на сегодня или завтра</p>
        <div class="mt-6 flex flex-wrap justify-center gap-3">
          <NuxtLink to="/calculator">
            <button class="h-12 px-8 font-semibold rounded-md bg-[#CD2122] hover:bg-[#8F1618] text-[oklch(0.98_0.01_80)] transition">
              Рассчитать онлайн
            </button>
          </NuxtLink>
          <a href="tel:+79992568800">
            <button class="h-12 px-8 font-semibold rounded-md bg-[oklch(0.93_0.025_80)] text-[oklch(0.18_0.01_40)] hover:bg-[oklch(0.75_0.15_8)] transition">
              +7 999 256-88-00
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 if city not found -->
  <div v-else class="container mx-auto px-4 py-24 text-center max-w-md">
    <h1 class="font-display text-3xl font-bold">Страница не найдена</h1>
    <NuxtLink to="/" class="mt-4 inline-block text-brand underline">На главную</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { CheckCircle2 as CheckCircle2Icon } from 'lucide-vue-next'
import SeoHead from '~/components/SeoHead.vue'

const CITIES: Record<string, {
  name: string; name_loc: string; name_gen: string; km: string; features: string[]
}> = {
  // KhMAO cities
  'nefteyugansk': {
    name: 'Нефтеюганск', name_loc: 'Нефтеюганске', name_gen: 'Нефтеюганску', km: '80',
    features: [
      'Выезд бригады из Сургута в день звонка',
      'Сваи Ø57–325 мм в наличии на складе',
      'Монтаж за 1 день, работаем зимой',
      'Гарантия на сваи и монтаж по договору',
    ],
  },
  'kogalym': {
    name: 'Когалым', name_loc: 'Когалыме', name_gen: 'Когалыму', km: '120',
    features: [
      'Обслуживаем Когалым и Лянторский район',
      'Сваи собственного производства из Сургута',
      'Монтаж под ключ с актом приёмки',
      'Опыт работы на грунтах Когалыма 5+ лет',
    ],
  },
  'nizhnevartovsk': {
    name: 'Нижневартовск', name_loc: 'Нижневартовске', name_gen: 'Нижневартовску', km: '280',
    features: [
      'Регулярные выезды бригады в Нижневартовск',
      'Крупные заказы от 50 свай — приоритет',
      'Доставка сваи собственным транспортом',
      'Полный пакет документов по договору',
    ],
  },
  'langepas': {
    name: 'Лангепас', name_loc: 'Лангепасе', name_gen: 'Лангепасу', km: '170',
    features: [
      'Выполняем заказы в Лангепасе и окрестностях',
      'Работаем на болотистых грунтах ХМАО',
      'Монтаж при любой температуре',
      'Бесплатная консультация по телефону',
    ],
  },
  'pyt-yah': {
    name: 'Пыть-Ях', name_loc: 'Пыть-Яхе', name_gen: 'Пыть-Яху', km: '65',
    features: [
      'Ближайший к Сургуту крупный город — выезд быстро',
      'Сваи всех диаметров и длин в наличии',
      'Монтаж фундамента под дом, баню, забор',
      'Работа по договору, гарантия',
    ],
  },
  'khanty-mansiysk': {
    name: 'Ханты-Мансийск', name_loc: 'Ханты-Мансийске', name_gen: 'Ханты-Мансийску', km: '320',
    features: [
      'Столица ХМАО — работаем регулярно',
      'Выезд бригады по согласованию',
      'Сваи собственного производства',
      'Полный пакет документов',
    ],
  },
  'nyagan': {
    name: 'Нягань', name_loc: 'Нягани', name_gen: 'Нягани', km: '350',
    features: [
      'Обслуживаем Нягань и район',
      'Сваи Ø57–325 мм в наличии',
      'Монтаж в любое время года',
      'Гарантия по договору',
    ],
  },
  'yugorsk': {
    name: 'Югорск', name_loc: 'Югорске', name_gen: 'Югорску', km: '400',
    features: [
      'Регулярные выезды в Югорск',
      'Опыт работы на местных грунтах',
      'Монтаж под ключ',
      'Доставка свай',
    ],
  },
  'megion': {
    name: 'Мегион', name_loc: 'Мегионе', name_gen: 'Мегиону', km: '250',
    features: [
      'Работаем в Мегионе и Нижневартовском районе',
      'Быстрый выезд из Сургута',
      'Сваи всех размеров',
      'Гарантия на работы',
    ],
  },
  'raduzhny': {
    name: 'Радужный', name_loc: 'Радужном', name_gen: 'Радужному', km: '380',
    features: [
      'Обслуживаем Радужный',
      'Сваи из Сургута',
      'Монтаж за 1 день',
      'Работа по договору',
    ],
  },
  'sovetsky': {
    name: 'Советский', name_loc: 'Советском', name_gen: 'Советскому', km: '420',
    features: [
      'Выезды в Советский по графику',
      'Сваи Ø57–325 мм',
      'Монтаж фундамента',
      'Гарантия',
    ],
  },
  'uray': {
    name: 'Урай', name_loc: 'Урае', name_gen: 'Ураю', km: '300',
    features: [
      'Работаем в Урае',
      'Сваи в наличии',
      'Монтаж под ключ',
      'Документы',
    ],
  },
  // YaNAO cities
  'noyabrsk': {
    name: 'Ноябрьск', name_loc: 'Ноябрьске', name_gen: 'Ноябрьску', km: '550',
    features: [
      'Крупнейший город ЯНАО — регулярные выезды',
      'Сваи собственного производства',
      'Опыт работы на вечной мерзлоте',
      'Полный пакет документов',
    ],
  },
  'novy-urengoy': {
    name: 'Новый Уренгой', name_loc: 'Новом Уренгое', name_gen: 'Новому Уренгою', km: '850',
    features: [
      'Работаем в Новом Уренгое',
      'Сваи для вечной мерзлоты',
      'Монтаж в суровых условиях',
      'Гарантия по договору',
    ],
  },
  'nadym': {
    name: 'Надым', name_loc: 'Надымом', name_gen: 'Надыму', km: '700',
    features: [
      'Обслуживаем Надым',
      'Сваи для северных грунтов',
      'Монтаж зимой',
      'Доставка',
    ],
  },
  'salekhard': {
    name: 'Салехард', name_loc: 'Салехарде', name_gen: 'Салехарду', km: '950',
    features: [
      'Столица ЯНАО — выезды по согласованию',
      'Сваи для Крайнего Севера',
      'Монтаж в любых условиях',
      'Полная документация',
    ],
  },
  'muravlenko': {
    name: 'Муравленко', name_loc: 'Муравленко', name_gen: 'Муравленко', km: '600',
    features: [
      'Работаем в Муравленко',
      'Сваи в наличии',
      'Монтаж фундамента',
      'Гарантия',
    ],
  },
  'tarko-sale': {
    name: 'Тарко-Сале', name_loc: 'Тарко-Сале', name_gen: 'Тарко-Сале', km: '1000',
    features: [
      'Обслуживаем Тарко-Сале',
      'Сваи для северных условий',
      'Монтаж',
      'Документы',
    ],
  },
  'gubkinsky': {
    name: 'Губкинский', name_loc: 'Губкинском', name_gen: 'Губкинскому', km: '780',
    features: [
      'Работаем в Губкинском',
      'Сваи Ø57–325 мм',
      'Монтаж под ключ',
      'Гарантия',
    ],
  },
  'labytnangi': {
    name: 'Лабытнанги', name_loc: 'Лабытнангах', name_gen: 'Лабытнангам', km: '920',
    features: [
      'Обслуживаем Лабытнанги',
      'Сваи для севера',
      'Монтаж',
      'Документы',
    ],
  },
}

const SERVICES = [
  { name: 'Монтаж свай', desc: 'Установка под ключ за 1 день', href: '/services/montazh-svaj' },
  { name: 'Фундамент под дом', desc: 'Для каркасных и брусовых домов', href: '/services/fundament-pod-dom' },
  { name: 'Фундамент под баню', desc: 'Монтаж за 4–6 часов', href: '/services/fundament-pod-banju' },
  { name: 'Каталог свай', desc: 'Ø57–325 мм, длина 1.5–12 м', href: '/catalog' },
  { name: 'Цены', desc: 'Актуальный прайс-лист 2026', href: '/prices' },
  { name: 'Калькулятор', desc: 'Рассчитать смету онлайн', href: '/calculator' },
]

const route = useRoute()
const slug = route.params.slug as string
const city = CITIES[slug] ?? null
</script>
