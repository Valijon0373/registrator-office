import Navbar from '../component/home/Navbar'
import Hero from '../component/home/Hero'
import Features from '../component/home/Features'
import Services from '../component/home/Services'
import DepartmentsSection from '../component/home/DepartmentsSection'
import HowItWorks from '../component/home/HowItWorks'
import CTA from '../component/home/CTA'
import Footer from '../component/home/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <DepartmentsSection />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}
