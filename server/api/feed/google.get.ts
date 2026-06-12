// @ts-nocheck
import { PRODUCTS } from '../../data/products'

export default defineEventHandler(async (event) => {
  const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.ru'
  const feedDate = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Завод винтовых свай СтройМонтаж-86</title>
    <link>${siteUrl}</link>
    <description>Производство и монтаж винтовых свай по всему ХМАО-ЯНАО</description>
    <language>ru</language>
    <lastBuildDate>${feedDate}</lastBuildDate>
    ${PRODUCTS.map((product) => {
      const productUrl = `${siteUrl}/product/${product.slug}`
      const imageUrl = product.image_url || `${siteUrl}/logo.webp`
      return `    <item>
      <g:id>${product.id}</g:id>
      <g:title>${product.name}</g:title>
      <g:description>${product.description || `${product.name} диаметром ${product.diameter_mm} мм, длиной ${product.length_m} мм, толщина стенки ${product.wall_thickness_mm} мм`}</g:description>
      <g:link>${productUrl}</g:link>
      <g:image_link>${imageUrl}</g:image_link>
      <g:price>${product.price} RUB</g:price>
      <g:availability>${product.in_stock ? 'in_stock' : 'out_of_stock'}</g:availability>
      <g:condition>new</g:condition>
      <g:brand>СтройМонтаж-86</g:brand>
      <g:mpn>${product.id}</g:mpn>
      <g:product_type>Строительные материалы &gt; Фундаменты &gt; Винтовые сваи</g:product_type>
      <g:shipping>
        <g:country>RU</g:country>
        <g:service>Стандартная доставка</g:service>
        <g:price>0 RUB</g:price>
      </g:shipping>
    </item>`
    }).join('\n')}
  </channel>
</rss>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})
