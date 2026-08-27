type FooterProps = {
  lang?: "en" | "es";
};

export default function Footer({ lang = "en" }: FooterProps) {
  const content = {
    en: {
      tagline: "CRM • MARKETING AUTOMATION • LIFECYCLE",
      location: "Valencia, Spain",
      services: "Services",
      experience: "Experience",
      contact: "Contact",
      email: "Email",
      linkedin: "LinkedIn",
    },

    es: {
      tagline: "CRM • AUTOMATIZACIÓN DE MARKETING • LIFECYCLE",
      location: "Valencia, España",
      services: "Servicios",
      experience: "Experiencia",
      contact: "Contacto",
      email: "Email",
      linkedin: "LinkedIn",
    },
  };

  const text = content[lang];

  return (
    <footer className="bg-black text-white px-8 py-10">

      <div className="max-w-7xl mx-auto">

        {/* MAIN FOOTER */}

        <div className="grid md:grid-cols-3 items-start gap-8">

          {/* BRAND */}

          <div className="text-left">

            <p className="font-bold text-xl tracking-wide">
              CRM CONVERT
            </p>

            <p className="text-gray-500 text-xs tracking-[0.25em] mt-2">
              {text.tagline}
            </p>

            <p className="text-gray-500 text-sm mt-1">
              {text.location}
            </p>

          </div>


          {/* NAVIGATION */}

          <div className="flex justify-center gap-8 text-sm font-semibold">

            <a
              href="#services"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {text.services}
            </a>

            <a
              href="#experience"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {text.experience}
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {text.contact}
            </a>

          </div>


          {/* CONTACT */}

          <div className="flex justify-end gap-6 text-sm font-semibold">

            <a
              href="mailto:silvanaebernal@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {text.email}
            </a>

            <a
              href="https://www.linkedin.com/in/silvana-bernal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition"
            >
              {text.linkedin}
            </a>

          </div>

        </div>


        {/* COPYRIGHT */}

        <div className="border-t border-white/10 mt-8 pt-6 text-center">

          <p className="text-gray-600 text-sm">
            © 2026 CRM Convert
          </p>

        </div>

      </div>

    </footer>
  );
}