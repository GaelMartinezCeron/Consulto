import Testimonios from "./Testimonios";

const Home: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>
            Convierte visitas en <span>clientes reales</span> con una página web
            profesional
          </h1>

          <p>
            Diseñamos páginas web modernas, rápidas y optimizadas para que tu
            negocio venda más.
          </p>

          <div className="hero-actions">
            <a
              href="https://wa.me/5215510306346"
              target="_blank"
              className="btn btn-whatsapp"
            >
              Cotizar por WhatsApp 🚀
            </a>

            <a href="/proyectos" className="btn btn-secondary">
              Ver proyectos
            </a>
          </div>
        </div>
      </section>

      <Testimonios />
    </>
  );
};

export default Home;
