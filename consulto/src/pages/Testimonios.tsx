interface Testimonio {
  id: number;
  nombre: string;
  cargo: string;
  empresa: string;
  mensaje: string;
  iniciales: string;
}

const testimonios: Testimonio[] = [
  {
    id: 1,
    nombre: "Carlos Méndez",
    cargo: "Director Comercial",
    empresa: "Grupo Hábitat",
    mensaje:
      "La página empezó a generar contactos desde la primera semana. Ahora nuestros clientes llegan mejor informados y listos para cerrar.",
    iniciales: "CM",
  },
  {
    id: 2,
    nombre: "Mariana López",
    cargo: "Socia Fundadora",
    empresa: "Lex & Asociados",
    mensaje:
      "Queríamos algo profesional y claro. El resultado fue una web rápida, moderna y que realmente transmite confianza.",
    iniciales: "ML",
  },
  {
    id: 3,
    nombre: "Javier Torres",
    cargo: "Dueño",
    empresa: "Moda Urbana MX",
    mensaje:
      "Antes dependíamos solo de redes sociales. Con la nueva web tenemos una fuente constante de ventas.",
    iniciales: "JT",
  },
];

const Testimonios: React.FC = () => {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2>Lo que dicen nuestros clientes</h2>
          <p>
            Testimonios reales de negocios que confiaron en nosotros
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonios.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-top">
                <div className="avatar">{t.iniciales}</div>
                <div>
                  <strong>{t.nombre}</strong>
                  <span>
                    {t.cargo} · {t.empresa}
                  </span>
                </div>
              </div>

              <p className="testimonial-message">“{t.mensaje}”</p>
            </div>
          ))}
        </div>

        <div className="testimonial-cta">
          <h3>¿Listo para ser el próximo caso de éxito?</h3>
          <a
            href="https://wa.me/5215510306346"
            target="_blank"
            className="btn btn-whatsapp"
          >
            Quiero mi web 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
