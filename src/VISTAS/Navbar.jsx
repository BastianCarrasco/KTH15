import React, { useState } from "react";
import { Link } from "react-router-dom";
import inventores from "../VISTAS/inventos e inventores/inventores.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setShowModal(false);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <>
      <nav className="bg-slateCustom p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">KTH</div>
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <Link to="/niveles" className="text-white hover:text-gray-300">Niveles</Link>
            <Link to="/sim" className="text-white hover:text-gray-300">Simulador</Link>
            <Link to="/eval" className="text-white hover:text-gray-300">Evaluacion</Link>
            <Link to="/crl" className="text-white hover:text-gray-300">Flujos</Link>
            {isLoggedIn && (
              <Link to="/admin" className="text-yellow-400 hover:text-yellow-300">
                Administrador
              </Link>
            )}
            {!isLoggedIn && (
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Iniciar sesión
              </button>
            )}
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-2 space-y-2`}>
          <Link to="/" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link to="/niveles" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Niveles</Link>
          <Link to="/sim" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Simulador</Link>
          <Link to="/eval" className="block text-white hover:text-gray-300" onClick={toggleMenu}>Evaluacion</Link>
          <Link to="/crl" className="block text-white hover:text-gray-300" onClick={toggleMenu}>FLUJOS</Link>
          {isLoggedIn && (
            <Link to="/admin" className="block text-yellow-400 hover:text-yellow-300" onClick={toggleMenu}>
              Administrador
            </Link>
          )}
          {!isLoggedIn && (
            <button
              onClick={() => setShowModal(true)}
              className="block text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </nav>

      {/* MODAL DE LOGIN */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-gray-800 p-6 rounded shadow-lg text-white w-80"
            onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro del modal
          >
            <h2 className="text-lg font-bold mb-4 text-center">Iniciar sesión</h2>
            <input
              type="text"
              placeholder="Usuario"
              className="w-full p-2 rounded bg-gray-700 text-white mb-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Clave"
              className="w-full p-2 rounded bg-gray-700 text-white mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Entrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
