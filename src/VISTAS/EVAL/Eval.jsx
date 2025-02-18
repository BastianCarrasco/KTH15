import React, { useState } from "react";
import { Document, Page, Text, View, Image, PDFDownloadLink } from "@react-pdf/renderer";
import kth_logo2 from "../../assets/K2i.png";
import pucv_logo from "../../assets/PUCVLOGO.png";
import { styles } from "./estilos.jsx";
import data from "./preguntas.json";
import tipos from "./tipos.json";

const niveles = ["CRL", "TRL", "BRL", "IPRL", "TmRL", "FRL"];

const Evaluacion = () => {
  const [respuestas, setRespuestas] = useState({
    fecha: "",
    investigador: "",
    escuela: "",
    fechaRecepcion: "",
    fechaEnvio: "",
    tipoProyecto: "",
    preguntas: Array(data.preguntas.length).fill(""),
    niveles: niveles.reduce((acc, nivel) => ({ ...acc, [nivel]: "" }), {}),
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

  const handleNivelChange = (e, nivel) => {
    setRespuestas({ ...respuestas, niveles: { ...respuestas.niveles, [nivel]: e.target.value } });
  };

  const currentYear = new Date().getFullYear();

  const buscarFinanciamiento = (trl) => {
    for (const categoria in tipos) {
      const resultado = Array.isArray(tipos[categoria])
        ? tipos[categoria].find((item) => item.TRL_minimo === parseInt(trl))
        : null;
      if (resultado) return resultado.financiamiento;
    }
    return "No definido";
  };

  const financiamiento = buscarFinanciamiento(respuestas.niveles.TRL);

  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>{data.titulo}</Text>
          <Text style={styles.header}>{data.subtitulo}</Text>
          <View style={styles.section}>
            <Text style={styles.text}>- Fecha: {respuestas.fecha}</Text>
            <Text style={styles.text}>- Nombre Investigador(es): {respuestas.investigador}</Text>
            <Text style={styles.text}>- Escuela: {respuestas.escuela}</Text>
            <Text style={styles.text}>- Fecha recepción perfil: {respuestas.fechaRecepcion}</Text>
            <Text style={styles.text}>- Fecha envío oportunidades: {respuestas.fechaEnvio}</Text>
            <Text style={styles.text}>- Tipo de proyecto: {respuestas.tipoProyecto}</Text>
          </View>
          {data.introduccion.map((text, index) => (
            <Text key={index} style={styles.text}>{text}</Text>
          ))}
          {data.preguntas.map((pregunta, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.question}>{index + 1}. {pregunta}</Text>
              <Text style={styles.text}>{respuestas.preguntas[index]}</Text>
            </View>
          ))}
          <View style={styles.section}>
            <Text style={styles.header}>Niveles KTH</Text>
            {niveles.map(nivel => (
              <Text key={nivel} style={styles.text}>{nivel}: {respuestas.niveles[nivel]}</Text>
            ))}
            <Text style={styles.text}>Financiamiento recomendado: {financiamiento}</Text>
          </View>
        </View>
        <Image src={pucv_logo} style={styles.pucvLogo} />
        <View style={styles.footer}>
          <Image src={kth_logo2} style={styles.logo} />
          <Text style={styles.footerText}>{currentYear} {data.footer}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div style={{ color: "white" }} className="p-6">
      <h1 className="text-xl font-bold mb-4">{data.titulo}</h1>
      <input type="date" name="fecha" value={respuestas.fecha} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} />
      <input name="investigador" placeholder="Nombre Investigador(es)" value={respuestas.investigador} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} />
      <input name="escuela" placeholder="Escuela" value={respuestas.escuela} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} />
      {data.preguntas.map((pregunta, index) => (
        <div key={index} className="mb-4">
          <label>{pregunta}</label>
          <textarea value={respuestas.preguntas[index]} onChange={(e) => handleChange(e, index)} className="border p-2 w-full" style={{ color: "black" }} />
        </div>
      ))}
      <h2 className="text-lg font-bold mt-4">Fecha recepción perfil:</h2>
      <input type="date" name="fechaRecepcion" value={respuestas.fechaRecepcion} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} placeholder="Fecha recepción perfil" />
      <h2 className="text-lg font-bold mt-4">Fecha recepción perfil:</h2>
      <input type="date" name="fechaEnvio" value={respuestas.fechaEnvio} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} placeholder="Fecha envío oportunidades" />
      <input name="tipoProyecto" placeholder="Tipo de proyecto" value={respuestas.tipoProyecto} onChange={handleChange} className="border p-2 w-full mb-2" style={{ color: "black" }} />
      <h3 className="text-lg font-bold mt-4">Ingrese los valores para cada categoría KTH</h3>
      {niveles.map(nivel => (
        <input key={nivel} name={nivel} placeholder={nivel} value={respuestas.niveles[nivel]} onChange={(e) => handleNivelChange(e, nivel)} className="border p-2 w-full mb-2" style={{ color: "black" }} />
      ))}
      <PDFDownloadLink document={MyDocument} fileName="evaluacion.pdf" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        {({ loading }) => (loading ? "Generando PDF..." : "Descargar PDF")}
      </PDFDownloadLink>
    </div>
  );
};

export default Evaluacion;
