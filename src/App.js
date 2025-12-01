import React from "react";

export default function App() {
  const openDemo = () => {
    alert("Demo interactiva (placeholder). Puedo integrar mapas reales si quieres.");
  };

  const submitForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value || "Usuario";
    alert(`Gracias, ${name}. Tu mensaje fue recibido (simulado).`);
  };

  return (
    <div className="min-h-screen text-slate-200 bg-gradient-to-b from-slate-900 to-slate-950 font-inter">
      <div className="max-w-6xl mx-auto p-6">
        
        {/* Header */}
        <header className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-300 flex items-center justify-center font-extrabold text-slate-900">
              UR
            </div>
            <div>
              <p className="font-bold text-lg">URBE</p>
              <p className="text-xs text-slate-400">Movilidad inteligente</p>
            </div>
          </div>

          <nav className="hidden md:block space-x-6 text-slate-400 text-sm">
            <a href="#funcionalidades" className="hover:text-white">Funcionalidades</a>
            <a href="#prototipo" className="hover:text-white">Prototipo</a>
            <a href="#validacion" className="hover:text-white">Validación</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
        </header>

        {/* Hero */}
        <main className="mt-10 grid md:grid-cols-2 gap-8 items-start">
          
          {/* Hero Left */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl">
            <h1 className="text-3xl font-bold mb-3">
              Optimiza rutas y mejora la seguridad
            </h1>
            <p className="text-slate-400 mb-5">
              URBE reduce tiempos de viaje, alerta zonas inseguras y ofrece movilidad sostenible en ciudades colombianas.
            </p>

            <div className="flex gap-3 mb-6">
              <button
                onClick={openDemo}
                className="px-4 py-2 rounded-lg bg-emerald-400 text-slate-900 font-semibold">
                Ver demo
              </button>
              
              <a
                href="#prototipo"
                className="px-4 py-2 rounded-lg border border-white/10 text-slate-300">
                Ver prototipo
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-semibold">Rutas inteligentes</p>
                <p className="text-xs text-slate-400 mt-1">Optimización con IA.</p>
              </div>

              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-semibold">Seguridad</p>
                <p className="text-xs text-slate-400 mt-1">Botón de pánico y alertas.</p>
              </div>

              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="font-semibold">Sostenibilidad</p>
                <p className="text-xs text-slate-400 mt-1">Recompensas ecológicas.</p>
              </div>
            </div>
          </div>

          {/* Hero Right */}
          <aside className="space-y-4">
            <div className="rounded-xl bg-slate-800/40 border border-white/10 h-56 flex items-center justify-center text-slate-500 text-sm">
              Mapa interactivo (placeholder)
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 text-center rounded-xl bg-white/5 border border-white/10">
                <p className="text-xl font-bold">10+</p>
                <p className="text-xs text-slate-400">Validaciones</p>
              </div>

              <div className="p-3 text-center rounded-xl bg-white/5 border border-white/10">
                <p className="text-xl font-bold">3</p>
                <p className="text-xs text-slate-400">Modos</p>
              </div>

              <div className="p-3 text-center rounded-xl bg-white/5 border border-white/10">
                <p className="text-xl font-bold">—</p>
                <p className="text-xs text-slate-400">CO₂ ahorrado</p>
              </div>
            </div>
          </aside>

        </main>

        {/* Funcionalidades */}
        <section id="funcionalidades" className="mt-16 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-slate-400 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li>Optimización predictiva del tráfico</li>
              <li>Integración multimodal</li>
              <li>Mapas offline</li>
              <li>Pagos integrados</li>
            </ul>

            <ul className="list-disc pl-5 space-y-1">
              <li>Botón de pánico y reportes</li>
              <li>Gamificación sostenible</li>
              <li>Alertas climáticas</li>
              <li>Preferencias personalizadas</li>
            </ul>
          </div>
        </section>

        {/* Prototipo */}
        <section id="prototipo" className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Prototipo</h2>
          <p className="text-slate-400 text-sm mb-4">
            Wireframes y diseño Hi-Fi del flujo principal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              Pantalla principal
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              Reporte incidente
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              Carpooling
            </div>
          </div>
        </section>

        {/* Validación */}
        <section id="validacion" className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-bold mb-3">Validación</h2>
          <ul className="list-disc pl-5 text-slate-400 text-sm space-y-1">
            <li>Botón de pánico mejoró percepción de seguridad.</li>
            <li>Alertas predictivas fueron las más valoradas.</li>
            <li>Carpooling simplificado a 3 pasos.</li>
          </ul>
        </section>

        {/* Contacto */}
        <section id="contacto" className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Contacto</h2>

          <form onSubmit={submitForm} className="flex flex-col sm:flex-row gap-3">
            <input
              name="name"
              placeholder="Nombre"
              className="flex-1 p-2 rounded-lg bg-transparent border border-white/10 text-slate-200"
            />

            <input
              name="email"
              placeholder="Correo"
              className="flex-1 p-2 rounded-lg bg-transparent border border-white/10 text-slate-200"
            />

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-emerald-400 text-slate-900 font-semibold">
              Enviar
            </button>
          </form>
        </section>

        <footer className="mt-12 text-center text-slate-500 text-sm">
          URBE · Proyecto académico — Politécnico Grancolombiano
        </footer>

      </div>
    </div>
  );
}
