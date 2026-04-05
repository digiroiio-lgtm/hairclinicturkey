import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hair Transplant Methods in Turkey | FUE, DHI, Sapphire FUE – Hair Clinic Turkey',
  description:
    'Compare FUE, DHI and Sapphire FUE hair transplant methods available at Hair Clinic Turkey in Istanbul. Find out which technique is right for you.',
};

export default function MethodsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Hair Transplant Methods in Turkey
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          At Hair Clinic Turkey we offer three world-leading techniques. Your surgeon will recommend the best method based on your hair type, degree of loss, and desired outcome.
        </p>

        {/* FUE */}
        <section className="mb-14">
          <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">FUE Hair Transplant</h2>
            <p className="text-sm text-blue-500 font-medium mb-4">Follicular Unit Extraction</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              FUE is the gold standard in hair transplantation and the most widely performed method worldwide. Individual hair follicles are extracted one by one from the donor area (typically the back and sides of the scalp) using a micro-punch tool, then precisely implanted into the thinning or bald areas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Because no strip of skin is removed, there is no linear scar — only tiny circular marks that are virtually invisible. Recovery is quick, with most patients returning to normal activities within 5&ndash;7 days.
            </p>
            <h3 className="font-bold text-gray-900 mb-2">Key Benefits:</h3>
            <ul className="space-y-2 mb-4">
              {[
                'No linear scarring',
                'Minimally invasive with local anaesthesia',
                'Natural-looking results',
                'Suitable for most hair loss patterns',
                'Fast recovery — return to work in days',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600 font-bold">&#10003;</span> {b}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">Typical graft range: 1,000 &ndash; 5,000+ grafts per session</p>
          </div>
        </section>

        {/* DHI */}
        <section className="mb-14">
          <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-700 mb-2">DHI Hair Transplant</h2>
            <p className="text-sm text-green-500 font-medium mb-4">Direct Hair Implantation</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              DHI is an advanced evolution of FUE. Extracted follicles are loaded directly into a specialised Choi implanter pen and implanted into the scalp without the need to pre-make incisions. This reduces the time follicles spend outside the body, improving graft survival rates.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              DHI allows surgeons to control the depth, direction, and angle of each follicle with extreme precision, resulting in a more natural hair direction and denser coverage. It is particularly effective for adding density to existing hair without shaving the recipient area.
            </p>
            <h3 className="font-bold text-gray-900 mb-2">Key Benefits:</h3>
            <ul className="space-y-2 mb-4">
              {[
                'Higher graft survival rate',
                'Maximum density and precision placement',
                'Unshaved option available',
                'Faster healing due to fewer incisions',
                'Best for adding density to existing hair',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-600 font-bold">&#10003;</span> {b}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">Typical graft range: 1,000 &ndash; 3,500 grafts per session</p>
          </div>
        </section>

        {/* Sapphire FUE */}
        <section className="mb-14">
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-purple-700 mb-2">Sapphire FUE</h2>
            <p className="text-sm text-purple-500 font-medium mb-4">Advanced Sapphire Blade Technology</p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sapphire FUE is an enhanced version of standard FUE that uses blades made from precious sapphire stone instead of steel. The ultra-sharp V-shaped sapphire blades create smaller, more precise micro-incisions in the recipient area, reducing tissue trauma significantly.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The smoother surface of sapphire blades reduces vibration during incision, minimising damage to surrounding tissue. This leads to faster healing, reduced risk of infection, and superior density. Sapphire FUE is ideal for patients with advanced hair loss requiring dense coverage.
            </p>
            <h3 className="font-bold text-gray-900 mb-2">Key Benefits:</h3>
            <ul className="space-y-2 mb-4">
              {[
                'Minimal tissue damage',
                'Faster recovery and healing',
                'Higher graft density possible',
                'Reduced infection risk',
                'Ideal for advanced hair loss (Norwood 5-7)',
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-gray-700">
                  <span className="text-purple-600 font-bold">&#10003;</span> {b}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500">Typical graft range: 2,000 &ndash; 6,000+ grafts per session</p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Method Comparison</h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Feature</th>
                  <th className="px-4 py-3 text-center">FUE</th>
                  <th className="px-4 py-3 text-center">DHI</th>
                  <th className="px-4 py-3 text-center">Sapphire FUE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Scarring', 'Minimal', 'Minimal', 'Minimal'],
                  ['Recovery Time', '5–7 days', '3–5 days', '4–6 days'],
                  ['Graft Survival', '90–95%', '95–98%', '92–96%'],
                  ['Density', 'Good', 'Excellent', 'Excellent'],
                  ['Suitable For', 'Most cases', 'All grades', 'Advanced loss'],
                  ['Shaving Required', 'Yes', 'Optional', 'Yes'],
                  ['Price (approx)', 'From £1,499', 'From £1,999', 'From £1,799'],
                ].map(([feature, fue, dhi, sap], idx) => (
                  <tr key={feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{feature}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{fue}</td>
                    <td className="px-4 py-3 text-center text-gray-700 bg-green-50">{dhi}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{sap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Which Method */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Method Is Right For You?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Choose FUE if...',
                points: ['You have moderate hair loss', 'You want a proven, cost-effective solution', 'You have a large donor area', 'First-time transplant patient'],
                color: 'blue',
              },
              {
                title: 'Choose DHI if...',
                points: ['You want maximum density', 'You prefer unshaved procedure', 'You have existing hair to densify', 'Precision and density are priority'],
                color: 'green',
              },
              {
                title: 'Choose Sapphire FUE if...',
                points: ['You have advanced (Norwood 5–7) hair loss', 'You want fastest recovery', 'Large graft sessions needed', 'Sensitive scalp'],
                color: 'purple',
              },
            ].map((col) => {
              const colorClasses: Record<string, { bg: string; border: string; heading: string; check: string }> = {
                blue: { bg: 'bg-blue-50', border: 'border-blue-100', heading: 'text-blue-700', check: 'text-blue-600' },
                green: { bg: 'bg-green-50', border: 'border-green-100', heading: 'text-green-700', check: 'text-green-600' },
                purple: { bg: 'bg-purple-50', border: 'border-purple-100', heading: 'text-purple-700', check: 'text-purple-600' },
              };
              const cc = colorClasses[col.color];
              return (
                <div key={col.title} className={`${cc.bg} rounded-xl p-5 border ${cc.border}`}>
                  <h3 className={`font-bold ${cc.heading} mb-3`}>{col.title}</h3>
                  <ul className="space-y-2">
                    {col.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-gray-700 text-sm">
                        <span className={`${cc.check} font-bold`}>&#10003;</span> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Not sure which method is best for you? Get a free assessment from our surgeons.</p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
