import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  {
    label: 'Products', href: '#products',
    children: ['Cotton Fabrics', 'Polyester Blends', 'Woolen Textiles', 'Bed Linen', 'Industrial Fabrics']
  },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'Wholesale', href: '#wholesale' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-gray-400">Trusted Textile Manufacturer Since 1998 | Pan India Supply Available</p>
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-accent hover:text-accent-light transition-colors">
              <Phone size={12} />
              +91 98765 43210
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white border-b border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button onClick={() => scrollTo('#home')} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">B</span>
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-xl text-primary leading-none">BharatWeave</div>
                <div className="text-[10px] text-accent tracking-widest uppercase font-body">Textile Manufacturers</div>
              </div>
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.children && setDropdown(link.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    onClick={() => !link.children && scrollTo(link.href)}
                    className="nav-link flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-accent transition-colors"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} className={`transition-transform ${dropdown === link.label ? 'rotate-180' : ''}`} />}
                  </button>

                  {link.children && (
                    <AnimatePresence>
                      {dropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 min-w-[200px] py-2"
                        >
                          {link.children.map((child) => (
                            <button
                              key={child}
                              onClick={() => scrollTo('#products')}
                              className="block w-full text-left px-5 py-2.5 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-colors"
                            >
                              {child}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                WhatsApp
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-5 py-2.5 transition-colors"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-primary"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollTo(link.href)}
                    className="block w-full text-left py-3 text-sm font-medium text-gray-700 border-b border-gray-50 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 flex gap-3">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-green-600 text-white py-3 text-sm font-semibold"
                  >
                    WhatsApp
                  </a>
                  <button
                    onClick={() => scrollTo('#contact')}
                    className="flex-1 bg-accent text-white py-3 text-sm font-semibold"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
