import { Document, Page, Text, View, Image, PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
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