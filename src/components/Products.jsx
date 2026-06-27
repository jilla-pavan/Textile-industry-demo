import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowRight, Tag } from 'lucide-react'

const categories = ['All', 'Cotton', 'Polyester', 'Woolen', 'Linen', 'Blended', 'Technical']

const products = [
  {
    id: 1,
    name: 'Premium Cotton Poplin',
    category: 'Cotton',
    weight: '80–120 GSM',
    width: '44" / 58"',
    colors: '200+',
    moq: '1,000m',
    tag: 'Bestseller',
    desc: 'Crisp, breathable, BIS-certified cotton poplin. Preferred by garment exporters and institutional buyers.',
    gradient: 'from-amber-50 to-amber-100',
    accent: 'bg-amber-500',
  },
  {
    id: 2,
    name: 'Polyester Microfiber',
    category: 'Polyester',
    weight: '100–160 GSM',
    width: '58" / 72"',
    colors: '300+',
    moq: '500m',
    tag: 'High Demand',
    desc: 'Ultra-soft microfiber for bedding and sportswear. Wicking properties and vibrant dye absorption.',
    gradient: 'from-blue-50 to-blue-100',
    accent: 'bg-blue-500',
  },
  {
    id: 3,
    name: 'Premium Woolen Tweed',
    category: 'Woolen',
    weight: '200–350 GSM',
    width: '58"',
    colors: '60+',
    moq: '500m',
    tag: 'Premium',
    desc: 'Authentic woolen tweed woven in traditional patterns. Ideal for suiting, upholstery, and outerwear.',
    gradient: 'from-stone-50 to-stone-100',
    accent: 'bg-stone-600',
  },
  {
    id: 4,
    name: 'Hotel Grade Bed Linen',
    category: 'Linen',
    weight: '150–250 TC',
    width: 'Custom',
    colors: 'White/Ivory',
    moq: '200 sets',
    tag: 'Hotel Special',
    desc: 'Hygienically finished 200TC+ cotton-polyester blends. Preferred by 5-star hotels and resorts.',
    gradient: 'from-gray-50 to-gray-100',
    accent: 'bg-gray-600',
  },
  {
    id: 5,
    name: 'Polycotton Shirting',
    category: 'Blended',
    weight: '90–130 GSM',
    width: '44" / 58"',
    colors: '150+',
    moq: '1,000m',
    tag: 'Export Quality',
    desc: 'Durable poly-cotton blend with excellent wrinkle resistance. Widely used for uniforms and formal shirts.',
    gradient: 'from-sky-50 to-sky-100',
    accent: 'bg-sky-600',
  },
  {
    id: 6,
    name: 'Technical Geotextile',
    category: 'Technical',
    weight: '100–400 GSM',
    width: '1–5m',
    colors: 'Black/White',
    moq: '2,000m',
    tag: 'Industrial',
    desc: 'Non-woven and woven geotextiles for civil engineering, road construction, and drainage applications.',
    gradient: 'from-green-50 to-green-100',
    accent: 'bg-green-700',
  },
]

export default function Products() {
  const [active, setActive] = useState('All')
  const { ref, isVisible } = useScrollReveal()

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Product Range
          </motion.span>
          <motion.h2
            className="section-title mt-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            500+ Fabric Variants
          </motion.h2>
          <motion.p
            className="text-gray-500 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From natural fibers to high-performance technical textiles — every fabric manufactured in-house with strict QC at every stage.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group card-premium overflow-hidden"
              >
                {/* Color bar */}
                <div className={`bg-gradient-to-br ${product.gradient} h-44 relative overflow-hidden`}>
                  {/* Fabric texture overlay */}
                  <div className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 5px),
                        repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 5px)`
                    }}
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary/80 text-accent text-xs font-semibold px-3 py-1 tracking-wider uppercase">
                      {product.tag}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-primary group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <span className={`w-2 h-2 ${product.accent} rounded-full mt-2 shrink-0`} />
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{product.desc}</p>

                  {/* Specs grid */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {[
                      ['Weight', product.weight],
                      ['Width', product.width],
                      ['Colors', product.colors],
                      ['MOQ', product.moq],
                    ].map(([label, val]) => (
                      <div key={label} className="bg-gray-50 px-3 py-2">
                        <div className="text-gray-400 text-xs uppercase tracking-wide">{label}</div>
                        <div className="text-primary font-semibold text-sm mt-0.5">{val}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-accent border border-accent hover:bg-accent hover:text-white transition-all duration-300"
                  >
                    <Tag size={14} />
                    Request Price & Sample
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            View Complete Catalogue
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
