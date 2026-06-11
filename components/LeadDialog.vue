<template>
  <!-- Backdrop -->
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      @click.self="$emit('close')"
    >
      <div class="bg-white rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] w-full max-w-xl overflow-hidden transition-all duration-500 max-h-[95vh] flex flex-col border border-slate-100">
        <!-- Header: Clean & Trustworthy -->
        <div class="relative px-8 py-7 bg-white border-b border-slate-50 shrink-0">
          <div class="absolute top-0 left-0 w-1.5 h-full bg-[#CD2122]" />
          
          <div class="relative flex items-start justify-between">
            <div class="max-w-[85%]">
              <h2 class="font-display text-3xl font-bold text-slate-900 leading-tight">
                Расчёт <span class="text-[#CD2122]">свай</span>
              </h2>
              <p class="text-sm text-slate-500 mt-1">Перезвоним в течение 15 минут</p>
            </div>
            <button
              @click="$emit('close')"
              class="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all group"
            >
              <XIcon class="h-5 w-5 transition-transform group-hover:rotate-90" />
            </button>
          </div>
        </div>

        <!-- Form Area: Minimalistic & Focused -->
        <div class="p-7 overflow-y-auto custom-scrollbar">
          <div v-if="sent" class="flex flex-col items-center py-10 text-center">
            <div class="h-20 w-20 rounded-full bg-slate-50 text-[#CD2122] flex items-center justify-center mb-6 shadow-inner">
              <CheckCircle2Icon class="h-10 w-10" />
            </div>
            <h3 class="font-display text-xl font-bold text-slate-900">Заявка отправлена</h3>
            <p class="mt-3 text-sm text-slate-500 leading-relaxed max-w-sm px-4">
              Благодарим за обращение! Наш специалист скоро свяжется с вами.
            </p>
            <button
              @click="$emit('close')"
              class="mt-8 h-12 px-10 rounded-full border-2 border-slate-100 text-slate-600 font-bold hover:bg-slate-50 transition-colors"
            >
              Закрыть
            </button>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <!-- Name Input -->
              <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-[#CD2122]">Представьтесь *</label>
                <input
                  v-model="form.name"
                  required
                  minlength="2"
                  maxlength="120"
                  placeholder="Ваше имя"
                  class="w-full bg-transparent border-b-2 border-slate-100 py-2.5 text-slate-900 text-base placeholder:text-slate-300 focus:outline-none focus:border-[#CD2122] transition-colors"
                />
              </div>

              <!-- Phone Input -->
              <div class="space-y-2">
                <label class="text-[10px] font-bold uppercase tracking-widest text-[#CD2122]">Телефон *</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  inputmode="numeric"
                  required
                  maxlength="30"
                  placeholder="+7 (___) ___-__-__"
                  @input="form.phone = ($event.target as HTMLInputElement).value.replace(/[^\d+\-\s()]/g, '')"
                  class="w-full bg-transparent border-b-2 border-slate-100 py-2.5 text-slate-900 text-base placeholder:text-slate-300 focus:outline-none focus:border-[#CD2122] transition-colors"
                />
              </div>
            </div>

            <!-- Comment Input -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold uppercase tracking-widest text-[#CD2122]">Опишите задачу</label>
              <textarea
                v-model="form.comment"
                maxlength="2000"
                rows="2"
                placeholder="Сваи под дом 8х10 м..."
                class="w-full bg-slate-50/50 rounded-2xl p-4 border-2 border-transparent text-slate-900 text-sm placeholder:text-slate-300 focus:outline-none focus:bg-white focus:border-[#CD2122]/10 transition-all resize-none"
              />
            </div>

            <div v-if="errorMsg" class="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-medium border border-red-100">
              {{ errorMsg }}
            </div>

            <div class="pt-5 border-t border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div class="flex items-center gap-2.5">
                <ShieldIcon class="h-4 w-4 text-slate-300" />
                <div class="text-[9px] font-medium text-slate-400 uppercase tracking-widest leading-tight">
                  Безопасная передача <br /> данных
                </div>
              </div>

              <button
                type="submit"
                :disabled="loading"
                class="h-14 px-10 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-[#CD2122] disabled:opacity-50 transition-all shadow-lg hover:shadow-xl group"
              >
                <span v-if="loading" class="mr-2 inline-block h-3 w-3 border-2 border-white/30 border-t-white rounded-full animate-spin align-middle" />
                {{ loading ? 'Отправка...' : 'Отправить запрос' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { 
  X as XIcon, 
  CheckCircle2 as CheckCircle2Icon, 
  User as UserIcon, 
  Phone as PhoneIcon, 
  MessageSquare as MessageSquareIcon,
  ArrowRight as ArrowRightIcon,
  Shield as ShieldIcon
} from 'lucide-vue-next'
import { ref, reactive } from 'vue'

const emit = defineEmits<{ close: [] }>()

const loading = ref(false)
const sent = ref(false)
const errorMsg = ref('')

const form = reactive({
  name: '',
  phone: '',
  comment: '',
})

const handleSubmit = async () => {
  errorMsg.value = ''
  if (form.name.trim().length < 2) { errorMsg.value = 'Укажите ваше имя'; return }
  if (form.phone.trim().length < 5) { errorMsg.value = 'Укажите номер телефона'; return }

  loading.value = true
  try {
    await $fetch('/api/orders', {
      method: 'POST',
      body: {
        contact_name: form.name.trim(),
        contact_phone: form.phone.trim(),
        comment: form.comment.trim() || undefined,
        items: [{ name: 'Заявка с сайта (звонок)', qty: 1, price: 0 }],
      },
    })
    sent.value = true
  } catch (e: any) {
    errorMsg.value = e?.data?.message || 'Ошибка отправки. Попробуйте ещё раз или позвоните нам.'
  } finally {
    loading.value = false
  }
}
</script>
