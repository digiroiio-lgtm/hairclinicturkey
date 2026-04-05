import type { Metadata } from 'next';
import Link from 'next/link';
import ConsultationForm from '@/components/ConsultationForm';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Hair Transplant Turkey | Hair Clinic Turkey – Premium Hair Restoration',
  description:
    'Get a world-class hair transplant in Turkey with Hair Clinic Turkey. FUE, DHI & Sapphire FUE from £1,499. Free consultation, all-inclusive packages, Istanbul.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Hair Clinic Turkey',
  description: 'Premium hair transplant clinic in Istanbul offering FUE, DHI and Sapphire FUE procedures.',
  url: 'https://hairclinicturkey.com',
  telephone: '+90-555-123-4567',
  email: 'info@hairclinicturkey.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nişantaşı, Şişli',
    addressLocality: 'Istanbul',
    addressCountry: 'TR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '5000',
  },
};

const reviews = [
  {
    name: 'James Mitchell',
    country: '🇬🇧 UK',
    rating: 5,
    text: 'Absolutely life-changing experience. The team at Hair Clinic Turkey were professional, caring and the results are beyond what I expected. 12 months on and my hair looks completely natural.',
  },
  {
    name: 'Hans Weber',
    country: '🇩🇪 Germany',
    rating: 5,
    text: 'Outstanding clinic. I researched for 2 years before choosing Hair Clinic Turkey. The price was a third of what German clinics quoted me and the quality is far superior.',
  },
  {
    name: 'Michael Johnson',
    country: '🇺🇸 USA',
    rating: 5,
    text: 'Flew from New York and it was worth every mile. The whole package — hotel, transfers, the procedure itself — was seamlessly organised. My hair restored my confidence.',
  },
  {
    name: 'Ahmed Al-Rashid',
    country: '🇦🇪 UAE',
    rating: 5,
    text: 'I had my DHI procedure done here and the results are remarkable. Very professional staff. The clinic is world-class and the aftercare support is excellent.',
  },
  {
    name: 'Lars Eriksson',
    country: '🇸🇪 Sweden',
    rating: 5,
    text: 'Second to none. The Sapphire FUE procedure was painless and the recovery was much faster than I anticipated. The team kept me informed throughout.',
  },
  {
    name: 'Pieter van den Berg',
    country: '🇳🇱 Netherlands',
    rating: 5,
    text: 'Exceptional service from the first WhatsApp message to the follow-up call 6 months later. Hair density is amazing. Highly recommend.',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold mb-4">
            Istanbul, Turkey
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hair Transplant Turkey
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Premium Hair Restoration with World-Class Surgeons
          </p>
          <p className="text-blue-200 mb-10 text-lg">
            FUE &middot; DHI &middot; Sapphire FUE &nbsp;|&nbsp; From &pound;1,499 All-Inclusive &nbsp;|&nbsp; 5,000+ Happy Patients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg"
            >
              WhatsApp Us Now
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ['5,000+', 'Patients'],
              ['15+', 'Years'],
              ['40+', 'Countries'],
              ['98%', 'Success Rate'],
            ].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-extrabold">{num}</div>
                <div className="text-blue-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="py-10 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <TrustBadges />
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Hair Clinic Turkey?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine medical excellence with exceptional patient care to deliver life-changing results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Expert Surgeons',
                desc: 'Board-certified hair transplant surgeons with 15+ years of experience and thousands of successful procedures.',
                emoji: '👨‍⚕️',
              },
              {
                title: 'Advanced Technology',
                desc: 'State-of-the-art FUE, DHI, and Sapphire FUE equipment for minimal scarring and maximum graft survival.',
                emoji: '🔬',
              },
              {
                title: 'Affordable Packages',
                desc: 'All-inclusive packages from £1,499 — up to 70% less than UK, Germany, or USA. No hidden fees.',
                emoji: '💷',
              },
              {
                title: 'International Care',
                desc: 'Dedicated international patient coordinators, airport transfers, hotel accommodation and aftercare included.',
                emoji: '🌍',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{card.emoji}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODS */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hair Transplant Methods
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer three world-class techniques tailored to your specific hair loss pattern and goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'FUE Hair Transplant',
                desc: 'Follicular Unit Extraction — the gold standard method. Individual follicles harvested and transplanted for natural results.',
              },
              {
                name: 'DHI Hair Transplant',
                desc: 'Direct Hair Implantation — uses a Choi pen for precise placement, faster healing, and higher density results.',
              },
              {
                name: 'Sapphire FUE',
                desc: 'Enhanced FUE using sapphire blades for micro-incisions, less trauma, minimal scarring, and quicker recovery.',
              },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{m.name}</h3>
                <p className="text-gray-600 text-sm mb-5 leading-relaxed">{m.desc}</p>
                <Link
                  href="/hair-transplant-methods"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Patient Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the transformation. All results are from real patients treated at Hair Clinic Turkey.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <div key={n} className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={`https://picsum.photos/400/300?random=${n}`}
                  alt={`Hair transplant patient result ${n}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/before-after"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              View All Results
            </Link>
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hair Transplant Turkey Cost
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Save up to 70% compared to UK, Germany or USA prices &mdash; without compromising on quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Basic Package', price: '£1,499', grafts: 'Up to 2,500 grafts', method: 'FUE', featured: false },
              { name: 'Premium Package', price: '£1,999', grafts: 'Up to 4,000 grafts', method: 'Sapphire FUE', featured: true },
              { name: 'VIP Package', price: '£2,999', grafts: 'Unlimited grafts', method: 'DHI', featured: false },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-6 border ${pkg.featured ? 'border-blue-400 bg-blue-600' : 'border-gray-600 bg-gray-800'}`}
              >
                {pkg.featured && (
                  <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                <div className="text-4xl font-extrabold my-4">{pkg.price}</div>
                <p className="text-sm text-gray-300">{pkg.grafts}</p>
                <p className="text-sm text-gray-300 mb-5">{pkg.method}</p>
                <Link
                  href="/hair-transplant-turkey-cost"
                  className="block text-center bg-white text-blue-700 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >
                  See Full Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center gap-1 text-yellow-400 text-2xl mb-2">
              <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </div>
            <p className="text-gray-500">4.9 / 5 from 1,200+ Google reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{r.name}</p>
                    <p className="text-sm text-gray-500">{r.country}</p>
                  </div>
                </div>
                <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(r.rating)}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* MEDICAL TOURISM */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Medical Tourism in Istanbul
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Istanbul has become the world&apos;s leading destination for hair transplant surgery. Combine your procedure with exploring one of the world&apos;s most beautiful cities.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Direct flights from UK, Europe & Middle East',
                  'World-class private hospitals',
                  'All-inclusive packages — nothing to organise',
                  'English-speaking patient coordinators 24/7',
                  'Luxury hotels at affordable prices',
                  'Tourism: Bosphorus, Grand Bazaar and more',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://picsum.photos/600/400?random=20"
                alt="Istanbul medical tourism for hair transplant"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-16 px-4 bg-white" id="consultation">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Consultation
            </h2>
            <p className="text-gray-600 text-lg">
              Fill in the form and our experts will assess your hair loss and recommend the best treatment &mdash; for free.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
            <ConsultationForm />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-12 px-4 bg-blue-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Restore Your Hair?</h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Contact us today on WhatsApp or call us to speak with a hair restoration specialist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-full transition-colors"
          >
            WhatsApp: +90 555 123 4567
          </a>
          <a
            href="tel:+905551234567"
            className="bg-white text-blue-700 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </>
  );
}
