<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8-mobile is-offset-2-mobile is-4-tablet is-offset-4-tablet is-2-widescreen is-offset-5-widescreen">
            <figure class="image is-square has-blockquote-img">
              <img
                src="~/assets/images/ioanachef-con-croquetas.png"
                title="Chef Ioana Botis con unas crujientes croquetas caseras"
                alt="Foto de perfil de chef Ioana Botis"
                width=""
                height=""
              />
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
</template>

<script>
export default {
  data() {
    return {
      about: [
        '<b>Ioana Botis</b> es una afamada chef de '+this.$store.state.owner.laAntiguaBodeguita+' donde realiza sus servicios profesionales de cocina y servicio.',
        'Se especializa en todo tipo de <span class="has-text-weight-medium">arroces</span>, <span class="has-text-weight-medium">mariscos</span>, <span class="has-text-weight-medium">carnes maduradas</span> y productos <span class="has-text-weight-medium">vegetales frescos</span> de huerta.',
        'Bla bla bla... <em>¡Necesitamos más texto!</em>'
      ]
    }
  }
}
</script>
