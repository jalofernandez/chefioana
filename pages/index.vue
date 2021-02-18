<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title text-shadow is-size-1 is-size-3-mobile has-text-weight-medium">
          <b class="has-text-primary">Chef</b> Ioana <b class="has-text-primary">en casa</b>
        </h1>
        <h2 class="subtitle is-size-5 is-size-6-mobile">
          <span class="has-text-weight-medium">Come en tu casa como en el mejor restaurante</span>
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
                <h3 class="subtitle is-size-5 is-size-6-mobile">
                  <b class="has-text-primary">Comodísimo</b>
                  <br class="is-hidden-touch" />
                  porque te llevamos la comida a casa, la 
                  <span class="has-text-weight-medium">cocinamos</span>,
                  te <span class="has-text-weight-medium">servimos</span> y 
                  <span class="has-text-weight-medium">limpiamos</span> después
                  y sin cortes adicionales.
                </h3>
              </div>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="card mb-2">
              <div class="card-bg-img is-mobile-marketing"></div>
              <div class="card-content">
                <h3 class="subtitle is-size-5 is-size-6-mobile">
                  <b class="has-text-primary">Todo ventajas</b>
                  <br class="is-hidden-touch" />
                  porque no necesitas salir de casa, tienes 
                  <span class="has-text-weight-medium">chef y servicio en exclusiva</span>,
                  sin las molestias de comprar, cocinar, fregar...
                </h3>
              </div>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div class="card mb-2">
              <div class="card-bg-img is-online-world"></div>
              <div class="card-content">
                <h3 class="subtitle is-size-5 is-size-6-mobile">
                  <b class="has-text-primary">Variado y seguro</b>
                  <br class="is-hidden-touch" />
                  porque disponemos de un <span class="has-text-weight-medium">amplio menú</span>
                  con arroces, carnes maduradas, marisco... Y con
                  <span class="has-text-weight-medium">medidas anticovid-19</span> por tu seguridad.
                </h3>
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
