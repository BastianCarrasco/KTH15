import React, { useState } from "react";
import inventores from "../inventos e inventores/inventores.json";
import { showmakers } from "../inventos e inventores/show_makers";

const Administracion = () => {
  // Estado para mostrar/ocultar la lista de inventores
  const [showInventores, setShowInventores] = useState(false);
  // Estado para almacenar el inventor seleccionado y mostrar su información
  const [selectedInventor, setSelectedInventor] = useState(null);

  return (
    <div className="min-h-screen flex">
      {/* Columna Izquierda */}
      <div className="w-1/6 bg-gray-800 text-white p-4">
        <button
          onClick={() => setShowInventores(!showInventores)}
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded mb-4"
        >
          Inventores
        </button>
        {showInventores && (
          <div className="flex flex-col space-y-2">
            {inventores.map((inventor, index) => (
              <button
                key={index}
                onClick={() => setSelectedInventor(inventor)}
                className="text-left bg-gray-700 hover:bg-gray-600 py-2 px-3 rounded"
              >
                {inventor.nombre}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Columna Derecha */}
      <div className="flex-1 bg-gray-900 text-white p-4">
        {selectedInventor ? (
          showmakers(selectedInventor)
        ) : (
          <p className="text-lg">Selecciona un inventor para ver los detalles.</p>
        )}
      </div>
    </div>
  );
};

export default Administracion;
