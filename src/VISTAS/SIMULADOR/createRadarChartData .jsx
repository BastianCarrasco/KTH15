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
        label: "Nivel de Preparación para la Innovación",
        data: data,
        backgroundColor: "rgba(15, 83, 26, 0.2)",
        borderColor: "rgb(8, 168, 0)",
        borderWidth: 2,
      },
    ],
  };
};

// Radar chart options
const radarChartOptions = {
  responsive: true,
  scales: {
    r: {
      ticks: {
        font: {
          size: 20, // Adjust the font size
        },
      },
      angleLines: {
        display: true,
      },
      suggestedMin: 0,
      suggestedMax: 9,
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 20,
        },
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
        label: "Nivel de Preparación para la Innovación",
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
          color: "white",
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 16,
          color: "white",
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
          size: 16,
          color: "white",
        },
      },
    },
    tooltip: {
      titleFont: {
        size: 16,
        color: "white",
      },
      bodyFont: {
        size: 16,
        color: "white",
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
