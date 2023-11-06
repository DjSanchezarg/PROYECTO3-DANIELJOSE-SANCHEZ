import { Link } from "react-router-dom";

export default function Historial() {
  // const cotizando = JSON.parse(localStorage.getItem('cotizando'));

  const cotizando = [
    {
      fechaCotizacion: "4/11/2023, 17:59:02",
      propiedad: "P.H.",
      ubicacion: "Tandil",
      metrosCuadrados: "25",
      poliza: "978.98",
    },
    {
      fechaCotizacion: "4/11/2023, 17:59:02",
      propiedad: "P.H.",
      ubicacion: "Tandil",
      metrosCuadrados: "25",
      poliza: "978.98",
    },
  ];

  return (
    <div>
      <h1 className="center separador">Ver Historial 📋</h1>
      <div className=" center div-cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>
            {cotizando.map((cotizacion, id) => (
              <tr key={id}>
                <td>{cotizacion.fechaCotizacion}</td>
                <td>{cotizacion.propiedad}</td>
                <td>{cotizacion.ubicacion}</td>
                <td>{cotizacion.metrosCuadrados}</td>
                <td>{cotizacion.poliza}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="center separador">
          <Link to="/index">
            {" "}
            <button className="button button-outline">VOLVER</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
