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
            <ItemNavbar :link="links[0]" :offset="-120" />
          </p>
          <p class="level-item has-text-centered">
            <ItemNavbar :link="links[1]" :offset="getOffset()" />
          </p>
          <p class="level-item has-text-centered">
            <ItemNavbar :link="links[2]" :offset="getOffset()" />
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
            <ItemNavbar :link="links[3]" :offset="getOffset()" />
          </p>
          <p class="level-item has-text-centered">
            <ItemNavbar :link="links[4]" :offset="getOffset()" />
          </p>
          <p class="level-item has-text-centered">
            <ItemNavbar :link="links[5]" :offset="getOffset()" />
          </p>
        </nav>
      </div>
    </nav>
    <!-- all Pages content -->
    <transition name="chefioana-transition" appear>
      <Nuxt />
    </transition>
    <!-- Aside main Menu (mobile only) -->
    <div :class="['aside-navbar-menu', { 'is-open': isMenuShown }, 'has-text-centered']">
      <div class="aside-logo">
        <img
          :src="require(`~/assets/images/logos/chef-ioana-logo-complete.svg`)"
          :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
          :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
          width="100"
          height="124"
        >
      </div>
      <ul class="aside-nav-list" @click="isMenuShown = false">
        <li
          :class="{ 'is-active': showLink(index) }"
          v-for="(link, index) in links"
          :key="index"
          @click="toggleClick(index)"
        >
          <!-- <ItemNavbar :link="links[0]" :offset="getOffset()" /> -->
          <ItemNavbar class="has-text-weight-medium" :link="link" :offset="getOffset()" />
        </li>
        <a
          class="navbar-item phone" 
          :href="`tel:${owner.phone}`"
          :title="`Llamar a ${owner.copyright}`"
        >
          <span class="has-text-primary has-text-weight-medium">644 09 34 70</span>
        </a>
        <a
          class="navbar-item whatsapp"
          :href="`https://wa.me/34${owner.phone}`"
          :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="has-text-success has-text-weight-bold">WhatsApp</span>
        </a>
      </ul>
    </div>
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
        <NuxtLink
          class="navbar-item has-logo"
          to="/"
          :title="`Ir a la página de inicio de ${owner.nickname}`"
        >
          <img
            :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
            :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            width="66"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLink: 0,
      isMenuShown: false,
      owner: this.$store.state.owner,
      links: this.$store.state.pages.links
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
    toggleShow() {
      this.isModalShown = !this.isModalShown
    },
    showLink(id) {
      return this.currentLink === id
    },
    toggleClick(id) {
      if(this.currentLink !== 0) {
        this.currentLink = 0
        return false
      }
      this.currentLink = id
    }
  }
}
</script>
