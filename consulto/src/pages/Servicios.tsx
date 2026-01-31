import { useState } from "react";
import { motion } from "framer-motion";

export default function Servicios() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = `
Hola, quiero una cotización.

Nombre: ${nombre}
Correo: ${email}
Mensaje: ${mensaje}
    `;

    const whatsapp = "https://wa.me/525510306346?text=" + encodeURIComponent(texto);
    window.open(whatsapp, "_blank");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9fafb" }}>

      {/* HERO */}
      <section style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          Convierte visitas en clientes con una página web profesional
        </motion.h1>

        <p style={{ maxWidth: 700, margin: "0 auto 2rem", color: "#444" }}>
          Diseñamos, desarrollamos y damos mantenimiento a páginas web modernas
          enfocadas en resultados reales para tu negocio.
        </p>

        <a
          href="https://wa.me/5215510306346"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "1rem 2rem",
            background: "#25D366",
            color: "#fff",
            textDecoration: "none",
            borderRadius: 8,
            fontWeight: "bold",
          }}
        >
          Cotizar por WhatsApp
        </a>
      </section>

      {/* PROBLEMA */}
      <section style={{ padding: "3rem 1rem", background: "#fff", textAlign: "center" }}>
        <h2>¿Tu página no genera clientes?</h2>
        <p>
          Sitios lentos, desactualizados o sin estrategia solo hacen que pierdas
          oportunidades.
        </p>
        <p><strong>Nosotros nos encargamos de tu web. Tú de tu negocio.</strong></p>
      </section>

      {/* SERVICIOS */}
      <section style={{ padding: "4rem 1rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Nuestros Servicios</h2>

        <div style={{ display: "grid", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
          <div>
            <h3>Desarrollo Web</h3>
            <p>Páginas rápidas, modernas y optimizadas para convertir visitantes en clientes.</p>
          </div>

          <div>
            <h3>Diseño UI/UX</h3>
            <p>Diseños profesionales que generan confianza y mejoran la experiencia del usuario.</p>
          </div>

          <div>
            <h3>Mantenimiento Web</h3>
            <p>Actualizaciones, seguridad y soporte continuo para que tu sitio nunca falle.</p>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section style={{ padding: "4rem 1rem", background: "#fff" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Planes de Mantenimiento</h2>

        <div style={{ display: "grid", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
          <div>
            <h3>Básico – $1,500 MXN / mes</h3>
            <p>Ideal si solo necesitas que tu web funcione sin problemas.</p>
          </div>

          <div style={{ border: "2px solid #000", padding: "1rem" }}>
            <h3>⭐ Profesional – $3,000 MXN / mes</h3>
            <p>Soporte prioritario, optimización y mejoras continuas.</p>
          </div>

          <div>
            <h3>Premium – $5,000 MXN / mes</h3>
            <p>Para negocios que requieren cambios constantes y atención directa.</p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section style={{ padding: "4rem 1rem" }}>
        <h2 style={{ textAlign: "center" }}>Hablemos de tu proyecto</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Déjanos tus datos y te contactamos en menos de 24 horas.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 500, margin: "0 auto", display: "grid", gap: "1rem" }}
        >
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Cuéntanos sobre tu proyecto"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />

          <button
            type="submit"
            style={{
              padding: "1rem",
              background: "#000",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Quiero mi cotización
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "2rem", background: "#111", color: "#fff" }}>
        Soluciones web profesionales enfocadas en resultados.<br />
        © 2026 – Todos los derechos reservados
      </footer>

    </div>
  );
}
