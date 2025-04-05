import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ReactSVG } from "react-svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./contextoHome.css";

const swiperRef = React.createRef();
const slides = [
    {
      svgPath: "/images/contexto-01.svg",
      title: "Jalisco, el epicentro de una crisis",
      x: "50%",
      y: "15%",
      bulletsAttributes: { titleX: "70%", titleY: "30%", textX: "70%", textY: "55%", textWidth: "40%" },
      bullets: [
        {
          title: "Desapariciones en cifras",
          text: "Entre 2018 y 2024, Jalisco reportó 15,348 casos de desapariciones, de los cuales 13,754 corresponden al Área Metropolitana de Guadalajara (SISOVID, 2024). {Cada caso es una historia de dolor y resistencia que merece ser contado}{gotoslide(2)}"
        },
        {
          title: "Impacto diario",
          text: "En promedio, en Jalisco desaparecen 6.7 personas al día y 5.9 en el AMG, sin contar los casos de personas localizadas sin vida. {Las cifras revelan la magnitud de un problema que afecta a toda la sociedad}{gotoslide(3)}"
        },
        {
          title: "Más allá de los números",
          text: "Cada cifra representa una vida y el impacto en familias que viven en constante incertidumbre y dolor. {Descubre cómo estos datos se traducen en historias personales}{gotoslide(4)}"
        }
      ]
    },
    {
      svgPath: "/images/contexto-02.svg",
      title: "La realidad es que el problema es aún mayor",
      x: "50%",
      y: "15%",
      bulletsAttributes: { titleX: "70%", titleY: "40%", textX: "50%", textY: "50%", textWidth: "60%" },
      bullets: [
        {
          title: "Cifra negra",
          text: "La cantidad de casos no denunciados agrava la realidad, debido al miedo y a la presión externa. {Explora cómo este vacío de información amplifica la crisis}{gotoslide(5)}"
        },
        {
          title: "Gestión y manipulación de datos",
          text: "Omisiones y manipulaciones en las cifras oficiales (CEED-UDG, 2022; El Informador, 2023) dificultan conocer la magnitud real. {Esto ha motivado exigencias por mayor transparencia}{gotoslide(6)}"
        },
        {
          title: "Coordinación y transparencia",
          text: "La crisis exige una mejora en la coordinación interinstitucional para garantizar el acceso a datos veraces. {Revisa las propuestas de coordinación del Estado}{gotoslide(7)}"
        },
        {
          title: "Distorsión de la verdad",
          text: "Las omisiones en la información oficial aumentan el desafío de enfrentar este fenómeno. {Descubre cómo los colectivos luchan contra la manipulación de datos}{gotoslide(8)}"
        }
      ]
    },
    {
      svgPath: "/images/contexto-03.svg",
      title: "La esperanza nació de los colectivos",
      x: "50%",
      y: "15%",
      bulletsAttributes: { titleX: "70%", titleY: "40%", textX: "50%", textY: "50%", textWidth: "60%" },
      bullets: [
        {
          title: "Iniciativas transformadoras",
          text: "Colectivos como FUNDEJ (2013) impulsaron la Ley de Personas Desaparecidas en Jalisco. {Sin embargo, la implementación sigue enfrentando retos}{gotoslide(9)}"
        },
        {
          title: "Estrategias innovadoras",
          text: "Por Amor a Ellxs desarrolla métodos para la difusión e identificación forense. {Su denuncia en 2016 marcó un antes y un después}{gotoslide(10)}"
        },
        {
          title: "Acción en el terreno",
          text: "Luz de Esperanza y Madres Buscadoras han iniciado búsquedas en campo; este último, desde 2022, brinda apoyo y visibilidad. {Su labor refuerza la importancia de la memoria colectiva}{gotoslide(11)}"
        },
        {
          title: "Evento clave (junio 2016)",
          text: "Por Amor a Ellxs y CEPAD denunciaron la falta de acceso a expedientes, logrando la intervención de Jan Jarab, Representante de la ONU-DH México. {Este hecho impulsó cambios institucionales}{gotoslide(12)}"
        },
        {
          title: "Transformación institucional",
          text: "La presión de los colectivos facilitó la creación de la Fiscalía Especializada en Personas Desaparecidas, con una Dirección de Análisis y Contexto para diagnósticos integrales. {¿Se ha cumplido con la transparencia prometida?}{gotoslide(13)}"
        }
      ]
    },
    {
      svgPath: "/images/contexto-04.svg",
      title: "El desafío de la transparencia y la búsqueda de verdad",
      x: "50%",
      y: "15%",
      bulletsAttributes: { titleX: "70%", titleY: "40%", textX: "50%", textY: "50%", textWidth: "60%" },
      bullets: [
        {
          title: "Reivindicación de datos",
          text: "Las familias exigen claridad sobre cómo se generan, gestionan y publican los datos de desapariciones. {Este reclamo nace de la desconfianza acumulada}{gotoslide(14)}"
        },
        {
          title: "Compromisos estatales",
          text: "El pliego petitorio de los colectivos incluye 29 compromisos en materia de transparencia y coordinación, exigiendo acceso libre o diferenciado para un escrutinio riguroso. {Estos compromisos reflejan luchas previas y actuales}{gotoslide(15)}"
        },
        {
          title: "El papel de la academia",
          text: "La sistematización de datos y la intervención de la academia, como en el informe 'El SISOVID es un gran engaño' (Comité Universitario, 2023), son esenciales para enfrentar distorsiones en la información oficial. {La investigación académica ilumina la verdad}{gotoslide(1)}"
        }
      ]
    }
  ];
  
  

