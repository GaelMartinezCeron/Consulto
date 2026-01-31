interface Proyecto {
  id: number;
  nombre: string;
  cliente: string;
  descripcion: string;
  resultado: string;
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Landing de Ventas Inmobiliaria",
    cliente: "Grupo Hábitat",
    descripcion:
      "Diseño y desarrollo de landing page enfocada en captación de leads.",
    resultado: "+65% de contactos en 30 días",
  },
  {
    id: 2,
    nombre: "Web Corporativa Abogados",
    cliente: "Lex & Asociados",
    descripcion:
      "Página institucional moderna con formularios de contacto optimizados.",
    resultado: "Duplicó solicitudes de asesoría",
  },
  {
    id: 3,
    nombre: "Tienda en Línea",
    cliente: "Moda Urbana MX",
    descripcion:
      "E-commerce rápido, optimizado para móviles y SEO.",
    resultado: "+40% ventas el primer mes",
  },
];

const Proyectos: React.FC = () => {
  return (
    <section className="projects section">
      <div className="container">
        <div className="projects-header">
          <h1>Nuestros Proyectos</h1>
          <p>
            Algunos de los trabajos realizados por nuestra consultora.
            Resultados reales para negocios reales.
          </p>
        </div>

        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="project-card">
              <span className="project-tag">{proyecto.cliente}</span>
              <h3>{proyecto.nombre}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="resultado">{proyecto.resultado}</div>
            </div>
          ))}
        </div>

        <div className="cta-projects">
          <h2>¿Quieres resultados como estos?</h2>
          <a
            href="https://wa.me/5215510306346"
            target="_blank"
            className="btn btn-whatsapp"
          >
            Cotizar mi proyecto 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
