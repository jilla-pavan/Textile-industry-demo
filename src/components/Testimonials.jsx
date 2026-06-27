import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ramesh Agarwal',
    role: 'Proprietor, Agarwal Textiles',
    city: 'Chandni Chowk, Delhi',
    type: 'Retailer',
    stars: 5,
    text: "BharatWeave has been our primary fabric supplier for 8 years. The quality consistency is unmatched — every roll matches the sample. Their 48-hour dispatch has helped us never miss an order. Highly recommended for serious retailers.",
  },
  {
    name: 'Sunita Mehta',
    role: 'Director, Mehta Hotel Supplies',
    city: 'Mumbai, Maharashtra',
    type: 'Hotel Supplier',
    stars: 5,
    text: "We supply linen to 35+ hotels in Mumbai and Pune, and BharatWeave handles all our fabric requirements. The hotel-grade bed linen range is exceptional — our hotel clients specifically ask for it by name now.",
  },
  {
    name: 'K. Venkatesh',
    role: 'Managing Partner, SKV Fabrics',
    city: 'Tirupur, Tamil Nadu',
    type: 'Dealer',
    stars: 5,
    text: "As a garment exporter, fabric quality is everything. BharatWeave's OEKO-TEX certified cotton has helped us win EU export contracts. Their export documentation support is also outstanding.",
  },
  {
    name: 'Priya Sharma',
    role: 'Owner, Priya Fashion House',
    city: 'Jaipur, Rajasthan',
    type: 'Retailer',
    stars: 5,
    text: "I switched to BharatWeave two years ago and haven't looked back. The printed fabric collection is stunning, the credit terms are flexible, and the account manager resolves any issues within hours. 10/10 supplier.",
  },
  {
    name: 'Ajay Nair',
    role: 'Procurement Head, Regency Hotels',
    city: 'Bengaluru, Karnataka',
    type: 'Hotel Supplier',
    stars: 5,
    text: "We procure 2 lakh meters of linen annually for our hotel chain. BharatWeave is the only vendor who consistently delivers on time, at the right quality. Their GST compliance and documentation is also flawless.",
  },
]

const typeColors = {
  'Retailer': 'bg-blue-50 text-blue-700',
  'Hotel Supplier': 'bg-purple-50 text-purple-700',
  'Dealer': 'bg-amber-50 text-amber-700',
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const { ref, isVisible } = useScrollReveal()

  const go = (dir) => {
    setDirection(dir)
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length)
  }

  const visible = [
    testimonials[(current + testimonials.length - 1) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ]

  return (
    <section id="testimonials" className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="text-accent font-semibold text-sm tracking-[0.2em] uppercase font-body"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            Client Voices
          </motion.span>
          <motion.h2
            className="font-display text-4xl md:text-5xl font-bold text-white mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Trusted by India's Best
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            From corner retailers to national hotel chains — here's what our partners say after years of working together.
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            {visible.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`relative p-8 border transition-all duration-500 ${
                  i === 1
                    ? 'border-accent bg-secondary scale-100 lg:scale-105 z-10'
                    : 'border-gray-700 bg-gray-900/40 opacity-70'
                }`}
              >
                {/* Quote icon */}
                <Quote className="text-accent/30 mb-4" size={36} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(t.stars).fill(0).map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">{t.text}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-white">{t.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{t.role}</div>
                    <div className="text-gray-600 text-xs">{t.city}</div>
                  </div>
                  <span className={`text-xs font-semibold px-2 py-1 ${typeColors[t.type]}`}>
                    {t.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => go(-1)}
              className="w-12 h-12 border border-gray-600 hover:border-accent text-gray-400 hover:text-accent flex items-center justify-center transition-all"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`h-1 transition-all duration-300 ${i === current ? 'w-8 bg-accent' : 'w-3 bg-gray-600 hover:bg-gray-400'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-12 h-12 border border-gray-600 hover:border-accent text-gray-400 hover:text-accent flex items-center justify-center transition-all"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-700"
        >
          <p className="text-center text-gray-600 text-xs font-semibold tracking-widest uppercase mb-8">
            Supplying To Businesses Across India
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Garment Exporters', 'Saree Retailers', '5-Star Hotels', 'Uniform Manufacturers', 'Furnishing Brands', 'Hospital Chains'].map((type) => (
              <span key={type} className="text-gray-500 text-sm border border-gray-700 px-4 py-2 hover:border-accent hover:text-accent transition-colors">
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
