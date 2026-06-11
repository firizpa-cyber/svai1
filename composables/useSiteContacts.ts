export const SITE_PHONE_E164 = '+79992568800'
export const SITE_PHONE_DISPLAY = '+7 999 256-88-00'
export const SITE_PHONE_TEL = `tel:${SITE_PHONE_E164}`
export const SITE_TELEGRAM_URL = `https://t.me/${SITE_PHONE_E164}`
export const SITE_WHATSAPP_URL = `https://wa.me/${SITE_PHONE_E164.replace('+', '')}`
export const SITE_AVITO_URL = 'https://www.avito.ru/surgut/predlozheniya_uslug/vintovye_svai_montazh_prodazha_4457221201?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller'

export const SITE_SOCIALS = [
  {
    label: 'Telegram',
    href: SITE_TELEGRAM_URL,
    icon: '/gallery/Telegram_logo.svg-removebg-preview.webp',
  },
  {
    label: 'Max',
    href: SITE_PHONE_TEL,
    icon: '/gallery/Max_logo_2025__1_-removebg-preview.webp',
  },
  {
    label: 'WhatsApp',
    href: SITE_WHATSAPP_URL,
    icon: '/gallery/WhatsApp.svg-removebg-preview.webp',
  },
  {
    label: 'Avito',
    href: SITE_AVITO_URL,
    icon: '/gallery/avito.webp',
  },
] as const

export function useSiteContacts() {
  return {
    phoneE164: SITE_PHONE_E164,
    phoneDisplay: SITE_PHONE_DISPLAY,
    phoneTel: SITE_PHONE_TEL,
    telegramUrl: SITE_TELEGRAM_URL,
    whatsappUrl: SITE_WHATSAPP_URL,
    avitoUrl: SITE_AVITO_URL,
    socials: SITE_SOCIALS,
  }
}
