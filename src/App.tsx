import { AuthProvider, useAuth } from "./context/AuthContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Navbar } from './components/Navbar/Navbar'
import { Store } from './pages/Store'
import { AdsSideBar } from './components/AdsSideBar'
import { AdsBar } from './components/AdsBar'
import { RecommendationSideBar } from "./components/RecommendationSideBar"
import { RecommendationCard } from "./components/RecommendationCard"
import { Footer } from './components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import "./App.css"


// Helper component to use AuthContext inside functional component
function MainContent() {
  const { isLoggedIn } = useAuth(); // or use { user } if your context exposes that

  return (
    <Container fluid className='mb-4'>
      <Row>
        {/* {!isLoggedIn && <AdsSideBar />} */}
        {/* {!isLoggedIn && <AdsBar />} */}
        {/* {isLoggedIn && <RecommendationSideBar />} */}
        <Col md={2} />
        <Col md={8}>
          <Routes>
            <Route path="/" element={<Store />} />
          </Routes>
        </Col>
        <Col md={2} />
      </Row>
    </Container >
  );
}

function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Navbar />
        <MainContent />
        <Footer />
      </ShoppingCartProvider>
    </AuthProvider>
  )
}

export default App