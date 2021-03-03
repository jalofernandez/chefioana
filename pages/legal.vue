<template>
  <main :class="$route.name">
    <SectionTitle :header="header.legal" isPageTitle />

    <section class="tabs-wrapper">
      <!-- 00 :: scroll navigation sticky bar -->
      <div class="tabs is-centered">
        <ul>
          <li
            :class="{ 'is-active': showLink(index) }"
            v-for="(section, index) in sections"
            :key="index"
            @click="toggleClick(index)"
          >
            <a
              href=""
              class="is-warning"
              v-scroll-to="{ el: '#section-'+section.link, offset: -120 }"
            >
              <span class="has-text-weight-medium">{{ section.name }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="section has-text-a-lot">

        <!-- 01 :: PRESTADOR Y RESPONSABILIDAD -->
        <article :id="`section-${sections[0].link}`" :class="`container ${sections[0].link} mb-6`">
          <div class="content">
            <ItemTitle class="has-text-centered" :title="sections[0].name" />
            <p class="block">
              <span class="has-text-primary has-text-weight-semibold">{{ owner.copyright }}</span> es una marca comercial propiedad de <em class="has-text-weight-medium">{{ owner.name }}</em> 
              que a su vez es dueña y responsable del sitio web y pone a disposición de los usuarios toda esta información con la que pretende:
            </p>
            <blockquote class="quote">
              <p>
                <b>1.</b> Dar cumplimiento a las obligaciones dispuestas en las Leyes:
              </p>
              <nav class="level">
                <a
                  class="level-item has-text-centered has-text-warning"
                  href="https://www.boe.es/doue/2016/119/L00001-00088.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Reglamento 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas con esta plantilla de política de privacidad"
                >
                  <span>
                    <b>RGPD</b>
                    <p><small>www.boe.es</small></p>
                  </span>
                </a>
                <a
                  class="level-item has-text-centered has-text-warning"
                  href="https://boe.es/boe/dias/2018/12/06/pdfs/BOE-A-2018-16673.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales"
                >
                  <span>
                    <b>LOPDGDD</b>
                    <p><small>www.boe.es</small></p>
                  </span>
                </a>
                <a
                  class="level-item has-text-centered has-text-warning"
                  href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico en el blog"
                >
                  <span>
                    <b>LSSI</b>
                    <p><small>www.boe.es</small></p>
                  </span>
                </a>
              </nav>
              <p>
                <b>2.</b> Informar a todos los usuarios del sitio web respecto a cuáles son sus condiciones de uso.
              </p>
            </blockquote>
            <p class="block">
              Aquí listamos los <b>datos identificativos</b> del "prestador" del presente sitio web,
              <span class="has-text-primary has-text-weight-semibold">{{ owner.url }}</span>, y todos 
              <b>los servicios</b> en él ofertados:
            </p>
            <blockquote class="quote">
              <p>
                <b class="pr-1">Prestador:</b> <span class="has-text-weight-medium">{{ owner.name }} (Chef Ioana)</span>
              </p>
              <p>
                <b class="pr-1">DNI:</b> <span class="has-text-weight-medium">7773823F</span>
              </p>
              <!-- <p class="is-size-7-mobile">
                <b>Registro mercantil:</b> ¿?
              </p>-->
              <p>
                <b class="pr-1">Domicilio:</b> <span class="has-text-weight-medium">Pje. de Colón, 2, Local 7, 28341 Valdemoro, Madrid</span>
              </p>
              <p>
                <b class="pr-1">Correo electrónico:</b>
                <a
                  :href="`mailto:${owner.email}`"
                  class="has-text-warning has-text-weight-medium"
                  :title="`Contactar vía correo electrónico con ${owner.copyright} en: ${owner.email}`"
                >
                  <span class="has-underline">{{ owner.email }}</span>
                </a>
              </p>
            </blockquote>
            <p class="block"></p>
              Ojo, que por entrar y navegar por este sitio web ya adquieres la condición de "usuario".
            </p>
            <p class="block">
              Además <span class="has-text-primary has-text-weight-semibold">{{ owner.copyright }}</span>, osea el "prestador" (nosotros), 
              somos proveedores de servicios y productos relacionados con el ámbito de la hostelería, la restauración y la alimentación
              en general dentro del sector <em>horeca</em>.
            </p>
          </div>
        </article>

        <!-- 02 :: TÉRMINOS DEL SERVICIO -->
        <article :id="`section-${sections[1].link}`" :class="`container ${sections[1].link} mb-6`">
          <div class="content">
            <ItemTitle class="has-text-centered" :title="sections[1].name" />
            <p class="block">
              Ofrecemos un servicio de <b>cocinero profesional o chef en casa</b> donde podrás elegir un menú acorde a tus gustos personales y el de las personas
              que te acompañarán, a partir de nuestra selección de platos. El nuestro es un servicio óptimo para cenas especiales, celebraciones, eventos familiares,
              u otras reuniones con ánimo gourmet. Prestamos nuestros servicio con la misma calidad y eficacia que obtendrías en un restaurante de primer nivel personasdes
              de la comodidad y seguridad de tu propia casa.
            </p>
            <p class="block">
              En todos los servicios de menú, cocina o catering, <span class="has-text-primary has-text-weight-semibold">{{ owner.copyright }}</span>
              se encargará tanto de preparar los platos previamente acordados como de serviros la comida. Además nos encargaremos de la Limpieza
              posterior de la cocina y los utensilios utilizados durante el desarrollo del servicio.
            </p>
            <div v-for="faq in faqs" :key="faq.question">
              <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
                {{ faq.question }}
              </h3>
              <p class="block" v-html="faq.answer"></p>
            </div>
          </div>
        </article>

        <!-- 03 :: USO DEL WEBSITE -->
        <article :id="`section-${sections[2].link}`" :class="`container ${sections[2].link} mb-6`">
          <div class="content">
            <ItemTitle class="has-text-centered" :title="sections[2].name" />
            <p class="block">
              Usar este sitio web, <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>,
              implica la <b>aceptación completa de todas las cláusulas y condiciones de uso</b> incluidas en la esta página
              de <em>aviso legal</em> así como las condiciones particulares que pudieran establecerse entre las dos partes, 
              tú y nosotros, en relación con la prestación de los servicios previamente acordados.
            </p>
            <p class="block">
              Si no estuvieras de acuerdo con todas y cada una de estas cláusulas y condiciones, por favor, deja de utilizar este
              sitio web 😑
            </p>
            <p class="block">
              El acceso y navegación por este sitio web es libre y gratuito. ✌️
            </p>
            <p class="block">
              Estás obligado a NO utilizar cualquiera de los contenidos de este sitio web con fines o efectos ilícitos, 
              prohibidos en este <em>aviso legal</em> o por la legislación española / europea vigente, que perjudiquen los derechos e intereses 
              de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización de los
              contenidos, los equipos informáticos o los documentos, archivos y toda clase de contenidos almacenados en cualquier equipo informático 
              propios o subcontratados o de cualquier usuario de Internet.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Responsabilidad
            </h3>
            <p class="block">
              NO somos ni podemos ser responsables de los comentarios y opiniones vertidas por los usuarios o terceras personas ajenas a 
              <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span> a través de redes sociales,
              blog u otras herramientas de participación colectiva o individual.
            </p>
            <p class="block">
              Nos reservamos el derecho de retirar todos aquellos comentarios, opiniones o contenido fraudulento y/o
              manipulado que vulneren la legislación vigente, que perjudiquen los derechos o intereses de terceros, o que, a 
              nuestro juicio, no resulten adecuados para su publicación. Si como "usuario" consideras que existe en el
              sitio web algún contenido que pudiera estar sujeto a esta clasificación, pedimos nos lo notifiques escribiéndonos un
              correo electrónico a la siguiente dirección de email:
              <a
                :href="`mailto:${owner.email}?subject=Denuncia%20de%20contenido`"
                class="has-text-warning has-text-weight-medium"
                :title="`Denunciar contenido inapropiado en la web de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>
            <p class="block">
              Podremos modificar, cancelar, restringir o suspender el contenido del sitio web,
              los links y vínculos o la información obtenida a través del sitio web, sin necesidad de aviso previo.
            </p>
            <p class="block">
              Este sitio web, <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>, ha sido diseñado, desarrollado, 
              revisado y testeado por 
              <a
                :class="`author ${owner.author} has-text-weight-medium`"
                :href="`https://${owner.author}.com`"
                :title="`@${owner.author}: diseñador gráfico y desarrollador web / frontend`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">{{ owner.author }}.com</span>
              </a> en colaboración con 
              <a
                :class="`author ${owner.partner}`"
                :href="`https://${owner.partner}.com`"
                :title="`${owner.partner}: únete a la transformación digital y aumenta las ventas con tu negocio en internet`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span><b class="has-underline">{{ owner.partner }}.com</b></span>
              </a>
              para que funcione perfecta y correctamente. A priori, puede garantizarse el correcto funcionamiento los 
              365 días del año, 24 horas al día pero sin descartar la posibilidad de que acontezcan 
              causas de fuerza mayor como: catástrofes naturales, huelgas, pandemias o circunstancias ajenas a nuestra 
              organización que imposibiliten el acceso a este sitio web.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Medidas de seguridad
            </h3>
            <p class="block">
              Cualquier dato personal que nos facilites es susceptible de ser almacenado en bases de datos, cuya titularidad
              nos corresponde pero que se prestan a través de un tercero, siempre un proveedor de servicios
              de intenet reputado y homologado, que asume todas las medidas de índole técnica, organizativa y de
              seguridad que garantizan la confidencialidad, integridad y calidad de la información contenida en las
              mismas de acuerdo con lo establecido en la normativa vigente en protección de datos.
            </p>
            <p class="block">
              Matizaremos que las medidas de seguridad de los sistemas informáticos en Internet
              son extremadamente fiables pero no son infalibles y por tanto no podemos garantizar al 100%
              la inexistencia de virus u otros elementos que puedan producir alteraciones en los sistemas informáticos 
              (<em>software y hardware</em>), documentos electrónicos y ficheros contenidos en los mismos.
              Obviamente nosotros ponemos todos los medios necesarios y toma las medidas de seguridad oportunas para
              evitar la presencia de estos elementos dañinos que no convienen a nadie.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Enlaces de interés a otros sitios Web
            </h3>
            <p class="block">
              Podemos proporcionarte acceso a sitios web de terceros mediante enlaces con la finalidad de informar sobre la existencia
              de otras fuentes de información en Internet en las que podrá ampliar los datos o servicios ofrecidos en el sitio web.
            </p>
            <p class="block">
              Estos enlaces a otros sitios web no suponen obligación, sugerencia ni siquiera recomendación para que visites las
              páginas web de destino. Estas están fuera de nuestro control, por lo que no nos responsabilizamos del contenido
              de los sitios web vinculados, ni de los links o enlaces ubicados en él, ni del resultado que obtenga al seguir los enlaces.
            </p>
            <p class="block">
              La existencia de enlaces no implica necesariamente la existencia de relaciones entre nosotros y el/los
              propietario/s del sitio en el que se establezca el enlace/s, ni la aceptación o aprobación por nuestra parte del
              de sus contenidos o servicios.
            </p>
            <p class="block">
              Si accedes a un sitio web externo desde un enlace que encuentres en <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>
              deberás leer la <em>política de privacidad</em> propia del otro sitio web ya que tendrá sus propios términos y condiciones al margen de estos.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Contratación de terceros
            </h3>
            <p class="block">
              Podremos <b>contratar y/o subcontratar con terceras entidades</b> todo lo que estime oportuno en relación con la
              realización de cualesquiera o todas las actividades necesarias para la gestión, mantenimiento, actualización
              y/o mejora de los Servicios. Dichas entidades podrían tener la facultad de desactivar los servicios y, en
              consecuencia, interrumpir el acceso al mismo para realizar las tareas contratadas.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Propiedad intelectual
            </h3>
            <p class="block">
              Este sitio web, <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>, incluyendo a título enunciativo pero no limitativo su codificación, edición,
              compilación y demás elementos necesarios para su funcionamiento, así como los diseños, logotipos, imagen corporativa, fotografías, vídeos, textos y gráfismos
              son <b>propiedad de</b> <span class="has-text-primary">{{ owner.name }}</span> y
              <a
                :class="`author ${owner.author} has-text-weight-semibold`"
                :href="`https://${owner.author}.com`"
                :title="`@${owner.author}: diseñador gráfico y desarrollador web / frontend`"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">{{ owner.author }}.com</span>
              </a>. Les corresponde a ambos la explotación en exclusividad de los mismos en cualquier forma y, en especial, los derechos de reproducción, distribución, 
              comunicación pública y transformación, de acuerdo con la legislación española y de la Unión Europea aplicable.
            </p>
            <p class="block">
              NO está permitida la reproducción total o parcial, uso, explotación y distribución con fines comerciales de cualquiera de los recursos materiales, 
              artículos o programación incluida en el presente sitio web, <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>.
            </p>
            <p class="block">
              <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span> autoriza expresamente a que terceros puedan redirigir 
              directamente a los contenidosnconcretos de sitio web: <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>.
            </p>
            <p class="block">
              Para realizar cualquier tipo de observación como posibles incumplimientos de los derechos de propiedad
              intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puedes hacerlo a través
              de nuestra dirección de correo electrónico:
              <a
                :href="`mailto:${owner.email}?subject=Denuncia%20incumplimiento%20derechos%20de%20propiedad%20intelectual`"
                class="has-text-warning has-text-weight-medium"
                :title="`Escríbenos para denunciar incumplimientos de los derechos de propiedad intelectual en la web de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Derecho de exclusión
            </h3>
            <p class="block">
              Nos reservamos el derecho a impedir o denegar el acceso a <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>,
              este sitio web y los porductos y servicios ofrecidos en ambos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios
              que incumplan cualquiera de las condiciones del presente <em>aviso legal</em>.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Jurisdicción
            </h3>
            <p class="block">
              Este <em>aviso legal</em> se rige íntegramente por la <b>legislación española</b>.
            </p>
            <p class="block">
              Siempre que no haya una norma que obligue a otra cosa, para cuantas cuestiones se susciten sobre la interpretación, aplicación y cumplimiento 
              de este <em>aviso legal</em>, así como de las reclamaciones que puedan derivarse de su uso, las partes acuerdan someterse a los <b>jueces</b> 
              y <b>tribunales</b> de la <b>Comunidad Autónoma de Madrid</b>, con renuncia expresa de cualquier otra jurisdicción que pudiera corresponderles.
            </p>

            <!-- INFO: incorporar cuando haya productos o servicios por los que cobrar €!!
            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Condiciones de Venta
            </h3>
            <p class="block">
              En este apartado detallarás los pasos que debe realizar el "usuario" para completar una compra y las condiciones a las que ha de someterse.
            </p>-->

            <!-- INFO: incorporar cuando haya programas de afiliación, y/o anuncios patrocinados €!!
            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Enlaces de Afiliados y anuncios patrocinados
            </h3>
            <p class="block">
              El sitio Web ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados.
            </p>
            <p class="block">
              La información que aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios anunciantes, por lo que "prestador" no se hace responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.
            </p>-->

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Contacto
            </h3>
            <p class="block">
              Si quieres realizar cualquier comentario o consulta sobre sobre este sitio web, puedes enviar un mensaje de correo electrónico a:
              <a
                :href="`mailto:${owner.email}`"
                class="has-text-warning has-text-weight-semibold"
                :title="`Escríbenos un email al departamento legal de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>
          </div>
        </article>

        <!-- 04 :: PRIVACIDAD -->
        <article :id="`section-${sections[3].link}`" :class="`container ${sections[3].link} mb-6`">
          <div class="content">
            <ItemTitle class="has-text-centered" :title="sections[3].name" />
            <p class="block">
              <b>Los datos que nos facilites</b> a través de las vías de contacto disponibles en este website:
              WhatsApp, teléfono, correo electrónico o redes sociales, <b>serán ratados anónimamente</b>. 
              Podrás ejercer tus derechos legales de: acceso a estos datos, su rectificación, su cancelación y 
              la oposición a los mismos tal y como te explicaremos más adelante.
            </p>
            <p class="block">
              Estos datos son necesarios para:
            </p>
            <blockquote class="quote">
              <p>
                <b>1.</b> Asegurar una correcta gestión y máxima calidad de los <b>servicios y productos</b> aquí ofertados.
              </p>
              <p>
                <b>2.</b> Comunicación y resolución de <b>consultas</b>. 
              </p>
              <p>
                <b>3.</b> Envío de <b>publicidad</b> e información comercial por medios digitales (email, WhatsApp...), acerca de 
                nuestros productos y servicios bajo la marca comercial de <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>.
              </p>
              <p>
                <b>4.</b> Optimizar la <b>experiencia de Usuario</b> (UX) analizando cómo navegas por este sitio web mediante herramientas como 
                <a
                  href="https://analytics.google.com/analytics/web/provision/#/provision"
                  class="has-text-warning has-text-weight-medium has-underline"
                  title="Ir al website de Google Analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Google Analytics</span>
                </a>. Todo ello a través de <em>cookies</em> descritas en la
                <a
                  href="#"
                  class="has-text-warning has-text-weight-medium has-underline"
                  title="Ir a la sección de Política de Cookies en #HazTuNegocioDigital"
                  v-scroll-to="{ el: '#section-cookies', offset: -120 }"
                >
                  <span>política de cookies</span>
                </a> en el último bloque de esta página.
              </p>
            </blockquote>
            <!-- <p class="block">
              En la <b>recogida y el tratamiento de los datos de carácter personal</b> se han adoptado las
              <b>medidas de seguridad</b> adecuadas para evitar la pérdida, el acceso no autorizado o la manipulación de los
              mismos, de acuerdo con lo establecido en el <em>Real Decreto 1720/2007, de 21 de diciembre</em>.
            </p> -->
            <p class="block">
              Nos comprometemos a <b>no exponer públicamente la información confidencial</b> que nos facilites. 
              Nunca serán utilizados por terceros que NO estén especificados en este <em>aviso legal</em>.
            </p>
            <p class="block">
              Como "usuario" debes ser <b class="has-text-success">mayor de 14 años</b> para así tener la capacidad legal necesaria 
              para consentir el tratamiento de tus datos de carácter personal con lo establecido en la presente <em>Política de Privacidad</em>.
              Si eres <b class="has-text-danger">menor de 14 años</b> contacta con tu tutor o un adulto mayor de edad para que te valide
              o cierra esta pestaña del navegador y vete a Youtube o TikTok 🤭
            </p>
            <p class="block">
              Tienes derecho y puedes ejercitar los <b>derechos de acceso</b>, <b>rectificación</b>, 
              <b>cancelación</b> y <b>oposición</b> sobre <b>tus datos personales</b> así como el de
              <b>revocación del consentimiento</b> para cualquiera de las finalidades que hemos descrito,
              enviando un correo electrónico a
              <a
                :href="`mailto:${owner.email}?subject=Sobre%20el%20tratamiento%20de%20mis%20datos`"
                class="has-text-warning has-text-weight-medium"
                :title="`Tratamiento de datos personales en ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>.
              REcuerda indentificarte e indicar el derecho que deseas ejercitar 👌
            </p>
            <p class="block">
              Cumplimos la
              <em>Ley 34/2002 de 11 de julio, de Servicios de la Sociedad de la Información y el Comercio Electrónico</em>
              así que en caso de querer enviarte infomación comercial vía correo electrónico solicitaremos previamente tu aprobación
              para el tratamiento de tu correo electrónico con fines comerciales. Siempre podrás <em>"darte de baja"</em> de manera automática en los distintos
              correos electrónicos que recibas como suscriptor de nuestra lista de correo o enviándonos un email a:
              <a
                :href="`mailto:${owner.email}?subject=Solicitud%20de%20baja%20en%20listade%20%20correo`"
                class="has-text-warning has-text-weight-medium"
                :title="`Solicitud de baja de correos publicitarios de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
            </p>
            <p class="block">
              Además, <b>serás responsable de la veracidad de los datos que nos facilites</b> y nosotros, como responsables
              de <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>, nos reservamos el derecho a excluir de los
              servicios prestados en este sitio web a todo "usuario" que haya mentido facilitando datos falsos o suplantaciones indebidas.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Finalidades, tratamiento y conservación
            </h3>
            <p class="block">
              Este sitio web, <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>, no recaba datos de caracter personal 
              de manera automática sin que el "usuario" lo sepa al margen de los proporcionados directamente por él mismo; los cuales serán tratados 
              para las <b>siguientes finalidades</b> desglosadas en la tabla mostrada a continuación que especifica el <b>motivo</b> 
              por el que tratamos tus datos y <b>durante cuánto tiempo</b> los conservaremos:
            </p>
            <div class="table-container">
              <table class="table is-bordered is-narrow is-fullwidth is-size-6 is-size-7-mobile">
                <thead>
                  <tr>
                    <th>Finalidad</th>
                    <th>Base jurídica</th>
                    <th>Plazos de conservación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Comprobar la identidad y garantizar la seguridad de los Usuarios así como facilitar la gestión de
                      nuestro servicio.
                    </td>
                    <td>Interés legítimo del responsable del tratamiento.</td>
                    <td>
                      Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                      Puedes darte de baja por teléfono: +34 644 09 34 70
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Gestionar y responder las solicitudes de información realizadas telefónicamente, a través de email o
                      de cualquiera de nuestras redes sociales o Whatsapp.
                    </td>
                    <td>Interés legítimo del responsable del tratamiento.</td>
                    <td>
                      Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                      Puedes darte de baja por teléfono: +34 644 09 34 70
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Para la gestión de la seguridad de la información y del ejercicio de los derechos en materia de
                      privacidad en cumplimiento del RGPD.
                    </td>
                    <td>Cumplimiento del RGPD.</td>
                    <td>
                      Conservaremos los datos mientras sean necesario para cumplir con las finalidades de la plataforma.
                      Puedes darte de baja por teléfono: +34 644 09 34 70
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Transferencias internacionales
            </h3>
            <p class="block">
              Estos datos son tratados en España y las aplicaciones son realizadas por
              proveedores de desarrollo de software certificados, por todos conocidos y con seguridad garantizada.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Derechos de los usuarios
            </h3>
            <p class="block">
              Puedes ejercer los derechos que se detallan a continuación a través de la
              <NuxtLink
                to="/contacto"
                class="has-text-warning has-text-weight-semibold has-underline pr-1"
                :title="`Ir a la página de contacto de #${owner.name}`"
              >
                <span>página de contacto</span>
              </NuxtLink>
              o bien a la dirección de correo electrónico:
              <a
                class="has-text-warning has-text-weight-medium"
                :href="`mailto:${owner.email}?subject=Solicitud%20de%20baja%20en%20listade%20%20correo`"
                :title="`Solicitud de baja de correos publicitarios de ${owner.copyright}`"
              >
                <span class="has-underline">{{ owner.email }}</span>
              </a>
              a la atención de <span>{{ owner.name }}</span>. La solicitud deberá contener copia de un documento identificativo 
              legal como DNI, pasaporte o permiso de conducción. Ejercitar tus derechos no tiene coste alguno.
            </p>
            <div class="table-container">
              <table class="table is-bordered is-narrow is-fullwidth is-size-6 is-size-7-mobile">
                <thead>
                  <tr>
                    <th>Derecho</th>
                    <th>¿En qué consiste?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Derecho de acceso</td>
                    <td>Consultar qué datos personales tuyos tenemos.</td>
                  </tr>
                  <tr>
                    <td>Derecho de rectificación</td>
                    <td>Modificar los datos personales que tenemos tuyos cuando sean inexactos.</td>
                  </tr>
                  <tr>
                    <td>Derecho de oposición</td>
                    <td>Solicitar que no tratemos tus datos personales para finalidades concretas.</td>
                  </tr>
                  <tr>
                    <td>Derecho de supresión</td>
                    <td>Solicitar que eliminemos tus datos personales.</td>
                  </tr>
                  <tr>
                    <td>Derecho de limitación</td>
                    <td>Solicitar que limitemos el tratamiento de tus datos personales.</td>
                  </tr>
                  <tr>
                    <td>Derecho de portabilidad</td>
                    <td>
                      Obtener en un formato electrónico los datos personales tanto los que nos hayas facilitado
                      tú directamente como los que se hayan generado en el contexto del servicio.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="block">
              Si no estás conforme en el ejercicio de sus derechos, podrás reclamar ante la autoridad de control
              en materia de protección de datos, <em>la Agencia Española de Protección de Datos</em>, 
              cuya página web es:
              <a
                class="has-text-warning has-text-weight-medium"
                href="https://www.aepd.es/es"
                title="Ir al website de la Agencia Española de Protección de Datos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">www.agpd.es</span>
              </a>
            </p>
          </div>
        </article>

        <!-- 05 :: POLÍTICA DE COOKIES -->
        <article :id="`section-${sections[4].link}`" :class="`container ${sections[4].link} mb-6`">
          <div class="content">
            <ItemTitle class="has-text-centered" :title="sections[4].name" />
            <p class="block">
              El reglamento LSSI-CE,
              <a
                class="has-text-warning hjas-text-weight-medium"
                href="https://www.boe.es/buscar/doc.php?id=BOE-A-2002-13758"
                title="Publicación oficial del BOE sobre la Ley de la sociedad de la información y del comercio electrónico"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">Ley de la sociedad de la información y del comercio electrónico</span>
              </a>,
              obliga los propietarios de sitios web como esta que descargue en tu navegador
              cookies de terceros a <b>informarte sobre el tipo de cookies, la duración y la
              finalidad</b> de cada una de ellas.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              ¿Qué son las Cookies?
            </h3>
            <p class="block">
              Son un pequeño fichero que permite que el sitio web por el que está navegando recuerde información sobre su visita. 
              Estas cookies son instaladas en su navegador por cada web con la única finalidad de facilitar su próxima visita y 
              hacer que el sitio web resulte más útil.
            </p>
            <p class="block">
              Las cookies <b>NO almacenan información sensible sobre ti</b> como tarjetas de crédito o datos bancarios,
              fotografías o información personal. Los datos que guardan son de carácter técnico, estadísticos,
              personalización de contenidos, etc. La información recogida por las cookies es anónima.
            </p>
            <p class="block">
              Las cookies <b>NO son virus</b>, ni troyanos, ni spam, ni spyware, ni abren molestas ventanas emergentes
              (pop-ups)... Sólo contribuyen a tener una mejor experiencia de navegación para cada usuario.
            </p>
            <p class="block">
              La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten
              o impiden en los ajustes de seguridad las cookies temporales o memorizadas. Más adelante explicaremos cómo
              gestionarlas.
            </p>
            <p class="block">
              Informarte que si continuas navegando y/o pulsas el botón "aceptar" del banner de aviso de Cookies,
              <b>estás consintiendo el empleo de estas cookies</b> 
              (<small><em>artículo 22.2 de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico</em></small>).
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Las clasificaciones por tipo de cookies son:
            </h3>
            <p class="is-size-6">
              <b class="has-text-primary">1.</b> Según <b>quién las gestione</b>:
            </p>
            <blockquote class="quote">
              <p>
                Cookies <b>propias</b> o aquellas generadas y gestionadas por la propia página o dominio que está visitando.
              </p>
              <p>
                Cookies <b>de terceros</b> o aquellas generadas por servicios o proveedores externos como las que generará
                un chatbot, una herramienta de analítica web o las redes sociales de turno.
              </p>
            </blockquote>
            <p class="is-size-6">
              <b class="has-text-primary">2.</b> Según <b>el tiempo que permanezcan almacenadas</b>:
            </p>
            <blockquote class="quote">
              <p>
                Cookies <b>sesión</b> o aquellas que se generarán y almacenarán tu información de navegación, permaneciendo
                activas hasta que abandones la página y cierres el navegador.
              </p>
              <p>
                Cookies <b>persistentes</b> o aquellas cuyos datos siguen almacenados aunque abandones la página y pueden
                ser tratados durante un periodo de tiempo que puede ir de unos minutos a varios años según haya definido
                previamente el responsable de la cookie.
              </p>
            </blockquote>
            <p class="is-size-6">
              <b class="has-text-primary">3.</b> Según <b>la finalidad de los datos obtenidos</b>:
            </p>
            <blockquote class="quote">
              <p>
                Cookies
                <b>técnicas</b> o aquéllas que permiten a cada usuario la utilización de las diferentes opciones o servicios que
                existan en la web como: identificar la sesión, acceder a partes de acceso restringido, recordar los
                elementos que integran un pedido, realizar el proceso de compra de un pedido...
              </p>
              <p>
                Cookies de
                <b>personalización</b> o aquéllas que permiten recordar las preferencias de cada usuario como: el idioma, el
                tipo de navegador a través del cual accede al servicio, etc.
              </p>
              <p>
                Cookies de
                <b>análisis</b> o aquéllas que permiten la medición y análisis estadístico de la utilización que hacen los
                usuarios del servicio con el fin de mejorar la oferta de productos o servicios que se le ofrecen.
              </p>
              <p>
                Cookies
                <b>publicitarias</b> o aquéllas que permiten gestionar de forma eficaz la oferta de los espacios
                publicitarios para así encajar el contenido del anuncio al contenido de la página web.
              </p>
              <p>
                Cookies de
                <b>publicidad comportamental</b> o aquéllas que muestran publicidad en función de tus hábitos de navegación,
                tu país de procedencia, idioma, etc.
              </p>
            </blockquote>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Aquí sólo utilizamos cookies...
            </h3>
            <p class="block">
              ...Para analizar el tráfico y establecer estadísticas de uso. Además, compartimos información sobre el uso que haga del
              sitio web con nuestros partners de redes sociales y análisis web, todos ellos de más que conocidos (Google,
              LinkedIn...) quienes pueden combinarla con otra información que ellos hayan recopilado a partir del uso que tú
              hayas hecho de sus servicios (con tu cuenta personal de LinkedIn, por ejemplo).
            </p>
            <p class="block">
              Eso sí, en ningún caso se van a utilizar cookies que comprometan tu privacidad.
            </p>
            <p class="block">
              Esta es la <b>relación de cookies</b> que usa <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span>:
            </p>
            <div class="table-container">
              <table class="table is-bordered is-narrow is-fullwidth is-size-7">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Temporalidad</th>
                    <th>Titularidad</th>
                    <th>Finalidad</th>
                    <th>Dominio</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- <tr>
                    <td>__cfduid</td>
                    <td>Técnica de terceros</td>
                    <td>Persistente</td>
                    <td>CloudFlare, Inc.</td>
                    <td>
                      Identificar tráfico web de confianza. No corresponde a ningún id de "usuario" en la aplicación web, ni
                      guarda ningún dato personal identificable.
                    </td>
                    <td>cloudfare.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>__hstc</td>
                    <td>Técnica de terceros</td>
                    <td>Persistente</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      La cookie principal para seguimiento de los visitantes. Contiene el dominio, utk, marca de tiempo
                      inicial (primera visita), marca de tiempo más reciente (última visita), marca de tiempo actual (esta
                      visita) y número de sesión (aumenta para cada sesión posterior).
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>hubspotutk</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>13 meses</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      se usa para hacer seguimiento de la identidad de un visitante. Se pasa a HubSpot en el envío de
                      formularios y se usa al eliminar la duplicación de contactos.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>__hssrc</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>Sesión</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      Determinar si el visitante ha reiniciado su navegador. Si esta cookie no existe cuando HubSpot
                      administra cookies, se considera una nueva sesión.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>__hssc</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>30 minutos</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      Seguimiento de las sesiones. Esto se utiliza para determinar si HubSpot debería aumentar el número de
                      sesión y las marcas de tiempo en la cookie __hstc. Contiene el dominio, el conteo de vistas viewCount
                      (se incrementa con cada vista de página en una sesión) y la marca de tiempo de inicio de una sesión.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>messagesUtk</td>
                    <td>Estrictamente necesaria de terceros</td>
                    <td>13 meses</td>
                    <td>HubSpot, Inc.</td>
                    <td>
                      Para reconocer a los visitantes que chatean contigo utilizando la herramienta de mensajes. Si el
                      visitante deja tu sitio antes de que se agregue como un contacto, esta cookies se asociará con su
                      navegador. Si chateas con un visitante que luego regresa a tu sitio en el mismo navegador que ya tiene
                      cookies, la herramienta de mensajes cargará su historial de conversaciones.
                    </td>
                    <td>hubspot.com</td>
                  </tr> -->
                  <tr>
                    <td>_ga</td>
                    <td>Análisis de terceros</td>
                    <td>2 años</td>
                    <td>Google Analytics</td>
                    <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                    <td>google.com</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Análisis de terceros</td>
                    <td>24 horas</td>
                    <td>Google Analytics</td>
                    <td>Se usa para distinguir <em class="has-text-weight-medium">Usuarios</em>.</td>
                    <td>google.com</td>
                  </tr>
                  <tr>
                    <td>_gat</td>
                    <td>Análisis de terceros</td>
                    <td>1 minuto</td>
                    <td>Google Analytics</td>
                    <td>Se usa para limitar el porcentaje de solicitudes.</td>
                    <td>google.com</td>
                  </tr>
                  <!-- <tr>
                    <td>i18n_redirected</td>
                    <td>Técnica propia</td>
                    <td>Persistente</td>
                    <td>@jalofernandez</td>
                    <td>Mantener idioma elegido por el ususario.</td>
                    <td>haztunegociodigital.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>cookiesConsent</td>
                    <td>Técnica propia</td>
                    <td>Persistente</td>
                    <td>@jalofernandez</td>
                    <td>
                      Guardar el consentimiento y aceptación de la política de cookies por parte del "usuario" y no volver a
                      mostrar el banner de alerta sobre las cookies.
                    </td>
                    <td>haztunegociodigital.com</td>
                  </tr> -->
                  <!-- <tr>
                    <td>auth.*</td>
                    <td>Técnicas propias</td>
                    <td>Sesión</td>
                    <td>@jalofernandez</td>
                    <td>Para identificar de manera unitaria al "usuario" respecto a otros.</td>
                    <td>haztunegociodigital.com</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
            <p class="block">
              Aquí está la relación completa de <b>cookies de terceros</b>:
            </p>
            <nav class="level">
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Google Analytics en el navegador del visitante"
                class="level-item analytics has-text-warning"
              >
                <span class="has-underline">
                  Google <b>Analytics</b>
                </span>
              </a>
              <a
                href="https://www.facebook.com/policies/cookies/"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Facebook en el navegador del visitante"
                class="level-item facebook has-text-warning"
              >
                <span class="has-underline">
                  <b>Facebook</b> Pixel
                </span>
              </a>
              <!-- <a
                href="https://help.fullstory.com/hc/en-us/articles/360020829513-Why-FullStory-uses-First-Party-Cookies"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Fullstory en el navegador del visitante"
                class="level-item fullstory has-text-warning"
              >
                <span class="has-underline">
                  <b>Fullstory</b>
                </span>
              </a> -->
              <!-- <a
                href="https://knowledge.hubspot.com/es/reports/what-cookies-does-hubspot-set-in-a-visitor-s-browser"
                target="_blank"
                rel="noopener noreferrer"
                title="Qué cookies usa Hubspot en el navegador del visitante"
                class="level-item hubspot has-text-warning"
              >
                <span class="has-underline">
                  <b>Hubspot</b>
                </span>
              </a> -->
            </nav>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Cómo gestionar las cookies:
            </h3>
            <p class="block">
              Puedes gestionar las cookies en la configuración del navegador de modo que este te notifique antes de que se descargue cookie
              en tu equipo o también puedes adaptar la configuración de forma que el navegador rechace todas las cookies o
              sólo las cookies de terceros. Además puedes eliminar cualquiera de las cookies que ya se encuentren en tu
              equipo.
            </p>
            <p class="block">
              El único problema es que cada navegador lo gestiona a su manera y tendrás que adaptar por separado la
              configuración de cada navegador y equipo que utilices pero aquí te dejamos una relación de enlaces a la
              documentación de gestión de cookies de los navegadores más utilizados para que sepas como hacerlo:
            </p>
            <nav class="level">
              <a
                href="https://support.google.com/chrome/answer/95647?hl=es&hlrm=en"
                class="level-item chrome has-text-warning"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Chrome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  Google <b>Chrome</b>
                </span>
              </a>
              <a
                href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10"
                class="level-item explorer has-text-warning"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Explorer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  Internet <b>Explorer</b>
                </span>
              </a>
              <a
                href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies"
                class="level-item firefox has-text-warning"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Firefox"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  Mozilla <b>Firefox</b>
                </span>
              </a>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                class="level-item safari has-text-warning"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Safari"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  Apple <b>Safari</b>
                </span>
              </a>
              <a
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                class="level-item opera has-text-warning"
                title="Como bloquear o eliminar las cookies instaladas por #HazTuNegocioDigital en tu navegador Opera"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  <b>Opera</b>
                </span>
              </a>
            </nav>
            <p class="block">
              Ten en cuenta que si eliges bloquear las cookies esto puede afectar al correcto funcionamiento de este sitio web.
            </p>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Cookies en los dispositivos móviles
            </h3>
            <p class="block">
              En <span class="has-text-primary has-text-weight-medium">{{ owner.copyright }}</span> también usamos cookies en dispositivos móviles. En este caso los navegadores de
              los dispositivos móviles permiten configurar las opciones o ajustes de privacidad para desactivar o eliminar las cookies.
              Aquí te dejamos una relación de enlaces a la documentación de gestión de cookies de los navegadores móviles más utilizados:
            </p>
            <nav class="level">
              <a
                href="https://support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1"
                class="level-item chrome has-text-warning"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Chrome Mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  <b>Chrome</b> Mobile
                </span>
              </a>
              <a
                href="https://support.apple.com/es-es/HT201265"
                class="level-item ios has-text-warning"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Apple iOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  <b>iPhone</b> Safari
                </span>
              </a>
              <a
                href="https://support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq"
                class="level-item windows has-text-warning"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Windows Phone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  <b>Windows</b> Phone
                </span>
              </a>
              <a
                href="https://help.opera.com/en/latest/web-preferences/"
                class="level-item opera has-text-warning"
                title="Como cambiar los permisos y el almacenamiento de datos en todos los sitios web que has visitado en Opera Mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="has-underline">
                  <b>Opera</b> Mobile
                </span>
              </a>
            </nav>

            <h3 class="subtitle is-title has-text-weight-bold is-size-5 is-size-6-mobile mt-5">
              Aceptación de la política de cookies
            </h3>
            <p class="block">
              Por la utilización de este sitio web <b class="has-text-success">aceptas expresamente</b>
              el tratamiento de la información recabada en la forma y con los fines mencionados a lo largo de esta
              <em>política de cookies</em>. Afirma conocer la posibilidad de rechazar el tratamiento de tales datos
              o información rechazando el uso de cookies mediante la selección de la configuración apropiada a tal fin
              en su navegador. Si bien esta opción de bloqueo de cookies en tu navegador puede no permitirte el uso
              pleno de todas las funcionalidades del sitio web.
            </p>
            <p class="block">
              Y fin de las parrafadas legales. Esperamos no haberte aburrido mucho y agradecemos el esfuerzo de haber
              llegado hasta aquí 👏
            </p>
          </div>
        </article>
        
      </div>
    </section>

    <TheFooter />
  </main>
</template>

<script>
import faqs from '~/data/faqs'

export default {
  layout: 'NotHome',
  data() {
    return {
      currentLink: 0,
      owner: this.$store.state.owner,
      links: this.$store.state.pages.links,
      faqs: faqs,
      header: {
        legal: 'Aviso Legal',
        about: 'Sobre Chef Ioana'
      },
      sections: [
        { name: 'Responsable', link: 'responsability' },
        { name: 'Términos del servicio', link: 'service' },
        { name: 'Uso del website', link: 'terms' },
        { name: 'Privacidad', link: 'privacy' },
        { name: 'Cookies', link: 'cookies' }
      ]
    }
  },
  head() {
    const title = 'Aviso legal de'
    const description =
      'Aviso legal: condiciones de uso y términos legales del website de ' + this.owner.copyright + ', Valdemoro, Madrid. Reservas y consultas por teléfono y WhatsApp: 644 09 34 70'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title + ' ' + this.owner.copyright },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonical },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title + ' ' + this.owner.copyright },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: canonical }
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
        { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
        { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
        {
          rel: "dns-prefetch",
          href: "//support.google.com/chrome/answer/95647?hl=es&hlrm=en",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies#ie=ie-10",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-?redirectlocale=en-US&redirectslug=Cookies",
        },
        {
          rel: "dns-prefetch",
          href: "//support.apple.com/es-es/guide/safari/sfri11471/mac",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/#cookies",
        },
        {
          rel: "dns-prefetch",
          href:
            "//support.google.com/chrome/answer/114662?hl=es&visit_id=637387185293136031-776021146&rd=1",
        },
        { rel: "dns-prefetch", href: "//support.apple.com/es-es/HT201265" },
        {
          rel: "dns-prefetch",
          href:
            "//support.microsoft.com/es-es/help/4036480/windows-phone-8-1-end-of-support-faq",
        },
        {
          rel: "dns-prefetch",
          href: "//help.opera.com/en/latest/web-preferences/",
        },
      ],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    showLink(id) {
      return this.currentLink === id
    },
    toggleClick(id) {
      if(this.currentLink !== 0) {
        this.currentLink = 0
        return false
      }
      this.currentLink = id
    }
  }
}
</script>
