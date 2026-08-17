export default function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-8 py-28"
    >

      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.3em] text-sm text-blue-500 mb-5">
          WHAT I DO
        </p>

        <h2 className="text-5xl font-bold mb-6">
          CRM & Automation Solutions
        </h2>

        <p className="text-gray-600 text-xl">
          End-to-end CRM and lifecycle marketing strategies.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition">
          <div className="text-5xl mb-6">🎯</div>

          <h3 className="text-2xl font-semibold mb-5">
            CRM Strategy
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Customer lifecycle design,
            segmentation, onboarding,
            retention and reactivation
            strategies.
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition">
          <div className="text-5xl mb-6">⚡</div>

          <h3 className="text-2xl font-semibold mb-5">
            Marketing Automation
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Automated email, push and onsite
            campaigns focused on improving
            engagement and conversion.
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition">
          <div className="text-5xl mb-6">📊</div>

          <h3 className="text-2xl font-semibold mb-5">
            Analytics & Reporting
          </h3>

          <p className="text-gray-600 leading-relaxed">
            KPI monitoring, campaign analysis
            and performance reporting for
            data-driven decisions.
          </p>
        </div>

        <div className="bg-white rounded-[30px] p-10 shadow-sm hover:shadow-xl transition">
          <div className="text-5xl mb-6">🚀</div>

          <h3 className="text-2xl font-semibold mb-5">
            Retention & Engagement
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Optimization of user journeys and
            communication strategies to
            maximize customer value.
          </p>
        </div>

      </div>

    </section>
  );
}