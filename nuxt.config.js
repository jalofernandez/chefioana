const author = '@jalofernandez para la Chef Ioana Botis'
const description = 'Chef a domicilio para comer en tu casa como en el mejor restaurante y sin molestias. Reservas e información: 644 09 34 70'
const url = 'ioanachefentucasa.com'
const dataImage = 'chef-ioana-en-tu-casa.jpg'

export default {
  target: 'static',
  // mode: 'universal',
  head: {
    title: 'chefioana',
    htmlAttrs: {
      lang: 'es',
      class: ['has-navbar-fixed-top', 'has-navbar-fixed-bottom']
    },
    bodyAttrs: {
      class: ['chefioana'],
    },
    title: process.env.npm_package_name || '',
    titleTemplate: '%s 🍽 Chef Ioana en tu casa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'author', name: 'author', content: author },
      { hid: 'copyright', name: 'copyright', content: author },
      { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
      { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
      { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'lang', name: 'lang', content: 'es-ES' },
      { hid: 'rating', name: 'rating', content: 'General' },
      { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
      //- (metas) to customize (all browsers) top navbar
      { hid: 'theme-color', name: 'theme-color', content: '#ff4081' },
      //- (metas) to Webkit (iOS Safari) browsers
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: author },
      //- (metas) IE (windows phone) browsers
      // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
      //- (metas) Open Graph + TW Cards loads globally per page. Rest ones placed in each page
      // Docs on: https://ogp.me
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:locale', property: 'og:locale', content: 'es-ES' },
      { hid: 'og:site_name', property: 'og:site_name', content: url },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: 'https://' + url + '/' + dataImage },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://' + url + '/' + dataImage },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/jpeg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '960' },
      { hid: 'og:image:height', property: 'og:image:height', content: '540' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: description },
      // Docs on: https://nuxtjs.org/examples/seo-twitter-og
      // Test on: https://cards-dev.twitter.com/validator 
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: url },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://' + url + '/' + dataImage },
    ],
    link: [
      { rel: 'author', type: 'text/plain', href: 'https://' + url + '/humans.txt' },
      // // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // TODO: Social Media links prefetch a soon as exist
      // { rel: 'dns-prefetch', href: '//www.youtube.com/...' },
      // { rel: 'dns-prefetch', href: '//www.facebook.com/...' },
      // { rel: 'dns-prefetch', href: '//www.instagram.com/...' },
      // { rel: 'dns-prefetch', href: '//goo.gl/maps/...' },
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
