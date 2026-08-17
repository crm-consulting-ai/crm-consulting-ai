export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-black text-white flex items-center">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          alt="background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-32 w-full">

        <div className="max-w-4xl">

          <p className="uppercase tracking-[0.4em] text-sm text-blue-300 mb-8">
            CRM • MARKETING AUTOMATION • LIFECYCLE
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1] mb-10">
            CRM Consulting
            <br />
            for Digital
            <br />
            <span className="text-blue-400">
              Businesses
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-12">
            Helping companies improve retention,
            engagement and customer lifecycle
            performance through data-driven CRM
            strategies and automation.
          </p>

          <div className="flex flex-wrap gap-4">

            <button className="bg-blue-500 hover:bg-blue-400 transition px-8 py-4 rounded-full text-base font-semibold">
              Get In Touch
            </button>

            <button className="border border-white px-6 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-black transition">
              LinkedIn
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}