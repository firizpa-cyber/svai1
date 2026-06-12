// @ts-nocheck
/**
 * Analytics plugin — loads Yandex Metrika, Yandex Tag Manager, Varioqub, Google Analytics (GA4), Google Tag Manager
 * and Vercel Web Analytics on the client side only after the page is hydrated.
 *
 * Set in .env:
 *   NUXT_PUBLIC_YANDEX_METRIKA_ID=12345678
 *   NUXT_PUBLIC_YANDEX_TAG_MANAGER_ID=12345
 *   NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
 *   NUXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
 */
import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const ymId = config.public.yandexMetrikaId
  const ytmId = config.public.yandexTagManagerId
  const gaId = config.public.googleAnalyticsId
  const gtmId = config.public.googleTagManagerId

  // ── Vercel Web Analytics ────────────────────────────────────────────────────
  inject()

  // ── Yandex Tag Manager (YTM) ────────────────────────────────────────────────
  if (ytmId) {
    useHead({
      script: [
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'ytm.start':new Date().getTime(),id:i,event:'start'});
            var n=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://mc.yandex.ru/metrika/tag.js?id='+i+dl;
            n.parentNode.insertBefore(j,n);})(window,document,'script','dataLayer','${ytmId}');
          `,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: `<div><div style="position:absolute;left:-9999px;"><iframe src="https://mc.yandex.ru/watch/${ytmId}" style="border:0;" width="0" height="0"></iframe></div></div>`,
        },
      ],
    })
  }

  // ── Yandex Metrika (fallback if YTM not set) ────────────────────────────────
  if (ymId && !ytmId) {
    useHead({
      script: [
        {
          innerHTML: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(${ymId}, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href
            });
          `,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: `<div><img src="https://mc.yandex.ru/watch/${ymId}" style="position:absolute; left:-9999px;" alt="" /></div>`,
        },
      ],
    })
  }

  // ── Varioqub (Yandex A/B Testing) ───────────────────────────────────────────
  if (ymId) {
    useHead({
      script: [
        {
          innerHTML: `
            (function(e, x, pe, r, i, me, nt){
              e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
              me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],
              me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};
              Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),
              nt.parentNode.insertBefore(me,nt)})
            (window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
            ymab('metrika.${ymId}', 'init');
          `,
          type: 'text/javascript',
        },
      ],
    })
  }

  // ── Google Tag Manager (GTM) ────────────────────────────────────────────────
  if (gtmId) {
    useHead({
      script: [
        {
          innerHTML: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
            var n=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            n.parentNode.insertBefore(j,n);})(window,document,'script','dataLayer','${gtmId}');
          `,
          type: 'text/javascript',
        },
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        },
      ],
    })
  }

  // ── Google Analytics (GA4) (fallback if GTM not set) ────────────────────────
  if (gaId && !gtmId) {
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { page_path: window.location.pathname });
          `,
          type: 'text/javascript',
        },
      ],
    })
  }
})
