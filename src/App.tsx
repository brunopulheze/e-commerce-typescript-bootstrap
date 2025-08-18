import { AuthProvider } from "./context/AuthContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Navbar } from './components/Navbar/Navbar'
import { Store } from './pages/Store'
import { Footer } from './components/Footer'
import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className='custom-width mb-4'>
          <Routes>
            <Route path="/" element={<Store />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App