import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import CoreConcepts from './components/sections/CoreConcepts'
import Installation from './components/sections/Installation'
import UseCases from './components/sections/UseCases'
import Security from './components/sections/Security'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CoreConcepts />
        <UseCases />
        <Installation />
        <Security />
      </main>
      <Footer />
    </div>
  )
}

export default App