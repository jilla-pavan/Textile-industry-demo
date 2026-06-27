import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const quickLinks = ['Home', 'About Us', 'Products', 'Manufacturing', 'Wholesale', 'Testimonials', 'Contact']
const categories = ['Cotton Fabrics', 'Polyester Blends', 'Woolen Textiles', 'Bed Linen', 'Polycotton Shirting', 'Technical Fabrics', 'Printed Fabrics']
const certifications = ['ISO 9001:2015', 'BIS Certified', 'OEKO-TEX Standard 100', 'MSME Registered', 'GST Compliant']

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 text-white">
      {/* Top CTA strip */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">Ready to Partner With Us?</h3>
            <p className="text-white/80 text-sm mt-1">Get wholesale pricing in 4 hours. No commitment required.</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-white text-accent font-semibold px-6 py-3 text-sm hover:bg-gray-100 transition-colors"
            >
              Request Price List
            </button>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 text-sm transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-accent flex items-center justify-center">
                <span className="text-white font-display font-bold">B</span>
              </div>
              <div>
                <div className="font-display font-bold text-xl">BharatWeave</div>
                <div className="text-[10px] text-accent tracking-widest uppercase">Textile Manufacturers</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              India's trusted wholesale textile manufacturer since 1998. Supplying premium fabrics to 1,200+ B2B clients across all 28 states.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors">
                <Phone size={14} className="text-accent" />
                +91 98765 43210
              </a>
              <a href="mailto:sales@bharatweave.in" className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm transition-colors">
                <Mail size={14} className="text-accent" />
                sales@bharatweave.in
              </a>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="text-accent shrink-0 mt-0.5" />
                Ring Road Textile Market, Surat – 395 002
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { name: 'Facebook', href: '#', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Instagram', href: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { name: 'LinkedIn', href: '#', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="w-9 h-9 bg-gray-800 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label={s.name}
                >
                  <svg className="w-4 h-4 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-gray-300">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(`#${link.toLowerCase().replace(/\s+/g, '-').replace('about-us', 'about')}`)}
                    className="text-gray-500 hover:text-accent text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-gray-300">Products</h4>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => scrollTo('#products')}
                    className="text-gray-500 hover:text-accent text-sm transition-colors text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-5 text-gray-300">Certifications</h4>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-2 text-gray-500 text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-gray-300">Business Hours</h4>
              <div className="text-gray-500 text-sm space-y-1">
                <div>Mon – Sat: 9 AM – 7 PM</div>
                <div>Sunday: Closed</div>
                <div className="text-accent text-xs mt-2">WhatsApp: 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} BharatWeave Textiles Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Return Policy'].map((link) => (
              <button key={link} className="text-gray-600 hover:text-accent text-xs transition-colors">
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
