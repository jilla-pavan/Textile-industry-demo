import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: 25, suffix: '+', label: 'Years in Business', sub: 'Est. 1998, Surat' },
  { value: 1200, suffix: '+', label: 'B2B Clients', sub: 'Dealers, Retailers, Hotels' },
  { value: 50, suffix: 'L+', label: 'Meters Monthly', sub: 'Production Capacity' },
  { value: 28, suffix: '', label: 'States Supplied', sub: 'Pan India Coverage' },
  { value: 500, suffix: '+', label: 'Product Variants', sub: 'Across 8 Categories' },
  { value: 98.2, suffix: '%', label: 'Quality Pass Rate', sub: 'Last 12 Months' },
]

function AnimatedNumber({ value, suffix, isVisible }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(current)
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, value])

  const formatted = Number.isInteger(value)
    ? Math.floor(display).toLocaleString('en-IN')
    : display.toFixed(1)

  return (
    <span>
      {formatted}{suffix}
    </span>
  )
}

export default function Stats() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.p
          className="text-center text-white/80 font-body text-sm font-semibold tracking-[0.25em] uppercase mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          By The Numbers
        </motion.p>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-accent/95 hover:bg-accent-dark transition-colors p-8 text-center group"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-1">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-white/60 text-xs">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
