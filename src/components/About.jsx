import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { CheckCircle, TrendingUp, Users, Zap } from 'lucide-react'

const milestones = [
  { year: '1998', event: 'Founded in Surat with a single loom unit' },
  { year: '2005', event: 'Expanded to 200+ power looms facility' },
  { year: '2012', event: 'Achieved ISO 9001:2015 Certification' },
  { year: '2018', event: 'Pan India distribution network established' },
  { year: '2023', event: '₹120 Cr+ annual turnover milestone' },
]

const highlights = [
  { icon: CheckCircle, title: 'BIS & ISO Certified', desc: 'All products meet Indian and international quality standards.' },
  { icon: TrendingUp, title: 'Consistent Growth', desc: '25% YoY growth backed by 1,200+ loyal B2B clients.' },
  { icon: Users, title: 'Dedicated B2B Team', desc: 'Dedicated account managers for dealers and bulk buyers.' },
  { icon: Zap, title: 'Fast Dispatch', desc: '48–72 hour dispatch for in-stock orders above MOQ.' },
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title mt-3 mb-6">
              Crafting Excellence<br />
              <em className="text-accent not-italic">Since 1998</em>
            </h2>
            <div className="divider-accent mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              What began as a modest power loom unit in Surat's iconic Ring Road has grown into one of Western India's most respected textile manufacturing houses. BharatWeave today operates 12 manufacturing plants, 450+ employees, and supplies to every state in India.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
              Our strength lies in vertical integration — from raw fiber procurement to finished fabric dispatch, we control every step of production. This allows us to offer unmatched consistency in quality, competitive pricing, and reliable delivery timelines that our B2B clients depend upon.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex gap-3 p-4 bg-gray-50 hover:bg-accent/5 transition-colors border border-transparent hover:border-accent/20"
                >
                  <h.icon className="text-accent shrink-0 mt-0.5" size={20} />
                  <div>
                    <div className="font-semibold text-primary text-sm">{h.title}</div>
                    <div className="text-gray-500 text-xs mt-1 leading-relaxed">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent" />

              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-accent border-4 border-white shadow-sm" />

                    <span className="text-accent font-display font-bold text-2xl">{m.year}</span>
                    <p className="text-gray-600 mt-1 leading-relaxed">{m.event}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-12 bg-primary text-white p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-display font-bold text-accent">₹120Cr+</div>
                  <div>
                    <div className="font-semibold text-sm uppercase tracking-wider">Annual Turnover</div>
                    <div className="text-gray-400 text-sm mt-1">Consistently growing at 25% YoY since 2015</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 py-5 bg-primary overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {Array(4).fill(['Cotton Fabrics', 'Polyester Blends', 'Woolen Textiles', 'Bed Linen Sets', 'Industrial Fabrics', 'Dyed & Printed', 'Technical Textiles', 'Hotel Linen']).flat().map((item, i) => (
            <span key={i} className="text-gray-500 font-body text-sm font-medium tracking-widest uppercase">
              {item} <span className="text-accent mx-4">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
