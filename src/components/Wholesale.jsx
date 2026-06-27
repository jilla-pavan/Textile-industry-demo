import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, CheckCircle, MapPin, Package } from 'lucide-react'

const benefits = [
  'Factory-direct pricing — no middlemen',
  'Dedicated account manager assigned',
  'Net 30/45/60 credit terms available',
  'Custom labelling & private label options',
  'Exclusive designs for registered dealers',
  'Priority dispatch on repeat orders',
  'Free samples on first order (up to 10m)',
  'GST invoice with full compliance',
]

const moqTiers = [
  { tier: 'Retailer', moq: '500m', discount: 'Up to 8%', support: 'Email + Chat' },
  { tier: 'Dealer', moq: '2,000m', discount: 'Up to 15%', support: 'Dedicated Manager', highlight: true },
  { tier: 'Distributor', moq: '10,000m', discount: 'Up to 22%', support: 'Priority Line' },
]

export default function Wholesale() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="wholesale" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.span className="section-label" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>
              Wholesale Programme
            </motion.span>
            <motion.h2
              className="section-title mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Partner With India's<br /><em className="text-accent not-italic">Trusted Supplier</em>
            </motion.h2>
            <div className="divider-accent mb-8" />

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Whether you're a saree retailer in Varanasi, a garment exporter in Tirupur, or a hotel chain in Delhi — BharatWeave's wholesale program is structured to give you the pricing, flexibility, and support you need to grow.
            </motion.p>

            <motion.ul
              className="space-y-3 mb-10"
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              {benefits.map((b, i) => (
                <motion.li
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            {/* Pan India */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="bg-primary text-white p-6 flex gap-4"
            >
              <MapPin className="text-accent shrink-0 mt-1" size={24} />
              <div>
                <div className="font-display font-bold text-lg mb-1">Pan India Supply</div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We supply to all 28 states and 8 UTs via our logistics partners — Blue Dart, DTDC, and our own fleet for Gujarat deliveries. Typical transit: 2–5 days.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — MOQ Tiers */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h3 className="font-display font-bold text-2xl text-primary mb-6">MOQ & Pricing Tiers</h3>
              <div className="space-y-4 mb-8">
                {moqTiers.map((tier, i) => (
                  <motion.div
                    key={tier.tier}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`p-6 border-2 relative overflow-hidden ${
                      tier.highlight
                        ? 'border-accent bg-accent/5'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    } transition-all`}
                  >
                    {tier.highlight && (
                      <span className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1">
                        MOST POPULAR
                      </span>
                    )}
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <div className="font-display font-bold text-xl text-primary">{tier.tier}</div>
                        <div className="text-gray-500 text-sm mt-1">Support: {tier.support}</div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Package size={14} className="text-accent" />
                          <span className="text-sm text-gray-600">MOQ: <strong className="text-primary">{tier.moq}</strong></span>
                        </div>
                        <div className="text-accent font-bold text-lg">{tier.discount} off</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary flex-1 justify-center"
                >
                  Request Price List
                  <ArrowRight size={16} />
                </button>
                <a
                  href="https://wa.me/919876543210?text=I want to know about wholesale pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 inline-flex items-center gap-2 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Talk on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
