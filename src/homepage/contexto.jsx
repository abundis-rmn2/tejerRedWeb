import React from "react";
import DesaparicionesSwiper from "./contextoSlider"; // Ensure this is a default import and the path is correct

const Contexto = React.forwardRef((props, ref) => {
  return (
    <section className="fullpage section-two" ref={ref}>
      <DesaparicionesSwiper />
    </section>
  );
});

export default Contexto;
