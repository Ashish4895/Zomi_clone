import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from "./Appbar";
import MediaCard from "./card";
import Dashboard from "./Dashboard";
import Footer from "./footer";
import Home from "./Home";
import Earn from './Earn';


function App(){
  return (
    
    <Router>
          <Appbar />
        <Routes> 
         <Route path={"/"} element={<Home />} />
         <Route path={"/Home"} element={<Home />} />
         <Route path={"/Dashboard"} element={<Dashboard />} />
         <Route path={"/Earn"} element={<Earn />} /> 
        </Routes>
          <Footer></Footer>
    </Router>
  )
  
}


export default App;