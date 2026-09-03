type AboutProps = {
  lang?: "en" | "es";
};

export default function About({ lang = "en" }: AboutProps) {
  const content = {
    en: {
      eyebrow: "About me",
      title: "Hi, I'm Silvana Bernal.",
      role: "CRM & Lifecycle Marketing Consultant",
      paragraphs: [
        "I’m a CRM and lifecycle marketing professional with experience building CRM strategies, processes and teams from the ground up across different markets and business environments.",
        "I combine strategic thinking with hands-on execution to help digital businesses improve customer engagement, retention and long-term growth.",
        "For me, effective CRM goes beyond automation. It’s about understanding customers and creating relevant experiences by connecting the right message, channel and moment.",
      ],
      final:
        "CRM Convert brings this experience together with a practical, data-driven approach to make CRM more effective, scalable and commercially valuable.",
      imageAlt:
        "Silvana Bernal - CRM and Lifecycle Marketing Consultant",
    },

    es: {
      eyebrow: "Sobre mí",
      title: "Hola, soy Silvana Bernal.",
      role: "Consultora de CRM y Lifecycle Marketing",
      paragraphs: [
        "Soy una profesional de CRM y lifecycle marketing con experiencia desarrollando estrategias, procesos y equipos de CRM desde cero en diferentes mercados y entornos de negocio.",
        "Combino visión estratégica con experiencia práctica para ayudar a negocios digitales a mejorar el engagement, la retención y el crecimiento a largo plazo.",
        "Para mí, un CRM efectivo va mucho más allá de la automatización. Se trata de entender a los clientes y crear experiencias relevantes conectando el mensaje, el canal y el momento adecuados.",
      ],
      final:
        "CRM Convert reúne esta experiencia con un enfoque práctico y basado en datos para hacer que el CRM sea más efectivo, escalable y valioso para el negocio.",
      imageAlt:
        "Silvana Bernal - Consultora de CRM y Lifecycle Marketing",
    },
  };

  const text = content[lang];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Photo */}

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">

            <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">

              <img
                src="/about-silvana.png"
                alt={text.imageAlt}
                className="h-auto w-full object-cover"
              />

            </div>

          </div>


          {/* Content */}

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#20e1ff]">
              {text.eyebrow}
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {text.title}
            </h2>

            <p className="mt-5 text-xl font-medium text-white/90">
              {text.role}
            </p>

            <div className="mt-8 space-y-5 text-lg leading-7 text-white/90">

              {text.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

              <p className="font-semibold text-white/90">
                {text.final}
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}