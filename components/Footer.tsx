import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo_pos_atienda.png"
            alt="Logo POS Atienda"
            width={300}
            height={300}
            className="h-8 w-8 object-contain"
          />
          <span className="text-white font-semibold text-base">
            POS Atienda
          </span>
        </div>
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
