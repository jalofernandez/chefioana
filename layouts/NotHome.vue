<template>
  <div>
    <!-- top Navbar (big screen devices only) -->
    <nav
      class="navbar is-fixed-top top-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq !== 'mobile' && $mq !== 'smartphone' && $mq !== 'tablet'"
    >
      <div class="container">
        <nav class="level is-align-items-center is-justify-content-space-around">
          <p class="level-item is-one-of-three has-text-centered">
            <NuxtLink
              to="/"
              class="navbar-item link is-info"
              :title="`Ir a la página de inicio de ${owner.copyright}`"
            >
              ¿Qué es Ioana Chef?
            </NuxtLink>
          </p>
          <p class="level-item is-one-of-three has-text-centered navbar-brand">
            <NuxtLink
              class="navbar-item has-logo"
              to="/"
              :title="`Ir a la página de inicio de ${owner.nickname}`"
            >
              <img
                :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
                :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
                :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
                width="94"
                height="50"
              >
            </NuxtLink>
          </p>
          <p class="level-item is-one-of-three has-text-centered">
            <NuxtLink
              to="/legal"
              class="navbar-item link is-info"
              :title="`Ir a la página de términos legales de ${owner.copyright}`"
              v-if="$route.name !== 'legal'"
            >
              Aviso legal
            </NuxtLink>
            <NuxtLink
              to="/contacto"
              class="navbar-item link is-info"
              :title="`Ir a la página de términos legales de ${owner.copyright}`"
              v-else
            >
              Contacto
            </NuxtLink>
          </p>
        </nav>
      </div>
    </nav>
    <!-- all Pages content -->
    <transition name="chefioana-transition" appear>
      <Nuxt />
    </transition>
    <!-- Aside to Menu page (mobile only) -->
    <div
      :class="['aside-navbar-menu', { 'is-open': showAside }]"
      v-if="$route.name == 'carta'"
    >
      <ul class="aside-nav-list has-text-centered">
        <li>
          <span class="navbar-item has-text-primary is-menu-title">Carta y especialidades</span>
        </li>
        <li v-for="(menu, index) in menus" :key="index">
          <a
            href="#"
            class="navbar-item link is-info has-text-weight-medium"
            v-scroll-to="{ el: '#section-' + index, onDone: asideBehaviour }"
          >
            {{ menu.title }}
          </a>
        </li>
        <li>
          <a
            class="navbar-item phone is-flex is-justify-content-center" 
            :href="`tel:${owner.phone}`"
            :title="`Llamar a ${owner.copyright}`"
          >
            <figure class="image is-24x24px">
              <img
                src="~/assets/images/icons/phone-in-talk.svg"
                title="Icono de llamada por teléfono"
                alt="Icono de llamada por teléfono"
                width="24"
                height="24"
              >
            </figure>
            <span class="has-text-primary has-text-weight-semibold ml-2">
              644 09 34 70
            </span>
          </a>
        </li>
        <li>
          <NuxtLink
            to="/"
            class="navbar-item is-flex is-justify-content-center"
            :title="`Ir a la página de inicio de ${owner.copyright}`"
          >
            <figure class="image is-24x24px">
              <img
                src="~/assets/images/icons/chef-hat.svg"
                title="Icono de gorro de Chef"
                alt="Icono de gorro de Chef"
                width="24"
                height="24"
              >
            </figure>
            <span class="has-text-warning has-text-weight-medium ml-2">
              Volver a <span class="has-text-weight-semibold">Inicio</span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <!-- bottom Navbar (small screen devices only) -->
    <nav
      class="navbar is-fixed-bottom bottom-bar"
      role="navigation"
      aria-label="main navigation"
      v-if="$mq == 'mobile' || $mq == 'smartphone' || $mq == 'tablet'"
    >
      <div class="navbar-brand">
        <NuxtLink
          to="/"
          class="navbar-item is-flex is-flex-direction-column ml-1"
          :title="`Ir a la página de inicio de ${owner.copyright}`"
          v-if="$route.name !== 'carta'"
        >
          <figure class="image is-24x24px">
            <img
              src="~/assets/images/icons/chef-hat.svg"
              title="Icono de gorro de Chef"
              alt="Icono de gorro de Chef"
              width="24"
              height="24"
            >
          </figure>
          <small class="has-text-warning has-text-weight-medium">Inicio</small>
        </NuxtLink>
        <a
          role="button"
          :class="['navbar-burger', 'burger', { 'is-active': showAside }]"
          aria-label="menu"
          aria-expanded="false"
          @click.prevent="asideBehaviour"
          v-else
        >
          <span aria-hidden="true" v-for="item in 3"></span>
        </a>
        <NuxtLink
          class="navbar-item has-logo"
          to="/"
          :title="`Ir a la página de inicio de ${owner.nickname}`"
        >
          <img
            :src="require(`~/assets/images/logos/chef-ioana-logo.svg`)"
            :alt="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            :title="`Logotipo de ${owner.nickname} en Valdemoro, Madrid`"
            width="94"
            height="50"
          >
        </NuxtLink>
        <a
          class="whatsapp"
          :href="`https://wa.me/34${owner.phone}`"
          :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure class="image is-48x48">
            <img
              :src="require(`~/static/whatsapp-brands.svg`)"
              alt="Icono de WhatsApp"
              title="Icono de WhatsApp"
              width="48"
              height="48"
            />
          </figure>
        </a>
      </div>
    </nav>
    <!-- Floating items -->
    <TheCookiesBanner />
    <ItemContact v-if="$mq == 'laptop' || $mq == 'desktop' || $mq == 'desktopWide'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLink: 0,
      showAside: false,
      owner: this.$store.state.owner,
      menus: [
        // TODO: refactor info in a common json file
        { title: "Para empezar" },
        { title: "Del Mar" },
        { title: "De la Tierra" },
        { title: "Arroces" },
        { title: "De cuchara" },
        { title: "Para terminar" },
        { title: "Fuera de carta" },
        { title: "Vinos" },
        { title: "Cervezas" },
        { title: "Cerveza artesanal Yria" },
        { title: "Licores y combinados" },
        { title: "Otras bebidas" }
      ]
    }
  },
  methods: {
    asideBehaviour() {
      this.showAside = !this.showAside
    }
  }
}
</script>
