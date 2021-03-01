<template>
  <section :id="`section-${id}`" class="hero is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h4
          class="title text-shadow is-size-1 is-size-3-mobile has-text-weight-medium"
          v-html="header"
        ></h4>
        <!-- <h2
          class="subtitle is-size-5 is-size-6-mobile"
          v-html="header.subtitle"
          v-if="header.subtitle"
        ></h2> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    header: {
      type: String,
      required: true,
      default: ''
    },
    id: {
      type: String,
      default: null,
      required: false
    }
  },
}
</script>
