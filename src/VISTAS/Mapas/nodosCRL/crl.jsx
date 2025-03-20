const nodeSpacingX = 250;
const nodeSpacingY = 30;
const positionY = -50;

const nodes = [
  {
    id: "1",
    data: { label: "Necesidad" },
    position: { x: 100, y: positionY },
    style: {
      background: "cyan",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "2",
    data: { label: "Cliente" },
    position: { x: nodeSpacingX + 100, y: positionY },
    style: {
      background: "cyan",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "3",
    data: { label: "Competencia" },
    position: { x: nodeSpacingX * 2 + 100, y: positionY },
    style: {
      background: "cyan",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "4",
    data: { label: "Etapa" },
    position: { x: nodeSpacingX * 3 + 100, y: positionY },
    style: {
      background: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
  },

  ///

  {
    id: "99",
    data: { label: "CRL1" },
    position: { x: 0, y: nodeSpacingY },
    style: {
      background: "darkred",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
      width: "80px",
    },
  },
  {
    id: "5",
    data: { label: "Pensamiento NECESIDAD de mercado" },
    position: { x: 100, y: nodeSpacingY },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "6",
    data: { label: "Pensamiento CLIENTES de mercado" },
    position: { x: nodeSpacingX + 100, y: nodeSpacingY },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "7",
    data: { label: "Observación de SOLUCIONES de mercado" },
    position: { x: nodeSpacingX * 2 + 100, y: nodeSpacingY },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "8",
    data: { label: "PENSAMIENTO & CREENCIA" },
    position: { x: nodeSpacingX * 3 + 100, y: nodeSpacingY },
    style: {
      background: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
  },

  ///

  {
    id: "98",
    data: { label: "CRL2" },
    position: { x: 0, y: nodeSpacingY * 5 },
    style: {
      background: "red",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
      width: "80px",
    },
  },
  {
    id: "9",
    data: { label: "Identificación de NECESIDAD en el Mercado" },
    position: { x: 100, y: nodeSpacingY * 5 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "10",
    data: { label: "Identificación de clientes" },
    position: { x: nodeSpacingX + 100, y: nodeSpacingY * 5 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "11",
    data: { label: "Identificación de SOLUCIONES de mercado" },
    position: { x: nodeSpacingX * 2 + 100, y: nodeSpacingY * 5 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "12",
    data: { label: "IDENTIFICACIÓN" },
    position: { x: nodeSpacingX * 3 + 100, y: nodeSpacingY * 5 },
    style: {
      background: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
  },

  ///

  {
    id: "97",
    data: { label: "CRL3" },
    position: { x: 0, y: nodeSpacingY * 9 },
    style: {
      background: "pink",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
      width: "80px",
    },
  },
  {
    id: "13",
    data: { label: "Primer Feedback" },
    position: { x: 100, y: nodeSpacingY * 9 },
    style: {
      background: "yellow",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "14",
    data: { label: "Contacto con CLIENTES en el Mercado" },
    position: { x: nodeSpacingX + 100, y: nodeSpacingY * 8 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
    connectable: true, // Habilitar la conexión
    sourcePosition: "left", // Punto de conexión a la izquierda
    targetPosition: "top", // Punto de conexión en la parte superior
    connectable: true, // Asegura que el nodo sea conectable desde esos puntos
  },
  {
    id: "15",
    data: { label: "Contacto con EXPERTOS/LÍDERES de la INDUSTRIA" },
    position: { x: nodeSpacingX * 2 + 100, y: nodeSpacingY * 9 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "16",
    data: { label: "CONTACTO & COMUNICACIÓN" },
    position: { x: nodeSpacingX * 3 + 100, y: nodeSpacingY * 9 },
    style: {
      background: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
  },

  ///

  {
    id: "96",
    data: { label: "CRL4" },
    position: { x: 0, y: nodeSpacingY * 12 },
    style: {
      background: "orange",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
      width: "80px",
    },
  },
  {
    id: "17",
    data: { label: "Validación de NECESIDAD con carios CLIENTES" },
    position: { x: 100, y: nodeSpacingY * 12 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "18",
    data: { label: "Identificación de TOMADORES de DECISIONES" },
    position: { x: nodeSpacingX + 100, y: nodeSpacingY * 12 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "19",
    data: { label: "Identificación de BENEFICIOS y DIFERENCIAS" },
    position: { x: nodeSpacingX * 2 + 100, y: nodeSpacingY * 12 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "20",
    data: { label: "Definición parcial de PROPUESTA DE VALOR(NABC)" },
    position: { x: nodeSpacingX * 2 + 100, y: nodeSpacingY * 15 },
    style: {
      background: "white",
      color: "black",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  {
    id: "21",
    data: { label: "VALIDACIÓN Y ACTUALIZaCIÓN" },
    position: { x: nodeSpacingX * 3 + 100, y: nodeSpacingY * 12 },
    style: {
      background: "blue",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  
];

export default nodes;
