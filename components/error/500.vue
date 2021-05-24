<template>
  <main class="error-500">
    <SectionChessBoard :items="internalServerError" :page="$route.name" />

    <SectionButton :btn="btn" />

    <TheFooter />
  </main>
</template>

<script>
export default {
  name: 'error-500',
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
      internalServerError: [
        {
          title: '🔥 Internal Server Error 🔥',
          description:
          'Parece que ha sucedido un <span class="has-text-weight-bold">error al intentar acceder al servidor</span>. <br/>¡Lo sentimos! Prueba alguna de estas formas para solucionar este error:',
          asset: {
            video: false,
            src: '640x360.png',
            alt: 'Internal Server Error'
          },
          list: [
            '<b>1.</b> Recargar la página con F5 o cntrl + R.',
            '<b>2.</b> Dejar un margen de tiempo para volver intentar entrar a la página ya que es posible que haya alguna tarea del servidor que impida entrar a la web por el momento.',
            '<b>3.</b> Entrar en una pestaña de incógnito o borrar la cache de tu navegador.',
            '<b>4.</b> Eliminar las Cookies, cerrar el navegador y volver abrirlo.'
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
    const title = '500: ' + this.internalServerError.title + ' en'
    const description =
      'Página de error 500 del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
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
