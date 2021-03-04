<template>
  <transition name="canessa-transition" appear>
    <article class="box cta is-cookies-banner" v-if="bannerShow">
      <div class="media-content">
        <div class="content is-normal">
          <p>
            <small>
              <span>
                🍪 Sólo usamos <span class="has-text-weight-semibold">cookies de analítica</span>.
                <br/>
                Puedes gestionarlas
              </span>
              <NuxtLink
                class="has-underline has-text-warning"
                :to="{ path: '/legal', hash:'#section-cookies'}"
                :title="`Ver y gestionar cookies de ${owner.copyright}`"
              >
              <b @click="closeBanner()">aquí.</b>
              </NuxtLink>
              <span class="tag is-warning ml-2" @click="closeBanner()">
                ✓ <b>Aceptar</b>
              </span>
            </small>
          </p>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
export default {
  name: 'TheCookiesBanner',
  data() {
    return {
      bannerShow: true,
      owner: this.$store.state.owner
    }
  },
  methods: {
    closeBanner() {
      this.bannerShow = false
    }
  }
}
</script>
