type HeroProps = {
  lang?: "en" | "es";
};

export default function Hero({ lang = "en" }: HeroProps) {
  const content = {
    en: {
      eyebrow: "CRM • MARKETING AUTOMATION • LIFECYCLE",
      titleLine1: "CRM Strategy",
      titleLine2: "for Digital",
      titleLine3: "Businesses",
      description:
        "Helping digital businesses improve retention, engagement and customer lifecycle performance through data-driven CRM strategies and automation.",
      contactButton: "Get In Touch",
      experienceButton: "View Experience",
    },

    es: {
      eyebrow: "CRM • AUTOMATIZACIÓN DE MARKETING • LIFECYCLE",
      titleLine1: "Estrategia CRM",
      titleLine2: "para Negocios",
      titleLine3: "Digitales",
      description:
        "Ayudo a negocios digitales a mejorar la retención, el engagement y el rendimiento del ciclo de vida del cliente mediante estrategias CRM basadas en datos y automatización.",
      contactButton: "Hablemos",
      experienceButton: "Ver Experiencia",
    },
  };

  const text = content[lang];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050b18] text-white flex items-center">

      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="Digital business and CRM"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030817] via-[#030817]/80 to-[#030817]/25" />

      {/* Subtle bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030817] to-transparent" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pt-32 pb-40">

        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="uppercase tracking-[0.35em] text-sm text-[#20e1ff] mb-8">
            {text.eyebrow}
          </p>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-8">
            {text.titleLine1}
            <br />
            {text.titleLine2}
            <br />
            <span className="text-blue-400">
              {text.titleLine3}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
            {text.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-8">

            {/* Get In Touch */}
            <a
              href="#contact"
              className="hero-button group inline-flex items-center justify-center gap-5 bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              <span>{text.contactButton}</span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* View Experience */}
            <a
              href="#experience"
              className="hero-button group inline-flex items-center justify-center gap-5 border border-white/70 hover:border-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-base font-semibold transition-all duration-300"
            >
              <span>{text.experienceButton}</span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}