import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="bg-[#f3f3f1] text-black">
      <Navbar />
      <Hero />
      <Services />


      {/* EXPERIENCE */}

      <section
        id="experience"
        className="max-w-7xl mx-auto px-8 pb-28"
      >

        <div className="bg-black text-white rounded-[40px] p-14 md:p-20 overflow-hidden relative">

          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2070&auto=format&fit=crop"
              alt="map"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative">

            <p className="uppercase tracking-[0.3em] text-sm text-blue-300 mb-6">
              EXPERIENCE
            </p>

            <h2 className="text-5xl font-bold max-w-3xl mb-16">
              CRM experience across multiple
              international markets
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div>
                <p className="text-6xl font-bold text-blue-400 mb-3">
                  17
                </p>

                <p className="text-gray-400 text-lg">
                  Websites managed
                </p>
              </div>

              <div>
                <p className="text-6xl font-bold text-blue-400 mb-3">
                  100k+
                </p>

                <p className="text-gray-400 text-lg">
                  Push subscribers
                </p>
              </div>

              <div>
                <p className="text-6xl font-bold text-blue-400 mb-3">
                  10+
                </p>

                <p className="text-gray-400 text-lg">
                  International markets
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="max-w-7xl mx-auto px-8 pb-32"
      >

        <div className="bg-white rounded-[40px] p-16 text-center shadow-sm">

          <p className="uppercase tracking-[0.3em] text-sm text-blue-500 mb-6">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold mb-8">
            Let’s work together
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            Valencia, Spain
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <button className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full text-base font-semibold transition">
              Email
            </button>

            <button className="border border-black px-6 py-4 rounded-full text-base font-semibold hover:bg-black hover:text-white transition">
              LinkedIn
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}

