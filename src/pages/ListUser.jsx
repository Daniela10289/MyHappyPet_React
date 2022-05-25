import React, { useState, useEffect } from 'react';
import "@styles/ListUser.scss";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import {getUsers, deleteUsers} from "@services/user"

export default function ListUser() {

  const navigate = useNavigate();
  const userClick = () => {
    navigate("/user");
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((userResponse) => {
      setUsers(userResponse);
    })
  }, []);

  const handleDeleteUsers = (id) => {
    deleteUsers(id)
      .then(res => {
        if (res === true) {
          setUsers(users.filter(user => user.id != id));
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
                {/* {JSON.stringify(users)} */}
  
                <tr>
                  <th className="border-0" scope="col" id="class3">
                    Documento
                  </th>
                  <th className="border-0" scope="col" id="teacher3">
                    Nombre
                  </th>
                  <th className="border-0" scope="col" id="males3">
                    Apellido
                  </th>
                  <th className="border-0" scope="col" id="females3">
                    Celular
                  </th>
                  <th className="border-0" scope="col" id="females3">
                    Opciones
                  </th>
                  <th>
                  <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Crear nuevo usuario" onClick={userClick}>
                      <FontAwesomeIcon icon={solid('circle-plus')} className="icon-plus"/>
                    </button>
                  </th>
                </tr>
                
                {users.map((user) => {
                  return (  
                  <tr  key={user.id}>
                    <th scope="row" id="Bolter3" headers="firstyear3 teacher3">{user.document}</th>
                    <td headers="firstyear3 Bolter3 males3">{user.name_user}</td>
                    <td headers="firstyear3 Bolter3 females3">{user.last_name}</td>
                    <td headers="firstyear3 Bolter3 females3">{user.phone}</td>
                    <td headers="firstyear3 Bolter3 females3" className="col-2 col-sm-1 col-md-2">

                    <Link to={{
                        pathname: "/user",
                        search: `?id=${user.id}&edit=true`,
                        state: { setEdition: true, id: 1 }
                             }}> 
                      <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Editar"> 
                        <FontAwesomeIcon icon={solid('pencil')} className="icon-pencil"/>
                      </button>
                    </Link>

                    <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Eliminar" onClick={ () => handleDeleteUsers(user.id)}>
                      <FontAwesomeIcon icon={solid('trash')} className="icon-trash"/>
                    </button>
                    </td>
                    <td className="col-1 col-sm-1 col-md-1"></td>
                  </tr>
                  ) 
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
