import { useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Paths from './components/Paths'
import Heading from './components/Heading'
import { BrowserRouter as Router } from 'react-router-dom'
import { SearchProvider } from './contexts/SearchContext'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <SearchProvider>
      <Router>
        <Heading toggleMobileMenu={toggleMobileMenu} />
        <Menu isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        <Paths />
      </Router>
    </SearchProvider>
  )
}

export default App;