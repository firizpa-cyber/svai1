<template>
  <header class="sticky top-0 z-50 w-full">
    <!-- Top bar -->
    <div class="border-b border-slate-200 bg-white">
      <!-- Desktop -->
      <div class="container mx-auto hidden items-center gap-6 px-4 py-3 lg:flex">
        <NuxtLink to="/" class="group flex shrink-0 items-center gap-3">
          <img
            src="/logo.webp"
            alt="СтройМонтаж-86"
            class="h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </NuxtLink>

        <div class="flex items-center gap-2.5 text-sm">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CD2122] text-white">
            <MapPinIcon class="h-4 w-4" />
          </span>
          <div class="leading-tight">
            <div class="text-xs text-slate-500">Ваш регион:</div>
            <button type="button" class="text-sm font-semibold text-[#CD2122] underline decoration-[#CD2122]/40 underline-offset-2 hover:decoration-[#CD2122]">
              ХМАО-ЯНАО
            </button>
          </div>
        </div>

        <div class="flex-1" />

        <button
          type="button"
          class="shrink-0 rounded border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50"
          @click="leadOpen = true"
        >
          Заказать звонок
        </button>

        <div class="shrink-0 text-right">
          <div class="flex items-center justify-end gap-4">
            <a :href="phoneTel" class="text-xl font-bold tracking-tight text-slate-900 transition hover:text-[#CD2122]">
              {{ phoneDisplay }}
            </a>
            <div class="flex items-center gap-2">
              <a
                v-for="social in SOCIALS"
                :key="social.label"
                :href="social.href"
                :title="social.label"
                :target="social.href.startsWith('http') ? '_blank' : undefined"
                :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md transition hover:scale-105"
              >
                <img :src="social.icon" :alt="social.label" class="h-9 w-9 object-contain" />
              </a>
            </div>
          </div>
          <div class="mt-1 text-xs text-slate-500">
            Пн-Сб 9:00-20:00, Вс 9:00-19:00
          </div>
        </div>
      </div>

      <!-- Mobile: только название и звонок -->
      <div class="container mx-auto flex items-center justify-between gap-3 px-4 py-3 lg:hidden">
        <NuxtLink to="/" class="group flex min-w-0 shrink items-center">
          <img
            src="/logo.webp"
            alt="СтройМонтаж-86"
            class="h-11 w-auto max-w-[min(100%,220px)] object-contain object-left transition-transform group-hover:scale-[1.02]"
          />
        </NuxtLink>

        <div class="flex shrink-0 items-center gap-1">
          <a
            :href="phoneTel"
            class="inline-flex items-center justify-center rounded-full bg-[#CD2122] p-2.5 text-white transition hover:bg-[#8F1618]"
            :aria-label="`Позвонить ${phoneDisplay}`"
          >
            <PhoneIcon class="h-5 w-5" />
          </a>
          <button
            type="button"
            class="p-2 text-[#CD2122]"
            :aria-expanded="mobileOpen"
            aria-label="Меню"
            @click="mobileOpen = !mobileOpen"
          >
            <XIcon v-if="mobileOpen" class="h-6 w-6" />
            <MenuIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Desktop navigation -->
    <div class="hidden bg-[#CD2122] lg:block">
      <div class="container mx-auto px-4">
        <nav class="flex items-center">
          <template v-for="item in NAV" :key="item.label">
            <NuxtLink
              v-if="item.to"
              :to="item.to"
              class="relative px-5 py-4 text-sm font-bold uppercase tracking-widest text-white/90 hover:text-white transition-all hover:bg-black/10 flex items-center h-full"
              :class="{ 'bg-black/20 text-white': isActive(item.to) }"
            >
              {{ item.label }}
              <div v-if="isActive(item.to)" class="absolute bottom-0 left-0 right-0 h-1 bg-white opacity-50" />
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="relative px-5 py-4 text-sm font-bold uppercase tracking-widest text-white/90 hover:text-white transition-all hover:bg-black/10 flex items-center h-full"
            >
              {{ item.label }}
            </a>
          </template>
        </nav>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="border-t border-slate-200 bg-white lg:hidden">
      <div class="container mx-auto flex flex-col gap-5 px-4 py-5">
        <div class="flex items-center gap-2.5 border-b border-slate-100 pb-4">
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#CD2122] text-white">
            <MapPinIcon class="h-4 w-4" />
          </span>
          <div>
            <div class="text-xs text-slate-500">Ваш регион:</div>
            <span class="text-sm font-semibold text-[#CD2122] underline decoration-[#CD2122]/40 underline-offset-2">
              ХМАО-ЯНАО
            </span>
          </div>
        </div>

        <button
          type="button"
          class="w-full rounded border border-slate-300 px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-slate-400 hover:bg-slate-50"
          @click="leadOpen = true; mobileOpen = false"
        >
          Заказать звонок
        </button>

        <div class="border-b border-slate-100 pb-4">
          <div class="text-xs uppercase tracking-[0.2em] text-slate-500">Звоните нам</div>
          <a :href="phoneTel" class="mt-1 block text-2xl font-extrabold text-slate-900">
            {{ phoneDisplay }}
          </a>
          <div class="mt-3 flex items-center gap-2">
            <a
              v-for="social in SOCIALS"
              :key="social.label"
              :href="social.href"
              :title="social.label"
              :target="social.href.startsWith('http') ? '_blank' : undefined"
              :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md transition hover:scale-105"
            >
              <img :src="social.icon" :alt="social.label" class="h-10 w-10 object-contain" />
            </a>
          </div>
          <div class="mt-3 text-sm text-slate-500">
            Пн-Сб 9:00-20:00, Вс 9:00-19:00
          </div>
        </div>

        <nav class="flex flex-col gap-1 bg-[#CD2122] -mx-4 px-4 py-3">
          <template v-for="item in NAV" :key="item.label">
            <NuxtLink
              v-if="item.to"
              :to="item.to"
              class="rounded-sm px-3 py-2.5 text-base font-semibold text-white transition hover:bg-[#8F1618]"
              :class="{ 'bg-[#8F1618]': isActive(item.to) }"
              @click="mobileOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
            <a
              v-else
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-sm px-3 py-2.5 text-base font-semibold text-white transition hover:bg-[#8F1618]"
              @click="mobileOpen = false"
            >
              {{ item.label }}
            </a>
          </template>
        </nav>
      </div>
    </div>
  </header>

  <LeadDialog v-if="leadOpen" @close="leadOpen = false" />
</template>

<script setup lang="ts">
import { MapPin as MapPinIcon, Menu as MenuIcon, Phone as PhoneIcon, X as XIcon } from 'lucide-vue-next'
import { ref, watch } from 'vue'
import { useRoute } from '#app'

const route = useRoute()
const mobileOpen = ref(false)
const leadOpen = ref(false)
const { phoneDisplay, phoneTel, socials: SOCIALS } = useSiteContacts()

const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/services/montazh-svaj', label: 'Услуги' },
  { to: '/prices', label: 'Цены на сваи' },
  { to: '/catalog', label: 'Винтовые сваи' },
  { to: '/services/fundament-pod-dom', label: 'Другие фундаменты' },
  { href: '/price-list-surgut.txt', label: 'Прайс-лист' },
  { to: '/contacts', label: 'Контакты' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

watch(() => route.path, () => { mobileOpen.value = false })
</script>
