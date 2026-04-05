import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Hair Clinic Turkey | World-Class Hair Transplant Surgeons in Istanbul',
  description:
    'Learn about Hair Clinic Turkey — our story, our board-certified surgeons, and why 5,000+ patients from 40+ countries choose us for hair restoration.',
};

const doctors = [
  {
    name: 'Dr. Mehmet Yilmaz',
    title: 'Lead Hair Transplant Surgeon',
    speciality: 'FUE & Sapphire FUE Specialist',
    experience: '18 years',
    qualifications: 'MD, FISHRS, European Hair Research Society Member',
    bio: 'Dr. Yilmaz is our lead surgeon with over 18 years dedicated exclusively to hair transplant surgery. He trained in Vienna and London before returning to Istanbul to found Hair Clinic Turkey. He has performed over 3,000 procedures and is renowned for his natural hairline design and meticulous technique.',
  },
  {
    name: 'Dr. Ayse Kaya',
    title: 'Senior Hair Restoration Surgeon',
    speciality: 'DHI & Density Restoration',
    experience: '12 years',
    qualifications: 'MD, ABHRS Certified, International Society of Hair Restoration Surgery',
    bio: 'Dr. Kaya specialises in DHI procedures and density restoration for patients with existing hair. She is particularly sought after for her skill with unshaved DHI procedures and is the preferred choice for female hair transplant patients. She completed her fellowship at a leading hair transplant centre in London.',
  },
  {
    name: 'Dr. Ibrahim Demir',
    title: 'Hair Transplant & Trichology Consultant',
    speciality: 'Advanced Hair Loss & Sapphire FUE',
    experience: '14 years',
    qualifications: 'MD, Trichologist, Member of Turkish Dermatology Association',
    bio: 'Dr. Demir combines his expertise in trichology (the medical study of hair and scalp disorders) with surgical hair restoration. He is the clinic\'s go-to surgeon for complex, high-grade hair loss cases (Norwood 5–7) and has developed several advanced techniques for maximising graft yield from limited donor areas.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          About Hair Clinic Turkey
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          Istanbul&apos;s most trusted international hair transplant clinic, combining surgical excellence with genuine patient care.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            ['5,000+', 'Patients Treated'],
            ['15+', 'Years Experience'],
            ['40+', 'Countries Served'],
            ['98%', 'Success Rate'],
          ].map(([num, label]) => (
            <div key={label} className="bg-blue-600 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold">{num}</div>
              <div className="text-blue-100 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Hair Clinic Turkey was founded in 2009 by Dr. Mehmet Yilmaz with a clear mission: to provide world-class hair transplant surgery that is accessible to international patients at a fraction of Western prices — without any compromise in quality, safety, or patient experience.
            </p>
            <p>
              Based in the prestigious Nişantaşı district of Istanbul, our clinic quickly gained a reputation for outstanding results and exceptional patient care. Word spread through patient communities in the UK, Germany, and across Europe, and we began welcoming patients from 40+ countries within our first five years.
            </p>
            <p>
              Today, Hair Clinic Turkey is one of Istanbul&apos;s most reviewed and respected hair transplant clinics. Our team of three board-certified surgeons and 20+ medical staff perform over 500 procedures each year, with a 98% patient satisfaction rate.
            </p>
            <p>
              We are proud to hold ISO 9001 certification for quality management and our procedures are performed in a JCI-accredited facility. Our surgeons are active members of the International Society of Hair Restoration Surgery (ISHRS) and the European Hair Research Society (EHRS).
            </p>
          </div>
        </section>

        {/* Doctors */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Meet Our Surgeons</h2>
          <div className="space-y-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                    {doc.name.split(' ')[1][0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900">{doc.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-0.5">{doc.title}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      {doc.speciality} &bull; {doc.experience} experience
                    </p>
                    <p className="text-xs text-gray-400 mb-3">{doc.qualifications}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{doc.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications &amp; Accreditations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { title: 'ISO 9001:2015', sub: 'Quality Management System Certified' },
              { title: 'JCI Accredited Facility', sub: 'International Healthcare Standard' },
              { title: 'ISHRS Members', sub: 'International Society of Hair Restoration Surgery' },
              { title: 'EHRS Members', sub: 'European Hair Research Society' },
              { title: 'ABHRS Certified', sub: 'American Board of Hair Restoration Surgery' },
              { title: 'Turkish MOH Licensed', sub: 'Ministry of Health Approved Clinic' },
            ].map((cert) => (
              <div key={cert.title} className="bg-blue-50 border border-blue-100 rounded-xl p-5 text-center">
                <p className="font-bold text-blue-700 mb-1">{cert.title}</p>
                <p className="text-gray-600 text-xs">{cert.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
