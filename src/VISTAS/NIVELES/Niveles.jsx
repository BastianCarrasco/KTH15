import React, { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import { CRL, TRL, BRL, IPRL, TmRL, FRL } from "./TextosNiveles";

const niveles = [
  { nombre: "CRL", color: "blue" },
  { nombre: "TRL", color: "red" },
  { nombre: "BRL", color: "green" },
  { nombre: "IPRL", color: "purple" },
  { nombre: "TmRL", color: "orange" },
  { nombre: "FRL", color: "teal" },
];

const dataRadar = niveles.map((nivel) => ({
  subject: nivel.nombre,
  value: Math.floor(Math.random() * 100) + 1, // Valores aleatorios
}));

const Niveles = () => {
  const [mostrarRadar, setMostrarRadar] = useState(true);
  const [nivelSeleccionado, setNivelSeleccionado] = useState(null);

  const datosNiveles = { CRL, TRL, BRL, IPRL, TmRL, FRL };

  const handleClickNivel = (nombre) => {
    setNivelSeleccionado(nombre);
    setMostrarRadar(false);
  };

  return (
    <div className="p-6 flex flex-col items-center text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Niveles de Madurez</h1>

      {/* RadarChart */}
      {mostrarRadar ? (
        <div className="w-full flex flex-col items-center">
          <ResponsiveContainer width={500} height={500}>
            <RadarChart cx="50%" cy="50%" outerRadius="90%" data={dataRadar}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="subject"
                tick={({ payload, x, y }) => (
                  <foreignObject x={x - 25} y={y - 20} width={80} height={40}>
                    <button
                      className="bg-green-600 text-white font-bold px-3 py-2 rounded-md cursor-pointer hover:bg-green-700"
                      onClick={() => handleClickNivel(payload.value)}
                    >
                      {payload.value}
                    </button>
                  </foreignObject>
                )}
              />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Nivel" dataKey="value" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-lg text-center mt-2">Haz clic en un nivel para ver detalles</p>
        </div>
      ) : (
        // Sección del termómetro
        <div className="mt-6 flex items-start">
          {/* Termómetro */}
          <div className="relative flex flex-col items-center">
            <div className="w-16 rounded-full bg-gray-200 overflow-hidden">
              {Object.entries(datosNiveles[nivelSeleccionado][0]).map(([key, value], index, array) => {
                const gradientColor = `hsl(${(120 / (array.length - 1)) * (array.length - index - 1)}, 100%, 50%)`;
                return (
                  <div
                    key={key}
                    className="flex items-center justify-center"
                    style={{
                      backgroundColor: gradientColor,
                      height: "60px",
                      borderBottom: index === array.length - 1 ? "none" : "1px solid white",
                    }}
                  >
                    <span className="text-lg text-white font-bold">
                      {nivelSeleccionado}{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="w-16 h-16 bg-red-600 rounded-full mt-2"></div>
          </div>

          {/* Descripciones */}
          <div className="ml-8">
            {Object.entries(datosNiveles[nivelSeleccionado][0]).map(([key, value], index) => (
              <div key={key} className="mb-4">
                <h2 className="text-xl font-bold">{nivelSeleccionado}{index + 1}</h2>
                <p className="text-xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Botón para regresar */}
      {!mostrarRadar && (
        <button
          onClick={() => setMostrarRadar(true)}
          className="mt-6 px-6 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700"
        >
          Volver al Radar
        </button>
      )}
    </div>
  );
};

export default Niveles;
