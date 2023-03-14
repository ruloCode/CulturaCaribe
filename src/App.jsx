import { HashRouter, Routes, Route } from "react-router-dom";
import Clients from "./components/Clients";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Home from './pages/Home.jsx'
import Festicaribe from './pages/Festicaribe.jsx'
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
    </div>
  );
}


function WrappedApp() {
  return <HashRouter>
    <App />
  </HashRouter>
}

export default WrappedApp;
