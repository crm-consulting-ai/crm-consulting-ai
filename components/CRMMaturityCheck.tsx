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
      sixQuestions: "6 questions",
      assessmentHeading: "A clearer picture of your CRM",
      assessmentDetail:
        "Get a maturity level, a score out of 100, your strongest area and the biggest opportunity to focus on.",
      benefit1Title: "Clearer priorities",
      benefit1Text: "Understand where to focus next.",
      benefit2Title: "Lifecycle opportunities",
      benefit2Text: "Spot gaps across the customer journey.",
      benefit3Title: "Actionable insights",
      benefit3Text: "Turn your result into practical next steps.",
      answerHint: "Choose the option that best describes your current setup.",
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
      sixQuestions: "6 preguntas",
      assessmentHeading: "Una visión más clara de tu CRM",
      assessmentDetail:
        "Obtendrás un nivel de madurez, una puntuación sobre 100, tu área más fuerte y la mayor oportunidad de mejora.",
      benefit1Title: "Prioridades más claras",
      benefit1Text: "Identifica dónde conviene enfocarse.",
      benefit2Title: "Oportunidades de lifecycle",
      benefit2Text: "Detecta gaps a lo largo del customer journey.",
      benefit3Title: "Insights accionables",
      benefit3Text: "Convierte el resultado en próximos pasos concretos.",
      answerHint: "Elige la opción que mejor describa tu situación actual.",
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

  const benefits = [
    { title: text.benefit1Title, description: text.benefit1Text, icon: "target" },
    { title: text.benefit2Title, description: text.benefit2Text, icon: "chart" },
    { title: text.benefit3Title, description: text.benefit3Text, icon: "bulb" },
  ];

  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <section
      id="maturity-check"
      className="relative isolate overflow-hidden bg-[#020817] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 max-w-4xl text-center sm:mb-12">
          <p className="mb-4 text-xs font-bold tracking-[0.32em] text-[#20e1ff] sm:text-sm">
            {text.eyebrow}
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {lang === "es" ? (
              <>
                ¿Qué nivel de madurez tiene <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">tu CRM?</span>
              </>
            ) : (
              <>
                How mature is <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">your CRM?</span>
              </>
            )}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {text.intro}
          </p>
        </header>

        {!started && !showResults ? (
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-slate-950/65 p-6 shadow-[0_0_70px_rgba(0,140,255,0.12)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] px-4 py-2 text-sm font-medium text-cyan-100">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {text.sixQuestions}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {text.assessmentHeading}
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                {text.assessmentDetail}
              </p>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-left transition duration-300 hover:border-cyan-300/30 hover:bg-white/[0.06]"
                >
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${index === 0 ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-300" : index === 1 ? "border-blue-400/30 bg-blue-400/10 text-blue-300" : "border-violet-400/30 bg-violet-400/10 text-violet-300"}`}>
                    {benefit.icon === "target" ? (
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                        <circle cx="10.5" cy="13.5" r="7" />
                        <circle cx="10.5" cy="13.5" r="3" />
                        <path d="m12.5 11.5 7-7M15.5 4.5h4v4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : benefit.icon === "chart" ? (
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                        <path d="M4 20V13M10 20V8M16 20V4M22 20H2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                        <path d="M9 18h6M10 22h4M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.3 1.5-1.5 2.5h-4c-.2-1-.6-1.8-1.5-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <h4 className="text-base font-semibold text-white">{benefit.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <button
                type="button"
                onClick={() => setStarted(true)}
                className="inline-flex min-w-56 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-bold text-slate-950 shadow-[0_8px_30px_rgba(0,190,255,0.2)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(0,190,255,0.32)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {text.start}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ) : showResults ? (
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-slate-950/65 p-6 shadow-[0_0_70px_rgba(0,140,255,0.12)] backdrop-blur-xl sm:p-10 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-bold tracking-[0.3em] text-cyan-300 sm:text-sm">
                {text.yourResult}
              </p>
              <h3 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {maturityLevel}
              </h3>
              <div className="mt-7 flex flex-col items-center justify-center gap-2">
                <div className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-6xl font-bold tabular-nums text-transparent sm:text-7xl">
                  {percentage}<span className="text-3xl text-slate-500">/100</span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {text.score}
                </p>
              </div>
              <div
                className="mx-auto mt-7 h-3 max-w-xl overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-label={text.score}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percentage}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                {maturityText}
              </p>
            </div>

            <div className="mx-auto mt-9 grid max-w-4xl gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.06] p-6 text-left">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">{text.strongest}</p>
                <p className="mt-3 text-xl font-semibold text-white">{areaNames[strongestIndex]}</p>
              </div>
              <div className="rounded-2xl border border-violet-300/25 bg-violet-300/[0.06] p-6 text-left">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/10 text-violet-300">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                    <path d="M12 3v3M12 18v3M4.2 5.2l2.1 2.1m11.4 9.4 2.1 2.1M3 12h3m12 0h3M4.2 18.8l2.1-2.1m11.4-9.4 2.1-2.1" strokeLinecap="round" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-200">{text.opportunity}</p>
                <p className="mt-3 text-xl font-semibold text-white">{areaNames[opportunityIndex]}</p>
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-3xl border-t border-white/10 pt-9 text-center">
              <p className="text-xl font-semibold text-white sm:text-2xl">
                {lang === "es" ? "¿Lista para mejorar tu CRM?" : "Ready to improve your CRM?"}
              </p>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-300">
                {lang === "es"
                  ? "Convirtamos estos resultados en un roadmap práctico de crecimiento para tu CRM."
                  : "Let’s turn your results into a practical CRM growth roadmap."}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex min-w-48 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {lang === "es" ? "Hablemos" : "Let’s talk"}
                <span aria-hidden="true">→</span>
              </a>
              <div>
                <button
                  type="button"
                  onClick={handleRestart}
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/50 hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                >
                  {text.restart}
                </button>
              </div>
              <p className="mx-auto mt-7 max-w-2xl text-xs leading-6 text-slate-500">
                {text.disclaimer}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid items-stretch gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-6">
            <aside className="order-2 rounded-[1.75rem] border border-blue-400/20 bg-slate-950/55 p-6 backdrop-blur-xl sm:p-8 lg:order-1 lg:p-9">
              <p className="mb-7 text-xs font-bold uppercase tracking-[0.22em] text-slate-400">
                {lang === "es" ? "Lo que descubrirás" : "What you’ll discover"}
              </p>
              <div className="relative space-y-7 before:absolute before:bottom-7 before:left-6 before:top-7 before:w-px before:bg-gradient-to-b before:from-cyan-400/70 before:via-blue-400/50 before:to-violet-400/60">
                {benefits.map((benefit, index) => (
                  <div key={benefit.title} className="relative flex gap-4">
                    <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${index === 0 ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-300" : index === 1 ? "border-blue-400/35 bg-blue-400/10 text-blue-300" : "border-violet-400/35 bg-violet-400/10 text-violet-300"}`}>
                      {benefit.icon === "target" ? (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                          <circle cx="10.5" cy="13.5" r="7" /><circle cx="10.5" cy="13.5" r="3" /><path d="m12.5 11.5 7-7M15.5 4.5h4v4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : benefit.icon === "chart" ? (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                          <path d="M4 20V13M10 20V8M16 20V4M22 20H2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                          <path d="M9 18h6M10 22h4M8.5 14.5A7 7 0 1 1 15.5 14.5c-.9.7-1.3 1.5-1.5 2.5h-4c-.2-1-.6-1.8-1.5-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-slate-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-sm leading-6 text-slate-400">{text.answerHint}</p>
              </div>
            </aside>

            <div className="order-1 min-w-0 rounded-[1.75rem] border border-cyan-400/30 bg-slate-950/75 p-5 shadow-[0_0_55px_rgba(0,140,255,0.10)] backdrop-blur-xl sm:p-8 lg:order-2 lg:p-9" aria-live="polite">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 sm:text-sm">
                <span>{text.question} {currentQuestion + 1} {text.of} {questions.length}</span>
                <span className="text-cyan-200">{progress}%</span>
              </div>
              <div
                className="mb-8 h-2 overflow-hidden rounded-full bg-slate-800"
                role="progressbar"
                aria-label={`${text.question} ${currentQuestion + 1} ${text.of} ${questions.length}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
                {question.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text.answerHint}</p>

              <div className="mt-6 space-y-2.5">
                {question.options.map((option) => {
                  const isSelected = selectedScore === option.score;
                  const scoreIconClass =
                    option.score === 0
                      ? "border-rose-400/20 bg-rose-400/[0.08] text-rose-300"
                      : option.score === 1
                        ? "border-blue-400/20 bg-blue-400/[0.08] text-blue-300"
                        : option.score === 2
                          ? "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300"
                          : option.score === 3
                            ? "border-sky-400/20 bg-sky-400/[0.08] text-sky-300"
                            : "border-violet-400/20 bg-violet-400/[0.08] text-violet-300";

                  return (
                    <button
                      key={option.score}
                      type="button"
                      onClick={() => handleSelect(option.score)}
                      aria-pressed={isSelected}
                      className={`group flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:items-center sm:gap-4 sm:px-4 sm:py-4 ${
                        isSelected
                          ? "border-cyan-300 bg-cyan-300/[0.08] shadow-[0_0_24px_rgba(0,225,255,0.08)]"
                          : "border-blue-300/20 bg-white/[0.025] hover:border-cyan-300/40 hover:bg-white/[0.045]"
                      }`}
                    >
                      <span className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition sm:mt-0 ${isSelected ? "border-cyan-300 bg-cyan-300" : "border-slate-500 group-hover:border-cyan-300/70"}`}>
                        {isSelected && <span className="h-2 w-2 rounded-full bg-slate-950" />}
                      </span>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${scoreIconClass}`}>
                        {option.score === 0 ? (
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="m7 7 10 10M17 7 7 17" strokeLinecap="round" /></svg>
                        ) : option.score === 1 ? (
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M12 2v2M22 12h-2M12 22v-2M2 12h2" strokeLinecap="round" /></svg>
                        ) : option.score === 2 ? (
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M5 19v-5M12 19V9M19 19V4" strokeLinecap="round" /></svg>
                        ) : option.score === 3 ? (
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><circle cx="10" cy="14" r="7" /><circle cx="10" cy="14" r="3" /><path d="m12 12 8-8M16 4h4v4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        ) : (
                          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5"><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.5V20" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        )}
                      </span>
                      <span className={`min-w-0 flex-1 text-sm leading-6 sm:text-base ${isSelected ? "font-medium text-white" : "text-slate-300 group-hover:text-white"}`}>
                        {option.label}
                      </span>
                      {isSelected && (
                        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 hidden h-5 w-5 shrink-0 text-cyan-300 sm:block">
                          <path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/10 pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:bg-white/[0.04] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 disabled:cursor-not-allowed disabled:opacity-35 sm:px-5"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4"><path d="M19 12H5m7 7-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {text.back}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={selectedScore === undefined}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_6px_22px_rgba(0,190,255,0.16)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,190,255,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 sm:px-6"
                >
                  {currentQuestion === questions.length - 1 ? text.results : text.next}
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4"><path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
