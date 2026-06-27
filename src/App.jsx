import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Manufacturing from './components/Manufacturing'
import Certifications from './components/Certifications'
import Stats from './components/Stats'
import Wholesale from './components/Wholesale'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Products />
        <Manufacturing />
        <Certifications />
        <Wholesale />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
