export default function Experience() {
  return (
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
  );
}