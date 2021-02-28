<template>
  <main :class="$route.name">
    <SectionTitle :header="header.legal" />

    <section class="tabs-wrapper">
      <!-- 00 :: scroll navigation sticky bar -->
      <div class="tabs is-centered">
        <ul>
          <li
            :class="{ 'is-active': showLink(index) }"
            v-for="(section, index) in sections"
            :key="index"
            @click="toggleClick(index)"
          >
            <a
              href=""
              class="is-warning"
              v-scroll-to="{ el: '#section-'+section.link, offset: -120 }"
            >
              <span class="has-text-weight-medium">{{ section.name }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="section">
        <!-- 01 :: PRESTADOR Y RESPONSABILIDAD -->
        <article id="section-responsability" class="container responsability mb-6">
          <div class="content">
            <ItemTitle class="has-text-centered" :title="sections[0].name" />
            <p class="block">
              <span class="has-text-primary has-text-weight-semibold">{{ owner.copyright }}</span> es una marca comercial propiedad de <em>{{ owner.name }}</em> 
              que a su vez es responsable del sitio web, pone a disposición de los usuarios el presente documento con el que pretende:
            </p>
            <p class="block">
              <b>1.</b> Dar cumplimiento a las obligaciones dispuestas en las Leyes:
            </p>
            <nav class="level">
              <a
                class="level-item has-text-centered has-text-warning"
                href="https://www.boe.es/doue/2016/119/L00001-00088.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Reglamento 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas con esta plantilla de política de privacidad"
              >
                <span>
                  <b>RGPD</b>
                  <p><small>www.boe.es</small></p>
                </span>
              </a>
              <a
                class="level-item has-text-centered has-text-warning"
                href="https://boe.es/boe/dias/2018/12/06/pdfs/BOE-A-2018-16673.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales"
              >
                <span>
                  <b>LOPDGDD</b>
                  <p><small>www.boe.es</small></p>
                </span>
              </a>
              <a
                class="level-item has-text-centered has-text-warning"
                href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                target="_blank"
                rel="noopener noreferrer"
                title="Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico en el blog"
              >
                <span>
                  <b>LSSI</b>
                  <p><small>www.boe.es</small></p>
                </span>
              </a>
            </nav>
            <p class="block">
              <b>2.</b> Informar a todos los usuarios del sitio web respecto a cuáles son sus condiciones de uso.
            </p>
            <p class="block">
              A continucación exponemos los datos identificativos del "prestador" del presente sitio web, <span class="has-text-primary">{{ owner.url }}</span>, 
              y todos sus servicios asociados:
            </p>
            <blockquote class="quote">
              <p><b class="pr-1">Prestador:</b> {{ owner.name }} ( Chef Ioana )</p>
              <p><b class="pr-1">DNI:</b> ¿?</p>
              <!-- <p class="is-size-7-mobile">
                <b>Registro mercantil:</b> ¿?
              </p>-->
              <p>
                <b class="pr-1">Domicilio:</b> Pje. de Colón, 2, Local 7, 28341 Valdemoro, Madrid
              </p>
              <p>
                <b class="pr-1">Correo electrónico:</b>
                <a
                  :href="`mailto:${owner.email}`"
                  class="has-text-link"
                  :title="`Contactar vía correo electrónico con ${owner.copyright} en: ${owner.email}`"
                >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
              </p>
            </blockquote>
            <p class="block"></p>
              Por entrar y navegar por este sitio web ya adquieres la condición de "usuario".
            </p>
            <p class="block">
              Además <span class="has-text-primary has-text-weight-semibold">{{ owner.copyright }}</span>, osea el "prestador" (nosotros), 
              somos proveedores de servicios y productos relacionados con el ámbito de la peluquería y estética
              canina / felina conocida también como <em>dog grooming</em>.
            </p>
          </div>
        </article>
      </div>
    </section>

    <SectionTitle :header="header.about" :id="links[6].section" />
    <SectionBiography />

    <TheFooter />
  </main>
</template>

<script>
export default {
  layout: 'NotHome',
  data() {
    return {
      currentLink: 0,
      owner: this.$store.state.owner,
      links: this.$store.state.pages.links,
      header: {
        legal: 'Aviso Legal',
        about: 'Sobre Chef Ioana'
      },
      sections: [
        { name: 'Responsable', link: 'responsability' },
        { name: 'Política de Privacidad', link: 'privacy' },
        { name: 'Condiciones de uso', link: 'terms' },
        { name: 'Política de Cookies', link: 'cookies' }
      ]
    }
  },
  head() {
    const title = 'Aviso legal de'
    const description =
      'Aviso legal: condiciones de uso y términos legales del website de ' + this.owner.copyright + ', Valdemoro, Madrid. Reservas y consultas por teléfono y WhatsApp: 644 09 34 70'
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
        {
          rel: "dns-prefetch",
          href: "//support.google.com/chrome/answer/95647?hl=es&hlrm=en",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies",
        },
        {
          rel: "dns-prefetch",
          href: "//support.apple.com/es-es/guide/safari/sfri11471/mac",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/#cookies",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1",
        },
        { rel: "dns-prefetch", href: "//support.apple.com/es-es/HT201265" },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/",
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    showLink(id) {
      return this.currentLink === id
    },
    toggleClick(id) {
      if(this.currentLink !== 0) {
        this.currentLink = 0
        return false
      }
      this.currentLink = id
    }
  }
}
</script>
