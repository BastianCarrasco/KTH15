import React, { useRef } from "react";
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
import nodes from "./nodosCRL/crl";
import edges from "./nodosCRL/crlConeccion";

const FlujoCRL = () => {
  const flowchartRef = useRef(null);
  const [flowchartImage, setFlowchartImage] = React.useState(null);

  const captureFlowchart = () => {
    html2canvas(flowchartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      setFlowchartImage(imgData);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <p
        style={{ marginBottom: "-30px" }}
        className="text-xl font-bold px-6 py-2 bg-cyan-300 text-blue-900 rounded-lg"
      >
        Customer Readiness Level (CRL)
      </p>

      <div className="w-full h-screen mt-8" ref={flowchartRef}>
        <div
          style={{ border: "solid", borderColor: "white" }}
          className="w-full h-full"
        >
          <ReactFlow nodes={nodes} edges={edges} fitView />
        </div>
      </div>

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
