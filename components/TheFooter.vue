<template>
  <footer class="footer">
    <div class="container">
      <!-- <div class="content has-text-centered">
        <picture>
          <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png?webp')" type="image/webp" />
          <source :srcset="require('~/assets/images/logos/canessa-bone-logo.png')" type="image/png" />
          <img
            :src="require(`~/assets/images/logos/canessa-bone-logo.png`)"
            :alt="`Creatividad de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Creatividad de ${owner.nickname} en Valdemoro, Madrid`"
            width="200"
            height="67"
          >
        </picture>
      </div> -->
      <div class="content has-text-centered">
        <div class="control level-item">
          <NuxtLink to="/">
            <div class="tags are-medium has-addons">
              <span class="tag is-dark">© {{ owner.copyright }}</span>
              <span class="tag is-link">{{ owner.version }}</span>
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
          <span
            class="icon is-medium"
            :title="item"
            v-for="(item, index) in tech"
            :key="index"
          >
            <span :class="`mdi mdi-24px mdi-${item}`"></span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      owner: this.$store.state.owner,
      developBy: 'Website diseñado y desarrollado por',
      partnership: [
        { name: 'Protectora AiBa Madrid', url: 'http://www.aibamadrid.com' },
        { name: 'Haz tu negocio digital', url: 'https://haztunegociodigital.com' },
        { name: 'Restaurante La Antigua Bodeguita', url: 'https://haztunegociodigital.com/horeca/la-antigua-bodeguita' },
        { name: 'Bar Galicia', url: 'https://haztunegociodigital.com/horeca/bar-galicia' },
        { name: '@jalofernandez: designer + coder', url: 'https://jalofernandez.com' }
      ],
      tech: [ 'nodejs', 'vuejs', 'nuxt', 'language-html5', 'sass', 'firebase' ]
    }
  },
  head() {
    return {
      link: [
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.author + '.com' },
        { rel: 'dns-prefetch', href: '//' + this.$store.state.owner.partner + '.com' },
        { rel: 'dns-prefetch', href: '//www.aibamadrid.com' },
      ]
    }
  }
}
</script>
