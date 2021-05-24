<template>
  <main :class="$route.name">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12191.136935563927!2d-3.6747571!3d40.191615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc74728c5118d9df5!2sLa%20Antigua%20Bodeguita!5e0!3m2!1ses!2ses!4v1614523233660!5m2!1ses!2ses"
      width="100%"
      height="350"
      frameborder="0"
      style="border:0;" 
      allowfullscreen
      loading="lazy"
    ></iframe>

    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <nav class="level">
            <div class="level-item has-text-centered mb-5">
              <div>
                <p class="heading">Cita previa por <b>teléfono</b>:</p>
                <a
                  class="button is-medium is-primary is-light"
                  :href="`tel:${owner.phone}`"
                  :title="`Llamar a ${owner.copyright}`"
                >
                  <figure class="image is-24x24px mr-3">
                    <img
                      src="~/assets/images/icons/phone-in-talk.svg"
                      title="Icono de llamada por teléfono"
                      alt="Icono de llamada por teléfono"
                      width="24"
                      height="24"
                    />
                  </figure>
                  <span class="has-text-weight-semibold">644 09 34 70</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered mb-5">
              <div>
                <p class="heading">Cita previa por <b>chat</b>:</p>
                <a
                  class="button is-medium is-success is-light"
                  :href="`https://wa.me/34${owner.phone}`"
                  :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure class="image is-24x24px mr-3">
                    <img
                      src="~/assets/images/icons/whatsapp.svg"
                      title="Icono de WhatsApp"
                      alt="Icono de WhatsApp"
                      width="24"
                      height="24"
                    />
                  </figure>
                  <span class="has-text-weight-semibold">WhatsApp</span>
                </a>
              </div>
            </div>
            <div class="level-item has-text-centered mb-5">
              <div>
                <p class="heading">Ver <b>mapa</b> completo:</p>
                <a
                  class="button is-medium is-primary is-light"
                  href="https://goo.gl/maps/Aegzf2qZF4x"
                  :title="`Dirección de ${owner.copyright} en Google Maps`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure class="image is-24x24px mr-3">
                    <img
                      src="~/assets/images/icons/map-marker-outline.svg"
                      title="Icono de WhatsApp"
                      alt="Icono de WhatsApp"
                      width="24"
                      height="24"
                    />
                  </figure>
                  <span>Google <span class="has-text-weight-semibold">maps</span></span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>

    <SectionTitle :header="header.about" :id="links[6].section" />
    <SectionBiography />

    <ItemTitle class="has-text-centered" :title="header.reviews" />
    <SectionReviews />

    <TheFooter />
  </main>
</template>

<script>
export default {
  layout: 'NotHome',
  data() {
    return {
      owner: this.$store.state.owner,
      links: this.$store.state.pages.links,
      header: {
        about: 'Sobre Chef Ioana',
        reviews: 'Opiniones de clientes'
      }
    }
  },
  head() {
    const title = 'Contacto de'
    const description =
      'Contacta con ' + this.owner.copyright + '. Reservas y consultas por teléfono y WhatsApp: 644 09 34 70'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title + ' ' + this.owner.copyright },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title + ' ' + this.owner.copyright },
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
      ]
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  }
}
</script>
