import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hair Transplant Turkey Cost | Affordable Packages from £1,499 – Hair Clinic Turkey',
  description:
    'Hair transplant Turkey cost from £1,499 all-inclusive. Compare our Basic, Premium and VIP packages. See how Turkey prices compare to UK, Germany and USA.',
};

const faqs = [
  {
    q: 'What is the average cost of a hair transplant in Turkey?',
    a: 'At Hair Clinic Turkey, our packages start from £1,499 for the Basic FUE package. Prices vary depending on the number of grafts required and the method chosen (FUE, DHI, or Sapphire FUE). All our packages are all-inclusive with no hidden fees.',
  },
  {
    q: 'What is included in the package price?',
    a: 'Our packages include the hair transplant procedure, pre-operative blood tests, local anaesthesia, PRP treatment, hotel accommodation (2–3 nights), VIP airport and hotel transfers, post-operative care kit, and 12-month follow-up support.',
  },
  {
    q: 'How much cheaper is Turkey vs UK for hair transplants?',
    a: 'A comparable hair transplant procedure in the UK typically costs between £8,000–£15,000. The same procedure at Hair Clinic Turkey costs £1,499–£2,999, representing a saving of up to 80%.',
  },
  {
    q: 'Why is hair transplant so much cheaper in Turkey?',
    a: 'The lower cost is due to Turkey\'s lower cost of living, favourable exchange rates, government healthcare subsidies, high volume of procedures performed, and strong competition among clinics. These savings are passed directly to patients without compromising on quality.',
  },
  {
    q: 'Are there any hidden costs I should know about?',
    a: 'No. Our packages are fully all-inclusive. The price you are quoted includes everything listed in the package. The only additional costs would be your flights to Istanbul and personal spending money.',
  },
  {
    q: 'Do you offer payment plans or financing?',
    a: 'Yes, we offer flexible payment plans for eligible patients. You can pay a deposit to secure your procedure date and pay the remaining balance before or on the day of your procedure. Contact us to discuss financing options.',
  },
  {
    q: 'How many grafts will I need?',
    a: 'The number of grafts needed depends on your degree of hair loss (measured on the Norwood scale). On average, patients need between 2,000 and 4,000 grafts. Our surgeons will give you a precise graft count during your free consultation based on photos of your scalp.',
  },
  {
    q: 'Is the quality as good as clinics in the UK or Germany?',
    a: 'Absolutely. Many of our surgeons trained in Europe and the USA. Our clinic uses the same FDA-approved equipment as top clinics in London, Berlin, and New York. We hold ISO certification and our surgeons are board-certified members of international hair transplant associations.',
  },
];

export default function CostPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Hair Transplant Turkey Cost
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          World-class hair restoration at a fraction of the price. All-inclusive packages with no hidden fees.
        </p>

        {/* Pricing Cards */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Basic',
                price: '£1,499',
                method: 'FUE',
                grafts: 'Up to 2,500 grafts',
                featured: false,
                includes: [
                  'FUE hair transplant procedure',
                  'Pre-operative blood tests',
                  'Local anaesthesia',
                  'Post-op care kit',
                  '2-night hotel accommodation',
                  'Airport transfers',
                  '12-month follow-up',
                ],
              },
              {
                name: 'Premium',
                price: '£1,999',
                method: 'Sapphire FUE',
                grafts: 'Up to 4,000 grafts',
                featured: true,
                includes: [
                  'Sapphire FUE procedure',
                  'Pre-operative blood tests',
                  'Local anaesthesia + sedation option',
                  'PRP treatment included',
                  '3-night hotel accommodation',
                  'VIP airport transfers',
                  'Vitamin supplement kit',
                  '18-month follow-up',
                ],
              },
              {
                name: 'VIP',
                price: '£2,999',
                method: 'DHI',
                grafts: 'Unlimited grafts',
                featured: false,
                includes: [
                  'DHI hair transplant procedure',
                  'Full medical screening',
                  'General sedation available',
                  'PRP + Mesotherapy',
                  '5-star hotel (4 nights)',
                  'Private VIP transfers',
                  'Personal coordinator',
                  'Hair loss prevention kit',
                  '24-month follow-up + 2 check-ups',
                ],
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl border p-7 flex flex-col ${
                  pkg.featured
                    ? 'border-blue-500 bg-blue-600 text-white shadow-xl'
                    : 'border-gray-200 bg-white shadow-sm'
                }`}
              >
                {pkg.featured && (
                  <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-1 ${pkg.featured ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.name} Package
                </h3>
                <div className={`text-4xl font-extrabold my-4 ${pkg.featured ? 'text-white' : 'text-blue-600'}`}>
                  {pkg.price}
                </div>
                <p className={`text-sm mb-1 ${pkg.featured ? 'text-blue-100' : 'text-gray-500'}`}>{pkg.method}</p>
                <p className={`text-sm mb-5 font-medium ${pkg.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {pkg.grafts}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm ${pkg.featured ? 'text-blue-100' : 'text-gray-700'}`}
                    >
                      <span className={pkg.featured ? 'text-yellow-300' : 'text-green-500'}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-bold px-5 py-3 rounded-full text-sm transition-colors ${
                    pkg.featured
                      ? 'bg-white text-blue-700 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Turkey vs UK / Germany / USA Cost Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Grafts</th>
                  <th className="px-4 py-3 text-center text-blue-300">Turkey &#127481;&#127479;</th>
                  <th className="px-4 py-3 text-center">UK &#127468;&#127463;</th>
                  <th className="px-4 py-3 text-center">Germany &#127465;&#127466;</th>
                  <th className="px-4 py-3 text-center">USA &#127482;&#127480;</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['1,500 grafts', '£1,499', '£5,000', '€6,000', '$8,000'],
                  ['2,500 grafts', '£1,599', '£7,500', '€9,000', '$12,000'],
                  ['3,500 grafts', '£1,799', '£10,000', '€12,000', '$16,000'],
                  ['4,500 grafts', '£1,999', '£13,000', '€15,000', '$20,000'],
                  ['5,500+ grafts', '£2,499', '£15,000+', '€18,000+', '$25,000+'],
                ].map(([grafts, turkey, uk, de, usa], idx) => (
                  <tr key={grafts} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{grafts}</td>
                    <td className="px-4 py-3 text-center font-bold text-blue-600 bg-blue-50">{turkey}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{uk}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{de}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{usa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">Prices are approximate and for comparison purposes only.</p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center bg-blue-600 rounded-2xl p-10 text-white">
          <h2 className="text-2xl font-bold mb-3">Get Your Personalised Quote</h2>
          <p className="text-blue-100 mb-6">
            Send us photos of your hair and we will give you an exact graft count and price — completely free.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
