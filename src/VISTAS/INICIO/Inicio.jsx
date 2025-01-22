import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inicio = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", institution: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simular la verificación del usuario
    if (username === "admin") {
      setIsAdmin(true);
      onLogin("admin");
      navigate("/admin");
    } else if (username) {
      onLogin(username);
      navigate("/");
    } else {
      alert("Usuario no encontrado");
    }
  };

  const handleRegister = () => {
    // Lógica para registrar un nuevo usuario
    console.log("Registrando nuevo usuario", newUser);
    alert("Registro exitoso");
    setNewUser({ name: "", institution: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Bienvenido a Mi App</h1>
      <div className="mb-6">
        <h2 className="text-2xl mb-2">Iniciar Sesión</h2>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2 p-2 text-black"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ingresar
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl mb-2">Registro de Nuevo Usuario</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          className="mb-2 p-2 text-black"
        />
        <input
          type="text"
          placeholder="Casa de Estudio"
          value={newUser.institution}
          onChange={(e) =>
            setNewUser({ ...newUser, institution: e.target.value })
          }
          className="mb-2 p-2 text-black"
        />
        <button
          onClick={handleRegister}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default Inicio;
