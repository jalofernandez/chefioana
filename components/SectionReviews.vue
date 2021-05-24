<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container reviews-list">
        <article class="media box review-item" v-for="review in reviews.reviews" :key="review.name">
          <figure class="media-left">
            <p class="image is-32x32">
              <picture>
                <source :srcset="require(`~/assets/images/reviewers/${review.reviewer.profilePhotoUrl}.png?webp`)" type="image/webp" />
                <source :srcset="require(`~/assets/images/reviewers/${review.reviewer.profilePhotoUrl}.png`)" type="image/png" />
                <img
                  class="is-rounded"
                  :src="require(`~/assets/images/reviewers/${review.reviewer.profilePhotoUrl}.png`)"
                  :title="`Foto de usuario de Google de: ${review.name}`"
                  :alt="`Foto de usuario de Google de: ${review.name}`"
                  width="32"
                  height="32"
                />
              </picture>
            </p>
          </figure>
          <div class="media-content">
            <p>
              <b>{{ review.name }}</b>
            </p>
            <div class="is-flex mb-2">
              <figure class="image is-24x24px is-review-img" v-for="item in review.starRating">
                <img
                  src="~/assets/images/icons/star.svg"
                  title="Icono de estrella para reseñas"
                  alt="Icono de estrella para reseñas"
                  width="24"
                  height="24"
                />
              </figure>
            </div>
            <p>
              <small>{{ review.comment }}</small>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import reviews from '~/data/reviews'

export default {
  data() {
    return {
      reviews: reviews
    }
  }
}
</script>
