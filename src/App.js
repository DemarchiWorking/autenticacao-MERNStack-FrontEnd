import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Curriculos from './components/pages/Curriculos/Curriculos'
import Company from './components/pages/Company/Company'
import Contact from './components/pages/Contact/Contact'
import NewCur from './components/pages/NewCur/NewCur'
import Curriculo from './components/pages/Curriculo/Curriculo'
import Container from './components/layout/Container/Container'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/curriculos" element={<Curriculos/>}/>
          <Route path="/company" element={<Company/>}/>   
          <Route path="/contact" element={<Contact/>}/>      
          <Route path="/newCur" element={<NewCur/>}/>
          <Route path="/curriculo/:id" element={<Curriculo/>}/>
        </Routes>
    </Container>
    <Footer/>
   </Router>
  );
}

export default App;
