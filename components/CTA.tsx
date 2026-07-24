export default function CTA() {
  return (
    <section className="bg-white px-4 pb-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#0D2149] px-8 py-16 sm:px-16 sm:py-20 text-center">

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Empieza a vender mejor hoy
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              Únete a cientos de tiendas en LATAM que ya controlan sus ventas
              con POS Atienda.
            </p>
            <button
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-10 py-4 rounded-2xl transition-colors duration-200 hover:shadow-xl hover:shadow-indigo-500/30 text-base"
            >
              Crear mi cuenta gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
