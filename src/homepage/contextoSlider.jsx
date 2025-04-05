import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ReactSVG } from "react-svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./contextoHome.css";

const slides = [
  {
    svgPath: "/images/contexto-01.svg",
    title: "Jalisco, el epicentro de una crisis",
    x: "50%", // General title x
    y: "50%", // General title y
    bullets: [
      { title: "Desapariciones en Jalisco", 
        titleX: "50%", titleY: "15%", 
        text: "Entre 2018 y 2024, Jalisco reportó 15,348 casos de desapariciones, de los cuales 13,754 corresponden al Área Metropolitana de Guadalajara (SISOVID, 2024).", 
        textX: "50%", textY: "50%" },
      { title: "Promedio diario", 
        titleX: "50%", titleY: "15%", 
        text: "En Jalisco desaparecen aproximadamente 6.7 personas al día y 5.9 en el AMG, sin incluir los casos de personas localizadas sin vida.", 
        textX: "50%", textY: "50%" },
      { title: "Más allá de los números",
        titleX: "50%", titleY: "15%",  
        text: "Cada cifra representa una vida y el impacto en familias que viven en constante incertidumbre y dolor.", 
        textX: "50%", textY: "50%" },
    ]
  },
  {
    svgPath: "/images/contexto-02.svg",
    title: "La realidad es que el problema es aún mayor",
    x: "50%", // General title x
    y: "50%", // General title y
    bullets: [
      { title: "Cifra negra",
        titleX: "50%", titleY: "50%", 
        text: "La cantidad de casos no denunciados agrava la realidad, debido al miedo y a la presión externa.", 
        textX: "50%", textY: "50%" },
      { title: "Desafíos en la gestión de datos",
        titleX: "50%", titleY: "50%", 
        text: "Se han documentado omisiones y manipulaciones en las cifras oficiales (CEED-UDG, 2022; El Informador, 2023), lo que dificulta conocer la magnitud real.", 
        textX: "50%", textY: "50%" },
      { title: "Coordinación y transparencia",
        titleX: "50%", titleY: "50%", 
        text: "La crisis demanda mejorar la coordinación interinstitucional y garantizar el acceso a datos veraces.", 
        textX: "50%", textY: "50%" },
      { title: "Manipulación de la verdad",
        titleX: "50%", titleY: "50%", 
        text: "Las distorsiones y omisiones en la información oficial aumentan el desafío de enfrentar este fenómeno.", 
        textX: "50%", textY: "50%" }
    ]
  },
  {
    svgPath: "/images/contexto-03.svg",
    title: "La esperanza nació de los colectivos",
    x: "50%", // General title x
    y: "50%", // General title y
    bullets: [
      { title: "FUNDEJ (2013)", 
        titleX: "50%", titleY: "50%", 
        text: "Impulsó la Ley de Personas Desaparecidas en Jalisco.", 
        textX: "50%", textY: "50%" },
      { title: "Por Amor a Ellxs", 
        titleX: "50%", titleY: "50%", 
        text: "Desarrolla estrategias de difusión e identificación forense.", 
        textX: "50%", textY: "50%" },
      { title: "Luz de Esperanza y Madres Buscadoras",
        titleX: "50%", titleY: "50%", 
        text: "Iniciaron búsquedas en campo; este último, desde 2022, aporta visibilidad y apoyo a las familias.", 
        textX: "50%", textY: "50%" },
      { title: "Evento clave (junio 2016)", 
        titleX: "50%", titleY: "50%", 
        text: "Por Amor a Ellxs y CEPAD denunciaron la falta de acceso a expedientes, logrando la intervención de Jan Jarab, Representante de la ONU-DH México.", 
        textX: "50%", textY: "50%" },
      { title: "Transformación institucional", 
        titleX: "50%", titleY: "50%", 
        text: "La presión de los colectivos facilitó la creación de la Fiscalía Especializada en Personas Desaparecidas, con una Dirección de Análisis y Contexto para diagnósticos integrales.", 
        textX: "50%", textY: "50%" }
    ]
  },
  {
    svgPath: "/images/contexto-04.svg",
    title: "El desafío de la transparencia y la búsqueda de verdad",
    x: "50%", // General title x
    y: "50%", // General title y
    bullets: [
      { title: "Reivindicación de datos",
        titleX: "50%", titleY: "50%",
        text: "Las familias exigen saber cómo se generan, gestionan y publican los datos de desapariciones.", 
        textX: "50%", textY: "50%" },
      { title: "Compromisos estatales", 
        titleX: "50%", titleY: "50%", 
        text: "El pliego petitorio de los colectivos incluye 29 compromisos en materia de transparencia y coordinación, exigiendo acceso libre o diferenciado para un escrutinio ciudadano riguroso.", 
        textX: "50%", textY: "50%" },
      { title: "El papel de la academia",
        titleX: "50%", titleY: "50%", 
        text: "La sistematización de datos y la intervención de la academia, como en el informe 'El SISOVID es un gran engaño' (Comité Universitario, 2023), son claves para enfrentar un sistema que a menudo oculta la magnitud del dolor.", 
        textX: "50%", textY: "50%" }
    ]
  }
];

