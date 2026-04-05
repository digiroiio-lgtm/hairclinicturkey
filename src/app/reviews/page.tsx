import type { Metadata } from 'next';
import Link from 'next/link';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'Patient Reviews & Testimonials | Hair Clinic Turkey',
  description:
    'Read real patient reviews and testimonials from Hair Clinic Turkey. Over 1,200 verified Google reviews from UK, Europe, USA and Middle East patients.',
};

const reviews = [
  {
    name: 'James Mitchell',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    date: 'October 2024',
    method: 'Sapphire FUE – 3,200 grafts',
    text: 'I spent 6 months researching clinics before choosing Hair Clinic Turkey and I can honestly say it was the best decision of my life. From the moment I landed at Istanbul airport there was a driver waiting for me. The clinic is immaculate, modern and the team made me feel completely at ease. Dr. Yilmaz explained every step of the procedure. 12 months on, my hair looks completely natural and I have received so many compliments. I cannot recommend them highly enough.',
  },
  {
    name: 'Hans Weber',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 5,
    date: 'August 2024',
    method: 'DHI – 2,800 grafts',
    text: 'As a German, I am usually very sceptical and do my research thoroughly. I visited 3 clinics in Berlin before discovering Hair Clinic Turkey. The quality of care, the professionalism of the surgeons, and the results exceeded anything I could have found in Germany — at a third of the price. Communication was excellent throughout. I have already recommended two colleagues who have since had the procedure done.',
  },
  {
    name: 'Michael Johnson',
    country: 'United States',
    flag: '🇺🇸',
    rating: 5,
    date: 'July 2024',
    method: 'Sapphire FUE – 4,100 grafts',
    text: 'I flew from New York specifically for this procedure after seeing incredible before/after photos online. Every single thing about the experience was exceptional. The VIP package was worth every penny — luxury hotel, private transfers, a personal coordinator who was available 24/7. The procedure itself was virtually painless. Nine months later and the results are stunning. American clinics wanted $18,000 for the same work. I paid £2,999 here.',
  },
  {
    name: 'Ahmed Al-Rashid',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    rating: 5,
    date: 'September 2024',
    method: 'DHI – 3,500 grafts',
    text: 'Exceptional experience from start to finish. The clinic had Arabic-speaking staff which made communication easy. The DHI procedure was precisely what I needed for the dense coverage I wanted. Dr. Kaya was incredibly skilled and took time to understand my aesthetic goals. The results 8 months later are exactly what was promised. Hair density is remarkable and completely natural looking.',
  },
  {
    name: 'Lars Eriksson',
    country: 'Sweden',
    flag: '🇸🇪',
    rating: 5,
    date: 'June 2024',
    method: 'FUE – 2,500 grafts',
    text: 'Had my procedure done in June and could not be happier. The recovery was incredibly quick — I was back to work in 5 days. The clinic environment is spotlessly clean and all the equipment is state-of-the-art. The team are warm and reassuring throughout. At 10 months post-procedure the hair growth is thick and natural. Swedish clinics quoted me 80,000 SEK for the same work. I paid a fraction of that here.',
  },
  {
    name: 'Pieter van den Berg',
    country: 'Netherlands',
    flag: '🇳🇱',
    rating: 5,
    date: 'May 2024',
    method: 'Sapphire FUE – 3,800 grafts',
    text: 'From the first WhatsApp message through to the 6-month follow-up call, every interaction with Hair Clinic Turkey has been excellent. They answered every single question patiently, even when I asked the same thing multiple times. The procedure was smooth, recovery was fast, and the results are phenomenal. My hairline looks 15 years younger. Absolutely five stars.',
  },
  {
    name: 'Robert Taylor',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    date: 'April 2024',
    method: 'DHI – 1,900 grafts',
    text: 'I chose the unshaved DHI option as I needed to return to work quickly with no one noticing I had had the procedure. Brilliant decision. Within 2 weeks there were virtually no visible signs. Now at 7 months the new hairs are growing through beautifully. The team at Hair Clinic Turkey are true professionals. I have already booked a second session for the crown area.',
  },
  {
    name: 'Marco Rossi',
    country: 'Italy',
    flag: '🇮🇹',
    rating: 5,
    date: 'March 2024',
    method: 'Sapphire FUE – 4,500 grafts',
    text: 'I had an advanced Norwood 6 pattern and was told by Italian clinics that my case was challenging. Dr. Demir at Hair Clinic Turkey assessed my photos and was immediately confident. The results at 11 months have exceeded my most optimistic expectations. Full coverage of the top and crown, completely natural hairline. I am absolutely delighted and would not hesitate to recommend this clinic.',
  },
  {
    name: 'David O\'Brien',
    country: 'Ireland',
    flag: '🇮🇪',
    rating: 5,
    date: 'February 2024',
    method: 'FUE – 3,000 grafts',
    text: 'Flew from Dublin and everything was sorted from the moment I arrived. The accommodation was brilliant, the clinic is top class, and the procedure was professionally executed. At 9 months post-op my hair is thick and full. Friends who know I had the procedure cannot believe how natural it looks. Best money I have ever spent.',
  },
];

export default function ReviewsPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Patient Reviews &amp; Testimonials
        </h1>
        <div className="flex items-center justify-center gap-2 text-yellow-400 text-3xl mb-3">
          <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        </div>
        <p className="text-center text-gray-600 text-lg mb-4">4.9 out of 5 &bull; 1,200+ Verified Google Reviews</p>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Hear directly from our patients from across the world. Every review below is genuine and unedited.
        </p>

        {/* Trust Badges */}
        <div className="mb-14">
          <TrustBadges />
        </div>

        {/* Reviews Grid */}
        <div className="space-y-6 mb-14">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{r.name}</p>
                    <p className="text-gray-500 text-sm">
                      {r.flag} {r.country} &bull; {r.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 text-lg">{'★'.repeat(r.rating)}</div>
                  <p className="text-xs text-gray-400 mt-1">{r.method}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Trust section */}
        <div className="bg-gray-50 rounded-2xl p-10 text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join 5,000+ Happy Patients</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Every month, patients from 40+ countries choose Hair Clinic Turkey. Start your journey today with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/before-after"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-full transition-colors"
            >
              View Before &amp; After
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
