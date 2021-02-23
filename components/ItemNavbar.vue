<template>
  <a
    href=""
    class="navbar-item link is-info"
    v-scroll-to="{ el: '#section-'+link.section, offset: offset }"
    :title="`Ir a la sección de ${link.title}`"
  >
    {{ link.name }}
  </a>
</template>

<script>
export default {
  name: 'ItemNavbar',
  props: {
    link: {
      type: Object,
      required: true,
      default: null
    },
    offset: {
      type: Number,
      required: false,
      default: 0
    }
  }
}
</script>
