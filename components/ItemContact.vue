<template>
  <a
    class="media has-text-dark has-text-centered is-floating-contact" 
    :href="`https://wa.me/34${owner.phone}`"
    :title="`Llamar o escribir al WhatsApp ${owner.phone} de ${owner.copyright}`"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="media-content mr-2 ml-1">
      <div class="content">
        <p>
          <span class="has-text-weight-medium">¿Qué quieres cenar?</span>
          <br/>
          ¿Dudas? ¡Escríbeme!
        </p>
      </div>
    </div>
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
</template>

<script>
export default {
  name: 'ItemContact',
  data() {
    return {
      owner: this.$store.state.owner
    }
  }
}
</script>
