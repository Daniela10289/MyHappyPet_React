import "@styles/User.scss";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {getUsers} from "@services/user"
import {sendPets, getPetsId} from "@services/pet";


export default function Pet() {

    const { register, handleSubmit, formState: { errors }, setValue, reset} = useForm();

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const pet_id = searchParams.get("id");
    const edit = (searchParams.get("edit") === "true");

    const [ userOptions, setUserOptions ] = useState([]);
    useEffect(() => {
        getUsers().then((userResponse) => {
            setUserOptions(userResponse);
        })
      }, []);
    
    const onSubmit = (data) => {
      if (pet_id && edit) {
        sendPets(data, pet_id, true).then(()=>{
          navigate("/listpet");
          reset();
        })
      }else {
        sendPets(data, pet_id, false).then(()=>{
          reset();
        })
      }
      
    } 

    if (edit) {
      useEffect(() => {
        getPetsId(pet_id).then((userResponse) => {
          setValue("user_id", userResponse.user_id);
          setValue("name_pet", userResponse.name_pet);
          setValue("breed", userResponse.breed);
          setValue("gender", userResponse.gender);
        })
      }, []);
  }

    return (
      <div className="section-header" id="section-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3" id="form-user">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                {
                  edit
                      ? <h2 className="mb-0 h5">Editar Mascota</h2>
                      : <h2 className="mb-0 h5">Crear Mascota</h2>
                }
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="">Nombre del usuario</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend"> 
                          <span className="input-group-text">
                            <span className="fas fa-envelope">
                              <FontAwesomeIcon icon={solid("user-large")} className="icon-form"/>
                            </span>
                          </span>
                        </div>
                        <select className="form-control" name="func" {...register("user_id", { required: true })}>  
                          <option value="">Seleccionar</option>
                          {
                            userOptions.map((o) => {
                                return (
                                    <option key={o.id} value={o.id}>{o.name_user + ' ' + o.last_name}</option>
                                    )
                                })
                          }
                        </select>
                        {errors.user_id && ( <p>Debe ingresar una opción valida.</p>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <label htmlFor="name_pet">Nombre de la mascota</label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <span className="fas fa-unlock-alt"></span>
                              <FontAwesomeIcon icon={solid("dog")} className="icon-form" />
                            </span>
                          </div>
                          <input className="form-control" id="name" type="text" aria-label="text" {...register("name_pet", { required: true })} />
                          {errors.name_pet && ( <p>Debe ingresar un nombre valido.</p>)}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Raza</label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <span className="fas fa-unlock-alt"></span>
                              <FontAwesomeIcon
                                icon={solid("paw")}
                                className="icon-form"
                              />
                            </span>
                          </div>
                          <select className="form-control" name="func" {...register("breed", { required: true })}>
                            <option value="">Seleccionar</option>
                            <option value="Felino">Felino</option>
                            <option value="Canino">Canino</option>
                          </select>
                          {errors.breed && ( <p>Debe ingresar una opción valida.</p>)}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Genero</label>
                        <div className="input-group mb-5">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <span className="fas fa-unlock-alt">
                                <FontAwesomeIcon
                                  icon={solid("venus-mars")}
                                  className="icon-form"
                                />
                              </span>
                            </span>
                          </div>
                          <select className="form-control" name="func"  {...register("gender", { required: true })}>
                            <option value="">Seleccionar</option>
                            <option value="Macho">Macho</option>
                            <option value="Hembra">Hembra</option>  
                          </select>
                          {errors.gender && ( <p>Debe ingresar una opción valida.</p>)}
                        </div>
                      </div>
                    </div>
                    {
                      edit
                      ?<button type="submit" className="btn btn-block btn-primary"> Editar <FontAwesomeIcon icon={solid('paper-plane')}className="icon-form"/></button>
                      :<button type="submit" className="btn btn-block btn-primary"> Crear <FontAwesomeIcon icon={solid('paper-plane')}className="icon-form"/></button>
                    }
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}