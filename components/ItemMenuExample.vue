<template>
  <article class="tile is-child">
    <p
      :class="[
        'is-title',
        'is-size-2-widescreen',
        'is-size-3-desktop',
        'is-size-4-touch',
        'has-text-primary',
        'is-relative',
        $mq == 'mobile' || $mq == 'smartphone' ? 'has-text-weight-bold' : 'has-text-weight-medium'
      ]"
      v-if="dish.name"
    >
      <small>{{ order }}.</small> {{ dish.name }}:
    </p>
    <p 
      class="is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch is-italic"
      v-html="dish.description"
      v-if="dish.description"
    ></p>
    <br v-if="dish.name || dish.description"/>
    <!-- WITH local VIDEO -->
    <!-- <div class="has-frame is-video" v-if="dish.src">
      <picture class="is-frame">
        <img
          class="artwork"
          src="~/static/frame-to-assets--regular.svg"
          :alt="`Marco decorativo para vídeos de ${owner.business}`"
        >
      </picture>
      <video
        class="has-aspect-ratio is-16by9"
        :data-poster="require(`~/static/ioana-chef-en-tu-casa--cover.jpg`)"
        :title="`Vídeo de ${owner.copyright} en Valdemoro, Madrid`" 
        playsinline autoplay muted loop
        v-lazy-load
      >
        <source :data-src="require(`~/assets/videos/${dish.src}.mp4`)" type="video/mp4">
      </video>
    </div> -->
    <!-- With IFRAME -->
    <figure class="image is-16by9" v-if="dish.src">
      <iframe
        class="has-ratio"
        :data-src="`https://www.youtube.com/embed/${dish.src}`"
        :title="`Vídeo de ${owner.copyright} en Valdemoro, Madrid`"
        allowfullscreen
        autoplay="1"
        muted
        loop
        type="text/html"
        v-lazy-load
      ></iframe>
    </figure>
  </article>
</template>

<script>
export default {
  name: 'ItemMenuExample',
  props: {
    dish: {
      type: Object,
      required: true,
      default: null
    },
    order: {
      type: Number,
      required: false,
      default: null
    }
  },
  data() {
    return {
      owner: this.$store.state.owner
    }
  }
}
</script>
