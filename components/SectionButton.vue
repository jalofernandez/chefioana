<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <NuxtLink
          :to="`/${btn.to}`"
          class="button is-primary is-light"
          :title="`${btn.copy} de ${owner.copyright}`"
        >
          <span class="has-text-weight-semibold">{{ btn.copy }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionButton',
  props: {
    btn: {
      type: Object,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      owner: this.$store.state.owner
    }
  }
}
</script>
