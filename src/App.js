import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

import About from "./Components/About";



function App() {
  return (
    <Router>
    
      <Navbar />
      
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
         
          <Route path="/about" element={<About/>}></Route>
        </Routes> 
      </div>
      <Footer />
     
  
    </Router>
  )
}

export default App;
