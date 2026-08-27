type NavbarProps = {
  lang?: "en" | "es";
};

export default function Navbar({ lang = "en" }: NavbarProps) {
  const content = {
    en: {
      services: "Services",
      experience: "Experience",
      contact: "Contact",
      cta: "Let's Talk",
    },

    es: {
      services: "Servicios",
      experience: "Experiencia",
      contact: "Contacto",
      cta: "Hablemos",
    },
  };

  const text = content[lang];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030817]/90 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href={lang === "es" ? "/es" : "/"}
          className="flex items-center"
        >
          <img
            src="/logo.svg"
            alt="CRM Convert"
            className="w-[120px] sm:w-[145px] h-auto"
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg font-bold">

          <a
            href="#services"
            className="nav-link rounded-full px-3 py-2"
          >
            {text.services}
          </a>

          <a
            href="#experience"
            className="nav-link rounded-full px-3 py-2"
          >
            {text.experience}
          </a>

          <a
            href="#contact"
            className="nav-link rounded-full px-3 py-2"
          >
            {text.contact}
          </a>

        </div>

        {/* Language switcher + CTA */}
        <div className="flex items-center gap-3 sm:gap-5">

          {/* Language switcher */}
          <div className="flex items-center gap-2 text-sm font-semibold">
            <a
              href="/"
              className={
                lang === "en"
                  ? "text-white"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              EN
            </a>

            <span className="text-gray-500">|</span>

            <a
              href="/es"
              className={
                lang === "es"
                  ? "text-white"
                  : "text-white/80 hover:text-white transition-colors"
              }
            >
              ES
            </a>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="border border-white/80 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200"
          >
            {text.cta}
          </a>

        </div>

      </div>
    </nav>
  );
}