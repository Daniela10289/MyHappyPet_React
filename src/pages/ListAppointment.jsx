import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import {getAppointment} from "@services/appointment"
import { useNavigate, Link } from "react-router-dom";

export default function ListAppointment() {

    const navigate = useNavigate();
    const apptClick = () => {
      navigate("/appointment");
    };

    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        getAppointment().then((apptResponse) => {
        setAppointment(apptResponse);
        })
    }, []);

    return (
        <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover shadow-inset">
              <tbody>
                <tr>
                  <th className="border-0" scope="col">
                    Nombre del usuario
                  </th>
                  <th className="border-0" scope="col">
                    Nombre de la mascota
                  </th>
                  <th className="border-0" scope="col">
                    Título
                  </th>
                  <th className="border-0" scope="col">
                    Descripción
                  </th>
                  <th className="border-0" scope="col">
                    Hora Inicio
                  </th>
                  <th className="border-0" scope="col">
                    Hora Fin
                  </th>
                  <th className="border-0" scope="col">
                    Opciones
                  </th>
                  <th>
                  <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Crear nueva cita" onClick={apptClick}>
                      <FontAwesomeIcon icon={solid('circle-plus')} className="icon-plus"/>
                    </button>
                  </th>
                </tr>
                {
                    appointment.map((a) => {
                        return (
                            <tr key={a.id}>
                            <th scope="row" id="" headers="">{a.user.name_user +' '+ a.user.last_name}</th>
                            <td headers="">{a.pet.name_pet}</td>
                            <td headers="">{a.title}</td>
                            <td headers="">{a.description}</td>
                            <td headers="">{a.start_datetime}</td>
                            <td headers="">{a.end_datetime}</td>
                            <td headers="" className="col-2 col-sm-1 col-md-2">
                            {/* <Link to={{
                              pathname: "/pet",
                              search: `?id=${pet.id}&edit=true`,
                              state: { setEdition: true, id: 1 }
                             }}>  */}
                              <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Editar"> 
                                <FontAwesomeIcon icon={solid('pencil')} className="icon-pencil"/>
                              </button>
                            {/* </Link> */}

                                <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Eliminar">
                                    <FontAwesomeIcon icon={solid('trash')} className="icon-trash"/>
                                </button>
                                <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Detalle">
                                    <FontAwesomeIcon icon={solid('magnifying-glass')} className="magnifying-glass"/>
                                </button>
                            </td>
                            <td className="col-1 col-sm-1 col-md-1"></td>
                          </tr>
                         )
                     })
                 }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
}