<template>

  <SeoHead title="Винтовые сваи по всему ХМАО-ЯНАО — производство и монтаж | СтройМонтаж-86" description="Продажа винтовых свай и монтаж фундаментов под ключ по всему ХМАО-ЯНАО. Расчет стоимости за 15 минут." keywords="винтовые сваи ХМАО-ЯНАО, монтаж свай по ХМАО-ЯНАО, фундамент на сваях" />
  <div>
    <!-- HERO SECTION -->
    <section class="relative min-h-[85vh] flex items-center overflow-hidden border-b border-[oklch(0.85_0.02_70)] bg-[#0A0A0A]">
      <!-- Background Image with Parallax-ready framing -->
      <div class="absolute inset-0 z-0">
        <NuxtImg src="/gallery/hero-piles.webp" alt="Монтаж винтовой сваи зимой в ХМАО" class="h-full w-full object-cover opacity-40 scale-110" fetchpriority="high" />
        <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div class="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            <span class="flex h-2 w-2 rounded-full bg-[#CD2122] shadow-[0_0_12px_#CD2122] animate-pulse" />
            Собственное производство в Сургуте
          </div>

          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
            Фундамент <br />
            <span class="text-[#CD2122]">на века</span>
          </h1>
          
          <div class="mt-8 flex items-center gap-4 text-[oklch(0.93_0.025_80)] font-display text-xl md:text-2xl italic opacity-90 border-l-4 border-[#CD2122] pl-6">
            Производство и монтаж винтовых свай <br class="hidden sm:block" /> по всему ХМАО-ЯНАО
          </div>

          <p class="mt-8 text-lg text-white/70 max-w-xl leading-relaxed">
            Изготавливаем сваи Ø57–325 мм из новой стали. Монтаж за 1 день собственной техникой. 
            Гарантия 5 лет по договору. Бесплатный выезд на замер.
          </p>

          <div class="mt-12 flex flex-wrap gap-5">
            <button 
              @click="leadOpen = true"
              class="group relative inline-flex items-center gap-3 h-16 px-10 text-base font-bold rounded-xl bg-[#CD2122] text-white shadow-[0_20px_40px_-12px_rgba(205,33,34,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(205,33,34,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              <span>Заказать расчёт</span>
              <ArrowRightIcon class="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <a href="tel:+79992568800" class="inline-flex items-center gap-4 h-16 px-8 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <PhoneIcon class="h-5 w-5" />
              </div>
              <span class="font-bold text-lg">+7 999 256-88-00</span>
            </a>
          </div>

          <!-- Quick Stats Overlay on Desktop -->
          <div class="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-12 border-t border-white/10 pt-10 max-w-3xl">
            <div v-for="s in STATS" :key="s.l" class="flex flex-col gap-1">
              <div class="font-display text-3xl font-black text-[#CD2122]">{{ s.v }}</div>
              <div class="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">{{ s.l }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative Background Elements -->
      <div class="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#CD2122] to-transparent opacity-50" />
      <div class="ornament-divider absolute bottom-0 left-0 right-0 opacity-20 invert" />
    </section>

    <!-- CORE SPECIFICATIONS -->
    <section class="bg-[oklch(0.99_0.005_80)] py-16 border-b border-[oklch(0.85_0.02_70)]">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Характеристики</span>
          <h2 class="mt-2 font-display text-3xl font-bold">Надежный свайный фундамент в цифрах</h2>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="spec in SPECS" :key="spec.label" class="p-5 bg-white rounded-lg border border-[oklch(0.9_0.01_75)] shadow-md transition hover:shadow-xl">
            <div class="text-xs text-[oklch(0.45_0.02_50)] uppercase font-semibold">{{ spec.label }}</div>
            <div class="mt-2 font-display text-2xl font-bold text-brand">{{ spec.value }}</div>
            <p class="mt-2 text-xs text-[oklch(0.45_0.02_50)]">{{ spec.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ADVANTAGES -->
    <section class="container mx-auto px-4 py-16 lg:py-24">
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Преимущества работы</span>
        <h2 class="mt-2 font-display text-3xl lg:text-4xl font-bold">Почему фундамент заказывают у нас</h2>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div
          v-for="f in FEATURES"
          :key="f.title"
          class="group relative p-8 rounded-2xl bg-white border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122]/30 shadow-card hover:shadow-elevated transition-all duration-500 overflow-hidden"
        >
          <!-- Accent Background -->
          <div class="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#CD2122]/5 transition-transform duration-500 group-hover:scale-[3]" />
          
          <div class="relative z-10 flex flex-col h-full">
            <div class="inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br from-[#CD2122] to-[#8F1618] items-center justify-center text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <component :is="f.icon" class="h-7 w-7" />
            </div>
            
            <h3 class="mt-6 font-display text-xl font-bold text-slate-900 leading-tight group-hover:text-[#CD2122] transition-colors">
              {{ f.title }}
            </h3>
            
            <p class="mt-4 text-sm text-[oklch(0.45_0.02_50)] leading-relaxed flex-1">
              {{ f.desc }}
            </p>
            
            <div class="mt-6 h-1 w-0 bg-[#CD2122] transition-all duration-500 group-hover:w-12 rounded-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- SCREW CARDS PRICING -->
    <section class="container mx-auto px-4 py-16 lg:py-20 max-w-6xl">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Цены на сваи</span>
        <h2 class="mt-2 font-display text-3xl lg:text-4xl font-bold">Винтовые сваи в наличии</h2>
        <p class="mt-3 text-sm text-[oklch(0.45_0.02_50)]">Готовые к монтажу сваи всех популярных диаметров с реальными фотографиями</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div 
          v-for="item in SCREW_CARDS" 
          :key="item.diameter" 
          class="group relative overflow-hidden rounded-2xl bg-white border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122]/40 shadow-card hover:shadow-elevated transition-all duration-500 flex flex-col"
        >
          <!-- Diameter Badge Overlay -->
          <div class="absolute top-3 left-3 z-20 px-2 py-0.5 rounded bg-[#CD2122] text-white text-[10px] font-bold uppercase tracking-wider">
            {{ item.diameter }}
          </div>

          <!-- Image Area -->
          <div class="relative overflow-hidden bg-white h-56 p-2 flex items-center justify-center">
            <NuxtImg 
              :src="`/gallery/${item.image}`" 
              :alt="item.title" 
              class="h-full w-full object-contain transition-transform duration-700 group-hover:scale-125" 
            />
            <div class="absolute inset-0 bg-slate-50 opacity-30 group-hover:opacity-0 transition-opacity" />
          </div>

          <!-- Info Area -->
          <div class="p-5 flex-1 flex flex-col">
            <h3 class="font-display text-lg font-bold text-slate-900 group-hover:text-[#CD2122] transition-colors">{{ item.title }}</h3>
            <p class="mt-2 text-[10px] uppercase tracking-wider text-[oklch(0.45_0.02_50)] leading-tight h-8 line-clamp-2">{{ item.subtitle }}</p>
            
            <div class="mt-4 pt-4 border-t border-[oklch(0.85_0.02_70)]/50">
              <div class="flex items-center justify-between">
                <span class="text-[9px] uppercase tracking-widest text-[oklch(0.45_0.02_50)]">Цена</span>
                <span class="font-display text-xl font-black text-[#CD2122]">{{ item.price }}</span>
              </div>
              <div class="flex items-center justify-between mt-2">
                <span class="text-[9px] uppercase tracking-widest text-[oklch(0.45_0.02_50)]">Сип-монтаж</span>
                <span class="text-xs font-bold text-slate-900">{{ item.priceWithInstallation }}</span>
              </div>
            </div>

            <button 
              type="button" 
              @click="leadOpen = true"
              class="mt-4 w-full py-2.5 rounded-lg bg-[oklch(0.93_0.015_75)]/50 text-[#CD2122] text-[10px] font-bold uppercase tracking-widest hover:bg-[#CD2122] hover:text-white transition-all duration-300"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <NuxtLink to="/prices" class="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#CD2122] text-[#CD2122] hover:bg-[#CD2122]/10 font-medium transition">
          Смотреть все цены <ArrowRightIcon class="h-4 w-4" />
        </NuxtLink>
      </div>
    </section>

    <!-- PRODUCT CATALOG PREVIEW -->
    <section class="bg-[oklch(0.93_0.015_75)]/40 border-y border-[oklch(0.85_0.02_70)] py-16 lg:py-20">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="flex items-end justify-between gap-4 mb-10 border-b border-[oklch(0.85_0.02_70)] pb-4">
          <div>
            <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Популярные товары</span>
            <h2 class="mt-2 font-display text-3xl font-bold">Винтовые сваи в наличии</h2>
          </div>
          <NuxtLink to="/catalog" class="inline-flex items-center gap-1 text-sm font-semibold text-[#CD2122] hover:underline">
            Смотреть весь каталог <ArrowRightIcon class="h-4 w-4" />
          </NuxtLink>
        </div>

        <div v-if="pending" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="i in 8" :key="i" class="bg-[oklch(0.99_0.005_80)] rounded-lg border border-[oklch(0.85_0.02_70)] h-64 animate-pulse" />
        </div>

        <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <NuxtLink
            v-for="(p, idx) in featured"
            :key="p.id"
            :to="`/product/${p.slug}`"
            class="group bg-white rounded-2xl border border-[oklch(0.85_0.02_70)] overflow-hidden hover:shadow-elevated hover:border-[#CD2122]/30 transition-all duration-500 relative flex flex-col"
          >
            <!-- Badge: Diameter -->
            <div class="absolute top-4 right-4 z-20 h-11 w-11 rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-[#CD2122]/20 flex flex-col items-center justify-center text-[#CD2122] transition-transform group-hover:scale-110">
              <span class="text-[10px] font-bold leading-none">Ø</span>
              <span class="text-sm font-black leading-none">{{ p.diameter_mm }}</span>
            </div>

            <!-- Image Container -->
            <div class="h-48 bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
              <img
                :src="`/gallery/${PREVIEW_PHOTOS[idx % PREVIEW_PHOTOS.length]}`"
                :alt="p.name"
                class="relative z-10 h-full object-contain mix-blend-multiply group-hover:scale-110 transition duration-500"
              />
              <div class="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/5 to-transparent" />
            </div>

            <!-- Content -->
            <div class="p-6 flex-1 flex flex-col">
              <div class="text-[10px] uppercase font-bold tracking-[0.15em] text-[#CD2122] mb-1">Свая винтовая</div>
              <h3 class="font-display text-xl font-bold text-slate-900 group-hover:text-[#CD2122] transition-colors leading-tight">{{ p.name }}</h3>

              <div class="mt-4 grid grid-cols-2 gap-4 py-3 border-y border-[oklch(0.85_0.02_70)]/50">
                <div class="flex flex-col">
                  <span class="text-[9px] uppercase tracking-wider text-[oklch(0.45_0.02_50)]">Длина</span>
                  <span class="text-sm font-bold">{{ p.length_m }} м</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-[9px] uppercase tracking-wider text-[oklch(0.45_0.02_50)]">Стенка</span>
                  <span class="text-sm font-bold">{{ p.wall_thickness_mm }} мм</span>
                </div>
              </div>

              <div class="mt-auto pt-5 flex items-end justify-between items-center">
                <div>
                  <div class="text-[9px] uppercase tracking-widest text-[oklch(0.45_0.02_50)] mb-1">За ед.</div>
                  <div class="font-display text-2xl font-black text-slate-900">{{ formatRub(p.price) }}</div>
                </div>
                <div class="text-right">
                  <div class="text-[9px] uppercase tracking-widest text-[oklch(0.45_0.02_50)] mb-1">С монтажом</div>
                  <div class="text-base font-bold text-[#CD2122]">{{ formatRub(p.price + p.install_price) }}</div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- TRUST BUILDER: DOCUMENTS -->
    <section class="bg-[oklch(0.99_0.005_80)] border-y border-[oklch(0.85_0.02_70)] py-16">
      <div class="container mx-auto px-4 max-w-5xl">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-[#CD2122]">Юридическая гарантия</span>
          <h2 class="mt-2 font-display text-3xl font-bold">Работаем строго по договору</h2>
          <p class="mt-2 text-sm text-[oklch(0.45_0.02_50)]">Предоставляем клиенту полный пакет документов для отчётности и гарантии.</p>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="(doc, idx) in DOCS"
            :key="idx"
            class="p-6 rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.93_0.015_75)]/30 flex gap-4 hover:border-[#CD2122] transition"
          >
            <div class="h-10 w-10 rounded bg-[#CD2122]/10 text-[#CD2122] grid place-items-center shrink-0">
              <FileCheckIcon class="h-5 w-5" />
            </div>
            <div>
              <h3 class="font-display text-base font-bold">{{ doc.title }}</h3>
              <p class="mt-1 text-xs text-[oklch(0.45_0.02_50)] leading-relaxed">{{ doc.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="container mx-auto px-4 py-16 lg:py-24 max-w-5xl">
      <div class="relative overflow-hidden rounded-2xl wood-texture text-[oklch(0.93_0.025_80)] p-8 md:p-14 shadow-elevated border border-[#CD2122]/20">
        <div class="izba-roof absolute top-0 left-0 right-0 h-3" />
        <div class="relative grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="font-display text-3xl lg:text-4xl font-bold text-[oklch(0.93_0.025_80)] leading-tight">
              Бесплатный выезд на замер по ХМАО-ЯНАО!
            </h2>
            <p class="mt-4 text-[oklch(0.93_0.025_80)]/85 text-sm leading-relaxed">
              Наш инженер приедет к вам на участок, проведет пробы грунта, рассчитает нужное количество и параметры свай абсолютно бесплатно. Вы получите точную смету фундамента.
            </p>
            <ul class="mt-6 space-y-2 text-[oklch(0.93_0.025_80)]/90 text-xs">
              <li v-for="t in CTA_LIST" :key="t" class="flex items-center gap-2">
                <CheckCircle2Icon class="h-4 w-4 text-gold shrink-0" /> {{ t }}
              </li>
            </ul>
          </div>
          <div class="flex flex-col gap-3">
            <NuxtLink to="/calculator" class="block">
              <button class="w-full flex items-center justify-center gap-2 h-14 text-base font-semibold rounded-md bg-[#CD2122] hover:bg-[#8F1618] text-[oklch(0.98_0.01_80)] shadow border border-[#CD2122]/20 transition">
                <AwardIcon class="h-5 w-5" /> Рассчитать смету онлайн
              </button>
            </NuxtLink>
            <a :href="telegramUrl" target="_blank" rel="noopener" class="block">
              <button class="w-full flex items-center justify-center gap-2 h-14 text-base font-semibold rounded-md bg-[oklch(0.93_0.025_80)] text-[oklch(0.18_0.01_40)] hover:bg-[oklch(0.75_0.15_8)] border border-[oklch(0.93_0.025_80)] transition">
                <SendIcon class="h-5 w-5" /> Написать в Telegram
              </button>
            </a>
            <a :href="avitoUrl" target="_blank" rel="noopener noreferrer" class="block">
              <button class="w-full flex items-center justify-center gap-2 h-14 text-base font-semibold rounded-md bg-transparent border border-[oklch(0.93_0.025_80)]/40 text-[oklch(0.93_0.025_80)] hover:bg-[oklch(0.93_0.025_80)]/10 transition">
                <img src="/gallery/avito.webp" alt="Avito" class="h-5 w-5 object-contain" /> Мы на Avito
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <LeadDialog v-if="leadOpen" @close="leadOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {
  ArrowRight as ArrowRightIcon,
  Phone as PhoneIcon,
  Hammer as HammerIcon,
  Snowflake as SnowflakeIcon,
  Truck as TruckIcon,
  Shield as ShieldIcon,
  FileCheck as FileCheckIcon,
  CheckCircle2 as CheckCircle2Icon,
  Award as AwardIcon,
  Send as SendIcon,
} from 'lucide-vue-next'
import { formatRub } from '~/utils/format'
import { PRODUCTS } from '~/utils/productsData'
import SeoHead from '~/components/SeoHead.vue'

const { telegramUrl, avitoUrl } = useSiteContacts()
const leadOpen = ref(false)

const pending = false
const featured = computed(() => PRODUCTS.slice(0, 16))

const STATS = [
  { v: '1000+', l: 'объектов' },
  { v: '5+ лет', l: 'опыт в сфере' },
  { v: '100+ лет', l: 'срок службы свай' },
]

const SPECS = [
  { label: 'Размеры свай', value: 'от 1.5 до 12 метров', desc: 'Любая длина и диаметры (57, 73, 89, 108, 133, 159, 219, 325 мм) всегда на складе.' },
  { label: 'Толщина стали', value: 'от 4 мм до 12 мм', desc: 'Применяем только новые прочные стальные трубы без коррозии и б/у металла.' },
  { label: 'Защита от коррозии', value: 'Мастичное покрытие', desc: 'Каждая свая покрывается специальной мастикой, гарантирующей срок службы 100+ лет.' },
  { label: 'Объемы монтажа', value: 'до 50 свай в день', desc: 'Собственные бригады монтажников со стажем 5+ лет и профессиональная спецтехника.' },
]

const FEATURES = [
  { icon: HammerIcon, title: 'Прямой производитель', desc: 'Цены завода без посредников. Любые типоразмеры в наличии на складе в Сургуте.' },
  { icon: SnowflakeIcon, title: 'Зимний монтаж свай', desc: 'Успешно производим установку в промерзший грунт при температуре до −40°C.' },
  { icon: TruckIcon, title: 'Доставка и спецтехника', desc: 'Своя спецтехника (КАМАЗы, мини-экскаваторы). Выезд по всему ХМАО-ЯНАО.' },
  { icon: ShieldIcon, title: 'Гарантия по договору', desc: 'Юридическая чистота сделки: предоставляем договор, акты и финансовые расписки.' },
]

const DOCS = [
  { title: 'Официальный договор', desc: 'Четко прописаны сроки, стоимость свай и монтажа' },
  { title: 'Гарантийная расписка', desc: 'Гарантия на фундамент и выполненные работы' },
  { title: 'Акт приема-передачи', desc: 'Двусторонний акт после проверки качества уровня' },
]

const CTA_LIST = [
  'Минимальный объем работ: от 100 м²',
  'Доступно мастеров: от 5 до 20 человек',
  'Выезжаем по всему ХМАО-ЯНАО',
]

const PREVIEW_PHOTOS = [
  '1.webp', '123.webp', '1231.webp', '12311.webp', '1231111.webp', '123112.webp',
  '1231123.webp', '123122222.webp', '1231223.webp', '1234.webp', '1234122.webp',
  '123441222.webp', '12345.webp', '123451.webp', '123456.webp', '1234567.webp',
]

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
</script>
