import React, { useRef } from "react"
import "../styles/index.css"

const Menu = ({ scrollToSection }) => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="/images/ruta_del_logo.png" alt="Logo" />
      </div>
      <nav className="menu-links">
        <button onClick={() => scrollToSection("section2")}>Contexto</button>
        <button onClick={() => scrollToSection("section3")}>Proyectos</button>
        <button onClick={() => scrollToSection("section4")}>Contacto</button>
      </nav>
    </div>
  )
}

const IndexPage = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  }

  const scrollToSection = section => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="App">
      <SectionOne scrollToNext={() => scrollToSection("section2")} ref={sectionRefs.section1} />
      <Menu scrollToSection={scrollToSection} />
      <SectionTwo ref={sectionRefs.section2} />
      <SectionThree ref={sectionRefs.section3} />
      <SectionFour ref={sectionRefs.section4} />
    </div>
  )
}

const SectionOne = React.forwardRef(({ scrollToNext }, ref) => {
  return (
    <section className="fullpage section-one" ref={ref}>
      {/* Video de fondo */}
      <video autoPlay muted loop className="background-video">
        <source src="/videos/ruta_del_video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="overlay">
        {/* Aquí se implementaría la animación: punto de color, recorrido de línea, generación de branches y aparición de una red/diagrama de git */}
        <div className="sora-animation">
          {/* Pseudocódigo de animación según prompt para Sora */}
        </div>
        {/* Logo superpuesto */}
        <div className="logo">
          <img src="/images/ruta_del_logo.png" alt="Logo" />
        </div>
        {/* Botón para avanzar a la siguiente sección */}
        <button onClick={scrollToNext} className="next-button">
          Entrar
        </button>
      </div>
    </section>
  )
})

const SectionTwo = React.forwardRef((props, ref) => {
  return (
    <section className="fullpage section-two" ref={ref}>
      <div className="slide">
        <h2>Contextualización</h2>
        <p>
          Aquí se mostrará la información del dossier. Se pueden incorporar datos y análisis que contextualicen la crisis de desapariciones en México, resaltando cifras, testimonios y avances de los colectivos de búsqueda.
        </p>
      </div>
    </section>
  )
})

const Project = ({ title, description, image, links, reverse }) => {
  return (
    <div className={`project ${reverse ? "reverse" : ""}`}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

const SectionThree = React.forwardRef((props, ref) => {
  // Párrafo dummy de aproximadamente 300 palabras.
  const lorem300 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(20);
  return (
    <section className="fullpage section-three" ref={ref}>
      <h2>Proyectos en Desarrollo</h2>
      <div className="projects-container">
        <Project
          title="Reinterpretación poética de fichas de desaparecidos"
          description={lorem300}
          image="/images/ruta_imagen_1.jpg"
          links={[
            { label: "Pedir acceso", url: "#" },
            { label: "GitHub", url: "#" },
          ]}
          reverse={false}
        />
        <Project
          title="Cartografía para el análisis de la crisis de desapariciones en Jalisco"
          description={lorem300}
          image="/images/ruta_imagen_2.jpg"
          links={[
            { label: "Pedir acceso", url: "#" },
            { label: "GitHub", url: "#" },
          ]}
          reverse={true}
        />
        <Project
          title="Bitácora de Búsqueda - Ejemplo DECOFEM"
          description={lorem300}
          image="/images/ruta_imagen_3.jpg"
          links={[{ label: "Enlace", url: "#" }]}
          reverse={false}
        />
        <Project
          title="Relación entre personas desaparecidas y fallecidas sin identificar mediante tatuajes"
          description={lorem300}
          image="/images/ruta_imagen_4.jpg"
          links={[
            { label: "Pedir acceso", url: "#" },
            { label: "GitHub", url: "#" },
          ]}
          reverse={true}
        />
      </div>
    </section>
  );
});

const SectionFour = React.forwardRef((props, ref) => {
  return (
    <section className="fullpage section-four" ref={ref}>
      <h2>Contacto</h2>
      <p>
        Invitamos a participar, cofinanciar, colaborar en la depuración de datos y proponer nuevas herramientas de búsqueda, esquematización y análisis para enfrentar la crisis humanitaria.
      </p>
      <form action="mailto:tejer.red@gmail.com" method="post" encType="text/plain">
        <label>
          Nombre:
          <input type="text" name="nombre" required />
        </label>
        <label>
          Correo:
          <input type="email" name="correo" required />
        </label>
        <label>
          Mensaje:
          <textarea name="mensaje" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
})

export default IndexPage
