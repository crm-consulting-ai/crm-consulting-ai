"use client";

import { useState } from "react";

type ContactProps = {
  lang?: "en" | "es";
};

export default function Contact({ lang = "en" }: ContactProps) {
  const [status, setStatus] = useState("");

  const content = {
    en: {
      eyebrow: "CONTACT",
      title: "Let’s work together",
      description:
        "Let’s discuss how CRM can improve your customer lifecycle, engagement and retention.",
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      companyPlaceholder: "Your company",
      messagePlaceholder:
        "Tell me a little about what you are looking to improve...",
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent successfully.",
      error: "Something went wrong. Please try again.",
      emailLink: "Email",
      linkedinLink: "LinkedIn",
    },

    es: {
      eyebrow: "CONTACTO",
      title: "Trabajemos juntos",
      description:
        "Hablemos sobre cómo el CRM puede mejorar el ciclo de vida, el engagement y la retención de tus clientes.",
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      companyPlaceholder: "Tu empresa",
      messagePlaceholder:
        "Cuéntame brevemente qué te gustaría mejorar...",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente.",
      error: "Ha ocurrido un error. Por favor, inténtalo de nuevo.",
      emailLink: "Email",
      linkedinLink: "LinkedIn",
    },
  };

  const text = content[lang];

  return (
    <section
      id="contact"
      style={{ scrollMarginTop: "120px" }}
      className="max-w-7xl mx-auto px-8 pb-32 scroll-mt-[110px]"
    >
      <div className="bg-white rounded-[40px] px-8 py-12 md:px-16 md:py-14 shadow-sm">

        {/* HEADER */}

        <div className="text-center mb-12">

          <p className="uppercase tracking-[0.3em] text-sm text-blue-500 mb-6">
            {text.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {text.title}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {text.description}
          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);

            setStatus(text.sending);

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
              });

              if (response.ok) {
                setStatus(text.success);
                form.reset();
              } else {
                setStatus(text.error);
              }
            } catch {
              setStatus(text.error);
            }
          }}
          className="max-w-3xl mx-auto"
        >

          <div className="grid md:grid-cols-2 gap-6">

            {/* NAME */}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {text.name}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder={text.namePlaceholder}
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            {/* EMAIL */}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {text.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder={text.emailPlaceholder}
                required
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>


          {/* COMPANY */}

          <div className="mt-6">

            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {text.company}
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder={text.companyPlaceholder}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* MESSAGE */}

          <div className="mt-6">

            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {text.message}
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder={text.messagePlaceholder}
              required
              className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* SUBMIT */}

          <div className="flex flex-col items-center mt-8">

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              {text.submit} →
            </button>

            {status && (
              <p className="mt-4 text-sm text-gray-600">
                {status}
              </p>
            )}

          </div>

        </form>


        {/* LINKS */}

        <div className="flex justify-center items-center gap-8 mt-10 text-base font-semibold">

          <a
            href="mailto:silvanaebernal@gmail.com"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            {text.emailLink}
          </a>

          <a
            href="https://www.linkedin.com/in/silvana-bernal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            {text.linkedinLink}
          </a>

        </div>

      </div>
    </section>
  );
}