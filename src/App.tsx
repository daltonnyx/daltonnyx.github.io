import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/sections/Header'
import Footer from './components/sections/Footer'
import HomePage from './components/pages/HomePage'
import ReleasesPage from './components/pages/ReleasesPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/releases" element={<ReleasesPage />} />
            <Route path="*" element={<div className="pt-20 text-center">Page not found - Return to <a href="#/" className="text-primary-500">Home</a></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App