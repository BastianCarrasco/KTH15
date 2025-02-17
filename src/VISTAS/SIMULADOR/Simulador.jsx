import { useState } from "react";
import RadarChart from "./createRadarChartData ";
import categorias from "./ni.json";

import { generarPDF } from "./crearPDF";

export default function Simulador() {
  const [niveles, setNiveles] = useState({
    TRL: 0,
    CRL: 0,
    BRL: 0,
    FRL: 0,
    IPRL: 0,
    TEAM: 0,
  });
  const [nivelSeleccionado, setNivelSeleccionado] = useState(null);
  const [checkboxes, setCheckboxes] = useState({});
  const [showModal, setShowModal] = useState(true);
  const [pdfModal, setPdfModal] = useState(false);
  const [nombreProyecto, setNombreProyecto] = useState("");
  const [Encargado, setEncargado] = useState("");
  const [UA, setUA] = useState("");

  const aumentarNivel = (nivel) => {
    setNivelSeleccionado(nivel);
  };

  const handleCheckboxChange = (preguntaId, nombreCategoria, checked) => {
    setCheckboxes((prevState) => {
      const newState = {
        ...prevState,
        [nombreCategoria]: {
          ...prevState[nombreCategoria],
          [preguntaId]: checked,
        },
      };

      if (checked) {
        setNiveles((prevNiveles) => ({
          ...prevNiveles,
          [nombreCategoria]: prevNiveles[nombreCategoria] + 1,
        }));
      } else {
        setNiveles((prevNiveles) => ({
          ...prevNiveles,
          [nombreCategoria]: prevNiveles[nombreCategoria] - 1,
        }));
      }

      return newState;
    });
  };

  return (
    <div>
      {/* Modal de instrucciones */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Instrucciones</h2>
            <ul className="list-disc ml-5 mb-4">
              <li>Selecciona la característica KTH que desees evaluar</li>
              <li>
                Selecciona la casilla donde creas que tu proyecto cumple de manera efectiva
              </li>
              <li>Observa el comportamiento de la gráfica y evalúa tu proyecto</li>
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      {/* Modal de PDF */}
      {pdfModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4 text-center">
              Ingrese Nombre del Proyecto
            </h2>
            <input
              type="text"
              value={nombreProyecto}
              onChange={(e) => setNombreProyecto(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Nombre del Proyecto"
            />

            <h2 className="text-xl font-bold mb-4 text-center">
              Ingrese Encargado del Proyecto
            </h2>
            <input
              type="text"
              value={Encargado}
              onChange={(e) => setEncargado(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Encargado del Proyecto"
            />

            <h2 className="text-xl font-bold mb-4 text-center">
              Ingrese Unidad Académica
            </h2>
            <input
              type="text"
              value={UA}
              onChange={(e) => setUA(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Unidad Académica"
            />

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => {
                  generarPDF({ nombreProyecto, categorias, checkboxes, UA, Encargado });
                  setPdfModal(false);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Aceptar
              </button>
              <button
                onClick={() => setPdfModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenido principal */}
      {!showModal && (
      <div className="text-white gap-8 mt-4 grid grid-cols-1 md:grid-cols-8 px-4">
      {/* Menú lateral */}
      <div className="flex flex-col md:col-span-1 mr-0 md:mr-3">
        <h2 className="mb-4 text-xl font-bold text-center">Simulador</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(niveles).map((nivel) => (
            <button
              key={nivel}
              onClick={() => aumentarNivel(nivel)}
              className="w-32 h-12 p-2 border border-white hover:bg-blue-500 text-xl flex items-center justify-center"
            >
              {nivel}
            </button>
          ))}
          <button
            onClick={() => setPdfModal(true)}
            className="w-32 h-12 mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 flex items-center justify-center"
          >
            Generar PDF
          </button>
        </div>
      </div>
    
      {/* Preguntas */}
      <div className="md:col-span-4 mr-0 md:mr-3 mt-4 md:mt-0">
        {nivelSeleccionado && (
          <>
            <h3 className="text-xl font-bold text-center">
              Preguntas para {nivelSeleccionado}: <br />
              <span className="text-lg font-normal">
                NIVEL ACTUAL {niveles[nivelSeleccionado]}
              </span>
            </h3>
            <ul className="text-l mt-4">
              {categorias[nivelSeleccionado].map((pregunta) => (
                <li key={pregunta.nivel} className="mb-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        checkboxes[nivelSeleccionado]?.[pregunta.nivel] || false
                      }
                      onChange={(e) =>
                        handleCheckboxChange(
                          pregunta.nivel,
                          nivelSeleccionado,
                          e.target.checked
                        )
                      }
                      className="mr-2 transform scale-125"
                    />
                    {pregunta.descripcion}
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    
      {/* Gráfico Radar */}
      <div style={{background:"white"}} className="md:col-span-3 mt-4 md:mt-0">
       
        <div id="radar-chart" className="mx-auto">
          <RadarChart niveles={niveles} />
        </div>
      </div>
    </div>
    
      )}
    </div>
  );
}
