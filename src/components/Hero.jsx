import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Shield, Award, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const stats = [
  { value: '25+', label: 'Years Experience', icon: Award },
  { value: '500+', label: 'Product Variants', icon: Globe },
  { value: '50+', label: 'Lakh Meters/Month', icon: Shield },
  { value: '1200+', label: 'B2B Clients', icon: Globe },
]

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-primary">
      {/* Background textile pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                rgba(193,154,107,0.15) 40px,
                rgba(193,154,107,0.15) 41px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 40px,
                rgba(193,154,107,0.15) 40px,
                rgba(193,154,107,0.15) 41px
              )
            `
          }}
        />
      </div>

      {/* Gold gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: 'radial-gradient(ellipse at top right, #C19A6B 0%, transparent 70%)'
        }}
      />

      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-accent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.3 }}
        style={{ transformOrigin: 'top' }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-8"
              >
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent font-body text-sm font-semibold tracking-[0.25em] uppercase">
                  Est. 1998 · Surat, Gujarat
                </span>
              </motion.div>

              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              >
                India's Premier
                <span className="block text-accent italic mt-1">Textile</span>
                Manufacturer
              </motion.h1>

              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl"
              >
                Supplying premium-quality fabrics to retailers, dealers, and hotel chains across India.
                BIS certified. ISO 9001:2015. Minimum 25,000 meter MOQ with competitive wholesale pricing.
              </motion.p>

              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4 mb-12"
              >
                <button
                  onClick={() => scrollTo('#contact')}
                  className="btn-primary text-sm"
                >
                  Request Price List
                  <ArrowRight size={16} />
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Talk on WhatsApp
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-4"
              >
                {['ISO 9001:2015', 'BIS Certified', 'MSME Registered', 'GST Compliant'].map((badge) => (
                  <span
                    key={badge}
                    className="text-xs text-gray-400 border border-gray-700 px-3 py-1.5 font-medium tracking-wide"
                  >
                    {badge}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right - Stats grid */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative"
              >
                {/* Decorative fabric visualization */}
                <div className="relative border border-gray-700 p-8">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent -translate-x-1 -translate-y-1" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent translate-x-1 -translate-y-1" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent -translate-x-1 translate-y-1" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent translate-x-1 translate-y-1" />

                  <div className="grid grid-cols-2 gap-6 mb-6">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="text-center p-6 border border-gray-700 hover:border-accent transition-colors group"
                      >
                        <div className="text-3xl font-display font-bold text-accent mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-500 font-medium tracking-wide uppercase">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Featured product preview */}
                  <div className="bg-gray-800/50 p-5 border border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                      <span className="text-accent text-xs font-semibold tracking-widest uppercase">New Season Collection</span>
                    </div>
                    <p className="text-white font-display text-xl font-semibold">Winter Premium Woolen Range</p>
                    <p className="text-gray-400 text-sm mt-1">Available in 80+ colors · MOQ 500m</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-accent transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