const DesaparecidasContexto = () => {
  const [currentSvg, setCurrentSvg] = useState(slides[0].svgPath);
  const [currentTitle, setCurrentTitle] = useState(slides[0].title);
  const [isFading, setIsFading] = useState(false);
  const [placeholderPositions, setPlaceholderPositions] = useState([]);

  const bulletSlides = slides.flatMap((slide) =>
    slide.bullets.map((bullet) => ({
      svgPath: slide.svgPath,
      title: slide.title,
      bulletTitle: bullet.title,
      bulletText: bullet.text,
      titleX: bullet.titleX || slide.bulletsAttributes.titleX,
      titleY: bullet.titleY || slide.bulletsAttributes.titleY,
      textX: bullet.textX || slide.bulletsAttributes.textX,
      textY: bullet.textY || slide.bulletsAttributes.textY,
      textWidth: slide.bulletsAttributes.textWidth,
    }))
  );

  const parseTextWithAction = (text) => {
    const regex = /{([^}]+)}{gotoslide\((\d+)\)}/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        const segment = text.slice(lastIndex, match.index);
        segment.split("<br>").forEach((part, i, arr) => {
          parts.push({ type: "text", content: part });
          if (i < arr.length - 1) parts.push({ type: "br" });
        });
      }
      parts.push({ type: "link", content: match[1], slideNumber: parseInt(match[2], 10) });
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      const remaining = text.slice(lastIndex);
      remaining.split("<br>").forEach((part, i, arr) => {
        parts.push({ type: "text", content: part });
        if (i < arr.length - 1) parts.push({ type: "br" });
      });
    }

    return parts;
  };

  const handleAction = (slideNumber) => {
    const swiperInstance = swiperRef.current; // Access the Swiper instance
    if (swiperInstance) {
      swiperInstance.slideTo(slideNumber - 1); // Navigate to the specified slide (0-based index)
    }
  };

  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex;

    // Trigger fade-out only when the SVG or title is changing
    if (bulletSlides[activeIndex].svgPath !== currentSvg) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSvg(bulletSlides[activeIndex].svgPath);
        setCurrentTitle(bulletSlides[activeIndex].title);
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
      <div
        className={`inline-svg-container ${isFading ? "fade-out" : "fade-in"}`}
        title={currentTitle}
      >
        <h1
          style={{
            position: "absolute",
            top: slides.find((slide) => slide.svgPath === currentSvg)?.y || "50%",
            left: slides.find((slide) => slide.svgPath === currentSvg)?.x || "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1, // Ensure it appears above the SVG
          }}
        >
          {currentTitle}
        </h1>
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
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Bind Swiper instance to ref
      >
        {bulletSlides.map((bulletSlide, index) => (
          <SwiperSlide key={index} style={{ position: "relative", height: "100vh" }}>
            <div className="slide-content" style={{ height: "100%", width: "100%", position: "relative" }}>
              {/* Position bullet.title */}
              <h3
                style={{
                  position: "absolute",
                  left: `${bulletSlide.titleX}`,
                  top: `${bulletSlide.titleY}`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {bulletSlide.bulletTitle}
              </h3>

              {/* Position bullet.text */}
              <p
                style={{
                  position: "absolute",
                  left: `${bulletSlide.textX}`,
                  top: `${bulletSlide.textY}`,
                  width: `${bulletSlide.textWidth}`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {parseTextWithAction(bulletSlide.bulletText).map((part, index) =>
                  part.type === "text" ? (
                    part.content
                  ) : part.type === "br" ? (
                    <br key={index} />
                  ) : (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAction(part.slideNumber);
                      }}
                      className="action-link"
                    >
                      {part.content}
                    </a>
                  )
                )}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesaparecidasContexto;