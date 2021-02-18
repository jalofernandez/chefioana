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
        <nav class="level">
          <!-- <p class="level-item has-text-centered">
            <a class="link is-info">Inicio</a>
          </p>
          <p class="level-item has-text-centered">
            <a class="link is-info">Sobre Ioana</a>
          </p> -->
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
                width="92"
                height="92"
              >
            </NuxtLink>
          </p>
          <!-- <p class="level-item has-text-centered">
            <a class="link is-info">Menu</a>
          </p>
          <p class="level-item has-text-centered">
            <NuxtLink
              class="navbar-item index"
              to="/"
              :title="`Página de Inicio de ${owner.copyright}`"
            >
              Contacto
            </NuxtLink>
          </p> -->
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
              width="92"
              height="92"
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
  }
}
</script>
