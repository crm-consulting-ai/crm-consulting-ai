export default function Contact() {
  return (
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
  );
}