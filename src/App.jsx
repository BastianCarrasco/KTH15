import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./VISTAS/Navbar";
import Home from "./VISTAS/HOME/Home";
import Niveles from "./VISTAS/NIVELES/Niveles";
import Simulador from "./VISTAS/SIMULADOR/Simulador";
import Administracion from "./VISTAS/ADMIN/Admin";
import Evaluacion from "./VISTAS/EVAL/Eval";
import CRL_Flujo from "./VISTAS/Mapas/flujofiltrados";
//import Inicio from "./VISTAS/INICIO/Inicio";

const App = () => {
  //const [loggedInUser, setLoggedInUser] = useState(null);

  // const handleLogin = (user) => {
  //   setLoggedInUser(user);
  // };

  return (
    <Router>
      <>
        <Navbar />
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-black to-gray-800">
          <div className="flex-grow p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/niveles" element={<Niveles />} />
              <Route path="/sim" element={<Simulador />} />
              <Route path="/admin" element={<Administracion />} />
              <Route path="/eval" element={<Evaluacion />} />
              <Route path="/crl" element={<CRL_Flujo />} />
            </Routes>
          </div>
          <footer className="bg-slateCustom p-4 text-white w-full flex justify-center items-center mt-auto">
            <div className="flex space-x-4">
              <p>&copy; 2025 Mi App. Todos los derechos reservados.</p>
              <span>|</span>
              <a href="/privacy" className="text-white hover:text-gray-300">
                Política de privacidad
              </a>
              <span>|</span>
              <a href="/terms" className="text-white hover:text-gray-300">
                Términos y condiciones
              </a>
            </div>
          </footer>
        </div>
      </>

  
    </Router>
  );
};

export default App;
