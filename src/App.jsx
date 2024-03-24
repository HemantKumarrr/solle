import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
// import Mobile_Nav from './components/Mobile_Nav/Mobile_Nav'

function App() {

  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/register' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        <Footer />
      </Router>

      {/* <Mobile_Nav /> */}
    </>
  )
}

export default App