const DesaparecidasContexto = () => {
  const [currentSvg, setCurrentSvg] = useState(slides[0].svgPath);
  const [isFading, setIsFading] = useState(false);
  const [placeholderPositions, setPlaceholderPositions] = useState([]);

  const bulletSlides = slides.flatMap((slide) =>
    slide.bullets.map((bullet) => ({
      svgPath: slide.svgPath,
      title: slide.title,
      bulletTitle: bullet.title,
      bulletText: bullet.text,
        titleX: bullet.titleX,
        titleY: bullet.titleY,
        textX: bullet.textX,
        textY: bullet.textY,
    }))
  );

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;

    // Trigger fade-out only when the SVG is changing
    if (bulletSlides[activeIndex].svgPath !== currentSvg) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSvg(bulletSlides[activeIndex].svgPath);
        setIsFading(false);
      }, 500); // Match the CSS transition duration
    }
  };

  const handleSvgLoad = (svg) => {
    const placeholders = ["{bullet.title}", "{bullet.text}"];
    const positions = [];

    placeholders.forEach((placeholder) => {
      const textElement = Array.from(svg.querySelectorAll("text")).find((el) =>
        el.textContent.includes(placeholder)
      );
      if (textElement) {
        const bbox = textElement.getBoundingClientRect();
        const svgRect = svg.getBoundingClientRect();
        positions.push({
          placeholder,
          x: bbox.x - svgRect.x + bbox.width / 2,
          y: bbox.y - svgRect.y + bbox.height / 2,
        });
      }
    });

    // Only update state if positions have changed
    setPlaceholderPositions((prevPositions) => {
      const hasChanged =
        positions.length !== prevPositions.length ||
        positions.some(
          (pos, index) =>
            pos.x !== prevPositions[index]?.x || pos.y !== prevPositions[index]?.y
        );
      return hasChanged ? positions : prevPositions;
    });
  };

  return (
    <div className="contexto-slider-wrapper">
      {/* Inline SVG with fade effect */}
      <div className={`inline-svg-container ${isFading ? "fade-out" : "fade-in"}`}>
        <ReactSVG
          src={currentSvg}
          className="inline-svg"
          beforeInjection={(svg) => {
            handleSvgLoad(svg);
          }}
        />
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        className="contexto-slider"
        onSlideChange={handleSlideChange}
      >
        {bulletSlides.map((bulletSlide, index) => (
          <SwiperSlide key={index} style={{ position: "relative", height: "100vh" }}>
            <div className="slide-content" style={{ height: "100%", width: "100%", position: "relative" }}>
              {/* Position bullet.title */}
              {placeholderPositions
                .filter((pos) => pos.placeholder === "{bullet.title}")
                .map((pos, i) => (
                  <h3
                    key={`title-${i}`}
                    x={pos.x}
                    y={pos.y}
                    style={{
                      position: "absolute",
                      left: `${bulletSlide.titleX}`,
                      top: `${bulletSlide.titleY}`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {bulletSlide.bulletTitle}
                  </h3>
                ))}

              {/* Position bullet.text */}
              {placeholderPositions
                .filter((pos) => pos.placeholder === "{bullet.text}")
                .map((pos, i) => (
                  <p
                    key={`text-${i}`}
                    x={pos.x}
                    y={pos.y}
                    style={{
                      position: "absolute",
                      left: `${bulletSlide.textX}`,
                      top: `${bulletSlide.textY}`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {bulletSlide.bulletText}
                  </p>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesaparecidasContexto;