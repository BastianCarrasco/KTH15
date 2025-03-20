import inventos from "../inventos e inventores/inventos.json";
import RadarChart from "../SIMULADOR/createRadarChartData ";
import antena from "../../assets/ANN.png";

const niveles = {
  TRL: 0,
  CRL: 0,
  BRL: 0,
  FRL: 0,
  IPRL: 0,
  TEAM: 0,
};

export const show_inventions = (selectedInventor) => {
  // Filtramos los inventos cuyo campo "investigador" incluya el nombre del inventor seleccionado.
  const filteredInventos = inventos.filter((invento) =>
    invento.investigador.includes(selectedInventor.nombre)
  );

  // Calculamos los niveles promedio
  niveles.TRL =
    filteredInventos.reduce((acc, invento) => acc + invento.TRL, 0) /
    filteredInventos.length;
  niveles.CRL =
    filteredInventos.reduce((acc, invento) => acc + invento.CRL, 0) /
    filteredInventos.length;
  niveles.BRL =
    filteredInventos.reduce((acc, invento) => acc + invento.BRL, 0) /
    filteredInventos.length;
  niveles.FRL =
    filteredInventos.reduce((acc, invento) => acc + invento.FRL, 0) /
    filteredInventos.length;
  niveles.IPRL =
    filteredInventos.reduce((acc, invento) => acc + invento.IPRL, 0) /
    filteredInventos.length;
  niveles.TEAM =
    filteredInventos.reduce((acc, invento) => acc + invento.TEAM, 0) /
    filteredInventos.length;

  return (
    <div className="flex flex-wrap space-x-6">
      {/* Información de los inventos */}
      <div className="flex-1 space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-900">
          Inventos de {selectedInventor.nombre}
        </h3>

        {filteredInventos.map((invento, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <h4 className="text-xl font-bold text-gray-800">
              {invento.invenciones}
            </h4>
            <p style={{ color: "black" }}>
              <strong>Colaboradores:</strong> {invento.colaboradores.join(", ")}
            </p>
            <p style={{ color: "black" }}>
              <strong>Financiamiento:</strong> {invento.financiamiento}
            </p>
            <p style={{ color: "black" }}>
              <strong>Industria/Disciplina:</strong>{" "}
              {invento.industria_disciplina}
            </p>
            <p style={{ color: "black" }}>
              <strong>Empresa/Entidad:</strong> {invento.empresa_entidad}
            </p>
            <div
              style={{ color: "black" }}
              className="grid grid-cols-2 gap-4 mt-4 text-sm"
            >
              <p>
                <strong>CRL:</strong> {invento.CRL} ;<strong>TRL:</strong>{" "}
                {invento.TRL} ;<strong>BRL:</strong> {invento.BRL} ;
                <strong>FRL:</strong> {invento.FRL} ;<strong>IPRL:</strong>{" "}
                {invento.IPRL} ;<strong>TEAM:</strong> {invento.TEAM}
              </p>
            </div>
          </div>
        ))}

        {/* Imagen de la antena debajo de los datos */}
        <div className="mt-6">
          <img
            src={antena}
            alt="Antena"
            className="mx-auto w-1/2 rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Gráfico a la derecha */}
      <div className="w-full sm:w-1/3 bg-white p-6 rounded-lg shadow-md mt-6 sm:mt-0">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">
          Gráfico de Niveles
        </h4>
        <RadarChart niveles={niveles} />
      </div>
    </div>
  );
};
