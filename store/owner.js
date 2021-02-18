const nickname = 'Chef Ioana'
const alias = 'chefioana'
const business = nickname + ' en tu casa'
const url = 'ioanachefentucasa.com'
const email = alias + '@gmail.com'

export const state = () => ({
  name: 'Ioana Botis',
  nickname: nickname,
  alias: alias,
  url: url,
  email: email,
  copyright: business,
  phone: 644093470,
  author: 'jalofernandez',
  currentYear: new Date().getFullYear(),
  version: '1.0.0',
  partner: 'haztunegociodigital',
  schema: {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    "additionalType": "Chef Ioana landing page to get a private chef at home to top level dinners",
    '@id': 'https://'+url,
    'url': 'https://'+url,
    // "sameAs": [
    //   "https://www.youtube.com/channel/UCqzf03PPcv5F3u0RAEtwqmw",
    //   "https://www.facebook.com/Peluqueria-Canina-Canessa-113194982084561/",
    //   "https://www.instagram.com/peluqueriacanessa/"
    // ],
    'logo': 'https://'+url+'/assets/images/logos/chef-ioana-logo.svg',
    'name': business+' en Valdemoro, Madrid',
    'description':
    'Chef a domicilio para comer en tu casa como en el mejor restaurante y sin molestias. Reservas e información: 644 09 34 70',
    'telephone': '+34 644 09 34 70',
    'email': email,
    'currenciesAccepted': 'EUR',
    'paymentAccepted': 'Efectivo, tarjeta de crédito, Cash, Credit Card',
    'priceRange': 'Desde 50€',
    'image': 'https://'+url+'/chef-ioana-en-tu-casa.jpg',
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34 644 09 34 70",
      "contactType": "Pedir cita, atención al cliente, customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pje. de Colón, 2, Local 7",
      "postalCode": "28341",
      "addressLocality": "Valdemoro",
      "addressRegion": "Madrid"
    },
    "hasMap": "https://g.page/Bodeguitavaldemoro?share",
    "geo" : {
      "@type": "GeoCoordinates",
      "latitude": "40.192512111926625",
      "longitude": "-3.674787887422171"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "287"
   },
   "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo"
        ],
        "opens": "16:30",
        "closes": "23:00"
      }
    ]
  }
})
