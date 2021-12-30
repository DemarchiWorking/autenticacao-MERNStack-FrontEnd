import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Container from './components/layout/Container/Container'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Register from './components/pages/Register/Register'
import Login from './components/pages/Login/Login'
import Logado from './components/pages/Logado/Logado'


function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>  
          <Route path="/Logado" element={<Logado/>}/>   
        </Routes>
    </Container>
    <Footer/>
   </Router>
  );
}

export default App;
