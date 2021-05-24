<template>
  <main class="error-404">
    <SectionChessBoard :items="pageNotFound" :page="$route.name" />

    <SectionButton :btn="btn" />

    <TheFooter />
  </main>
</template>

<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      owner: this.$store.state.owner,
      // pages: this.$store.state.pages,
      pageNotFound: [
        {
          title: '🔥 Página no encontrada 🔥',
          description:
            'Parece que <span class="has-text-weight-bold">la página que buscas no existe</span>. <br/>¡Lo sentimos! Podría ser por alguna de estas causas como:',
          asset: {
            video: false,
            src: '640x360.png',
            alt: 'Página no encontrada'
          },
          list: [
            '<b>1.</b> Que haya tecleado incorrectamente la dirección URL.',
            '<b>2.</b> Que haya perdido su conexión a internet.',
            '<b>3.</b> Que la página esté obsoleta y haya sido eliminada.',
            '<b>4.</b> Que la página no exista en el idioma que solicita.'
          ],
          reflected: false
        }
      ],
      btn: {
        copy: 'Volver a la página de inicio',
        to: ''
      }
    }
  },
  head() {
    const title = '404: ' + this.pageNotFound.title + ' en'
    const description =
      'Página de error 404 del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      // IMP! Better remvoe canonical metatags links in order to avoid weird URL generation 
      // link: [
      //   { rel: 'canonical', hid: 'canonical', href: canonical },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      // ]
    }
  }
};
</script>
