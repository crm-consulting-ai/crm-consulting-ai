"use client";

import { useState } from "react";

type CRMFrameworkProps = {
  lang?: "en" | "es";
};

export default function CRMFramework({
  lang = "en",
}: CRMFrameworkProps) {
  const content = {
    en: {
      eyebrow: "THE CRM GROWTH FRAMEWORK",
      titleStart: "From customer data to",
      titleHighlight: "sustainable growth.",
      intro:
        "A structured five-phase approach to understand your customers, build meaningful customer journeys and create scalable CRM strategies that drive measurable results.",
      deliverable: "Deliverable",
      bottomLine1: "CRM is never finished.",
      bottomLine2: "The data tells us what to do next.",

      phases: [
        {
          number: "01",
          title: "DISCOVER",
          description:
            "Understand the business, customers, goals, KPIs, tools, data and existing processes before defining any solutions.",
          deliverable: "CRM Discovery Report",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <circle cx="28" cy="28" r="16" />
              <path d="M40 40l14 14" />
              <path d="M21 28h14" />
              <path d="M28 21v14" />
            </svg>
          ),
        },

        {
          number: "02",
          title: "DIAGNOSE",
          description:
            "Identify gaps, bottlenecks, opportunities and quick wins across the existing CRM setup.",
          deliverable: "CRM Audit",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <rect x="17" y="10" width="30" height="44" rx="3" />
              <path d="M25 10V6h14v4" />
              <path d="M25 22h14" />
              <path d="M25 32h14" />
              <path d="M25 42h14" />
              <path d="M21 22h1" />
              <path d="M21 32h1" />
              <path d="M21 42h1" />
            </svg>
          ),
        },

        {
          number: "03",
          title: "DESIGN",
          description:
            "Build the CRM strategy around lifecycle, customer journeys, segmentation, automation, communication and measurement.",
          deliverable: "CRM Strategy Roadmap",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <path d="M15 49l4-14L43 11l10 10-24 24-14 4z" />
              <path d="M37 17l10 10" />
              <path d="M19 35l10 10" />
              <path d="M14 50l10-3" />
            </svg>
          ),
        },

        {
          number: "04",
          title: "ACTIVATE",
          description:
            "Turn strategy into execution through campaigns, journeys, automation and communication across relevant channels.",
          deliverable: "CRM Live",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <path d="M10 31L54 10L42 54L30 36L10 31Z" />
              <path d="M30 36L54 10" />
              <path d="M30 36v15" />
            </svg>
          ),
        },

        {
          number: "05",
          title: "OPTIMIZE",
          description:
            "Measure performance, test new ideas and continuously improve the customer lifecycle and CRM results.",
          deliverable: "Monthly Growth Report",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <path d="M10 52V35" />
              <path d="M24 52V28" />
              <path d="M38 52V20" />
              <path d="M52 52V12" />
              <path d="M8 52h48" />
              <path d="M12 28l13-9 12 5 17-14" />
              <path d="M44 10h10v10" />
            </svg>
          ),
        },
      ],
    },

    es: {
      eyebrow: "THE CRM GROWTH FRAMEWORK",
      titleStart: "De los datos de clientes al",
      titleHighlight: "crecimiento sostenible.",
      intro:
        "Un enfoque estructurado en cinco fases para entender a tus clientes, construir customer journeys relevantes y desarrollar estrategias de CRM escalables que generen resultados medibles.",
      deliverable: "Entregable",
      bottomLine1: "El CRM nunca termina.",
      bottomLine2: "Los datos nos indican qué hacer después.",

      phases: [
        {
          number: "01",
          title: "DESCUBRIR",
          description:
            "Entender el negocio, los clientes, los objetivos, KPIs, herramientas, datos y procesos existentes antes de definir cualquier solución.",
          deliverable: "Informe de Descubrimiento CRM",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <circle cx="28" cy="28" r="16" />
              <path d="M40 40l14 14" />
              <path d="M21 28h14" />
              <path d="M28 21v14" />
            </svg>
          ),
        },

        {
          number: "02",
          title: "DIAGNOSTICAR",
          description:
            "Identificar brechas, cuellos de botella, oportunidades y quick wins dentro de la configuración actual de CRM.",
          deliverable: "Auditoría CRM",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <rect x="17" y="10" width="30" height="44" rx="3" />
              <path d="M25 10V6h14v4" />
              <path d="M25 22h14" />
              <path d="M25 32h14" />
              <path d="M25 42h14" />
              <path d="M21 22h1" />
              <path d="M21 32h1" />
              <path d="M21 42h1" />
            </svg>
          ),
        },

        {
          number: "03",
          title: "DISEÑAR",
          description:
            "Construir la estrategia de CRM en torno al lifecycle, customer journeys, segmentación, automatización, comunicación y medición.",
          deliverable: "Roadmap de Estrategia CRM",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <path d="M15 49l4-14L43 11l10 10-24 24-14 4z" />
              <path d="M37 17l10 10" />
              <path d="M19 35l10 10" />
              <path d="M14 50l10-3" />
            </svg>
          ),
        },

        {
          number: "04",
          title: "ACTIVAR",
          description:
            "Llevar la estrategia a la ejecución mediante campañas, journeys, automatización y comunicación en los canales relevantes.",
          deliverable: "CRM en producción",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <path d="M10 31L54 10L42 54L30 36L10 31Z" />
              <path d="M30 36L54 10" />
              <path d="M30 36v15" />
            </svg>
          ),
        },

        {
          number: "05",
          title: "OPTIMIZAR",
          description:
            "Medir el rendimiento, probar nuevas ideas y mejorar continuamente el lifecycle del cliente y los resultados de CRM.",
          deliverable: "Informe Mensual de Growth",
          icon: (
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-14 h-14 md:w-16 md:h-16"
            >
              <path d="M10 52V35" />
              <path d="M24 52V28" />
              <path d="M38 52V20" />
              <path d="M52 52V12" />
              <path d="M8 52h48" />
              <path d="M12 28l13-9 12 5 17-14" />
              <path d="M44 10h10v10" />
            </svg>
          ),
        },
      ],
    },
  };

  const text = content[lang];
  const [openCard, setOpenCard] = useState<string | null>(null);

  return (
    <section
      id="framework"
      className="w-full bg-[#050b18] text-white pt-24 md:pt-28 pb-40 md:pb-44 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* HEADER */}

        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-blue-400 mb-5 font-semibold">
            {text.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            {text.titleStart}{" "}
            <span className="text-blue-400">
              {text.titleHighlight}
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            {text.intro}
          </p>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

          {text.phases.map((phase) => {
            const isInteractive =
  phase.number === "01" ||
  phase.number === "02" ||
  phase.number === "03" ||
  phase.number === "04" ||
  phase.number === "05";

const isFirstPhase = phase.number === "01";
const isSecondPhase = phase.number === "02";
const isThirdPhase = phase.number === "03";
const isFourthPhase = phase.number === "04";
const isFifthPhase = phase.number === "05";
const isOpen = openCard === phase.number;
            return (
              <div
  key={phase.number}
  className="group [perspective:1000px]"
  onClick={() => {
    if (isInteractive) {
      setOpenCard(isOpen ? null : phase.number);
    }
  }}
>
                <div
                  className={`
                    relative
                    min-h-[340px]
                    w-full
                    transition-all
                    duration-500
                    ${
                      isInteractive
                        ? "group-hover:-translate-y-3"
                        : ""
                    }
                    ${
                      isInteractive
                        ? "[transform-style:preserve-3d]"
                        : ""
                    }
                    ${
  isInteractive
    ? "group-hover:[transform:rotateY(180deg)]"
    : ""
}
${
  isInteractive && isOpen
    ? "[transform:rotateY(180deg)]"
    : ""
}
                  `}
                >

                  {/* FRONT */}

                  <div
                    className={`
                      absolute
                      inset-0
                      rounded-[20px]
                      border
                      bg-[#0b1324]
                      flex
                      flex-col
                      overflow-hidden
                      ${
  isInteractive
    ? "border-white/20 group-hover:border-blue-400 group-hover:bg-[#132746] group-hover:shadow-[0_18px_50px_rgba(59,130,246,0.22)]"
    : "border-white/20 transition-all duration-300 group-hover:border-blue-400/60 group-hover:bg-[#0e192d]"
}
                    `}
                    style={{
                      backfaceVisibility: "hidden",
                    }}
                  >

                    {/* CARD HEADER */}

                    <div className="px-6 pt-5 flex items-center justify-center relative">
                      <span
                        className={`text-3xl font-semibold transition-all duration-300 ${
                          isInteractive
                            ? "text-blue-400 group-hover:text-blue-200 group-hover:scale-110"
                            : "text-blue-400"
                        }`}
                      >
                        {phase.number}
                      </span>
                    </div>

                    {/* ICON */}

                    <div
                      className={`flex justify-center text-blue-400 mt-6 mb-4 transition-all duration-300 ${
                        isInteractive
                          ? "group-hover:scale-110 group-hover:text-blue-300"
                          : ""
                      }`}
                    >
                      {phase.icon}
                    </div>

                    {/* TITLE */}

                    <h3
                      className={`text-xl font-semibold text-center mb-3 ${
                        isInteractive
                          ? "transition-colors duration-300 group-hover:text-blue-100"
                          : ""
                      }`}
                    >
                      {phase.title}
                    </h3>

                    {/* DESCRIPTION DIVIDER */}

                    <div className="mx-6 border-t border-white/10" />

                    {/* DESCRIPTION */}

                    <div className="px-6 pt-4 pb-5 flex-grow">
                      <p className="text-white/90 text-lg leading-relaxed text-center">
                        {phase.description}
                      </p>
                    </div>

                    {/* DELIVERABLE */}

                    <div className="border-t border-white/10 px-6 py-4">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-1">
                        {text.deliverable}
                      </p>

                      <p className="text-sm text-blue-300 font-medium">
                        {phase.deliverable}
                      </p>
                    </div>

                  </div>

                  {/* BACK */}

                  {isInteractive && (
                    <div
                      className="absolute inset-0 rounded-[20px] border border-blue-400 bg-[#132746] p-8 flex flex-col items-center justify-center text-center shadow-[0_18px_50px_rgba(59,130,246,0.22)] [transform:rotateY(180deg)]"
                      style={{
                        backfaceVisibility: "hidden",
                      }}
                    >

                      <p className="text-xs uppercase tracking-[0.2em] text-blue-200 mb-5">
                        {lang === "es"
                          ? "¿Qué ocurre aquí?"
                          : "What happens here?"}
                      </p>

                      <p className="text-lg leading-relaxed text-white/85 max-w-xs">
  {isFirstPhase
    ? lang === "es"
      ? "Mapeamos el negocio, los clientes y los fundamentos de datos antes de definir la estrategia CRM."
      : "We map the business, customers and data foundations before defining the CRM strategy."
    : isSecondPhase
    ? lang === "es"
      ? "Analizamos la configuración actual de CRM, identificamos brechas y cuellos de botella y priorizamos las oportunidades con mayor impacto."
      : "We assess the current CRM setup, identify gaps and bottlenecks, and prioritise the opportunities that can make the biggest impact."
    : isThirdPhase
    ? lang === "es"
      ? "Convertimos los insights en una estrategia CRM que abarca lifecycle, customer journeys, segmentación, automatización y medición."
      : "We turn the insights into a CRM strategy covering lifecycle, journeys, segmentation, automation and measurement."
    : isFourthPhase
    ? lang === "es"
      ? "Llevamos la estrategia a la ejecución mediante campañas, journeys, automatización y comunicación relevante en los distintos canales."
      : "We turn the strategy into execution through campaigns, journeys, automation and relevant customer communication across channels."
    : lang === "es"
    ? "Medimos el rendimiento, probamos nuevas ideas y mejoramos continuamente el lifecycle del cliente y los resultados de CRM."
    : "We measure performance, test new ideas and continuously improve the customer lifecycle and CRM results."}
</p>

                      <div className="mt-6 text-blue-300 text-sm font-medium">
                        {phase.deliverable}
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}

        <div className="flex justify-center mt-10 md:mt-12">

          <div className="flex items-center gap-5 rounded-[22px] border border-white/10 bg-[#0b162b] px-7 md:px-10 py-5 shadow-lg">

            <div className="hidden sm:flex w-12 h-12 rounded-full border-2 border-blue-400 items-center justify-center text-blue-400">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-7 h-7"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />

                <circle
                  cx="12"
                  cy="12"
                  r="1.5"
                  fill="currentColor"
                />

                <path d="M17 7l3-3" />
                <path d="M17 4h3v3" />
              </svg>

            </div>

            <div>

              <p className="text-white text-lg md:text-xl font-medium">
                {text.bottomLine1}
              </p>

              <p className="text-blue-400 text-lg md:text-xl font-medium mt-1">
                {text.bottomLine2}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}