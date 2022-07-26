import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import {getPets, deletePets} from "@services/pet"
import { useNavigate, Link } from "react-router-dom";

export default function ListPet() {

    const navigate = useNavigate();
    const petClick = () => {
      navigate("/pet");
    };
    
    const [pets, setPets] = useState([]);
    useEffect(() => {
          getPets().then((petResponse) => {
            setPets(petResponse);
          })
    }, []);

    const handleDeletePets = (id) => {
      deletePets(id)
        .then(res => {
          if (res === true) {
            setPets(pets.filter(pet => pet.id != id));
          }
        })
        .catch(err => {
          console.log(err);
        });
    };

    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-hover shadow-inset">
              <tbody>
                <tr>
                  <th className="border-0" scope="col" id="class3">
                    Usuario
                  </th>
                  <th className="border-0" scope="col" id="teacher3">
                    Mascota
                  </th>
                  <th className="border-0" scope="col" id="males3">
                    Raza
                  </th>
                  <th className="border-0" scope="col" id="females3">
                    Genero
                  </th>
                  <th className="border-0" scope="col" id="females3">
                    Opciones
                  </th>
                  <th>
                  <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Crear nueva mascota" onClick={petClick}>
                      <FontAwesomeIcon icon={solid('circle-plus')} className="icon-plus"/>
                    </button>
                  </th>
                </tr>
                {
                    pets.map((pet) => {
                        return (
                            <tr key={pet.id}>
                            <th scope="row" id="Bolter3" headers="firstyear3 teacher3">{pet.user.name_user +' '+ pet.user.last_name}</th>
                            <td headers="firstyear3 Bolter3 males3">{pet.name_pet}</td>
                            <td headers="firstyear3 Bolter3 females3">{pet.breed}</td>
                            <td headers="firstyear3 Bolter3 females3">{pet.gender}</td>
                            <td headers="firstyear3 Bolter3 females3" className="col-2 col-sm-1 col-md-2">
                            <Link to={{
                              pathname: "/pet",
                              search: `?id=${pet.id}&edit=true`,
                              state: { setEdition: true, id: 1 }
                             }}> 
                              <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Editar"> 
                                <FontAwesomeIcon icon={solid('pencil')} className="icon-pencil"/>
                              </button>
                            </Link>

                            <button className="btn btn-icon-only btn-pill btn-primary" type="button" title="Eliminar" onClick={ () => handleDeletePets(pet.id)}>
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