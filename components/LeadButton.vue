<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
    <!-- Social icons burst -->
    <TransitionGroup
      tag="div"
      class="flex flex-col gap-3 items-center mb-1"
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-50"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-50"
    >
      <div v-if="isOpen" key="socials" class="flex flex-col gap-3">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.href"
          target="_blank"
          rel="noopener"
          class="h-12 w-12 rounded-full bg-white shadow-elevated border border-[oklch(0.85_0.02_70)] flex items-center justify-center transition hover:scale-110 active:scale-95 group overflow-hidden"
          :title="s.label"
        >
          <img :src="s.icon" :alt="s.label" class="h-8 w-8 object-contain" />
          <div class="absolute right-14 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
            {{ s.label }}
          </div>
        </a>

        <!-- Leave Request Button -->
        <button
          @click="openDialog = true; isOpen = false"
          class="h-12 w-12 rounded-full bg-[#CD2122] text-white shadow-elevated flex items-center justify-center transition hover:scale-110 active:scale-95 group"
          title="Оставить заявку"
        >
          <MessageCircleIcon class="h-5 w-5" />
          <div class="absolute right-14 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
            Оставить заявку
          </div>
        </button>
      </div>
    </TransitionGroup>

    <!-- Main FAB button -->
    <div class="relative">
      <span v-if="!isOpen" class="absolute inset-0 rounded-full bg-[#CD2122] animate-ping opacity-30" />
      
      <button
        @click="isOpen = !isOpen"
        class="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#CD2122] hover:bg-[#8F1618] text-white shadow-elevated transition-all hover:scale-105 active:scale-95 border border-white/10"
        :aria-label="isOpen ? 'Закрыть' : 'Контакты'"
      >
        <XIcon v-if="isOpen" class="h-6 w-6" />
        <div v-else class="flex items-center justify-center">
          <MessageCircleIcon class="h-6 w-6" />
        </div>
      </button>
    </div>
  </div>

  <!-- Dialog -->
  <LeadDialog v-if="openDialog" @close="openDialog = false" />
</template>

<script setup lang="ts">
import { MessageCircle as MessageCircleIcon, X as XIcon } from 'lucide-vue-next'
import { ref } from 'vue'
import { useSiteContacts } from '~/composables/useSiteContacts'

const isOpen = ref(false)
const openDialog = ref(false)
const { socials } = useSiteContacts()
</script>

<style scoped>
.shadow-elevated {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
}
</style>
