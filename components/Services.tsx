type ServicesProps = {
  lang?: "en" | "es";
};

export default function Services({ lang = "en" }: ServicesProps) {
  const content = {
    en: {
      eyebrow: "WHAT I DO",
      title: "CRM & Automation Solutions",
      subtitle: "End-to-end CRM and lifecycle marketing strategies.",

      services: [
        {
          title: "CRM Strategy",
          description:
            "Customer lifecycle design, segmentation, onboarding, retention and reactivation strategies.",
        },
        {
          title: "Marketing Automation",
          description:
            "Automated email, push and onsite campaigns focused on improving engagement and conversion.",
        },
        {
          title: "Analytics & Reporting",
          description:
            "KPI monitoring, campaign analysis and performance reporting for data-driven decisions.",
        },
        {
          title: "Retention & Engagement",
          description:
            "Optimization of user journeys and communication strategies to maximize customer value.",
        },
      ],
    },

    es: {
      eyebrow: "LO QUE HAGO",
      title: "Soluciones de CRM y Automatización",
      subtitle:
        "Estrategias integrales de CRM y marketing basado en el ciclo de vida del cliente.",

      services: [
        {
          title: "Estrategia CRM",
          description:
            "Diseño del ciclo de vida del cliente, segmentación, onboarding, retención y estrategias de reactivación.",
        },
        {
          title: "Automatización de Marketing",
          description:
            "Campañas automatizadas de email, push y onsite enfocadas en mejorar el engagement y la conversión.",
        },
        {
          title: "Analytics & Reporting",
          description:
            "Seguimiento de KPIs, análisis de campañas y reporting de resultados para la toma de decisiones basada en datos.",
        },
        {
          title: "Retención & Engagement",
          description:
            "Optimización de journeys y estrategias de comunicación para maximizar el valor del cliente.",
        },
      ],
    },
  };

  const text = content[lang];

  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-28"
    >

      {/* SECTION HEADER */}

      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.3em] text-sm font-semibold text-blue-500 mb-5">
          {text.eyebrow}
        </p>

        <h2 className="text-5xl font-bold mb-6">
          {text.title}
        </h2>

        <p className="text-gray-600 text-xl">
          {text.subtitle}
        </p>

      </div>


      {/* SERVICES */}

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">


        {/* CRM STRATEGY */}

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">

          <div className="flex justify-center mb-8">

            <svg
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-blue-500"
            >
              <circle cx="12" cy="12" r="7" />
              <circle cx="12" cy="12" r="2" />
              <path d="M12 5V3" />
              <path d="M12 21v-2" />
              <path d="M5 12H3" />
              <path d="M21 12h-2" />
              <path d="M17 7l3-3" />
              <path d="M4 20l3-3" />
              <path d="M7 7L4 4" />
              <path d="M20 20l-3-3" />
              <path d="M12 12l4-4" />
              <path d="M16 8h2v-2" />
            </svg>

          </div>

          <h3 className="text-2xl font-semibold mb-5">
            {text.services[0].title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {text.services[0].description}
          </p>

        </div>


        {/* MARKETING AUTOMATION */}

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">

          <div className="flex justify-center mb-8">

            <svg
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-blue-500"
            >
              <rect x="10" y="2" width="4" height="4" rx="1" />
              <rect x="3" y="18" width="4" height="4" rx="1" />
              <rect x="10" y="18" width="4" height="4" rx="1" />
              <rect x="17" y="18" width="4" height="4" rx="1" />
              <path d="M12 6v5" />
              <path d="M5 18v-4h14v4" />
              <path d="M12 11l-7 3" />
              <path d="M12 11l7 3" />
            </svg>

          </div>

          <h3 className="text-2xl font-semibold mb-5">
            {text.services[1].title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {text.services[1].description}
          </p>

        </div>


        {/* ANALYTICS */}

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">

          <div className="flex justify-center mb-8">

            <svg
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-blue-500"
            >
              <path d="M4 20V10" />
              <path d="M4 20h17" />
              <rect x="7" y="14" width="3" height="6" rx="0.5" />
              <rect x="12" y="11" width="3" height="9" rx="0.5" />
              <rect x="17" y="7" width="3" height="13" rx="0.5" />
              <path d="M6 10l4-4 3 2 6-5" />
              <path d="M16 3h3v3" />
            </svg>

          </div>

          <h3 className="text-2xl font-semibold mb-5">
            {text.services[2].title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {text.services[2].description}
          </p>

        </div>


        {/* RETENTION */}

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition-all duration-300 text-center">

          <div className="flex justify-center mb-8">

            <svg
              width="76"
              height="76"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-blue-500"
            >
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
              <path d="M3 21c0-4 2-6 5-6" />
              <path d="M15 7l2-2 2 2" />
              <path d="M17 5v6" />
              <path d="M15 16l2-2 2 2" />
              <path d="M17 14v6" />
              <path d="M19 9c1.5 0 3 1 3 3" />
              <path d="M19 15c1.5 0 3 1 3 3" />
            </svg>

          </div>

          <h3 className="text-2xl font-semibold mb-5">
            {text.services[3].title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {text.services[3].description}
          </p>

        </div>

      </div>

    </section>
  );
}