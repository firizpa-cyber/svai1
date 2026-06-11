<template>
  <div class="container mx-auto px-4 py-12 lg:py-16 max-w-5xl">
    <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Контакты</span>
    <h1 class="mt-2 font-display text-4xl lg:text-5xl font-bold">Свяжитесь с нами</h1>
    <p class="mt-3 text-[oklch(0.45_0.02_50)]">Работаем по всему ХМАО-ЯНАО и Тюменской области.</p>

    <!-- Contact cards -->
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <a :href="phoneTel" class="group rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] p-6 hover:border-[#CD2122] hover:shadow-elevated transition-all">
        <PhoneIcon class="h-6 w-6 text-brand" />
        <div class="mt-3 text-xs uppercase tracking-wider text-[oklch(0.45_0.02_50)]">Основной телефон</div>
        <div class="font-display text-2xl font-bold mt-1 group-hover:text-brand">{{ phoneDisplay }}</div>
        <div class="text-sm text-[oklch(0.45_0.02_50)] mt-1">Звонки и WhatsApp</div>
      </a>
      <a :href="telegramUrl" target="_blank" rel="noopener" class="group rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] p-6 hover:border-[#CD2122] hover:shadow-elevated transition-all">
        <SendIcon class="h-6 w-6 text-brand" />
        <div class="mt-3 text-xs uppercase tracking-wider text-[oklch(0.45_0.02_50)]">Telegram</div>
        <div class="font-display text-2xl font-bold mt-1 group-hover:text-brand">{{ phoneDisplay }}</div>
        <div class="text-sm text-[oklch(0.45_0.02_50)] mt-1 flex items-center gap-1">Написать <ExternalLinkIcon class="h-3 w-3" /></div>
      </a>
      <a :href="avitoUrl" target="_blank" rel="noopener noreferrer" class="group rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] p-6 hover:border-[#CD2122] hover:shadow-elevated transition-all">
        <img src="/gallery/avito.webp" alt="Avito" class="h-6 w-6 object-contain" />
        <div class="mt-3 text-xs uppercase tracking-wider text-[oklch(0.45_0.02_50)]">Avito</div>
        <div class="font-display text-xl font-bold mt-1 group-hover:text-brand">Наше объявление</div>
        <div class="text-sm text-[oklch(0.45_0.02_50)] mt-1 flex items-center gap-1">Посмотреть <ExternalLinkIcon class="h-3 w-3" /></div>
      </a>
    </div>

    <!-- Address & Hours -->
    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <div class="rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] p-6">
        <MapPinIcon class="h-6 w-6 text-brand" />
        <div class="mt-3 text-xs uppercase tracking-wider text-[oklch(0.45_0.02_50)]">Регион работы</div>
        <div class="font-display text-lg font-bold mt-1">ХМАО-ЯНАО</div>
        <div class="text-sm text-[oklch(0.45_0.02_50)] mt-2">
          Работаем по всему округу, выезжаем на объекты в любую точку региона.
        </div>
      </div>
      <div class="rounded-lg border border-[oklch(0.85_0.02_70)] bg-[oklch(0.99_0.005_80)] p-6">
        <ClockIcon class="h-6 w-6 text-brand" />
        <div class="mt-3 text-xs uppercase tracking-wider text-[oklch(0.45_0.02_50)]">График работы</div>
        <div class="font-display text-lg font-bold mt-1">Ежедневно, 08:00 — 22:00</div>
        <div class="text-sm text-[oklch(0.45_0.02_50)] mt-2">
          Принимаем заявки и консультируем без выходных. Монтаж — по согласованию.
        </div>
      </div>
    </div>

    <!-- Map -->
    <div class="mt-10 rounded-lg overflow-hidden border border-[oklch(0.85_0.02_70)] h-[400px]">
      <iframe
        title="Карта офиса"
        src="https://yandex.ru/map-widget/v1/?ll=73.385,61.254&z=12&pt=73.385,61.254,pm2rdm"
        width="100%"
        height="100%"
        frameborder="0"
        loading="lazy"
      />
    </div>

    <!-- Gallery -->
    <section class="mt-16">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Галерея</span>
        <h2 class="mt-2 font-display text-3xl font-bold">Наш офис и работы</h2>
        <p class="mt-3 text-sm text-[oklch(0.45_0.02_50)]">
          Примеры наших объектов и офис в Сургуте. Более 1000 успешно выполненных проектов по ХМАО-ЯНАО.
        </p>
      </div>

      <div class="grid gap-4 md:gap-6">
        <!-- Featured photo -->
        <div class="relative rounded-2xl overflow-hidden border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122] hover:shadow-elevated transition-all group">
          <div class="izba-roof absolute top-0 left-0 right-0 h-1 z-10" />
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop"
            alt="Монтаж винтовых свай"
            class="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.01_40)]/95 via-[oklch(0.18_0.01_40)]/40 to-transparent" />
          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div class="flex items-center gap-2 mb-3">
              <div class="h-2 w-2 rounded-full bg-[#CD2122] animate-pulse" />
              <span class="text-xs font-semibold uppercase tracking-wider text-gold">Главный объект</span>
            </div>
            <h3 class="font-display text-2xl md:text-3xl font-bold text-[oklch(0.93_0.025_80)]">Профессиональный монтаж свай</h3>
            <p class="text-sm md:text-base text-[oklch(0.93_0.025_80)]/80 mt-2 max-w-xl">
              Собственная техника и опытные мастера с многолетним стажем работы в условиях ХМАО
            </p>
          </div>
        </div>

        <!-- Three-column -->
        <div class="grid gap-4 md:gap-6 md:grid-cols-3">
          <div class="relative rounded-xl overflow-hidden border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122] hover:shadow-card transition-all group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
              alt="Наш офис"
              class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.01_40)]/90 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="font-display text-lg font-bold text-[oklch(0.93_0.025_80)]">Офис в Сургуте</h3>
              <p class="text-xs text-[oklch(0.93_0.025_80)]/80 mt-1">ул. Индустриальная, 17</p>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122] hover:shadow-card transition-all group">
            <img
              src="/gallery/photo_16_2026-06-06_11-15-46.webp"
              alt="Наши работы"
              class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.01_40)]/90 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="font-display text-lg font-bold text-[oklch(0.93_0.025_80)]">Наши объекты</h3>
              <p class="text-xs text-[oklch(0.93_0.025_80)]/80 mt-1">Более 1000 проектов</p>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122] hover:shadow-card transition-all group">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop"
              alt="Строительство"
              class="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.01_40)]/90 to-transparent" />
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="font-display text-lg font-bold text-[oklch(0.93_0.025_80)]">Строительство</h3>
              <p class="text-xs text-[oklch(0.93_0.025_80)]/80 mt-1">Фундамент за 1 день</p>
            </div>
          </div>
        </div>

        <!-- Two-column remaining -->
        <div class="grid gap-4 md:gap-6 md:grid-cols-2">
          <div
            v-for="(photo, idx) in GALLERY_PHOTOS"
            :key="idx"
            class="relative rounded-xl overflow-hidden border border-[oklch(0.85_0.02_70)] hover:border-[#CD2122] hover:shadow-card transition-all group"
          >
            <img
              :src="`/gallery/${photo}`"
              :alt="`Фото работы ${idx + 1}`"
              class="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute top-4 right-4 bg-[oklch(0.18_0.01_40)]/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <span class="text-xs font-semibold text-gold">Работа #{{ idx + 1 }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  Send as SendIcon,
  ExternalLink as ExternalLinkIcon,
} from 'lucide-vue-next'

const { phoneDisplay, phoneTel, telegramUrl, avitoUrl } = useSiteContacts()

useSeoMeta({
  title: 'Контакты — Завод винтовых свай СтройМонтаж-86 в Сургуте',
  description: 'г. Сургут, ул. Индустриальная, 17, оф. 108. Телефон +7 999 256-88-00. Email surgutsvai43@gmail.com. Работаем ежедневно 08:00–22:00. Выезжаем по всему ХМАО-ЯНАО.',
  keywords: 'контакты завод свай Сургут, адрес производителя свай, телефон монтаж фундамента Сургут, сваи Индустриальная Сургут',
  ogTitle: 'Контакты — Завод винтовых свай Сургут',
  ogDescription: 'Телефон, email, адрес офиса. Работаем ежедневно 08:00–22:00.',
})

const GALLERY_PHOTOS = [
  'photo_17_2026-06-06_11-15-46.webp',
  'photo_18_2026-06-06_11-15-46.webp',
]
</script>
