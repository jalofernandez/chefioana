<template>
  <div>
    <!-- top Navbar (big screen devices only) -->
    <nav
      class="navbar is-fixed-top top-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq !== 'mobile' && $mq !== 'smartphone' && $mq !== 'tablet'"
    >
      <div class="container">
        <nav class="level is-align-items-center">
          <p class="level-item has-text-centered">
            <NuxtLink
              class="navbar-item link is-info"
              :to="{ path: '/', hash:'#section-intro'}"
              v-scroll-to="{ el: '#section-intro', offset: -120 }"
              title="Ir a la sección de Inicio"
            >
              Inicio
            </NuxtLink>
          </p>
          <p class="level-item has-text-centered">
            <NuxtLink
              class="navbar-item link is-info"
              :to="{ path: '/', hash:'#section-confortable'}"
              v-scroll-to="{ el: '#section-confortable', offset: getOffset() }"
              title="Ir a la sección de Chef en casa"
            >
              Chef en casa
            </NuxtLink>
          </p>
          <p class="level-item has-text-centered navbar-brand">
            <NuxtLink
              class="navbar-item has-logo"
              to="/"
              :title="`Ir a la página de inicio de ${owner.nickname}`"
            >
              <img
                :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
                :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
                :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
                width="80"
                height="92"
              >
            </NuxtLink>
          </p>
          <p class="level-item has-text-centered">
            <NuxtLink
              class="navbar-item link is-info"
              :to="{ path: '/', hash:'#section-advantages'}"
              v-scroll-to="{ el: '#section-advantages', offset: getOffset() }"
              title="Ir a la sección de Ventajas"
            >
              Ventajas
            </NuxtLink>
          </p>
          <p class="level-item has-text-centered">
            <NuxtLink
              class="navbar-item link is-info"
              :to="{ path: '/', hash:'#section-safety'}"
              v-scroll-to="{ el: '#section-safety', offset: getOffset() }"
              title="Ir a la sección de Menu y seguridad"
            >
              Menu y seguridad
            </NuxtLink>
          </p>
        </nav>
      </div>
    </nav>
    <transition name="chefioana-transition" appear>
      <Nuxt />
    </transition>
    <!-- bottom Navbar (small screen devices only) -->
    <nav
      class="navbar is-fixed-bottom bottom-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq == 'mobile' || $mq == 'smartphone' || $mq == 'tablet'"
    >
      <div class="navbar-brand">
        <a
          role="button"
          :class="['navbar-burger', 'burger', { 'is-active': isMenuShown }]"
          aria-label="menu"
          aria-expanded="false"
          @click.prevent="isMenuShown = !isMenuShown"
        >
          <span aria-hidden="true" v-for="item in 3"></span>
        </a>
        <transition name="chefioana-transition" appear>
          <NuxtLink
            class="navbar-item has-logo"
            to="/"
            :title="`Ir a la página de inicio de ${owner.nickname}`"
            v-if="!isMenuShown"
          >
            <img
              :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
              :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
              :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
              width="66"
              height="50"
            >
          </NuxtLink>
        </transition>
        <transition name="chefioana-transition" :duration="{ enter: 500, leave: 800 }" appear>
          <a
            class="whatsapp"
            :href="`https://wa.me/34${owner.phone}`"
            :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
            target="_blank"
            rel="noopener noreferrer"
            v-if="!isMenuShown"
          >
            <figure class="image is-48x48" v-if="!isMenuShown">
              <img
                :src="require(`~/static/whatsapp-brands.svg`)"
                alt="Icono de WhatsApp"
                title="Icono de WhatsApp"
                width="48"
                height="48"
              />
            </figure>
          </a>
        </transition>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShown: false,
      owner: this.$store.state.owner
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
