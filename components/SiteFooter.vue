<template>
  <footer class="mt-24 relative overflow-hidden wood-texture text-[oklch(0.93_0.025_80)]">
    <!-- Hero-style background image -->
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/gallery/hero-piles.webp" alt="" class="h-full w-full object-cover opacity-30" />
      <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90" />
    </div>
    <div class="ornament-divider opacity-50 relative z-10" />
    <div class="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4 text-sm relative z-10">
      <!-- Brand -->
      <div>
        <div class="flex items-center gap-3 group mb-4">
          <img
            src="/logo.webp"
            alt="Завод винтовых свай"
            class="h-10 w-auto bg-[oklch(0.93_0.025_80)]/90 p-1 rounded object-contain"
          />
          <div>
            <div class="font-display text-lg font-bold text-[oklch(0.93_0.025_80)] leading-none">СтройМонтаж-86</div>
            <div class="text-[10px] text-gold uppercase tracking-wider mt-1">Завод винтовых свай</div>
          </div>
        </div>
        <p class="mt-3 text-[oklch(0.93_0.025_80)]/70 leading-relaxed">
          Производство и монтаж винтовых свай по всему ХМАО-ЯНАО. Более 1000 объектов,
          опыт более 5 лет. Собственная техника и бригады.
        </p>
      </div>

      <!-- Menu -->
      <div>
        <div class="font-display text-base text-gold mb-3">Меню</div>
        <ul class="space-y-2 text-[oklch(0.93_0.025_80)]/80">
          <li><NuxtLink to="/catalog" class="hover:text-[oklch(0.93_0.025_80)]">Каталог свай</NuxtLink></li>
          <li><NuxtLink to="/prices" class="hover:text-[oklch(0.93_0.025_80)]">Цены на услуги</NuxtLink></li>
          <li><NuxtLink to="/calculator" class="hover:text-[oklch(0.93_0.025_80)]">Калькулятор</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-[oklch(0.93_0.025_80)]">О компании</NuxtLink></li>
          <li><NuxtLink to="/contacts" class="hover:text-[oklch(0.93_0.025_80)]">Контакты</NuxtLink></li>
        </ul>
      </div>

      <!-- Contacts -->
      <div>
        <div class="font-display text-base text-gold mb-3">Контакты</div>
        <ul class="space-y-2 text-[oklch(0.93_0.025_80)]/80">
          <li class="flex items-start gap-2">
            <PhoneIcon class="h-4 w-4 mt-0.5 shrink-0" />
            <a :href="phoneTel" class="hover:text-[oklch(0.93_0.025_80)]">{{ phoneDisplay }}</a>
          </li>
          <li class="flex items-start gap-2">
            <MailIcon class="h-4 w-4 mt-0.5 shrink-0" />
            <a href="mailto:surgutsvai43@gmail.com" class="hover:text-[oklch(0.93_0.025_80)] break-all">surgutsvai43@gmail.com</a>
          </li>
          <li class="flex items-start gap-2">
            <SendIcon class="h-4 w-4 mt-0.5 shrink-0" />
            <a :href="telegramUrl" target="_blank" rel="noopener" class="hover:text-[oklch(0.93_0.025_80)]">Telegram</a>
          </li>
          <li class="flex items-center gap-2">
            <img src="/gallery/avito.webp" alt="Avito" class="h-4 w-4 object-contain shrink-0" />
            <a :href="avitoUrl" target="_blank" rel="noopener noreferrer" class="hover:text-[oklch(0.93_0.025_80)]">Avito</a>
          </li>
        </ul>
      </div>

      <!-- Address -->
      <div>
        <div class="font-display text-base text-gold mb-3">Регион работы</div>
        <ul class="space-y-2 text-[oklch(0.93_0.025_80)]/80">
          <li class="flex items-start gap-2">
            <MapPinIcon class="h-4 w-4 mt-0.5 shrink-0" />
            ХМАО-ЯНАО
          </li>
          <li class="flex items-start gap-2">
            <ClockIcon class="h-4 w-4 mt-0.5 shrink-0" />
            Пн–Вс: 08:00–22:00
          </li>
          <li>
            <a href="https://webmaster.yandex.ru/siteinfo/?site=zavod-vintovikh-svai.ru" target="_blank" rel="noopener noreferrer">
              <img
                width="88"
                height="31"
                alt=""
                border="0"
                style="border-radius: 8px"
                src="https://yandex.ru/cycounter?zavod-vintovikh-svai.ru&theme=dark&lang=ru"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-[oklch(0.93_0.025_80)]/10 relative z-10">
      <div class="container mx-auto px-4 py-4 text-xs text-[oklch(0.93_0.025_80)]/60 flex flex-wrap justify-between gap-2">
        <span>© {{ new Date().getFullYear() }} ЗАВОД ВИНТОВЫХ СВАЙ. Все права защищены.</span>
        <span>Работаем по всему ХМАО-ЯНАО</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Clock as ClockIcon,
  Send as SendIcon,
} from 'lucide-vue-next'

const { phoneDisplay, phoneTel, telegramUrl, avitoUrl } = useSiteContacts()
</script>
