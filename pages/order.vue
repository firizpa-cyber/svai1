<template>
  <div class="container mx-auto px-4 py-12 max-w-3xl">
    <h1 class="font-display text-3xl mb-6">Оформить заявку</h1>

    <div v-if="!cart.length" class="text-[oklch(0.45_0.02_50)]">
      Корзина пуста. <NuxtLink to="/catalog" class="text-brand underline">Перейти в каталог</NuxtLink>
    </div>

    <template v-else>
      <!-- Cart table -->
      <table class="w-full mb-6 border border-[oklch(0.85_0.02_70)] text-sm">
        <thead class="bg-[oklch(0.93_0.015_75)]">
          <tr>
            <th class="text-left p-3">Товар</th>
            <th class="text-center p-3">Кол-во</th>
            <th class="text-right p-3">Цена</th>
            <th class="text-right p-3">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.product_id" class="border-t border-[oklch(0.85_0.02_70)]">
            <td class="p-3">{{ item.name }}</td>
            <td class="p-3 text-center">{{ item.qty }}</td>
            <td class="p-3 text-right">{{ formatRub(item.price + item.install_price) }}</td>
            <td class="p-3 text-right">{{ formatRub((item.price + item.install_price) * item.qty) }}</td>
          </tr>
          <tr class="border-t border-[oklch(0.85_0.02_70)] font-bold">
            <td colspan="3" class="p-3 text-right">Итого:</td>
            <td class="p-3 text-right text-[#CD2122]">{{ formatRub(grandTotal) }}</td>
          </tr>
        </tbody>
      </table>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Имя *</label>
          <input
            v-model="customer.name"
            required
            class="w-full rounded-md border border-[oklch(0.85_0.02_70)] px-3 py-2 text-sm focus:outline-none focus:border-[#CD2122] focus:ring-1 focus:ring-[#CD2122]/20 transition"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Телефон *</label>
          <input
            v-model="customer.phone"
            type="tel"
            inputmode="numeric"
            required
            placeholder="+7 999 000-00-00"
            @input="customer.phone = ($event.target as HTMLInputElement).value.replace(/[^\d+\-\s()]/g, '')"
            class="w-full rounded-md border border-[oklch(0.85_0.02_70)] px-3 py-2 text-sm focus:outline-none focus:border-[#CD2122] focus:ring-1 focus:ring-[#CD2122]/20 transition"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">E-mail</label>
          <input
            v-model="customer.email"
            type="email"
            class="w-full rounded-md border border-[oklch(0.85_0.02_70)] px-3 py-2 text-sm focus:outline-none focus:border-[#CD2122] focus:ring-1 focus:ring-[#CD2122]/20 transition"
          />
        </div>
        <button
          type="submit"
          :disabled="submitting"
          class="w-full h-12 flex items-center justify-center text-sm font-semibold rounded-md bg-[#CD2122] hover:bg-[#8F1618] text-[oklch(0.98_0.01_80)] disabled:opacity-50 transition"
        >
          {{ submitting ? 'Отправка...' : 'Отправить заявку' }}
        </button>
      </form>
    </template>
  </div>
</template>

<script setup lang="ts">
import { formatRub } from '~/utils/format'
import { useCart } from '~/composables/useCart'
import { useToast } from '~/composables/useToast'

useHead({ title: 'Оформить заявку — Завод винтовых свай' })

const { cart, grandTotal, clear } = useCart()
const { success, error } = useToast()
const router = useRouter()

const submitting = ref(false)
const customer = reactive({ name: '', phone: '', email: '' })

const handleSubmit = async () => {
  submitting.value = true
  try {
    const res = await $fetch('/api/orders', {
      method: 'POST',
      body: {
        contact_name: customer.name.trim(),
        contact_phone: customer.phone.trim(),
        contact_email: customer.email.trim(),
        items: cart.value.map((i) => ({
          product_id: i.product_id,
          name: i.name,
          price: i.price + i.install_price,
          qty: i.qty,
        })),
      },
    }) as any

    success('Заявка отправлена!')
    clear()
    router.push('/')
  } catch (err: any) {
    error(err?.data?.message || 'Ошибка сети')
  } finally {
    submitting.value = false
  }
}
</script>
