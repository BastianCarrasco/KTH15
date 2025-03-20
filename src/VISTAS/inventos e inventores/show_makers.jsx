import { show_inventions } from "./show_inventions";

export const showmakers = (selectedInventor, inventos) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-6">
      <h2 className="text-3xl font-semibold text-gray-900">{selectedInventor.titulo}</h2>
      
      {/* Información del inventor */}
      <div className="space-y-4 text-lg text-gray-700">
        <p><strong>Nombre:</strong> <span className="text-gray-900">{selectedInventor.nombre}</span></p>
        <p><strong>Cargo:</strong> <span className="text-gray-900">{selectedInventor.cargo}</span></p>
        <p><strong>Otros Cargos:</strong> <span className="text-gray-900">{selectedInventor["Otros Cargos"]}</span></p>
        <p><strong>Línea de Investigación:</strong> <span className="text-gray-900">{selectedInventor.LI}</span></p>
        <p><strong>Proyectos Finalizados:</strong> <span className="text-gray-900">{selectedInventor["Proyectos Finalizados"]}</span></p>
        <p><strong>Proyectos Vigentes:</strong> <span className="text-gray-900">{selectedInventor["Proyectos Vigentes"]}</span></p>
        <p><strong>Pregrado:</strong> <span className="text-gray-900">{selectedInventor.Pregrado}</span></p>
        <p><strong>Postgrado:</strong> <span className="text-gray-900">{selectedInventor.Postgrado}</span></p>
        <p><strong>Correo:</strong> <span className="text-gray-900">{selectedInventor.Correo}</span></p>
        <p><strong>Fono:</strong> <span className="text-gray-900">{selectedInventor.fono}</span></p>
        <p><strong>Apoyos FIN:</strong> <span className="text-gray-900">{selectedInventor["Apoyos FIN"]}</span></p>
        <p><strong>Última Actualización:</strong> <span className="text-gray-900">{selectedInventor["Ultima Actualizacion"]}</span></p>
      </div>

      {/* Llamada al componente show_inventions */}
      <div className="mt-6">
        {show_inventions(selectedInventor, inventos)}
      </div>
    </div>
  );
};
