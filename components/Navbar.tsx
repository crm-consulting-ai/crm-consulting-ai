export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold tracking-wide">
            CRM
          </h1>

          <p className="text-xs tracking-[0.3em] text-gray-300">
            CONSULTING
          </p>
        </div>

        <div className="hidden md:flex gap-10 text-lg font-semibold">

          <a href="#services" className="hover:text-gray-300 transition">
            Services
          </a>

          <a href="#experience" className="hover:text-gray-300 transition">
            Experience
          </a>

          <a href="#contact" className="hover:text-gray-300 transition">
            Contact
          </a>

        </div>

        <button className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
          Let's Talk
        </button>

      </div>
    </nav>
  );
}
