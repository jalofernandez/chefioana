<template>
  <div>
    <div v-for="(menu, index) in menus" :key="index">
      <!-- Menu section Title & Description-->
      <h2
        :id="`section-${index}`"
        :class="[
          'section',
          'name',
          { 'with-desc': menu.desc },
          'is-title',
          'is-size-2-widescreen',
          'is-size-3-desktop',
          'is-size-4-touch',
          'has-text-primary',
          $mq == 'mobile' ? 'has-text-weight-bold' : 'has-text-weight-medium',
          'is-relative'
        ]"
      >
        {{ menu.title }}
      </h2>
      <p
        class="section desc"
        v-if="menu.desc"
        v-html="menu.desc"
      ></p>
      <!-- each Menu dishes -->
      <div
        class="dish item"
        v-for="(item, index) in menu.items"
        :key="index"
        :data-modal="`modal-${item.id}`"
        @click="item.show = !item.show"
      >
        <div class="dish info">
          <h3 class="name is-size-5-desktop is-size-6-touch">
            {{ item.name }}
          </h3>
          <p
            class="desc"
            v-html="item.desc"
            v-if="item.desc"
          ></p>
          <div class="prices">
            <div
              class="price item"
              v-for="(price, index) in item.prices"
              :key="index"
              v-if="item.prices"
            >
              <small
                :class="[
                  'price',
                  'name',
                  { 'has-text-warning has-text-weight-medium is-italic': !price.price }
                ]"
                v-if="price.name"
              >
                {{ price.name }}
              </small>
              <span class="price quantity" v-if="price.price">
                <b>{{ price.price }}</b> €
              </span>
            </div>
          </div>
          <div class="allergens" v-if="item.allergens">
            <img
              class="allergen"
              v-for="(allergen, index) in item.allergens"
              :key="index"
              :src="require(`~/assets/images/allergens/${allergen}.svg`)"
              :title="`Alérgeno: ${allergen}`"
              :alt="`Alérgeno: ${allergen}`"
              width="20"
              height="20"
            />
          </div>
        </div>
        <figure class="dish img" v-if="item.img">
          <img
            :src="require(`~/assets/images/carta/la-antigua-bodeguita-${item.img}.jpg`)"
            :title="`${owner.alias}: ${item.desc}`"
            :alt="`${owner.alias}: ${item.desc}`"
            :width="menu.imgs.width"
            :height="menu.imgs.height"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionMenu',
  props: {
    menus: {
      type: Array,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      owner: this.$store.state.owner,
    }
  },
  // methods: {
  //   // TODO: to use Vuex with global data & mutations
  //   showItemDetail(id) {
  //     console.log(this.$store.state.business.services + " : " + id);
  //     this.$store.commit("business/modalBehaviour", id);
  //   },
  //   // TODO: description slice trial
  //   setDescription(str) {
  //     let count = str.length;
  //     let slc = str.slice(0, 75).trim();
  //     let dsc = slc.concat("...");

  //     if (count <= 50) {
  //       return str;
  //     } else {
  //       return dsc;
  //     }
  //   },
  // },
}
</script>
