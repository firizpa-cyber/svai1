import { PRODUCTS } from '~/utils/productsData'

export function useProducts() {
  const products = PRODUCTS
  const pending = ref(false)
  return { products, pending }
}
