<template>
  <main :class="$route.name">
    <section class="hero is-fullheight mb-6">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="section-intro" class="title text-shadow is-size-1 is-size-3-mobile has-text-weight-medium">
            <b class="has-text-primary">Chef</b> Ioana <b class="has-text-primary">en casa</b>
          </h1>
          <h2 class="subtitle is-size-5 is-size-6-mobile">
            <span class="has-text-weight-medium">Come en tu casa como en el mejor restaurante</span>
          </h2>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="level is-justify-content-space-around">
            <div
              class="level-item has-text-centered"
              v-for="(tip, index) in summaryTips"
              :key="index"
            >
              <div class="card mb-2">
                <!-- <div
                  class="card-bg-img is-mobile-apps"
                  v-if="$mq !== 'mobile' && $mq !== 'smartphone'"
                ></div> -->
                <div class="card-content">
                  <h3 class="subtitle is-size-5 is-size-6-mobile">
                    <b class="has-text-primary">
                      {{ tip.title }}
                    </b>
                    <br class="is-hidden-touch"/>
                    <span v-html="tip.description"></span>
                  </h3>
                </div>
                <footer class="card-footer">
                  <p class="card-footer-item">
                    <span>
                      <a
                        class="has-text-warning has-hover-underline"
                        href=""
                        v-scroll-to="{ el: '#section-'+tip.link, offset: getOffset() }"
                        :title="``"
                      >
                        <b>Saber más</b>
                      </a>
                    </span>
                  </p>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionTitle :header="header.features" :id="links[1].section" />
    <SectionChessBoard :items="features" :page="$route.name" />

    <SectionTitle :header="header.advantages" :id="links[3].section" />
    <SectionMediaObject :media="advantages" />

    <SectionTitle :header="header.menu" :id="links[2].section" />
    <SectionMenuExample />

    <SectionTitle :header="header.discounts" :id="links[4].section" />
    <SectionMediaObject :media="discounts" />

    <SectionTitle :header="header.safety" :id="links[5].section" />
    <SectionChessBoard :items="safety" :page="$route.name" />

    <SectionTitle :header="header.about" :id="links[6].section" />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8-mobile is-offset-2-mobile is-4-tablet is-offset-4-tablet is-2-widescreen is-offset-5-widescreen">
              <figure class="image is-square has-blockquote-img">
                <img
                  src="~/assets/images/ioanachef-foto-de-perfil.png"
                  title="Chef Ioana Botis con unas crujientes croquetas caseras"
                  alt="Foto de perfil de chef Ioana Botis"
                  width=""
                  height=""
                >
              </figure>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12-mobile is-8-tablet is-offset-2-tablet is-6-widescreen is-offset-3-widescreen">
              <div class="content">
                <blockquote>
                  <p
                    v-for="(paragraph, index) in about"
                    :key="index"
                    v-html="paragraph"
                  ></p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TheFooter />
  </main>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
      links: this.$store.state.pages.links,
      header: {
        features: 'Un chef en casa es tan cómodo porque...',
        advantages: 'Son todo ventajas',
        menu: '¿Quieres un menú de chef como este?',
        discounts: 'Descuentos y ofertas',
        safety: 'Seguridad',
        about: 'Sobre Chef Ioana'
      },
      summaryTips: [
        {
          title: 'Comodísimo',
          description:
            'porque te llevamos la comida a casa, la <span class="has-text-weight-medium">cocinamos</span>, te <span class="has-text-weight-medium">servimos</span> y  y sin costes adicionales.',
          link: this.$store.state.pages.links[1].section
        },
        {
          title: 'Todo ventajas',
          description:
            'porque no necesitas salir de casa, tienes <span class="has-text-weight-medium">chef y servicio en exclusiva</span>, sin las molestias de comprar, cocinar, fregar...',
          link: this.$store.state.pages.links[3].section
        },
        {
          title: 'Variado y seguro',
          description:
            'porque disponemos de un <span class="has-text-weight-medium">amplio menú</span> con arroces, carnes maduradas, marisco... Y con <span class="has-text-weight-medium">medidas anticovid-19</span> por tu seguridad.',
          link: this.$store.state.pages.links[2].section
        },
      ],
      features: [
        {
          title: '...Cocino en tu casa',
          description:
            'Llegaré a tu casa con tiempo suficiente para cocinar el menú acordado previamente. Si eres fan de los fogones aprovecha para quedarte durante la preparación de los platos y así <b>aprender de una cocinera profesional</b>.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: true,
            src: 'chefioana-video-menu-tapas.mp4',
            alt: 'Ioana Botis'
          },
          reflected: false
        },
        {
          title: '...Realizo el servicio a tu ritmo',
          description:
            'Yo en persona me encargaré del <b>servicio de mesa</b>, explicándote los detalles de cada plato si así lo deseáis y al ritmo que cada comensal prefiera, sin prisas o con ellas. El servicio será discreto y profesional, para <b>garantizar una velada cómoda y discreta</b>.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: true,
            src: 'chefioana-video-menu-limpieza.mp4',
            alt: 'Ioana Botis'
          },
          reflected: true
        },
        {
          title: '...Recojo y limpio la cocina',
          description:
            'Y antes de irme <b>limpiaré la cocina</b>, la <b>vajilla</b> y los utensilios utilizados tanto en la elaboración como en la degustación del menú. Podrás disfrutar de una sobremesa sin prisas, sabiendo que <b>limpian por ti</b>.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: false,
            src: '640x360.png',
            alt: 'Ioana Botis'
          },
          reflected: false
        },
        {
          title: '...No te costará más',
          description:
            '<b>Sin tener que pagar extras</b> de envío, incremento por terraza ni costes adicionales... El precio no variará respecto al menú pactado previa cita. Además disponemos de <b>ofertas expeciales</b> para determinados gremios.',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: false,
            src: '640x360.png',
            alt: 'Ioana Botis'
          },
          reflected: true
        }
      ],
      advantages: [
        {
          title: '¡Es comodísimo!',
          description:
            '<span class="has-text-weight-medium">No necesitas salir de casa</span> ni coger el coche, aguantar el tráfico, tener que dar vueltas para aparcar o pagar parking, la pereza de que haga mal tiempo...',
          img: '128x128.png',
          alt: '¡Es comodísimo!'
        },
        {
          title: '¡Es exclusivo!',
          description:
            'Tienes al <span class="has-text-weight-medium">cocinero y camarero en exclusiva</span> para ti y tus comensales sin tiempos de espera, ni guardar cola y al ritmo que tú marques.',
          img: '128x128.png',
          alt: '¡Es exclusivo!'
        },
        {
          title: '¡Sin molestias!',
          description:
            '<span class="has-text-weight-medium">Nada de</span> tener que <span class="has-text-weight-medium">hacer la compra</span> antes, <span class="has-text-weight-medium">cocinar</span>, <span class="has-text-weight-medium">servir</span> mientras los demas disfrutan ya de la cena, <span class="has-text-weight-medium">fregar</span> o poner lavavajillas y retirar tras la velada...',
          img: '128x128.png',
          alt: '¡Es molestias!'
        },
        {
          title: '¡El mismo precio!',
          description:
            'Te cuesta igual que en la '+this.$store.state.owner.laAntiguaBodeguita+', <span class="has-text-weight-medium">sin costes adicionales</span> de trasporte, incremento por terraza...',
          img: '128x128.png',
          alt: '¡Es mismo precio!'
        },
        {
          title: '¡Con quien tú quieras!',
          description:
            '<span class="has-text-weight-medium">Niños y mascotas permitidas</span>. Como es tu casa el derecho de admisión lo pones tú 😁',
          img: '128x128.png',
          alt: '¡Con quien tú quieras!'
        },
      ],
      discounts: [
        {
          title: 'Gremios',
          description:
            '<b>20% de descuento</b> a <span class="has-text-weight-medium">fuerzas y cuerpos de seguridad del estado</span> como guardia civil, CNP, policía municipal y local, UME...) así como sanitarios, médicos y enfermeros, bomberos...',
          img: '128x128.png',
          alt: 'Descuentos del 20% a los gremios de sanidad y cuerpos de seguridad del estado.'
        },
        {
          title: 'Funcionarios',
          description:
            '<b>20% de descuento</b> a todos los <span class="has-text-weight-medium">funcionarios</span> del excelentísimo <span class="has-text-weight-medium">ayuntamiento de Valdemoro</span>.',
          img: '128x128.png',
          alt: 'Descuentos del 20% a funcionarios del ayto de Valdemoro.'
        },
        {
          title: 'Ofertas especiales',
          description:
            'Dispongo de gran variedad de <b>ofertas y descuentos</b> en <span class="has-text-weight-medium">productos de temporada</span> o <span class="has-text-weight-medium">menús especiales</span>. Preguntar disponibilidad y precios.',
          img: '128x128.png',
          alt: 'Consultar Ofertas especiales de temporada'
        },
        {
          title: 'Fidelización',
          description:
            'Al pedir 5 arroces en menos de 5 meses el <span class="has-text-weight-medium">6º es</span> <b>gratis</b>. <br/>¡Casi nada! 👍',
          img: '128x128.png',
          alt: 'Tras 5 arroces en menos de 5 meses el 6º gratis'
        }
      ],
      safety: [
        {
          title: 'Medidas anticovid-19',
          description:
            'Porque <b>tu seguridad</b> y la mia <b>es lo más importante</b>, por supuesto, y para ello voy equipada con todas las medidas de higiene y seguridad que mi profesión y la situación actual requieren. Llevo <span class="has-text-weight-medium">gel hidroalcóholico</span>, <span class="has-text-weight-medium">marcarilla</span>, <span class="has-text-weight-medium">guantes</span> y <span class="has-text-weight-medium">test PCR</span> para hacer en la entrada de tu casa si así lo deseas. <br/>¡Que por seguridad no sea!',
          link: 'Reservar en el',
          href: 'tel:644093470',
          asset: {
            video: true,
            src: 'chefioana-video-menu-tapas.mp4',
            alt: 'Ioana Botis'
          },
          reflected: false
        }
      ],
      about: [
        '<b>Ioana Botis</b> es una afamada chef de '+this.$store.state.owner.laAntiguaBodeguita+' donde realiza sus servicios profesionales de cocina y servicio.',
        'Se especializa en <span class="has-text-weight-medium">mariscos</span>, <span class="has-text-weight-medium">carnes maduradas</span> y productos <span class="has-text-weight-medium">vegetales frescos</span> de huerta.',
        'Bla bla bla... <em>¡Necesitamos más texto!</em>'
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
  },
  methods: {
    getOffset() {
      let mq = this.$mq
      if (mq === 'mobile' || mq === 'smartphone' || mq === 'tablet') {
        return 0 // layout without top navbar (small screens)
      }
      return -53 // layout with top navbar (big screens)
    },
  }
}
</script>
