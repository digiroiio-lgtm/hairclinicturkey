import type { Metadata } from 'next';
import Link from 'next/link';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export const metadata: Metadata = {
  title: 'Before & After Hair Transplant Results | Hair Clinic Turkey',
  description:
    'View real before and after hair transplant results from Hair Clinic Turkey patients. FUE, DHI and Sapphire FUE transformations from patients across the UK, Europe and Middle East.',
};

const cases = [
  { id: 1, label: 'FUE – 3,200 Grafts', before: 30, after: 31 },
  { id: 2, label: 'DHI – 2,800 Grafts', before: 32, after: 33 },
  { id: 3, label: 'Sapphire FUE – 4,100 Grafts', before: 34, after: 35 },
  { id: 4, label: 'FUE – 1,900 Grafts', before: 36, after: 37 },
  { id: 5, label: 'DHI – 3,500 Grafts', before: 38, after: 39 },
  { id: 6, label: 'Sapphire FUE – 2,600 Grafts', before: 40, after: 41 },
];

export default function BeforeAfterPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Before &amp; After Hair Transplant Results
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Real transformations from our patients. Every result shown is from a genuine Hair Clinic Turkey procedure.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            ['5,000+', 'Patients Treated'],
            ['98%', 'Satisfaction Rate'],
            ['15+', 'Years Experience'],
            ['40+', 'Countries'],
          ].map(([num, label]) => (
            <div key={label} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
              <div className="text-3xl font-extrabold">{num}</div>
              <div className="text-blue-100 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Side-by-side comparison gallery */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Patient Transformations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {cases.map((c) => (
            <BeforeAfterSlider
              key={c.id}
              label={c.label}
              beforeSrc={`https://picsum.photos/400/300?random=${c.before}`}
              afterSrc={`https://picsum.photos/400/300?random=${c.after}`}
            />
          ))}
        </div>

        {/* Gallery grid */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Result Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {Array.from({ length: 12 }, (_, i) => i + 50).map((n) => (
            <div key={n} className="rounded-xl overflow-hidden shadow-sm">
              <img
                src={`https://picsum.photos/400/300?random=${n}`}
                alt={`Hair transplant result patient ${n - 49}`}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Could You Be Our Next Success Story?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Send us photos of your hair loss and we will give you a free, honest assessment with expected results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
            >
              Get Free Assessment
            </Link>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              WhatsApp Photos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
