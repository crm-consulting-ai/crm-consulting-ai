export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <p className="font-bold text-lg">
            CRM Consulting
          </p>

          <p className="text-gray-400 text-sm mt-1">
            CRM & Marketing Automation
          </p>
        </div>

        <div className="flex gap-8 text-sm font-semibold">

          <a
            href="#services"
            className="hover:text-gray-300 transition"
          >
            Services
          </a>

          <a
            href="#experience"
            className="hover:text-gray-300 transition"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-gray-300 transition"
          >
            Contact
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © 2026 CRM Consulting
        </p>

      </div>
    </footer>
  );
}