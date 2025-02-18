import React, { useState } from "react";
import { Document, Page, Text, View, Image, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
import kth_logo2 from "../../assets/K2i.png";
import pucv_logo from "../../assets/PUCVLOGO.png";

const Evaluacion = () => {
  const [respuestas, setRespuestas] = useState({
    fecha: "",
    investigador: "",
    escuela: "",
    preguntas: Array(9).fill(""),
  });

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const nuevasRespuestas = [...respuestas.preguntas];
      nuevasRespuestas[index] = value;
      setRespuestas({ ...respuestas, preguntas: nuevasRespuestas });
    } else {
      setRespuestas({ ...respuestas, [name]: value });
    }
  };

  const styles = StyleSheet.create({
    page: {
      padding: 30,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    header: {
      fontSize: 11,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    section: {
      marginBottom: 10,
    },
    question: {
      fontSize: 11,
      fontWeight: "bold",
      marginBottom: 5,
    },
    text: {
      fontSize: 11,
      fontWeight: "bold",
    },
    footer: {
      marginTop: 20,
      width: "100%",
      textAlign: "center",
    },
    logo: {
      width: "100%",
      height: 50,
      objectFit: "contain",
    },
    pucvLogo: {
      width: 250,
      height: 60,
      objectFit: "contain",
      position: "absolute",
      top: 10,
      right: 1,
    },
    footerText: {
      fontSize: 10,
      marginTop: 10,
      textAlign: "center",
    },
  });

  const currentYear = new Date().getFullYear();

  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>PERFIL DE PROYECTO</Text>
          <Text style={styles.header}>INNOVACIÓN TECNOLÓGICA</Text>
          <View style={styles.section}>
            <Text style={styles.text}>- Fecha: {respuestas.fecha}</Text>
            <Text style={styles.text}>- Nombre Investigador(es): {respuestas.investigador}</Text>
            <Text style={styles.text}>- Escuela: {respuestas.escuela}</Text>
          </View>
          <Text style={styles.text}>Favor contestar las siguientes preguntas, de forma muy breve (que el documento final no sea más de 3 planas).</Text>
          <Text style={styles.text}>No es obligatorio contestar todas las preguntas.</Text>
          {[ 
            "¿Qué es la tecnología o resultado de investigación en la que se basa su proyecto?",
            "¿Qué problema o necesidad resuelve?",
            "¿Quién tiene ese problema o necesidad? ¿Ha tenido acercamientos con él/a ellos/as?",
            "¿Por qué es importante resolver ese problema o necesidad?",
            "¿Hay otras tecnologías que resuelvan actualmente el problema? ¿Diría usted que son recientes o ya consolidadas?",
            "¿Por qué su tecnología es diferente o ventajosa sobre las tecnologías que hoy resuelven el problema?",
            "¿Qué tan avanzado está el resultado de investigación o tecnología que usted está desarrollando?",
            "¿Ha iniciado algún tipo de registro de propiedad intelectual?",
            "¿Qué lo motiva a presentar este perfil de proyecto?",
          ].map((pregunta, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.question}>{index + 1}. {pregunta}</Text>
              <Text style={styles.text}>{respuestas.preguntas[index]}</Text>
            </View>
          ))}
        </View>
        
        {/* Logo de la PUCV en la esquina superior derecha */}
        <Image src={pucv_logo} style={styles.pucvLogo} />

        {/* Footer con el logo KTH y texto de footer */}
        <View style={styles.footer}>
          <Image src={kth_logo2} style={styles.logo} />
          <Text style={styles.footerText}>
            {currentYear} K2i - Knowledge to Industry Group – Ingeniería PUCV
          </Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={{ color: "white" }} className="p-6">
      <h1 className="text-xl font-bold mb-4">Evaluación</h1>
      <input type="date" name="fecha" placeholder="Fecha" value={respuestas.fecha} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} />
      <input style={{ color: "black" }} name="investigador" placeholder="Nombre Investigador(es)" value={respuestas.investigador} onChange={handleChange} className="border p-2 w-full mb-2" />
      <input style={{ color: "black" }} name="escuela" placeholder="Escuela" value={respuestas.escuela} onChange={handleChange} className="border p-2 w-full mb-2" />
      {[ 
        "¿Qué es la tecnología o resultado de investigación en la que se basa su proyecto?",
        "¿Qué problema o necesidad resuelve?",
        "¿Quién tiene ese problema o necesidad? ¿Ha tenido acercamientos con él/a ellos/as?",
        "¿Por qué es importante resolver ese problema o necesidad?",
        "¿Hay otras tecnologías que resuelvan actualmente el problema? ¿Diría usted que son recientes o ya consolidadas?",
        "¿Por qué su tecnología es diferente o ventajosa sobre las tecnologías que hoy resuelven el problema?",
        "¿Qué tan avanzado está el resultado de investigación o tecnología que usted está desarrollando?",
        "¿Ha iniciado algún tipo de registro de propiedad intelectual?",
        "¿Qué lo motiva a presentar este perfil de proyecto?",
      ].map((pregunta, index) => (
        <div key={index} className="mb-4">
          <label>{pregunta}</label>
          <textarea
            style={{ color: "black" }}
            value={respuestas.preguntas[index]}
            onChange={(e) => handleChange(e, index)}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <PDFDownloadLink document={MyDocument} fileName="evaluacion.pdf" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default Evaluacion;
