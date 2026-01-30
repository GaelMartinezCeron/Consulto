import "./App.css";

const App: React.FC = () => {
  const whatsappLink: string =
    "https://wa.me/5219999999999?text=Hola,%20quiero%20una%20página%20web%20profesional%20para%20mi%20negocio";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado. Te contactaremos pronto 🚀");
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>
          Convierte visitas en <span>clientes reales</span> con una página web
          profesional
        </h1>

        <p>
          Diseñamos páginas web modernas, rápidas y optimizadas para que tu
          negocio venda más desde el primer día.
        </p>

        <div className="hero-actions">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Cotizar por WhatsApp 🚀
          </a>

          <a href="#formulario" className="btn-secondary">
            Quiero que me contacten
          </a>
        </div>

        <div className="trust">
          ⭐ +50 proyectos entregados · 💼 Soporte real · ⚡ Resultados medibles
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits">
        <h2>¿Por qué tu negocio necesita esta web?</h2>

        <div className="cards">
          <div className="card">
            <h3>📈 Más ventas</h3>
            <p>
              Páginas diseñadas para convertir visitantes en clientes, no solo
              verse bonitas.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Carga ultra rápida</h3>
            <p>
              Web optimizada para que no pierdas clientes por lentitud.
            </p>
          </div>

          <div className="card">
            <h3>📱 Responsive</h3>
            <p>
              Se ve perfecta en celular, tablet y computadora.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="form-section" id="formulario">
        <h2>Solicita tu cotización ahora</h2>
        <p>Déjanos tus datos y te contactamos en menos de 24 horas</p>

        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="tel" placeholder="WhatsApp" required />

          <select required>
            <option value="">¿Qué necesitas?</option>
            <option value="web">Página web empresarial</option>
            <option value="tienda">Tienda en línea</option>
            <option value="landing">Landing page</option>
            <option value="redesign">Rediseño web</option>
          </select>

          <textarea placeholder="Cuéntanos brevemente tu proyecto" />

          <button type="submit" className="btn-primary full">
            Quiero vender más 🔥
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Tu Agencia Web · Todos los derechos reservados
      </footer>
    </>
  );
};

export default App;
