import type { Metadata } from 'next';
import ConsultationForm from '@/components/ConsultationForm';

export const metadata: Metadata = {
  title: 'Contact Hair Clinic Turkey | Free Consultation – Istanbul',
  description:
    'Contact Hair Clinic Turkey for a free hair transplant consultation. WhatsApp, phone, email or fill in our form. Located in Nişantaşı, Istanbul, Turkey.',
};

export default function ContactPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          Contact Hair Clinic Turkey
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          We are here to help. Reach us by WhatsApp, phone, email or fill in the form below for your free consultation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Request a Free Consultation</h2>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <ConsultationForm />
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h2>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 mb-5 transition-colors"
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <div>
                <p className="font-bold text-lg">WhatsApp Us Now</p>
                <p className="text-green-100 text-sm">+90 555 123 4567 &bull; Instant response</p>
              </div>
            </a>

            <div className="space-y-4 mb-6">
              {[
                {
                  icon: '📞',
                  label: 'Phone',
                  value: '+90 555 123 4567',
                  href: 'tel:+905551234567',
                },
                {
                  icon: '✉️',
                  label: 'Email',
                  value: 'info@hairclinicturkey.com',
                  href: 'mailto:info@hairclinicturkey.com',
                },
                {
                  icon: '📍',
                  label: 'Address',
                  value: 'Nişantaşı, Şişli, Istanbul, Turkey',
                  href: null,
                },
                {
                  icon: '🕒',
                  label: 'Hours',
                  value: 'Mon–Sat: 9am–7pm (Istanbul time)',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-blue-600 font-semibold hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              className="w-full h-56 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 font-medium"
              role="img"
              aria-label="Map showing Hair Clinic Turkey location in Nişantaşı, Istanbul"
            >
              <div className="text-center">
                <div className="text-4xl mb-2">🗺️</div>
                <p>Nişantaşı, Şişli</p>
                <p className="text-sm text-gray-400">Istanbul, Turkey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
