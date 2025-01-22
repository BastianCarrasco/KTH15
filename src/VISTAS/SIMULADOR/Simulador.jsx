import { useState } from "react";
import RadarChart from "./createRadarChartData ";
import categorias from "./ni.json";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

  const aumentarNivel = (nivel) => {
    setNiveles((prevState) => ({
      ...prevState,
      [nivel]: prevState[nivel],
    }));
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

  const generarPDF = async () => {
    const doc = new jsPDF();
    const radarChart = document.getElementById("radar-chart");

    // Calcular totales y niveles
    const totalPreguntasPorCategoria = 9; // Cada categoría tiene 9 preguntas
    let respuestasRespondidasTotales = 0;

    const nivelesPorCategoria = Object.keys(categorias).map((categoria) => {
      const respuestasSeleccionadas = Object.values(
        checkboxes[categoria] || {}
      ).filter((val) => val).length;
      respuestasRespondidasTotales += respuestasSeleccionadas;
      return {
        categoria,
        nivel: Math.floor(respuestasSeleccionadas), // Nivel entero
      };
    });

    const totalCategorias = Object.keys(categorias).length;
    const totalPreguntas = totalCategorias * totalPreguntasPorCategoria;
    const promedioRespuestas = Math.floor(
      (respuestasRespondidasTotales / totalPreguntas) * 100
    );

    if (radarChart) {
      const radarCanvas = await html2canvas(radarChart);
      const radarImage = radarCanvas.toDataURL("image/png");

      // Agregar la imagen del gráfico Radar al PDF
      doc.text("Gráfico Radar", 10, 10);
      doc.addImage(radarImage, "PNG", 10, 20, 190, 190);
    }

    // Agregar niveles por categoría al PDF
    doc.text("Niveles actuales por categoría:", 10, 230);
    nivelesPorCategoria.forEach((item, index) => {
      doc.text(`${item.categoria} = Nivel ${item.nivel}`, 10, 240 + index * 8);
    });

    // Configurar fuente en negritas para el promedio
    doc.setFont("helvetica", "bold");
    doc.text(
      `PROMEDIO NIVEL DE INNOVACIÓN (IRL) = ${promedioRespuestas}%`,
      10,
      240 + nivelesPorCategoria.length * 8 + 2
    );
    doc.setFont("helvetica", "normal"); // Restaurar la fuente normal para el resto del documento

    // Guardar el PDF
    doc.save("simulador.pdf");
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Instrucciones</h2>

            <ul className="list-disc ml-5 mb-4">
              <li>Selecciona la característica KTH que desee evaluar</li>
              <li>
                Seleccione la casilla donde usted crea que su proyecto cumple de
                manera efectiva
              </li>
              <li>
                Observe el comportamiento de la gráfica y evalúe su proyecto
              </li>
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      {!showModal && (
        <div className="text-white gap-8 mt-4 grid grid-cols-8">
          <div className="flex flex-col col-span-1 mr-3">
            <h2 className="mb-4 text-xl font-bold">Simulador</h2>
            <div className="flex flex-col space-y-4">
              {Object.keys(niveles).map((nivel) => (
                <button
                  style={{ fontSize: "25px" }}
                  key={nivel}
                  onClick={() => aumentarNivel(nivel)}
                  className="p-2 border border-white hover:bg-blue-500"
                >
                  {nivel}
                </button>
              ))}
              <button
                onClick={generarPDF}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              >
                Generar PDF
              </button>
            </div>
          </div>

          <div className="col-span-4 mr-8">
            {nivelSeleccionado && (
              <>
                <h3
                  style={{ fontSize: "25px", textAlign: "center" }}
                  className="text-xl font-bold"
                >
                  Preguntas para {nivelSeleccionado}: <br></br>
                  <span
                    style={{ fontSize: "25px" }}
                    className="text-lg font-normal"
                  >
                    NIVEL ACTUAL {niveles[nivelSeleccionado]}
                  </span>
                </h3>
                <ul style={{ fontSize: "25px" }}>
                  {" "}
                  <br></br>
                  {categorias[nivelSeleccionado].map((pregunta) => (
                    <li key={pregunta.nivel} className="mb-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={
                            checkboxes[nivelSeleccionado]?.[pregunta.nivel] ||
                            false
                          }
                          onChange={(e) =>
                            handleCheckboxChange(
                              pregunta.nivel,
                              nivelSeleccionado,
                              e.target.checked
                            )
                          }
                          className="mr-2 transform scale-150"
                        />
                        {pregunta.descripcion}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <div className="col-span-3 mr-8">
            <h3 className="text-xl font-bold">Gráfico Radar:</h3>
            <div id="radar-chart">
              <RadarChart niveles={niveles} />
            </div>
            {/* Botón para generar PDF */}
          </div>
        </div>
      )}
    </div>
  );
}
