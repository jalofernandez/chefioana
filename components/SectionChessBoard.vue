<template>
  <section class="section">
    <div
      :class="['container', 'th-margin', {'reflected': item.reflected}]"
      v-for="(item, index) in items"
      :key="index"
    >
      <div class="columns is-vcentered content is-medium">
        <div class="column is-6 has-custom-margin">
          <ItemTitle :title="item.title" />
          <p
            class="is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch"
            v-html="item.description"
          ></p>
          <ul>
            <li
              class="is-size-5-fullhd is-size-5-widescreen is-size-5-desktop is-size-6-touch"
              v-for="(li, index) in item.list"
              :key="index"
              v-html="li"
              v-if="item.list"
            ></li>
          </ul>
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
              :data-poster="require(`~/static/chef-ioana-en-tu-casa.jpg`)"
              :title="`Vídeo de ${owner.copyright} en Valdemoro, Madrid`" 
              playsinline autoplay muted loop
              v-lazy-load
            >
              <source :data-src="require(`~/assets/videos/${item.asset.src}`)" type="video/mp4">
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
