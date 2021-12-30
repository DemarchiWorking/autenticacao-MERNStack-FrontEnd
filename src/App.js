import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Container from './components/layout/Container/Container'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Register from './components/pages/Register/Register'
import Login from './components/pages/Login/Login'


function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>   
        </Routes>
    </Container>
    <Footer/>
   </Router>
  );
}

export default App;
