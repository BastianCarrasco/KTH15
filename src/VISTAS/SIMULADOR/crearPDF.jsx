import React from "react";
import { Document, Page, Text, View, StyleSheet, Image, pdf } from "@react-pdf/renderer";
import html2canvas from "html2canvas";

// 🎨 Estilos del PDF
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 600,
    marginVertical: 10,
  },
});

// 📌 Diccionario de significados de siglas
const significados = {
  TRL: "Nivel de madurez tecnológica",
  CRL: "Nivel de  madurez del cliente",
  BRL: "Nivel de  madurez del negocio",
  IPRL: "Nivel de  madurez de la propiedad intelectual",
  FRL: "Nivel de  madurez para financiamiento",
  TEAM: "Nivel de  madurez del equipo",
};

// 📌 Componente para el PDF
const PDFDocument = ({ nombreProyecto, categorias, checkboxes, UA, Encargado, radarImage }) => {
  // Calcular niveles por categoría y promedio
  let sumaNivelesTotales = 0;
  const nivelesPorCategoria = Object.keys(categorias).map((categoria) => {
    const respuestasSeleccionadas = Object.values(checkboxes[categoria] || {}).filter((val) => val).length;
    const nivel = Math.floor(respuestasSeleccionadas);
    sumaNivelesTotales += nivel;
    return { categoria, nivel };
  });

  const promedioNiveles = (sumaNivelesTotales / 6).toFixed(2);

  return (
    <Document>
      {/* 📄 Página 1 - Datos generales y gráfico */}
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Nombre del Proyecto:</Text>
          <Text style={styles.text}>{nombreProyecto}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Encargado:</Text>
          <Text style={styles.text}>{Encargado}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Unidad Académica:</Text>
          <Text style={styles.text}>{UA}</Text>
        </View>
        {radarImage && <Image style={styles.image} src={radarImage} />}
      </Page>

      {/* 📄 Página 2 - Niveles por categoría y promedio */}
      <Page style={styles.page}>
        <Text style={styles.title}>Niveles actuales por categoría:</Text>
        {nivelesPorCategoria.map((item, index) => (
          <Text key={index} style={styles.text}>
            {item.categoria} = {item.nivel} {significados[item.categoria] ? `(${significados[item.categoria]})` : ""}
          </Text>
        ))}
        <Text style={[styles.text, { fontWeight: "bold", marginTop: 10 }]}>
           (IRL) = {promedioNiveles}
        </Text>
      </Page>
    </Document>
  );
};

// 📌 Función para generar el PDF
export const generarPDF = async ({ nombreProyecto, categorias, checkboxes, UA, Encargado, radarChartId = "radar-chart" }) => {
  let radarImage = null;
  const radarChart = document.getElementById(radarChartId);

  if (radarChart) {
    const radarCanvas = await html2canvas(radarChart, { scale: 2 });
    radarImage = radarCanvas.toDataURL("image/png");
  }

  const blob = await pdf(<PDFDocument nombreProyecto={nombreProyecto} categorias={categorias} checkboxes={checkboxes} UA={UA} Encargado={Encargado} radarImage={radarImage} />).toBlob();

  const url = URL.createObjectURL(blob);
  window.open(url);
};
