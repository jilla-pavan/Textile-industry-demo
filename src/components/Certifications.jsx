import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Award, ShieldCheck, Star, Verified } from 'lucide-react'

const certs = [
  {
    icon: ShieldCheck,
    name: 'ISO 9001:2015',
    body: 'Bureau Veritas Certification',
    desc: 'Quality Management System certification covering all manufacturing processes.',
    year: 'Since 2012',
  },
  {
    icon: Award,
    name: 'BIS Certification',
    body: 'Bureau of Indian Standards',
    desc: 'Product certification under IS standards for cotton and blended fabrics.',
    year: 'Since 2015',
  },
  {
    icon: Star,
    name: 'OEKO-TEX Standard 100',
    body: 'Hohenstein Institute',
    desc: 'Ensures all fabrics are free from harmful substances and safe for end consumers.',
    year: 'Since 2018',
  },
  {
    icon: Verified,
    name: 'MSME Registered',
    body: 'Ministry of MSME, Govt. of India',
    desc: 'Officially recognized manufacturing enterprise eligible for government procurement.',
    year: 'Since 1998',
  },
]

export default function Certifications() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
          >
            Quality Assurance
          </motion.span>
          <motion.h2
            className="section-title mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Certified to Global Standards
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Every certification we hold is a commitment to you — our B2B partners — that quality is never compromised.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6 }}
              className="group card-premium p-8 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <cert.icon className="text-accent group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-1">{cert.name}</h3>
              <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">{cert.body}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{cert.desc}</p>
              <span className="text-xs bg-gray-50 text-gray-500 px-3 py-1.5 border border-gray-100 font-medium">{cert.year}</span>
            </motion.div>
          ))}
        </div>

        {/* Process strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-background border border-gray-100 p-8"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-primary">Our 5-Stage Quality Process</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Raw Material Inspection', 'In-Process QC', 'Post-Weave Testing', 'Dyeing & Finishing Check', 'Pre-Dispatch Audit'].map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-10 h-10 bg-accent text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                  {i + 1}
                </div>
                <p className="text-gray-600 text-xs font-medium leading-snug">{step}</p>
                {i < 4 && (
                  <div className="hidden md:block absolute mt-4">→</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
