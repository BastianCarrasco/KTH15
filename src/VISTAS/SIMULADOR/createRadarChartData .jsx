import React from "react";
import { Radar, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  BarElement, // Importamos el BarElement para el gráfico de barras
} from "chart.js";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  BarElement // Registramos el BarElement
);

// Función que genera los datos del gráfico Radar
const getRadarChartData = (niveles) => {
  const labels = Object.keys(niveles);
  const data = Object.values(niveles);

  return {
    labels: labels,
    datasets: [
      {
        label: "Nivel de Preparación para la Innovación",
        data: data,
        backgroundColor: "rgba(15, 83, 26, 0.2)",
        borderColor: "rgb(8, 168, 0)",
        borderWidth: 2,
      },
    ],
    options: {
      scales: {
        r: {
          ticks: {
            font: {
              size: 40,
            },
          },
          angleLines: {
            display: true,
          },
          suggestedMin: 0,
          suggestedMax: 30,
        },
      },
      plugins: {
        legend: {
          labels: {
            font: {
              size: 40,
            },
          },
        },
        tooltip: {
          titleFont: {
            size: 40,
          },
          bodyFont: {
            size: 40,
          },
        },
      },
    },
  };
};

// Función que genera los datos para el gráfico de barras
const getBarChartData = (niveles) => {
  const labels = Object.keys(niveles);
  const data = Object.values(niveles);

  // Generar colores dinámicamente en función del valor
  const backgroundColors = data.map((nivel) => {
    if (nivel <= 3) return "rgba(255, 0, 0, 0.7)"; // Rojo para valores bajos
    if (nivel <= 6) return "rgba(255, 165, 0, 0.7)"; // Naranja para valores medios
    return "rgba(0, 255, 0, 0.7)"; // Verde para valores altos
  });

  return {
    labels: labels,
    datasets: [
      {
        label: "Nivel de Preparación para la Innovación ",
        data: data,
        backgroundColor: backgroundColors,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
      },
    ],
  };
};

// Componente principal
export default function RadarChart({ niveles }) {
  return (
    <div>
      {/* Gráfico Radar */}
      <Radar
        style={{ width: "30%", height: "30%", fontSize: "100%" }}
        data={getRadarChartData(niveles)}
      />

      {/* Gráfico de Barras debajo del Radar */}
      <div
        style={{
          color: "white",
          marginTop: "30px",
          width: "100%",
          height: "300px",
        }}
      >
        <Bar
          style={{ color: "white" }}
          data={getBarChartData(niveles)}
          options={{
            responsive: true,
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 25,
                    color: "white", // Cambia el color de las etiquetas en el eje X
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 20,
                    color: "white", // Cambia el color de las etiquetas en el eje Y
                  },
                },
                suggestedMin: 0,
                suggestedMax: 10,
              },
            },
            plugins: {
              legend: {
                labels: {
                  font: {
                    size: 20,
                    color: "white", // Cambia el color de la leyenda
                  },
                },
              },
              tooltip: {
                titleFont: {
                  size: 20,
                  color: "white", // Cambia el color del título del tooltip
                },
                bodyFont: {
                  size: 20,
                  color: "white", // Cambia el color del cuerpo del tooltip
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
