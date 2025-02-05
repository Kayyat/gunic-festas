import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Temas from "./pages/Temas"; // Verifique se o nome corresponde ao arquivo correto
import Contato from "./pages/Contato"; 
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temas" element={<Temas />} /> {/* Se deseja chamar "Temas", renomeie a página Services.js para Temas.js e ajuste a importação */}
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
