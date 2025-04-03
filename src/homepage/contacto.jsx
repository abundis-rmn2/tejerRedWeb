import React from "react";

const Contacto = React.forwardRef((props, ref) => {
  return (
    <section className="fullpage section-four" ref={ref}>
      <h2>Contacto</h2>
      <p>
        Invitamos a participar, cofinanciar y colaborar en la depuración de datos y desarrollo de herramientas.
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
  );
});

export default Contacto;
