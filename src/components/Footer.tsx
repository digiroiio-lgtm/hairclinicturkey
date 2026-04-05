import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Hair Clinic Turkey</h3>
            <p className="text-sm text-gray-400 mb-4">
              Hair Transplant Turkey by Hair Clinic Turkey. Premium hair restoration with world-class surgeons in Istanbul.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-blue-400">✓ ISO Certified</span>
              <span className="text-blue-400">✓ JCI Accredited</span>
              <span className="text-blue-400">✓ Board Certified Surgeons</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/hair-transplant-methods" className="hover:text-white transition-colors">Hair Transplant Methods</Link></li>
              <li><Link href="/before-after" className="hover:text-white transition-colors">Before &amp; After</Link></li>
              <li><Link href="/hair-transplant-turkey-cost" className="hover:text-white transition-colors">Hair Transplant Cost</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">Patient Reviews</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/905551234567" className="hover:text-white transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                  <span>📱</span> WhatsApp: +90 555 123 4567
                </a>
              </li>
              <li>
                <a href="tel:+905551234567" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>📞</span> +90 555 123 4567
                </a>
              </li>
              <li>
                <a href="mailto:info@hairclinicturkey.com" className="hover:text-white transition-colors flex items-center gap-2">
                  <span>✉️</span> info@hairclinicturkey.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Nişantaşı, Şişli, Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          {/* Trust Badges */}
          <div>
            <h4 className="text-white font-semibold mb-3">Why Trust Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span> Google Rating: 4.9/5
              </li>
              <li>✓ 5,000+ Patients Treated</li>
              <li>✓ 15+ Years Experience</li>
              <li>✓ 40+ Countries Served</li>
              <li>✓ 98% Success Rate</li>
              <li>✓ Free Consultation</li>
              <li>✓ All-Inclusive Packages</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-xs text-gray-500 text-center mb-2">
            <strong className="text-gray-400">Medical Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute medical advice. Results may vary. Please consult with our qualified medical team for personalised advice.
          </p>
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Hair Clinic Turkey. All rights reserved. | Istanbul, Turkey
          </p>
        </div>
      </div>
    </footer>
  );
}
