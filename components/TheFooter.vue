<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered" v-if="!isLogoHidden">
        <picture>
          <!-- <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png?webp')" type="image/webp" />
          <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png')" type="image/png" /> -->
          <img
            :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
            :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            width="150"
            height="80"
          />
        </picture>
      </div>
      <div class="has-text-centered">
        <div class="control level-item mb-6 has-navbar">
          <NuxtLink
            to="/"
            class="has-underline has-text-weight-medium"
            :title="`Ir a la página de inicio de ${owner.copyright}`"
          >
            Inicio
          </NuxtLink>
          <span>&nbsp;|&nbsp;</span>
          <NuxtLink
            to="/carta"
            class="has-underline has-text-weight-medium"
            :title="`Ir a la página de Contacto de ${owner.copyright}`"
          >
            Carta
          </NuxtLink>
          <span>&nbsp;|&nbsp;</span>
          <NuxtLink
            to="/contacto"
            class="has-underline has-text-weight-medium"
            :title="`Ir a la página de Contacto de ${owner.copyright}`"
          >
            Contacto
          </NuxtLink>
          <span>&nbsp;|&nbsp;</span>
          <br />
          <NuxtLink
            to="/legal"
            class="has-underline has-text-weight-medium"
            :title="`Ir a la página de términos legales de ${owner.copyright}`"
          >
            Legal
          </NuxtLink>
          <span>&nbsp;|&nbsp;</span>
          <NuxtLink
            to="/sitemap"
            class="has-underline has-text-weight-medium"
            :title="`Ir a la página del mapa del sitio web de ${owner.copyright}`"
          >
            Sitemap
          </NuxtLink>
        </div>
        <div class="control level-item">
          <NuxtLink to="/">
            <div class="tags are-medium has-addons">
              <span class="tag is-dark">© {{ owner.copyright }}</span>
              <span class="tag is-warning">{{ owner.version }}</span>
            </div>
          </NuxtLink>
        </div>
        <div class="control level-item mt-3">
          <a
            :class="`author ${owner.author}`"
            :href="`https://${owner.author}.com`"
            :title="`${developBy} @${owner.author}: diseñador gráfico y desarrollador web / frontend`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small class="has-text-grey-darker">{{ developBy }}:</small> <br v-if="$mq == 'mobile'"/><span>{{ owner.author }}.com</span>
          </a>
        </div>
        <div class="control level-item">
          <a
            :class="`author ${owner.partner}`"
            :href="`https://${owner.partner}.com`"
            :title="`${owner.partner}: únete a la transformación digital y aumenta las ventas con tu negocio en internet`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small class="has-text-grey-darker">
              En colaboración con:
            </small>
            <br v-if="$mq == 'mobile'"/>
            <small>#<b>HazTuNegocioDigital</b></small>
          </a>
        </div>
        <div class="control level-item mt-3 mb-1">
          <small class="has-text-grey-dark">Tecnología utilizada:</small>
        </div>
        <div class="control level-item">
          <ul class="is-flex">
            <li v-for="(item, index) in tech" :key="index">
              <figure class="image is-24x24px">
                <img
                  :src="require(`~/assets/images/tech/${item}.svg`)"
                  :title="`Icono de ${item}`"
                  :alt="`Icono de ${item}`"
                  width="24"
                  height="24"
                />
              </figure>
            </li>
          </ul>
        </div>
        <div class="control level-item content is-small mt-4">
          <span class="ml-2">© Todos los derechos reservados</span>,
          <b>
            <small class="ml-1">{{ currentYear }}</small>
          </b>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    isLogoHidden: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      owner: this.$store.state.owner,
      currentYear: new Date().getFullYear(),
      developBy: 'Website diseñado y desarrollado por',
      tech: [ 'nodejs', 'vuejs', 'nuxt', 'language-html5', 'sass', 'firebase' ]
    }
  },
  head() {
    return {
      link: [
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.author + '.com' },
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.partner + '.com' }
      ]
    }
  }
}
</script>
