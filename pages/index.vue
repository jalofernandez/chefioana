<template>
  <main :class="$route.name">
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

    <SectionTitle :header="header.features" />
    <SectionChessBoard :blocks="blocks" :page="$route.name"/>

    <SectionTitle :header="header.pros" />
    <SectionMediaObject :media="pros" />

    <SectionTitle :header="header.menu" />
    <SectionMenu />

    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      header: {
        features: 'Es tan cómodo para ti...',
        pros: 'Son todo ventajas',
        menu: 'Todo lo que te puedo ofrecer',
      },
      blocks: [
        {
          title: '<small class="has-text-weight-light">...Porque</small> cocino en tu casa',
          description:
            'Llegaré a tu casa con tiempo suficiente para cocinar el menú acordado previamente. Si eres fan de los fogones aprovecha para quedarte durante la preparación de los platos y así aprender de una cocinaera profesional.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          img: this.$route.name + '/640x360.png',
          alt: 'Ioana Botis',
          reflected: false
        },
        {
          title: '<small class="has-text-weight-light">...Porque</small> te sirvo a tu ritmo',
          description:
            'Yo en persona me encargaré del servicio de mesa, explicándote los detalles de cada plato si así lo deseáis y al ritmo que cada comensal prefiera, sin prisas o con ellas. El servicio será discreto y profesional, para garantizar una velada cómoda y discreta.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          img: this.$route.name + '/640x360.png',
          alt: 'Ioana Botis',
          reflected: true
        },
        {
          title: '<small class="has-text-weight-light">...Porque</small> te limpio la cocina',
          description:
            'Y antes de irme limpiaré la cocina, la vajilla y los utensilios utilizados tanto en la elaboración como en la degustación del menú. Podrás disfrutar de una sobremesa sin prisas, sabiendo que liumpian por ti.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          img: this.$route.name + '/640x360.png',
          alt: 'Ioana Botis',
          reflected: false
        },
        {
          title: '<small class="has-text-weight-light">...Y</small> sin cortes adicionales',
          description:
            'Sin tener que pagar extras de envío, o incremento por terraza... El precio no variará respecto al menú pactado previa cita. Además disponemos de ofertas expeciales para determinados gremios.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          img: this.$route.name + '/640x360.png',
          alt: 'Ioana Botis',
          reflected: true
        }
      ],
      pros: [
        {
          title: '¡Es comodísimo!',
          description:
            'No necesitas salir de casa ni coger el coche, aguantar el tráfico, tener que dar vueltas para aparcar o pagar parking, la pereza de que haga mal tiempo...',
          img: this.$route.name + '/128x128.png',
          alt: '¡Es comodísimo!'
        },
        {
          title: '¡Es exclusivo!',
          description:
            'Tienes al cocinero / camarero en exclusiva para ti y tus comensales sin tiempos de espera, ni guardar cola y al ritmo que tú marques.',
          img: this.$route.name + '/128x128.png',
          alt: '¡Es exclusivo!'
        },
        {
          title: '¡Sin molestias!',
          description:
            'Tener que hacer la compra, cocinar, fregar...',
          img: this.$route.name + '/128x128.png',
          alt: '¡Es molestias!'
        },
        {
          title: '¡El mismo precio!',
          description:
            'Te cuesta igual que en La Antigua Bodeguita, sin costes adicionales de trasporte, incremento por terraza...',
          img: this.$route.name + '/128x128.png',
          alt: '¡Es mismo precio!'
        },
        {
          title: '¡Con quien tú quieras!',
          description:
            'Niños y mascotas permitidas.',
          img: this.$route.name + '/128x128.png',
          alt: '¡Con quien tú quieras!'
        },
      ]
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
