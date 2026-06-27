import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', product: '', quantity: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="text-center mb-16">
          <motion.span className="section-label" initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>
            Get In Touch
          </motion.span>
          <motion.h2
            className="section-title mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Start Your Wholesale Journey
          </motion.h2>
          <motion.p
            className="text-gray-500 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Fill in the form and our team will get back to you within 4 business hours with pricing and availability.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-gray-50 border border-gray-100">
                <div className="w-16 h-16 bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-6">
                  <Send className="text-accent" size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3">Message Received!</h3>
                <p className="text-gray-500 max-w-sm">Our team will contact you within 4 business hours. Meanwhile, feel free to WhatsApp us for faster response.</p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-8 text-sm"
                >
                  Continue on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Your Name *', type: 'text', required: true },
                    { name: 'company', label: 'Company / Business Name', type: 'text' },
                    { name: 'phone', label: 'Phone Number *', type: 'tel', required: true },
                    { name: 'email', label: 'Email Address *', type: 'email', required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors bg-gray-50 focus:bg-white"
                        placeholder={field.label.replace(' *', '')}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest</label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select Product Category</option>
                      <option>Cotton Fabrics</option>
                      <option>Polyester Blends</option>
                      <option>Woolen Textiles</option>
                      <option>Bed Linen</option>
                      <option>Technical Fabrics</option>
                      <option>Multiple Categories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Quantity</label>
                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select Quantity Range</option>
                      <option>500m – 2,000m</option>
                      <option>2,000m – 10,000m</option>
                      <option>10,000m – 50,000m</option>
                      <option>50,000m+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message / Requirements</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us about your fabric requirements, custom specs, or any specific questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center text-sm disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info — 2 cols */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            {/* Info cards */}
            {[
              {
                icon: Phone,
                title: 'Call Us',
                lines: ['+91 98765 43210', '+91 79 4567 8910'],
                sub: 'Mon–Sat, 9 AM – 7 PM IST',
                action: { href: 'tel:+919876543210', label: 'Call Now' },
              },
              {
                icon: Mail,
                title: 'Email Us',
                lines: ['sales@bharatweave.in', 'support@bharatweave.in'],
                sub: 'Response within 4 business hours',
                action: { href: 'mailto:sales@bharatweave.in', label: 'Send Email' },
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                lines: ['Plot 42, Ring Road Textile Market', 'Surat, Gujarat – 395 002'],
                sub: 'Factory visits by appointment',
                action: { href: 'https://maps.google.com', label: 'Get Directions', target: '_blank' },
              },
            ].map((info) => (
              <div key={info.title} className="bg-gray-50 border border-gray-100 p-6 hover:border-accent/30 transition-colors">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-accent/10 flex items-center justify-center shrink-0">
                    <info.icon className="text-accent" size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-primary text-sm mb-1">{info.title}</div>
                    {info.lines.map((line) => (
                      <div key={line} className="text-gray-700 text-sm">{line}</div>
                    ))}
                    <div className="text-gray-400 text-xs mt-1 mb-3">{info.sub}</div>
                    <a
                      href={info.action.href}
                      target={info.action.target}
                      rel={info.action.target ? 'noopener noreferrer' : undefined}
                      className="text-accent text-xs font-semibold hover:underline"
                    >
                      {info.action.label} →
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hello, I want to enquire about fabric wholesale pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-600 hover:bg-green-700 text-white p-5 transition-colors group"
            >
              <div className="w-10 h-10 bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm">Chat on WhatsApp</div>
                <div className="text-green-200 text-xs">Fastest response — usually within 30 min</div>
              </div>
            </a>

            {/* Google Maps Embed */}
            <div className="border border-gray-100 overflow-hidden">
              <iframe
                title="BharatWeave Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.8217399999996!2d72.8310!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTEuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
