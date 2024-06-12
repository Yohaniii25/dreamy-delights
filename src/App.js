
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Contact from './Components/ContactUs/Contact';
import NavBar from './Components/Navbar/NavBar';
import TopBar from './Components/TopBar/TopBar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <NavBar />
        <Routes>
          <Route exact path="/" element= {< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/products" element={< Products />} />
          <Route path="/contact" element={ <Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;