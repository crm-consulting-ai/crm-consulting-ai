export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030817]/90 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="leading-none"
        >
          <h1 className="text-2xl font-bold tracking-wide">
            CRM
          </h1>

          <p className="text-xs tracking-[0.3em] text-gray-300 mt-1">
            CONVERT
          </p>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-lg font-bold">

          <a
            href="#services"
            className="nav-link rounded-full px-3 py-2"
          >
            Services
          </a>

          <a
            href="#experience"
            className="nav-link rounded-full px-3 py-2"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="nav-link rounded-full px-3 py-2"
          >
            Contact
          </a>

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="border border-white/80 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-200"
        >
          Let's Talk
        </a>

      </div>
    </nav>
  );
}