import React, { useState, useRef } from "react";
import ReactFlow from "react-flow-renderer";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import nodesData from "./nodosCRL/crl"; // Los nodos originales
import edges from "./nodosCRL/crlConeccion"; // Los bordes (edges)

const FlujoCRL = () => {
  const flowchartRef = useRef(null);
  const [flowchartImage, setFlowchartImage] = useState(null);
  const [nodes, setNodes] = useState(); // Estado para los nodos

  // Función para capturar el diagrama como imagen
  const captureFlowchart = () => {
    html2canvas(flowchartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      setFlowchartImage(imgData);
    });
  };

  // Función para filtrar los nodos cuando se selecciona un botón
  const filterNodes = (filterType) => {
    let filteredNodes;
    switch (filterType) {
      case "CR1":
        // Filtrar por los nodos con id 99, 5, 6, 7 y 8
        filteredNodes = nodesData.filter((node) =>
          [99, 5, 6, 7, 8, 1, 2, 3, 4].includes(parseInt(node.id))
        );
        break;
      case "CR2":
        // Aquí puedes agregar un filtro diferente si es necesario
        filteredNodes = nodesData.filter((node) =>
          [99, 5, 6, 7, 8, 1, 2, 3, 4, 9, 10, 11, 12, 98].includes(
            parseInt(node.id)
          )
        );
        break;
      case "CR3":
        // Otro filtro más
        filteredNodes = nodesData.filter((node) =>
          [
            99, 5, 6, 7, 8, 1, 2, 3, 4, 9, 10, 11, 12, 98, 97, 13, 14, 15, 16,
          ].includes(parseInt(node.id))
        );
        break;
      case "CR4":
        // Otro filtro más
        filteredNodes = nodesData.filter((node) =>
          [
            99, 98, 97,96, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17,18,19,20,21
          ].includes(parseInt(node.id))
        );
        break;
      default:
        filteredNodes = nodesData;
    }
    setNodes(filteredNodes); // Actualizar el estado con los nodos filtrados
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Columna izquierda */}
      <div className="w-1/3 bg-blue-900 p-6 flex flex-col justify-between">
        <p className="text-xl font-bold text-white mb-4">
          Customer Readiness Level (CRL)
        </p>

        {/* Botones de filtro */}
        <button
          onClick={() => filterNodes("CR1")}
          className="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg"
        >
          CR1
        </button>
        <button
          onClick={() => filterNodes("CR2")}
          className="mt-2 px-6 py-2 bg-yellow-500 text-white rounded-lg"
        >
          CR2
        </button>
        <button
          onClick={() => filterNodes("CR3")}
          className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg"
        >
          CR3
        </button>

        <button
          onClick={() => filterNodes("CR4")}
          className="mt-2 px-6 py-2 bg-red-500 text-white rounded-lg"
        >
          CR4
        </button>

        <button
          onClick={captureFlowchart}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg"
        >
          Capturar Diagrama
        </button>

        {flowchartImage && (
          <PDFDownloadLink
            document={
              <Document>
                <Page style={styles.page}>
                  <Text style={styles.header}>
                    Customer Readiness Level (CRL)
                  </Text>
                  <Image style={styles.image} src={flowchartImage} />
                </Page>
              </Document>
            }
            fileName="flujoCRL.pdf"
          >
            {({ loading }) => (loading ? "Cargando PDF..." : "Descargar PDF")}
          </PDFDownloadLink>
        )}
      </div>

      {/* Columna derecha (diagrama de flujo) */}
      <div className="w-2/3 p-8" ref={flowchartRef}>
        <div
          style={{ border: "solid", borderColor: "white" }}
          className="w-full h-full"
        >
          <ReactFlow nodes={nodes} edges={edges} fitView />
        </div>
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "auto",
  },
});

export default FlujoCRL;
