
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
    <Router>
   
    <Navbar></Navbar>
    
      <Routes>
      <Route path = '/' element= {<Home />}></Route>
      <Route path = '/home' element= {<Home />}></Route>
      <Route path = '/menu' element= {<Menu />}></Route>
      <Route path = '/about' element= {<About />}></Route>
      <Route path = '/contact' element= {<Contact />}></Route>
        </Routes>
      <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
