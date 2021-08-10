import React from "react";
import business from "../../img/large/business.jpg";

const Conocenos = () => {
  return (
    <div>
      <head>
        <meta charset="UTF-8" />
        <meta name="author" content="Monroy Real State" />
        <meta
          name="description"
          content="En está parte del sitio web encontrarás información sobre nosotros como empresa, nuestra misión, nuestro equipo de trabajo, los servicios que ofrecemos y lo más importante, por que somos tu mejor opción como movilaria"
        />
        <meta
          name="keywords"
          content="Monroy Real State, servicios,misión, real state monroy, porque monroy real state, equipo de trabajo, asesores inmobiliarios"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        ></meta>
        <title>Conócenos </title>
        <link rel="icon" href="images/fondo/Icon_monroy.png" />
        <link rel="stylesheet" type="text/css" href="css/estilos.css" />
        {/* hoja de estilos de fancybox */}
        <link
          rel="stylesheet"
          href="css/jquery.fancybox.css"
          type="text/css"
          media="screen"
        />
        {/* webfonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* javascript */}
        <link rel="stylesheet" type="text/javascript" href="js/classie.js" />
        <link rel="stylesheet" type="text/javascript" href="js/main.js" />
      </head>
      <body>
        {/* <!--envolvente--> */}
        <div class="envolvente">
          {/* <!--section#1 SUBMENU--> */}
          <section class="SUBMENU">
            <div className="SubmenuFlex">
              <a href="conocenos.html" target="_self">
                ¿Por qué MONROY Real Estate?
              </a>
              <a href="asesores.html" target="_self">
                Asesores inmobiliarios
              </a>
              <a href="mision.html" target="_self">
                Misión
              </a>
              <a href="nuestrosservicios.html" target="_self">
                Nuestros Servicios
              </a>
            </div>
          </section>
          {/* <!--section#2 MONROY--> */}
          <section class="MONROY">
       <h2>¿Por qué MONROY <span class="light">Real Estate?</span></h2>
       <div class="clearfix">
           <figure> <a class="fancybox centro" rel="group1" href="images/img/large/business.jpg" title="business"><img src="images/img/large/business.jpg" alt="business"/> </a>
            <figcaption>
                <h3>ASESORÍA INTEGRAL</h3>
                <p>Revisamos a fondo tus necesidades para ayudarte con todos los aspectos de la renta o venta de tu inmueble</p>
            </figcaption>
            </figure>
        </div>
    </section>

          {/* <!--section#3 EXCELENTE--> */}
           <section class="EXCELENTE">
            <div class="clearfix">
              <figure>
                
                <a
                  class="fancybox centro"
                  rel="group1"
                  href={business}
                  title="business"
                >
                  <img src={business} alt="business" />
                </a>
                <figcaption>
                  <h3>EXCELENTE ATENCIÓN</h3>
                  <p>
                    Te brindamos un servicio inmobiliario de un alto estándar de
                    calidad y de acuerdo a tus requerimientos
                  </p>
                </figcaption>
              </figure>
            </div>
          </section> 
          {/* <!--section#4 PROCESOS--> */}
        <section class="PROCESOS">
            <div class="clearfix">
              <figure>
                
                <a
                  class="fancybox centro"
                  rel="group1"
                  href={business}
                  title="business"
                >
                  <img
                    src={business}
                    alt="business"
                  />
                </a>
                <figcaption>
                  <h3>PROCESOS OPTIMIZADOS</h3>
                  <p>
                    Formamos parte de la Asociación Mexicana de Profesionales
                    Inmobiliarios (AMPI), lo que implica haber pasado por un
                    proceso estricto de selección para garantizar nuestra
                    operación y brindarle a usted seguridad y confianza en todos
                    y cada uno de los trámites que realices con nosotros
                  </p>
                </figcaption>
              </figure>
            </div>
          </section> 
          {/* <!--section#5 EFICACIA --> */}
           <section class="EFICACIA">
            <div class="clearfix">
              <figure>
                <a
                  class="fancybox centro"
                  rel="group1"
                  href={business}
                  title="business"
                >
                  <img src="./img/small/business_small.jpg" alt="business" />
                </a>
                <figcaption>
                  <h3>EFICACIA</h3>
                  <p>
                    Nuestro equipo está capacitado para responder todas tus
                    solicitudes de la mejor manera y en el menor tiempo posible,
                    con todo el profesionalismo, respeto y seriedad que mereces
                  </p>
                </figcaption>
              </figure>
            </div>
          </section> 

          {/* <!-- scripts -->  */}
          {/* <script type="text/javascript" src="js/jquery.min.js"></script> 
  <script type="text/javascript"  src="js/jquery.fancybox.pack.js"></script> 
  <script>
$(document).ready(function() {
$('.fancybox').fancybox();
});
</script>  */}
        </div>
      </body>
    </div>
  );
};

export default Conocenos;
