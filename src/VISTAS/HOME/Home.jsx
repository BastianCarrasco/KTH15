import React from "react";
import { Link } from "react-router-dom";
import kth_logo from "../../assets/kth-logo.png";
import pucv_logo from "../../assets/PUCV.png";
import texts from "./TextoHome.json";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-6">
      {/* Sección de introducción */}
      <div className="w-full max-w-4xl text-white p-6 rounded-lg shadow-md">
        <h1
          className="text-2xl font-bold mb-4 text-center"
          style={{ fontSize: "25px" }}
        >
          {texts.welcomeMessage}
        </h1>
        <p className="mb-4 text-lg text-center">{texts.description}</p>

        <h2 className="text-3xl font-semibold mb-4 text-center">
          {texts.purposeTitle}
        </h2>
        <p className="text-lg mb-4 text-center">{texts.purposeDescription}</p>

        <h2 className="text-3xl font-semibold mb-4 text-center">
          {texts.useCasesTitle}
        </h2>
        <ul className="list-disc pl-6 text-lg mb-4 text-center">
          <li>{texts.useCase1}</li>
          <li>{texts.useCase2}</li>
        </ul>
      </div>

      {/* Sección de cómo utilizar la herramienta */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {texts.howToTitle}
        </h2>
        <p className="text-lg mb-4 text-center">{texts.howToDescription}</p>
        <ul className="list-decimal pl-6 text-lg mb-4 text-center">
          <li>{texts.step1}</li>
          <li>{texts.step2}</li>
          <li>{texts.step3}</li>
        </ul>

        {/* Contenedor para centrar el botón en la columna */}
        <div className="flex justify-center mt-6">
          <Link
            to="/formulario2" // Cambia esta dirección al path correcto para el formulario
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 text-xl rounded-lg shadow-md transition duration-300"
          >
            {texts.formButtonText}
          </Link>
        </div>
      </div>

      {/* Contenedor de las imágenes */}
      <div className="flex justify-center space-x-4 mt-6">
        {/* Imagen de KTH */}
        <img
          className="w-1/3 object-contain"
          src={kth_logo}
          alt="Logo de KTH"
        />
        {/* Imagen de PUCV */}
        <img
          className="w-1/3 object-contain"
          src={pucv_logo}
          alt="Logo de PUCV"
        />
      </div>
    </div>
  );
};

export default Home;
