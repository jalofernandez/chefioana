<template>
  <section class="section">
    <div :class="['container', 'th-margin', {'reflected': block.reflected}]" v-for="(block, index) in blocks" :key="index">
      <div class="columns is-vcentered content is-medium">
        <div class="column is-6">
          <h2
            :class="[
              'is-size-4-mobile',
              'has-text-primary',
              'is-relative',
              $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium'
            ]"
            v-html="block.title"
          >
          </h2>
          <p class="is-size-6-mobile" v-html="block.description"></p>
          <!-- <NuxtLink
            :to="{ name: block.to }"
            :class="['th-link', { 'is-size-6-mobile': $mq == 'mobile' }]"
            :title="`${block.link} en ${owner.copyright}`"
          >
            {{ block.link }}
          </NuxtLink> -->
        </div>
        <div class="column">
          <figure class="image is-16by9">
            <picture>
              <!-- <source :srcset="require(`~/assets/images/${block.img}?webp`)" type="image/webp" />
              <source :srcset="require(`~/assets/images/${block.img}`)" type="image/png" />
              <source :srcset="require(`~/assets/images/${block.img}`)" type="image/jpg" /> -->
              <img
                class="artwork"
                :src="require(`~/assets/images/${block.img}`)"
                :title="block.alt"
                :alt="block.alt"
              >
            </picture>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionChessBoard',
  props: {
    blocks: {
      type: Array,
      default: null,
      required: true,
    },
    page: {
      type: String,
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
