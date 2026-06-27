import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Cpu, FlaskConical, Layers, ShieldCheck, Truck, Wind } from 'lucide-react'

const capabilities = [
  {
    icon: Cpu,
    title: 'Advanced Looming',
    desc: '450+ high-speed power looms (sulzer & rapier) producing 50+ lakh meters monthly with zero defect tolerance.',
  },
  {
    icon: Wind,
    title: 'Dyeing & Finishing',
    desc: 'In-house jet dyeing plant with 800+ color matching capability. Azo-free, OEKO-TEX compliant dyes.',
  },
  {
    icon: FlaskConical,
    title: 'Quality Testing Lab',
    desc: 'ISO-accredited testing for tensile strength, color fastness, shrinkage, and dimensional stability.',
  },
  {
    icon: Layers,
    title: 'Printing Division',
    desc: 'Rotary and digital printing on all fabric types. Up to 12-color registration with premium pigment inks.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Control',
    desc: '5-stage QC inspection from raw material to dispatch. Less than 0.2% rejection rate across all lines.',
  },
  {
    icon: Truck,
    title: 'Logistics & Dispatch',
    desc: 'In-house dispatch hub with courier tie-ups. 48–72 hour processing for all confirmed B2B orders.',
  },
]

const machineStats = [
  { num: '450+', label: 'Power Looms' },
  { num: '12', label: 'Manufacturing Plants' },
  { num: '50L+', label: 'Meters/Month' },
  { num: '98.2%', label: 'Quality Pass Rate' },
]

export default function Manufacturing() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal()

  return (
    <section id="manufacturing" className="py-24 bg-primary text-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#C19A6B 1px, transparent 1px), linear-gradient(90deg, #C19A6B 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-accent font-semibold text-sm tracking-[0.2em] uppercase font-body">Manufacturing Power</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-3">
              Built to<br />
              <span className="text-accent italic">Produce at Scale</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="h-px w-16 bg-accent mb-6" />
            <p className="text-gray-400 text-lg leading-relaxed">
              Our vertically integrated manufacturing infrastructure lets us control quality, cost, and delivery timelines — giving our B2B partners a distinct competitive advantage.
            </p>
          </motion.div>
        </div>

        {/* Machine stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-700 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {machineStats.map((s) => (
            <div key={s.label} className="bg-primary/95 p-8 text-center group hover:bg-secondary transition-colors">
              <div className="text-4xl lg:text-5xl font-display font-bold text-accent mb-2">{s.num}</div>
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Capabilities grid */}
        <div ref={ref2} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="border border-gray-700 p-8 hover:border-accent group transition-all duration-300"
            >
              <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <cap.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible2 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-16 border border-accent/30 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              Schedule a Plant Visit
            </h3>
            <p className="text-gray-400">Experience our manufacturing capacity firsthand. Tours available Mon–Sat by appointment.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href="https://wa.me/919876543210?text=I'd like to schedule a plant visit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Book a Visit
            </a>
            <button
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost text-sm"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
