import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./VISTAS/Navbar";
import Home from "./VISTAS/HOME/Home";
import Niveles from "./VISTAS/NIVELES/Niveles";
import Simulador from "./VISTAS/SIMULADOR/Simulador";
import Administracion from "./VISTAS/ADMIN/Admin";
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

      {/* {loggedInUser ? (

      ) : (
        <Inicio onLogin={handleLogin} />
      )} */}
    </Router>
  );
};

export default App;
