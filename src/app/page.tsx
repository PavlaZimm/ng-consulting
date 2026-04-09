import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import References from '@/components/sections/References'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <References />
      </main>
      <Footer />
    </>
  )
}
