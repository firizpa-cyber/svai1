import { PRODUCTS } from '../data/products'

export default defineEventHandler(() => {
  return { products: PRODUCTS }
})
