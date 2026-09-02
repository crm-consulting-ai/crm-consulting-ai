"use client";

import { useState } from "react";

type CRMMaturityCheckProps = {
  lang?: "en" | "es";
};

type Option = {
  label: string;
  score: number;
};

type Question = {
  title: string;
  options: Option[];
};

export default function CRMMaturityCheck({
  lang = "en",
}: CRMMaturityCheckProps) {
  const content = {
    en: {
      eyebrow: "CRM MATURITY CHECK",
      title: "How mature is your CRM?",
      intro:
        "Answer 6 quick questions to understand where your CRM stands and where the biggest growth opportunities may be.",
      start: "Start assessment",
      question: "Question",
      of: "of",
      back: "Back",
      next: "Next",
      results: "See my results",
      yourResult: "YOUR CRM MATURITY",
      score: "CRM maturity score",
      foundation: "Foundation",
      developing: "Developing",
      growth: "Growth",
      advanced: "Advanced",
      foundationText:
        "Your CRM is at the Foundation stage. The biggest opportunities are likely to be around strategy, customer journeys and data foundations.",
      developingText:
        "Your CRM is at the Developing stage. The biggest opportunities are likely to be around segmentation, automation and lifecycle development.",
      growthText:
        "Your CRM is at the Growth stage. The biggest opportunities are likely to be around optimisation, personalisation and lifecycle performance.",
      advancedText:
        "Your CRM is at the Advanced stage. The biggest opportunities are likely to be around advanced personalisation, experimentation and incremental growth.",
      strongest: "Strongest area",
      opportunity: "Biggest opportunity",
      restart: "Start again",
      disclaimer:
        "This assessment is a practical framework designed to help identify CRM growth opportunities. It is not a formal industry benchmark.",
    },
    es: {
      eyebrow: "CRM MATURITY CHECK",
      title: "¿Qué nivel de madurez tiene tu CRM?",
      intro:
        "Responde 6 preguntas rápidas para entender en qué punto está tu CRM y dónde pueden estar las mayores oportunidades de crecimiento.",
      start: "Comenzar evaluación",
      question: "Pregunta",
      of: "de",
      back: "Atrás",
      next: "Siguiente",
      results: "Ver mis resultados",
      yourResult: "MADUREZ DE TU CRM",
      score: "Puntuación de madurez CRM",
      foundation: "Foundation",
      developing: "Developing",
      growth: "Growth",
      advanced: "Advanced",
      foundationText:
        "Tu CRM está en la etapa Foundation. Las mayores oportunidades probablemente estén en estrategia, customer journeys y fundamentos de datos.",
      developingText:
        "Tu CRM está en la etapa Developing. Las mayores oportunidades probablemente estén en segmentación, automatización y desarrollo del lifecycle.",
      growthText:
        "Tu CRM está en la etapa Growth. Las mayores oportunidades probablemente estén en optimización, personalización y rendimiento del lifecycle.",
      advancedText:
        "Tu CRM está en la etapa Advanced. Las mayores oportunidades probablemente estén en personalización avanzada, experimentación y crecimiento incremental.",
      strongest: "Área más fuerte",
      opportunity: "Mayor oportunidad",
      restart: "Comenzar de nuevo",
      disclaimer:
        "Esta evaluación es un marco práctico diseñado para ayudar a identificar oportunidades de crecimiento en CRM. No es un benchmark formal de la industria.",
    },
  };

  const text = content[lang];

  const questions: Question[] =
    lang === "es"
      ? [
          {
            title: "¿Qué tan definida está tu estrategia de CRM?",
            options: [
              {
                label: "No tenemos una estrategia de CRM definida.",
                score: 0,
              },
              {
                label: "Trabajamos de forma bastante ad hoc.",
                score: 1,
              },
              {
                label: "Tenemos algunas iniciativas de lifecycle.",
                score: 2,
              },
              {
                label:
                  "Tenemos una estrategia clara alineada con los objetivos del negocio.",
                score: 3,
              },
              {
                label:
                  "Tenemos una función de growth estructurada, con prioridades, ownership y objetivos claros.",
                score: 4,
              },
            ],
          },
          {
            title: "¿Qué tan eficazmente segmentas a tus clientes?",
            options: [
              {
                label:
                  "La mayoría de nuestros clientes recibe prácticamente lo mismo.",
                score: 0,
              },
              {
                label: "Tenemos algunos segmentos básicos.",
                score: 1,
              },
              {
                label:
                  "Usamos comportamiento o lifecycle en algunas campañas.",
                score: 2,
              },
              {
                label: "La segmentación se utiliza de forma consistente.",
                score: 3,
              },
              {
                label:
                  "Utilizamos personalización dinámica basada en el comportamiento.",
                score: 4,
              },
            ],
          },
          {
            title: "¿Qué tan bien definidos están tus customer journeys?",
            options: [
              {
                label: "No tenemos journeys claramente definidos.",
                score: 0,
              },
              {
                label: "Trabajamos principalmente con campañas aisladas.",
                score: 1,
              },
              {
                label:
                  "Tenemos algunos journeys de lifecycle, pero existen gaps.",
                score: 2,
              },
              {
                label:
                  "Tenemos definidos los principales journeys: onboarding, retención, reactivación, etc.",
                score: 3,
              },
              {
                label:
                  "Los journeys están conectados a lo largo del lifecycle y se optimizan continuamente.",
                score: 4,
              },
            ],
          },
          {
            title: "¿Qué parte de tu comunicación de CRM está automatizada?",
            options: [
              {
                label:
                  "Casi nada; la mayoría se hace manualmente.",
                score: 0,
              },
              {
                label: "Tenemos algunos envíos simples programados.",
                score: 1,
              },
              {
                label:
                  "Tenemos varios journeys, aunque con automatización limitada.",
                score: 2,
              },
              {
                label:
                  "La mayoría de las comunicaciones clave de lifecycle están automatizadas.",
                score: 3,
              },
              {
                label:
                  "Tenemos una automatización altamente escalable y basada en eventos.",
                score: 4,
              },
            ],
          },
          {
            title: "¿Qué tan eficazmente utilizas los datos de clientes en CRM?",
            options: [
              {
                label:
                  "Los datos están fragmentados y son difíciles de utilizar.",
                score: 0,
              },
              {
                label:
                  "Utilizamos principalmente información básica de perfil y transacciones.",
                score: 1,
              },
              {
                label:
                  "Utilizamos datos de comportamiento en algunas actividades.",
                score: 2,
              },
              {
                label:
                  "Los datos se utilizan de forma fiable para targeting y personalización.",
                score: 3,
              },
              {
                label:
                  "Tenemos buenos fundamentos de datos y creamos experiencias altamente relevantes.",
                score: 4,
              },
            ],
          },
          {
            title:
              "¿Qué tan eficazmente mides y optimizas el rendimiento de CRM?",
            options: [
              {
                label:
                  "No tenemos KPIs ni reporting consistentes.",
                score: 0,
              },
              {
                label:
                  "Medimos principalmente opens, clicks y métricas básicas.",
                score: 1,
              },
              {
                label:
                  "Tenemos KPIs más amplios, pero la optimización no es consistente.",
                score: 2,
              },
              {
                label:
                  "Medimos contra objetivos de negocio y testeamos mejoras.",
                score: 3,
              },
              {
                label:
                  "Tenemos una metodología estructurada de measurement, test, learn y optimization.",
                score: 4,
              },
            ],
          },
        ]
      : [
          {
            title: "How clearly defined is your CRM strategy?",
            options: [
              {
                label: "We don't have a defined CRM strategy.",
                score: 0,
              },
              {
                label: "We work mostly in an ad hoc way.",
                score: 1,
              },
              {
                label: "We have some lifecycle initiatives in place.",
                score: 2,
              },
              {
                label:
                  "We have a clear strategy aligned with business goals.",
                score: 3,
              },
              {
                label:
                  "We have a structured growth function with priorities, ownership and clear goals.",
                score: 4,
              },
            ],
          },
          {
            title: "How effectively do you segment your customers?",
            options: [
              {
                label:
                  "Most customers receive essentially the same communication.",
                score: 0,
              },
              {
                label: "We have some basic segments.",
                score: 1,
              },
              {
                label:
                  "We use behavioural or lifecycle data for some campaigns.",
                score: 2,
              },
              {
                label: "Segmentation is used consistently.",
                score: 3,
              },
              {
                label:
                  "We use dynamic, behaviour-based personalisation.",
                score: 4,
              },
            ],
          },
          {
            title: "How well defined are your customer journeys?",
            options: [
              {
                label:
                  "We don't have clearly defined customer journeys.",
                score: 0,
              },
              {
                label: "We mainly work with isolated campaigns.",
                score: 1,
              },
              {
                label:
                  "We have some lifecycle journeys, but there are gaps.",
                score: 2,
              },
              {
                label:
                  "We have core journeys such as onboarding, retention and reactivation.",
                score: 3,
              },
              {
                label:
                  "Our journeys are connected across the lifecycle and continuously optimised.",
                score: 4,
              },
            ],
          },
          {
            title: "How much of your CRM communication is automated?",
            options: [
              {
                label:
                  "Almost none; most communication is manual.",
                score: 0,
              },
              {
                label: "We have some simple scheduled sends.",
                score: 1,
              },
              {
                label:
                  "We have several journeys, but automation is still limited.",
                score: 2,
              },
              {
                label:
                  "Most key lifecycle communications are automated.",
                score: 3,
              },
              {
                label:
                  "We have highly automated, event-driven and scalable communication.",
                score: 4,
              },
            ],
          },
          {
            title: "How effectively do you use customer data in CRM?",
            options: [
              {
                label:
                  "Our data is fragmented and difficult to use.",
                score: 0,
              },
              {
                label:
                  "We mainly use basic profile and transaction data.",
                score: 1,
              },
              {
                label:
                  "We use behavioural data in some activities.",
                score: 2,
              },
              {
                label:
                  "We reliably use data for targeting and personalisation.",
                score: 3,
              },
              {
                label:
                  "We have strong data foundations and create highly relevant experiences.",
                score: 4,
              },
            ],
          },
          {
            title:
              "How effectively do you measure and optimise CRM performance?",
            options: [
              {
                label:
                  "We don't have consistent KPIs or reporting.",
                score: 0,
              },
              {
                label:
                  "We mainly measure opens, clicks and basic metrics.",
                score: 1,
              },
              {
                label:
                  "We have broader KPIs, but optimisation is inconsistent.",
                score: 2,
              },
              {
                label:
                  "We measure against business goals and test improvements.",
                score: 3,
              },
              {
                label:
                  "We have a structured measurement, test, learn and optimisation process.",
                score: 4,
              },
            ],
          },
        ];

  const areaNames =
    lang === "es"
      ? [
          "Estrategia CRM",
          "Segmentación",
          "Customer Journeys",
          "Automatización",
          "Datos & Personalización",
          "Medición & Optimización",
        ]
      : [
          "CRM Strategy",
          "Customer Segmentation",
          "Customer Journeys",
          "Automation",
          "Data & Personalisation",
          "Measurement & Optimisation",
        ];

  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentQuestion];
  const selectedScore = answers[currentQuestion];

  function handleSelect(score: number) {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = score;
    setAnswers(updatedAnswers);
  }

  function handleNext() {
    if (selectedScore === undefined) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      return;
    }

    setShowResults(true);
  }

  function handleBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  function handleRestart() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  }

  const totalScore = answers.reduce((sum, score) => sum + score, 0);
  const percentage = Math.round((totalScore / 24) * 100);

  let maturityLevel = text.foundation;
  let maturityText = text.foundationText;

  if (percentage >= 75) {
    maturityLevel = text.advanced;
    maturityText = text.advancedText;
  } else if (percentage >= 50) {
    maturityLevel = text.growth;
    maturityText = text.growthText;
  } else if (percentage >= 25) {
    maturityLevel = text.developing;
    maturityText = text.developingText;
  }

  const strongestIndex =
    answers.length === questions.length
      ? answers.reduce(
          (bestIndex, score, index, scores) =>
            score > scores[bestIndex] ? index : bestIndex,
          0
        )
      : 0;

  const opportunityIndex =
    answers.length === questions.length
      ? answers.reduce(
          (lowestIndex, score, index, scores) =>
            score < scores[lowestIndex] ? index : lowestIndex,
          0
        )
      : 0;

  return (
    <section
      id="maturity-check"
      className="relative overflow-hidden bg-[#020817] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl border border-blue-200/40 bg-[#29456f] px-6 py-12 shadow-[0_0_60px_rgba(37,99,235,0.14)] sm:px-10 sm:py-16">
          {!started ? (
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-300">
                {text.eyebrow}
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {text.title}
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
                {text.intro}
              </p>

              <button
                type="button"
                onClick={() => setStarted(true)}
                className="mt-10 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"
              >
                {text.start}
              </button>
            </div>
          ) : showResults ? (
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-blue-200">
                {text.yourResult}
              </p>

              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {maturityLevel}
              </h2>

              <div className="mt-8">
                <div className="text-6xl font-semibold text-white sm:text-7xl">
                  {percentage}
                  <span className="text-3xl text-white/60">/100</span>
                </div>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/60">
                  {text.score}
                </p>
              </div>

              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/85">
                {maturityText}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/[0.10] p-6 text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
                    {text.strongest}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {areaNames[strongestIndex]}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/[0.10] p-6 text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
                    {text.opportunity}
                  </p>
                  <p className="mt-3 text-xl font-semibold text-white">
                    {areaNames[opportunityIndex]}
                  </p>
                </div>
              </div>
<div className="mt-10 text-center">
  <p className="text-xl font-semibold text-white">
    {lang === "es"
      ? "¿Lista para mejorar tu CRM?"
      : "Ready to improve your CRM?"}
  </p>

  <p className="mx-auto mt-2 max-w-xl text-white/70">
    {lang === "es"
      ? "Convirtamos estos resultados en un roadmap práctico de crecimiento para tu CRM."
      : "Let’s turn your results into a practical CRM growth roadmap."}
  </p>

  <a
    href="#contact"
className="mt-5 inline-flex w-[200px] items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-400"  >
    {lang === "es" ? "Hablemos →" : "Let’s talk →"}
  </a>
</div>
              <button
                type="button"
                onClick={handleRestart}
                className="mt-10 w-[180px] rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                {text.restart}
              </button>

              <p className="mx-auto mt-8 max-w-2xl text-xs leading-6 text-white/50">
                {text.disclaimer}
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-10 flex items-center justify-between text-sm text-white/60">
                <span>
                  {text.question} {currentQuestion + 1} {text.of}{" "}
                  {questions.length}
                </span>

                <span>
                  {Math.round(
                    ((currentQuestion + 1) / questions.length) * 100
                  )}
                  %
                </span>
              </div>

              <div className="mb-10 h-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-blue-400 transition-all duration-500"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                />
              </div>

              <div className="mx-auto max-w-3xl">
                <h3 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {question.title}
                </h3>

                <div className="mt-8 space-y-3">
                  {question.options.map((option) => {
                    const isSelected = selectedScore === option.score;

                    return (
                      <button
                        key={option.score}
                        type="button"
                        onClick={() => handleSelect(option.score)}
                        className={`w-full rounded-2xl border px-5 py-4 text-left text-base transition sm:px-6 sm:py-5 ${
                          isSelected
                            ? "border-blue-200 bg-blue-500/20 text-white"
                            : "border-white/20 bg-white/[0.10] text-white/90 hover:border-blue-200/50 hover:bg-white/[0.15] hover:text-white"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className="rounded-full px-5 py-3 text-sm font-medium text-white/70 transition hover:text-white disabled:invisible"
                  >
                    {text.back}
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={selectedScore === undefined}
                    className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {currentQuestion === questions.length - 1
                      ? text.results
                      : text.next}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}