// @ts-nocheck
import { PRODUCTS } from '../../data/products'

export default defineEventHandler(async (event) => {
  const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://zavod-vintovikh-svai.com'
  const feedDate = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${feedDate}">
  <shop>
    <name>Завод винтовых свай СтройМонтаж-86</name>
    <company>СтройМонтаж-86</company>
    <url>${siteUrl}</url>
    <phone>+7 999 256-88-00</phone>
    <currency id="RUR" rate="1"/>
    <category id="1">Винтовые сваи</category>
    <category id="2">Опоры</category>
    <category id="3">Винтовые сваи под ключ</category>
    <category id="4">Оцинкованные сваи</category>
    <category id="5">Специальные сваи</category>
    <category id="6">Железобетонные сваи</category>
    <category id="7">Буронабивные сваи</category>
    <category id="8">Готовые фундаменты</category>
    <category id="9">Замена фундамента</category>
    <category id="10">Поднятие фундамента</category>
    <category id="11">Монтаж по типам объектов</category>
    <category id="12">Услуги монтажа</category>
    <category id="13">Обвязка свай</category>
    <category id="14">Комплектующие</category>
    <category id="15">Бурение и аренда</category>
    <category id="16">Металлоконструкции</category>
    <category id="17">Усиление фундамента</category>
    <category id="18">Утепление</category>
    <category id="19">Солнечные батареи</category>
    ${PRODUCTS.map((product, index) => {
      const categoryId = getCategoryId(product.category)
      const productUrl = `${siteUrl}/product/${product.slug}`
      const imageUrl = product.image_url || `${siteUrl}/logo.webp`
      return `    <offer id="${product.id.replace('p-', '')}" available="${product.in_stock ? 'true' : 'false'}">
      <url>${productUrl}</url>
      <price>${product.price}</price>
      <currencyId>RUR</currencyId>
      <categoryId>${categoryId}</categoryId>
      <picture>${imageUrl}</picture>
      <name>${product.name}</name>
      <description>${product.description || `${product.name} диаметром ${product.diameter_mm} мм, длиной ${product.length_m} мм, толщина стенки ${product.wall_thickness_mm} мм`}</description>
      <vendor>СтройМонтаж-86</vendor>
      <model>${product.name}</model>
      <vendorCode>${product.id}</vendorCode>
      <store>true</store>
      <pickup>true</pickup>
      <delivery>true</delivery>
      <dimensions>${product.diameter_mm / 1000}/${(product.length_m / 1000) || 1}/${product.diameter_mm / 1000}</dimensions>
      <weight>${Math.round((product.diameter_mm * product.length_m * product.wall_thickness_mm * 7.85) / 1000000000) || 1}</weight>
    </offer>`
    }).join('\n')}
  </shop>
</yml_catalog>`

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return xml
})

function getCategoryId(categoryName: string): number {
  const categories: Record<string, number> = {
    'Винтовые сваи': 1,
    'Опоры': 2,
    'Винтовые сваи под ключ': 3,
    'Оцинкованные сваи': 4,
    'Специальные сваи': 5,
    'Железобетонные сваи': 6,
    'Буронабивные сваи': 7,
    'Готовые фундаменты': 8,
    'Замена фундамента': 9,
    'Поднятие фундамента': 10,
    'Монтаж по типам объектов': 11,
    'Услуги монтажа': 12,
    'Обвязка свай': 13,
    'Комплектующие': 14,
    'Бурение и аренда': 15,
    'Металлоконструкции': 16,
    'Усиление фундамента': 17,
    'Утепление': 18,
    'Солнечные батареи': 19
  }
  return categories[categoryName] || 1
}
