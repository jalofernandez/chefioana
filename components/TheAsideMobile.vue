<template>
  <div :class="['aside-navbar-menu', { 'is-open': showAside }]">
    <div class="aside-logo">
      <img
        :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
        :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
        :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
        width="94"
        height="50"
      >
    </div>
    <div class="aside-nav-list" @click="showAside = false">
      <!-- <NuxtLink
        class="navbar-item link is-info"
        :to="{ path: '/', hash:'#section-confortable'}"
        v-scroll-to="{ el: '#section-confortable', offset: getOffset() }"
        title="Ir a la sección de Chef en casa"
      >
        Chef en casa
      </NuxtLink> -->
      <ItemNavbar :link="links[0]" />
      <a
        class="navbar-item phone" 
        :href="`tel:${owner.phone}`"
        :title="`Llamar a ${owner.copyright}`"
      >
        <span class="icon-text">
          <span class="icon has-text-primary">
            <i class="mdi mdi-phone"></i>
          </span>
          <span class="has-text-primary pl-2">644 09 34 70</span>
        </span>
      </a>
      <a
        class="navbar-item whatsapp"
        :href="`https://wa.me/34${owner.phone}`"
        :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="icon-text">
          <span class="icon has-text-success">
            <i class="mdi mdi-whatsapp"></i>
          </span>
          <span class="has-text-success pl-2">WhatsApp</span>
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheAsideMobile',
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {
      showAside: false,
      owner: this.$store.state.owner
    }
  }
}
</script>
