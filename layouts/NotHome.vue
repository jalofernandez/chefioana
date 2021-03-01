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
        <nav class="level is-align-items-center is-justify-content-space-around">
          <p class="level-item has-text-centered">
            <NuxtLink
              to="/"
              class="navbar-item link is-info"
              :title="`Ir a la página de inicio de ${owner.copyright}`"
            >
              ¿Qué es Ioana Chef?
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
                width="94"
                height="50"
              >
            </NuxtLink>
          </p>
          <p class="level-item has-text-centered">
            <NuxtLink
              to="/legal"
              class="navbar-item link is-info"
              :title="`Ir a la página de términos legales de ${owner.copyright}`"
            >
              Aviso legal
            </NuxtLink>
          </p>
        </nav>
      </div>
    </nav>
    <!-- all Pages content -->
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
        <NuxtLink
          to="/"
          class="navbar-item is-flex is-flex-direction-column ml-1"
          :title="`Ir a la página de inicio de ${owner.copyright}`"
        >
          <figure class="image is-24x24px">
            <img
              src="~/assets/images/icons/chef-hat.svg"
              title="Icono de gorro de Chef"
              alt="Icono de gorro de Chef"
              width="24"
              height="24"
            >
          </figure>
          <small class="has-text-warning has-text-weight-medium">Inicio</small>
        </NuxtLink>
        <NuxtLink
          class="navbar-item has-logo"
          to="/"
          :title="`Ir a la página de inicio de ${owner.nickname}`"
        >
          <img
            :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
            :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            width="94"
            height="50"
          >
        </NuxtLink>
        <a
          class="whatsapp"
          :href="`https://wa.me/34${owner.phone}`"
          :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure class="image is-48x48">
            <img
              :src="require(`~/static/whatsapp-brands.svg`)"
              alt="Icono de WhatsApp"
              title="Icono de WhatsApp"
              width="48"
              height="48"
            />
          </figure>
        </a>
      </div>
    </nav>
    <!-- Floating contact item -->
    <ItemContact v-if="$mq == 'laptop' || $mq == 'desktop' || $mq == 'desktopWide'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLink: 0,
      owner: this.$store.state.owner,
      // links: this.$store.state.pages.links
    }
  }
}
</script>
