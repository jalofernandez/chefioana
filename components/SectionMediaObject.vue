<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <article class="media mb-4" v-for="media in media" :key="media.title">
          <figure class="media-left">
            <p class="image is-128x128">
              <img
                class="is-rounded"
                :src="require(`~/assets/images/${media.img}`)"
                :title="media.alt"
                :alt="media.alt"
                width="128"
                height="128"
              >
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h4 class="has-text-primary">
                {{ media.title }}
              </h4>
              <p v-if="media.description">
                {{ media.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionMediaObject',
  props: {
    media: {
      type: Object,
      required: true,
      default: null
    }
  },
}
</script>
