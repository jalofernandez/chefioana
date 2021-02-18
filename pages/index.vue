<template>
  <section class="hero is-halfheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title text-shadow is-size-1 is-size-3-mobile" v-if="$mq !== 'mobile'">
          <span class="has-text-success">Chef</span> Ioana va a tu casa
        </h1>
        <h2 class="subtitle is-size-5 is-size-6-mobile">
          #{{ owner.name }}
          <span class="has-text-weight-medium">digitaliza tus productos</span>
          y <span class="has-text-weight-medium">servicios</span> para
          <b class="has-text-link">vender más</b>
        </h2>
      </div>
    </div>
    <div class="hero-foot">
      <div class="container">
        <div class="level">
          <div class="level-item has-text-centered">
            <div class="card mb-2">
              <div class="card-bg-img is-mobile-apps"></div>
              <div class="card-content">
                <p class="subtitle is-size-5 is-size-6-mobile">
                  <b class="has-text-success">Únete</b> a la
                  <span class="has-text-weight-medium">transformación digital</span>
                  optimizando el rendimiento de tu negocio. Internet
                  <span class="has-text-weight-medium">suma</span>.
                </p>
              </div>
              <!-- <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <a href="#">Saber más</a>
                  </span>
                </p>
              </footer> -->
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="card mb-2">
              <div class="card-bg-img is-mobile-marketing"></div>
              <div class="card-content">
                <p class="subtitle is-size-5 is-size-6-mobile">
                  <b class="has-text-success">Aumenta</b>
                  <span class="has-text-weight-medium">la visibilidad</span>
                  de tus productos y servicios fácilmente a través de
                  <span class="has-text-weight-medium">redes sociales</span>,
                  <span class="has-text-weight-medium">whatsapp</span>...
                </p>
              </div>
              <!-- <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <a href="#">Saber más</a>
                  </span>
                </p>
              </footer> -->
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="card mb-2">
              <div class="card-bg-img is-online-world"></div>
              <div class="card-content">
                <p class="subtitle is-size-5 is-size-6-mobile">
                  <b class="has-text-success">Incrementa</b>
                  <span class="has-text-weight-medium">tus ventas</span>
                  porque en internet tu negocio abre
                  <span class="has-text-weight-medium">24 días</span> a la semana y
                  <span class="has-text-weight-medium">365 días</span>
                  al año.
                </p>
              </div>
              <!-- <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <a href="#">Saber más</a>
                  </span>
                </p>
              </footer> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner
    }
  },
  head() {
    const title = ''
    const description =
      this.owner.copyright + ' Chef a domicilio para comer en tu casa como en el mejor restaurante y sin molestias. Reservas e información: 644 09 34 70'
    const canonical = 'https://' + this.owner.url
    const canonicalDev = 'https://' + this.owner.alias + '.firebaseapp.com'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Facebook verification domain to allow Business Manager & Marketing platforms
        // { hid: 'facebook-domain-verification', name: 'facebook-domain-verification', content: '...' },
        // Open Graph (carefully here: in Index page cannot use "title" constant cause is empty)
        { hid: 'og:title', property: 'og:title', content: this.owner.copyright },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // Twitter Card (carefully here: in Index page cannot use "title" constant cause is empty)
        { hid: 'twitter:title', name: 'twitter:title', content: this.owner.copyright },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: canonical }
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
        { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
        { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
        { rel: 'alternate', hid: 'alternate', href: canonicalDev },
      ]
    }
  }
}
</script>
