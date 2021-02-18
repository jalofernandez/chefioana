<template>
  <div>
    <nav
      class="navbar is-fixed-top top-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq !== 'mobile' && $mq !== 'smartphone' && $mq !== 'tablet'"
    >
      <div class="container">
        <div class="navbar-brand has-text-centered">
          <NuxtLink
            class="navbar-item has-logo"
            to="/"
            :title="`Ir a la página de inicio de ${owner.nickname}`"
          >
            <img
              :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
              :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
              :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
              width="132"
              height="40"
            >
          </NuxtLink>
        </div>
        <div class="navbar-end">
          <NuxtLink
            class="navbar-item index"
            to="/"
            :title="`Página de Inicio de ${owner.copyright}`"
          >
            Inicio
          </NuxtLink>
          <!-- <NuxtLink
            :class="['navbar-item', item.page]"
            :to="item.page"
            :title="`${item.name} de ${owner.copyright}`"
            v-for="(item, index) in navLinks"
            :key="index"
          >
            {{ item.name }}
          </NuxtLink> -->
        </div>
      </div>
    </nav>
    <transition name="chefioana-transition" appear>
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner
    }
  }
}
</script>
