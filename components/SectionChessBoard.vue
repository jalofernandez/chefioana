<template>
  <section class="section">
    <div
      :class="['container', 'th-margin', {'reflected': item.reflected}]"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="columns is-vcentered content is-medium">
        <div class="column is-6">
          <h2
            :class="[
              'is-size-4-mobile',
              'has-text-primary',
              'is-relative',
              $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium'
            ]"
            v-html="item.title"
          >
          </h2>
          <p class="is-size-4 is-size-6-mobile" v-html="item.description"></p>
          <!-- <NuxtLink
            :to="{ name: item.to }"
            :class="['th-link', { 'is-size-6-mobile': $mq == 'mobile' }]"
            :title="`${item.link} en ${owner.copyright}`"
          >
            {{ item.link }}
          </NuxtLink> -->
        </div>
        <div class="column">
          <figure class="image is-16by9 has-frame" v-if="!item.asset.video">
            <picture class="is-frame">
              <img
                class="artwork"
                src="~/static/frame-to-assets--regular.svg"
                :alt="`Marco decorativo para imágenes de ${owner.business}`"
              >
            </picture>
            <picture>
              <source :srcset="require(`~/assets/images/${item.asset.src}?webp`)" type="image/webp" />
              <source :srcset="require(`~/assets/images/${item.asset.src}`)" type="image/png" />
              <source :srcset="require(`~/assets/images/${item.asset.src}`)" type="image/jpg" />
              <img
                class="artwork"
                :src="require(`~/assets/images/${item.asset.src}`)"
                :title="item.asset.alt"
                :alt="item.asset.alt"
              >
            </picture>
          </figure>
          <div class="has-frame is-video" v-else>
            <picture class="is-frame">
              <img
                class="artwork"
                src="~/static/frame-to-assets--regular.svg"
                :alt="`Marco decorativo para vídeos de ${owner.business}`"
              >
            </picture>
            <video
              class="has-aspect-ratio is-16by9"
              :poster="require(`~/static/chef-ioana-en-tu-casa.jpg`)"
              :title="`Vídeo de ${owner.copyright} en Valdemoro, Madrid`" 
              playsinline autoplay muted loop
            >
              <source :src="require(`~/assets/videos/${item.asset.src}`)" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionChessBoard',
  props: {
    items: {
      type: Array,
      default: null,
      required: true
    },
    page: {
      type: String,
      default: null,
      required: true
    }
  },
  data() {
    return {
      owner: this.$store.state.owner
    }
  }
}
</script>
