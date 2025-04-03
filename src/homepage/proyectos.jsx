import React from "react";

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
  );
};

const Proyectos = React.forwardRef((props, ref) => {
  const lorem300 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ".repeat(20);
  return (
    <section className="fullpage section-three" ref={ref}>
      <h2>Proyectos en Desarrollo</h2>
      <div className="projects-container">
        <Project
          title="Reinterpretación poética de fichas de desaparecidos"
          description={lorem300}
          image="/images/ruta_imagen_1.jpg"
          links={[{ label: "Pedir acceso", url: "#" }, { label: "GitHub", url: "#" }]}
          reverse={false}
        />
        <Project
          title="Cartografía de desapariciones en Jalisco"
          description={lorem300}
          image="/images/ruta_imagen_2.jpg"
          links={[{ label: "Pedir acceso", url: "#" }, { label: "GitHub", url: "#" }]}
          reverse={true}
        />
      </div>
    </section>
  );
});

export default Proyectos;
