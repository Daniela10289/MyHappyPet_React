import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import {getAppointment, deleteAppts} from "@services/appointment"
import { useNavigate, Link } from "react-router-dom";
import moment from 'moment';


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

    const handleDeleteAppts = (id) => {
      deleteAppts(id)
        .then(res => {
          if (res === true) {
            setAppointment(appointment.filter(appts => appts.id != id));
          }
        })
        .catch(err => {
          console.log(err);
        });
    };

    return (
        <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover shadow-inset">
              <tbody>
                <tr>
                  <th className="border-0" scope="col">
                    Usuario
                  </th>
                  <th className="border-0" scope="col">
                    Mascota
                  </th>
                  <th className="border-0" scope="col">
                    Título
                  </th>
                  <th className="border-0" scope="col">
                    Descripción
                  </th>
                  <th className="border-0" scope="col">
                    Fecha
                  </th>
                  <th className="border-0" scope="col">
                    Hora
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
                            <td headers="">{moment(a.start_time).format("YYYY-MM-DD")}</td>
                            <td headers="">{moment(a.start_time).format("hh:mm a")} {moment(a.end_time).format("hh:mm a")}</td>
                            <td headers="" className="col-2 col-sm-1 col-md-2">
                            <Link to={{
                              pathname: "/appointment",
                              search: `?id=${a.id}&edit=true`,
                              state: { setEdition: true, id: 1 }
                             }}> 
                              <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Editar"> 
                                <FontAwesomeIcon icon={solid('pencil')} className="icon-pencil"/>
                              </button>
                            </Link>

                                <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Eliminar"  onClick={ () => handleDeleteAppts(a.id)}>
                                    <FontAwesomeIcon icon={solid('trash')} className="icon-trash"/>
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