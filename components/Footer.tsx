export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-indigo-400 font-semibold text-base">
          POS Atienda
        </span>
        <p className="text-slate-500 text-sm order-last sm:order-none">
          © POS Atienda. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Privacidad
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Términos
          </a>
          <a href="#contact" className="hover:text-slate-300 transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
