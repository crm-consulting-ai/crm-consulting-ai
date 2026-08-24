"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

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
            CONTACT
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s work together
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Let’s discuss how CRM can improve your customer lifecycle,
            engagement and retention.
          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;
            const formData = new FormData(form);

            setStatus("Sending...");

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                body: formData,
              });

              if (response.ok) {
                setStatus("Message sent successfully.");
                form.reset();
              } else {
                setStatus("Something went wrong. Please try again.");
              }
            } catch {
              setStatus("Something went wrong. Please try again.");
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
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
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
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
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
              Company
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

          </div>


          {/* MESSAGE */}

          <div className="mt-6">

            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me a little about what you are looking to improve..."
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
              Send message →
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
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/silvana-bernal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-500 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}