import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Store } from './pages/Store'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Footer } from './components/Footer'
import "./App.css"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className='mb-4'>
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </Container>
      <Footer />
    </ShoppingCartProvider>
  )
}

export default App
