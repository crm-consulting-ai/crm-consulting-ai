type ExperienceProps = {
  lang?: "en" | "es";
};

export default function Experience({
  lang = "en",
}: ExperienceProps) {
  const content = {
    en: {
      eyebrow: "EXPERIENCE",
      titleLine1: "CRM experience across multiple",
      titleLine2: "international markets",
      websites: "Websites managed",
      subscribers: "Subscribers",
      countries: "International countries",
    },

    es: {
      eyebrow: "EXPERIENCIA",
      titleLine1: "Experiencia en CRM en múltiples",
      titleLine2: "mercados internacionales",
      websites: "Websites gestionados",
      subscribers: "Suscriptores",
      countries: "Países internacionales",
    },
  };

  const text = content[lang];

  return (
    <section
      id="experience"
      className="relative z-10 mt-32 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-24 overflow-x-hidden scroll-mt-24"
    >
      <div
        className="
          relative
          w-full
          rounded-[40px]
          bg-gradient-to-r from-black via-[#020817] to-[#071b3d]
          text-white
          px-6 py-10
          sm:px-10 sm:py-12
          md:px-16 md:py-14
        "
      >

        {/* HEADER */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-blue-400 mb-6">
            {text.eyebrow}
          </p>

          <h2
            className="
              text-2xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
              max-w-4xl
              mx-auto
            "
          >
            {text.titleLine1}
            <br className="hidden sm:block" />
            {" "}
            {text.titleLine2}
          </h2>

        </div>


        {/* STATS */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            mt-10
            md:mt-14
          "
        >

          {/* WEBSITES */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-6
              md:py-0
              md:border-r
              md:border-white/10
            "
          >

            {/* Browser icon */}

            <div
              className="text-blue-400 mb-4 md:mb-6"
              style={{
                width: "54px",
                height: "54px",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "54px",
                  height: "54px",
                  display: "block",
                }}
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M3 8H21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <circle
                  cx="6"
                  cy="6"
                  r="0.8"
                  fill="currentColor"
                />

                <circle
                  cx="9"
                  cy="6"
                  r="0.8"
                  fill="currentColor"
                />
              </svg>
            </div>

            <p className="text-5xl md:text-6xl font-bold text-blue-400 leading-none">
              20+
            </p>

            <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base">
              {text.websites}
            </p>

          </div>


          {/* SUBSCRIBERS */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-6
              md:py-0
              md:border-r
              md:border-white/10
            "
          >

            {/* Mail icon */}

            <div
              className="text-blue-400 mb-4 md:mb-6"
              style={{
                width: "54px",
                height: "54px",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "54px",
                  height: "54px",
                  display: "block",
                }}
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M4 7L12 13L20 7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-5xl md:text-6xl font-bold text-blue-400 leading-none">
              100k+
            </p>

            <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base">
              {text.subscribers}
            </p>

          </div>


          {/* INTERNATIONAL COUNTRIES */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
              py-6
              md:py-0
            "
          >

            {/* Globe icon */}

            <div
              className="text-blue-400 mb-4 md:mb-6"
              style={{
                width: "54px",
                height: "54px",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "54px",
                  height: "54px",
                  display: "block",
                }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M3 12H21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M12 3C15 6 16.5 9 16.5 12C16.5 15 15 18 12 21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />

                <path
                  d="M12 3C9 6 7.5 9 7.5 12C7.5 15 9 18 12 21"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <p className="text-5xl md:text-6xl font-bold text-blue-400 leading-none">
              15
            </p>

            <p className="text-gray-300 mt-3 md:mt-4 text-sm md:text-base">
              {text.countries}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}