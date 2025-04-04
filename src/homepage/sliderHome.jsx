import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ✅ Importa el módulo
import "swiper/css"; // Corrected import for Swiper's CSS
import "swiper/css/pagination"; // Import pagination styles
import "swiper/css/navigation"; // Import navigation styles
import "./sliderHome.css"; // Updated CSS import path

const SwiperComponent = () => {
  const swiperRef = useRef(null); // Reference to Swiper instance

  return (
    <>
      <div className="swiper-container">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          navigation={true} // ✅ Navegación activada
          modules={[Pagination, Navigation]} // ✅ Módulos registrados
          slidesPerView={1}
          onSlideChange={(swiper) => console.log("Slide index changed to: ", swiper.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper; // Store Swiper instance
            console.log("Swiper instance: ", swiper);
          }}
          onInit={(swiper) => {
            console.log("Swiper initialized: ", swiper);
          }}
        >
          <SwiperSlide>
            <h1>Tejer.RED: Un Proyecto para la Acción Social</h1>
            <p>
              <strong>Tejer.RED</strong> es una iniciativa colaborativa que reúne a profesionales de diversas disciplinas, como <strong>programación, sociología, y diseño gráfico</strong>, para enfrentar la crisis de desapariciones en México. Con herramientas de <strong>código abierto</strong>, buscamos fortalecer la acción de los colectivos de búsqueda y organizar datos críticos de forma <strong>transparente y accesible</strong>.
            </p>
            <a href="#!" onClick={() => swiperRef.current?.slideTo(1)}>Conocer más</a>
          </SwiperSlide>
          <SwiperSlide>
            <h1>La Crisis de Desapariciones en México</h1>
            <p>
              En México, la <strong>crisis de desapariciones</strong> ha dejado más de <strong>15,000 casos reportados</strong> entre 2018 y 2024. En Jalisco, los colectivos de búsqueda se enfrentan a la falta de datos confiables y a la <strong>desinformación</strong>, lo que dificulta las búsquedas efectivas. <strong>Tejer.RED</strong> nace para cambiar esta situación con herramientas tecnológicas accesibles y eficaces.
            </p>
            <a href="#!" onClick={() => swiperRef.current?.slideTo(2)}>Conocer más</a>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Objetivos de Tejer.RED</h1>
            <p>
              Nuestro proyecto tiene tres objetivos clave: <strong>desarrollar herramientas de código abierto</strong> adaptadas a las necesidades de los colectivos de búsqueda, <strong>organizar y visualizar los datos</strong> de manera efectiva, y <strong>garantizar la integridad</strong> de la información mediante sistemas de respaldo descentralizado.
            </p>
            <a href="#!" onClick={() => swiperRef.current?.slideTo(3)}>Conocer más</a>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Transformación Digital para la Búsqueda de Desaparecidos</h1>
            <p>
              <strong>Tejer.RED</strong> ofrece soluciones como el <strong>respaldo descentralizado</strong> de bases de datos, la <strong>visualización geolocalizada</strong> de desapariciones, la creación de <strong>galerías de evidencias</strong> post-hallazgo, y sistemas para <strong>vincular tatuajes con registros forenses</strong>. Cada herramienta está diseñada para hacer frente a la crisis de desapariciones con <strong>tecnología avanzada y accesible</strong>.
            </p>
            <a href="#!" onClick={() => swiperRef.current?.slideTo(4)}>Conocer más</a>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Gobernanza Abierta y Participativa</h1>
            <p>
              <strong>Tejer.RED</strong> se basa en un modelo de <strong>gobernanza participativa</strong>, fomentando la <strong>transparencia</strong>, la <strong>rendición de cuentas</strong>, y la <strong>colaboración activa</strong> de la comunidad en el desarrollo y la toma de decisiones dentro del proyecto. Todos los desarrollos se realizan bajo <strong>licencias de código abierto</strong>, permitiendo que cualquier persona pueda contribuir y mejorar las herramientas.
            </p>
            <a href="#!" onClick={() => swiperRef.current?.slideTo(5)}>Conocer más</a>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Roadmap: Futuro de Tejer.RED</h1>
            <p>
              A corto plazo, finalizaremos herramientas clave y comenzaremos pilotos en los colectivos de Michoacán y Guanajuato. En el mediano y largo plazo, buscaremos ampliar la <strong>interoperabilidad</strong> de nuestras soluciones, consolidar <strong>alianzas</strong> con instituciones, y crear un ecosistema <strong>sostenible</strong> para la lucha contra las desapariciones.
            </p>
            <a href="#!" onClick={() => swiperRef.current?.slideTo(6)}>Conocer más</a>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Únete a Tejer.RED</h1>
            <p>
              <strong>Tejer.RED</strong> es una invitación a la acción. Cada contribución es crucial para transformar la forma en que abordamos la <strong>crisis de desapariciones</strong> en México. Únete al proyecto, ya sea como <strong>voluntario, desarrollador, investigador</strong>, o colaborador. Tu participación es vital para la <strong>transparencia</strong> y la <strong>justicia</strong>.
            </p>
            <a href="#!" onClick={() => window.scrollToSection("section2")}>Conocer más</a>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default SwiperComponent;
