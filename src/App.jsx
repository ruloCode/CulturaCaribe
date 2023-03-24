import { HashRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Home from './pages/Home.jsx'
import {Festicaribe} from './pages/Festicaribe.jsx'
import {Fundam} from './pages/Fundam.jsx'
import {Cecota} from './pages/Cecota.jsx'
function App() {
  return (
    <div>
      {/* <Header />
   <Hero />
      
      <Clients />

      <Works />
      <Reviews />
      <Services />  
      <Footer /> */}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/festicaribe" element={<Festicaribe />} />
      </Routes>
      <Routes>
        <Route path="/fundam" element={<Fundam />} />
      </Routes>
      <Routes>
        <Route path="/cecota" element={<Cecota />} />
      </Routes>
    </div>
  );
}


function WrappedApp() {
  return <HashRouter>
    <App />
  </HashRouter>
}

export default WrappedApp;
