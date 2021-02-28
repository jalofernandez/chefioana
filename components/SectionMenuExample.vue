<template>
  <section class="hero is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="tile is-ancestor">
          <div class="tile is-vertical">
            <div class="tile">
              <div class="tile is-parent is-vertical reflected">
                <ItemMenuExample :dish="dishes.tapas" :order="1" />
              </div>
              <div class="tile is-parent">
                <ItemMenuExample :dish="dishes.starter" :order="2" />
              </div>
            </div>
            <div class="tile is-parent pb-0">
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
                >
                  <small>3.</small> {{ dishes.mains.name }}:
                </p>
                <br />
              </article>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <ItemMenuExample :dish="dishes.mains.items[0]" />
              </div>
              <div class="tile is-parent reflected">
                <ItemMenuExample :dish="dishes.mains.items[1]" />
              </div>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical reflected">
                <ItemMenuExample :dish="dishes.dessert" :order="4" />
              </div>
              <div class="tile is-parent">
                <ItemMenuExample :dish="dishes.clean" :order="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionMenu',
  data() {
    return {
      dishes: {
        tapas: {
          name: 'Entrantes',
          description:
            '"<b>Tapas</b> de <span class="has-text-weight-medium">hummus</span> tradicional, <span class="has-text-weight-medium">ensaladilla rusa</span> de mejillones y <span class="has-text-weight-medium">croquetas caseras</span> de jamón ibérico y queso manchego."',
          src: 'chefioana-video-menu-tapas'
        },
        starter: {
          name: 'Primer plato',
          description:
            '<b>Tataki</b> de <span class="has-text-weight-medium">atún</span> rojo con <span class="has-text-weight-medium">sésamo</span> negro y salsa <span class="has-text-weight-medium">teriyaki</span>.',
          src: 'chefioana-video-menu-tataki'
        },
        mains: {
          name: 'Segundos platos',
          items: [
            {
              description:
                '<b>Pulpo</b> cocido al estilo tradicional gallego con acéite cruda, <span class="has-text-weight-medium">pimentón de la Vera</span> y sal gruesa con <span class="has-text-weight-medium">cachelos</span>.',
              src: 'chefioana-video-menu-tapas'
            },
            {
              description:
                '<b>Rabo de toro</b> al <span class="has-text-weight-medium">estilo tradicional cordobés</span> con su estofado de verduras frescas de la huerta y su vino de rivera.',
              src: 'chefioana-video-menu-rabo-de-toro'
            }
          ]
        },
        dessert: {
          name: 'Postre',
          description:
            '<b>Postre casero</b> dulce de <span class="has-text-weight-medium">3 chocolates</span>, <span class="has-text-weight-medium">nata</span> y <span class="has-text-weight-medium">caramelo</span>. Un auténtico placer como broche final.',
          src: 'chefioana-video-menu-postre'
        },
        clean: {
          name: 'Limpieza',
          description:
            'Tras finalizar el servicio y la degustación, mientras los comensales están de sobremesa, yo <b>recojo y limpio</b>.',
          src: 'chefioana-video-menu-limpieza'
        }
      }
    }
  }
}
</script>
