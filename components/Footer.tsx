import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E2E8F3] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/logo_pos_atienda.png"
            alt="Logo POS Atienda"
            width={300}
            height={300}
            className="h-8 w-8 object-contain"
          />
          <span className="text-[#0D2149] font-semibold text-[14px]">
            POS Atienda <span className="text-[#8A96B5]">© 2026</span> 
          </span>
        </div>
        <div className="flex gap-6 text-sm text-[#8A96B5]">
          <Link href="/privacidad" className="hover:text-[#2B3AC7] transition-colors">
            Privacidad
          </Link>
          <Link href="/terminos" className="hover:text-[#2B3AC7] transition-colors">
            Términos
          </Link>
          <a href="#contact" className="hover:text-[#2B3AC7] transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
