import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#0A0A0A] py-20 px-6 md:px-12 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/10 pb-12 mb-8">

        <div className="flex flex-col gap-4">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-white/90">
            Let&apos;s talk.
          </h2>
          <a
            href="tel:+971586865421"
            className="text-2xl md:text-3xl font-medium text-white/60 hover:text-white transition-colors duration-300"
          >
            +971 586865421
          </a>
          <a
            href="tel:+919645023614"
            className="text-2xl md:text-3xl font-medium text-white/60 hover:text-white transition-colors duration-300"
          >
            +919645023614
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="#"
            className="group flex flex-col text-xl font-medium text-white/70 hover:text-white transition-all w-fit"
          >
            <span className="flex items-center gap-2">
              LinkedIn
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </span>
            <span className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href="#"
            className="group flex flex-col text-xl font-medium text-white/70 hover:text-white transition-all w-fit"
          >
            <span className="flex items-center gap-2">
              Portfolio / GitHub
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </span>
            <span className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-medium tracking-wide">
        <p>© {new Date().getFullYear()} Gokul Krishna T U. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0">Designed & Engineered in Dubai.</p>
      </div>
    </footer>
  );
}
