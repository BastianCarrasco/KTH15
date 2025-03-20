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
  BarElement,
} from "chart.js";

// Register required components
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
  BarElement
);

// Generate Radar chart data
const getRadarChartData = (niveles) => {
  const labels = Object.keys(niveles);
  const data = Object.values(niveles);

  return {
    labels: labels,
    datasets: [
      {
        label: "Niveles de Maduración",
        data: data,
        backgroundColor: "rgba(15, 83, 26, 0.2)",
        borderColor: "rgb(8, 168, 0)",
        borderWidth: 2,
      },
    ],
  };
};

const radarChartOptions = {
  responsive: true,
  scales: {
    r: {
      ticks: {
        font: {
          size: 20, // Tamaño de la fuente de los valores del eje radial
        },
        color: "black", // Color de los valores del eje radial
      },
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 9,
      pointLabels: {
        font: {
          size: 15, // Aumenta el tamaño de los labels de los datos graficados
        },
        color: "black", // Cambia el color de los labels de los datos graficados
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 20,
        },
        color: "black", // Cambia el color de las letras de la leyenda aquí
      },
    },
    tooltip: {
      titleFont: {
        size: 25,
      },
      bodyFont: {
        size: 20,
      },
    },
    title: {
      display: false, // Desactiva el título
    },
  },
};


// Generate Bar chart data
const getBarChartData = (niveles) => {
  const labels = Object.keys(niveles);
  const data = Object.values(niveles);

  const backgroundColors = data.map((nivel) => {
    if (nivel <= 3) return "rgba(255, 0, 0, 0.7)";
    if (nivel <= 6) return "rgba(255, 165, 0, 0.7)";
    return "rgba(0, 255, 0, 0.7)";
  });

  return {
    labels: labels,
    datasets: [
      {
        label: "",
        data: data,
        backgroundColor: backgroundColors,
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: 1,
      },
    ],
  };
};


// Bar chart options
const barChartOptions = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        font: {
          size: 16,
          
        },
        color: "black",
      },
    },
    y: {
      ticks: {
        font: {
          size: 16,
          
        },
        color: "black",
      },
      suggestedMin: 0,
      suggestedMax: 10,
    },
  },
  plugins: {
    legend: {
      display: false, // Desactiva la leyenda completamente
    },
    tooltip: {
      titleFont: {
        size: 16,
        color: "black",
      },
      bodyFont: {
        size: 16,
        color: "black",
      },
    },
  },
};

// Main component
export default function RadarChart({ niveles }) {
  return (
    <div>
      {/* Radar Chart */}
      <Radar data={getRadarChartData(niveles)} options={radarChartOptions} />

      {/* Bar Chart below Radar */}
      <div style={{ marginTop: "30px", width: "100%", height: "300px" }}>
        <Bar data={getBarChartData(niveles)} options={barChartOptions} />
      </div>
    </div>
  );
}
