import React, { useState, useEffect } from 'react';
import axios from "axios";
import "@styles/ListUser.scss";
import icon_edit from "@icons/edit.png";
import icon_delete from "@icons/delete.png";
import { useNavigate } from "react-router-dom";

export default function ListUser() {

  const navigate = useNavigate();
  const userClick = () => {
    navigate("/user");
  };

  const getUsers = () => {
    return axios
      .get(`http://localhost:8080/api/users/`)
      .then((res) => {
        console.log(res);
        return res.data
      })
      .catch((error) => {
        console.log("error!!! " + error);
        return []
      });
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((userResponse) => {
      setUsers(userResponse);
    })
  }, []);

  const editUsers = () => {
    
  }

  const deleteUsers = (id) => {
    const url = `http://localhost:8080/api/users/${id}`;
    console.log(id);
    axios
      .delete(url)
      .then(res => {
        setUsers(users.filter(user => user.id != id));
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
                </tr>
                
                {users.map((user) => {
                  return (  
                  <tr>
                    <th scope="row" id="Bolter3" headers="firstyear3 teacher3" key={user.id}>{user.document}</th>
                    <td headers="firstyear3 Bolter3 males3">{user.name_user}</td>
                    <td headers="firstyear3 Bolter3 females3">{user.last_name}</td>
                    <td headers="firstyear3 Bolter3 females3">{user.phone}</td>
                    <td headers="firstyear3 Bolter3 females3">
                    <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Editar">
                      <img src={icon_edit} alt="Editar" />
                    </button>
                    <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Eliminar" onClick={ () => deleteUsers(user.id)}>
                    <img src={icon_delete} alt="Eliminar" />
                    </button>
                    </td>
                  </tr>
                  ) 
                })}
              </tbody>
            </table>
            <button className="btn btn-primary text-success" type="button" onClick={userClick}>Crear</button>
          </div>
        </div>
      </div>
    );
}
