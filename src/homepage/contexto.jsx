import React from "react";

const Contexto = React.forwardRef((props, ref) => {
  return (
    <section className="fullpage section-two" ref={ref}>
      <div className="slide">
        <h2>Contextualización</h2>
        <p>
          Aquí se mostrará la información del dossier. Se pueden incorporar datos y análisis que
          contextualicen la crisis de desapariciones en México.
        </p>
      </div>
    </section>
  );
});

export default Contexto;
