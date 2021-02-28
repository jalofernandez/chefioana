<template>
  <main :class="$route.name">
    <SectionTitle :header="header.sitemap" :id="links[6].section" />
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
        sitemap: 'Mapa del sitio web'
      }
    }
  },
  head() {
    const title = 'Sitemap de'
    const description =
      'Mapa del sitio web de ' + this.owner.copyright + '. Reservas y consultas por teléfono y WhatsApp: 644 09 34 70'
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
