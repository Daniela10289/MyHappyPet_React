import "@styles/User.scss";
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {getUsers} from "@services/user";
import {getPetsUserId} from "@services/pet";
import {sendAppointments} from "@services/appointment";
import moment from 'moment'

export default function Appointment() {

    const { register, handleSubmit, formState: { errors }, setValue, reset} = useForm();

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const appt_id = searchParams.get("id");
    const edit = (searchParams.get("edit") === "true");

    const [ userOptions, setUserOptions ] = useState([]);
    useEffect(() => {
        getUsers().then((userResponse) => {
            setUserOptions(userResponse);
        })
      }, []);

    const [ petOptions, setPetOptions ] = useState([]);
    const handleUserSelectChange = (event) => {
      if (event.target.value){
        getPetsUserId(event.target.value).then((petsResponse) => {
          setPetOptions(petsResponse)
        })
      }
    }

    const onSubmit = (data) => {

      let start_datetime = data.star_date + " " + data.start_datetime + ":00";
      let end_datetime = data.star_date + " " + data.end_datetime + ":00";
      let startDateTime = moment(start_datetime)
      let endDateTime = moment(end_datetime)
      
      // if (pet_id && edit) {
      //   sendPets(data, pet_id, true).then(()=>{  
      //     navigate("/listpet");
      //     reset();
      //   })
      // }else {
        
      let cleanedData = {
        pet_id: data.pet_id,
        user_id: data.user_id,
        start_datetime: startDateTime.format(),
        end_datetime: endDateTime.format(),
        title: data.title
      }
      sendAppointments(cleanedData).then(()=>{
        reset();
      })
      
    } 

    return (
        <div className="section-header" id="section-header">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 offset-md-3" id="form-user">
              <div className="card bg-primary shadow-soft border-light p-4">
                <div className="card-header text-center pb-0">
                <h2 className="mb-0 h5">Agendar Cita</h2>

                {/* {
                  edit
                      ? <h2 className="mb-0 h5">Agendar Cita</h2>
                      : <h2 className="mb-0 h5">Editar Cita</h2>
                } */}
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="user_id">Nombre del usuario</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend"> 
                          <span className="input-group-text">
                            <span className="fas fa-envelope">
                              <FontAwesomeIcon icon={solid("user-large")} className="icon-form"/>
                            </span>
                          </span>
                        </div>
                        <select className="form-control" name="func"  {...register("user_id", { required: true })} onChange={handleUserSelectChange}>  
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
                      <label htmlFor="pet_id">Nombre de la mascota</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt"></span>
                            <FontAwesomeIcon icon={solid("dog")} className="icon-form" />
                          </span>
                        </div>
                        <select className="form-control" name="func" {...register("pet_id", { required: true })}>  
                          <option value="">Seleccionar</option>
                          {
                            petOptions.map((o) => {
                                return (
                                    <option key={o.id} value={o.id}>{o.name_pet}</option>
                                    )
                                })
                          }
                      </select>
                        {errors.pet_id && ( <p>Debe ingresar una opción valida.</p>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="last_name">Título</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt"></span>
                            <FontAwesomeIcon
                              icon={solid("t")}
                              className="icon-form"
                            />
                          </span>
                        </div>
                        <input className="form-control" id="name" type="text" aria-label="text" {...register("title", { required: true })} />
                        {errors.title && ( <p>Debe ingresar un texto.</p>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Descripción</label>
                      <div className="input-group mb-5">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt">
                              <FontAwesomeIcon
                                icon={solid("comment")}
                                className="icon-form"
                              />
                            </span>
                          </span>
                        </div>
                        <input className="form-control" id="name" type="text" aria-label="text" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="fecha">Fecha Inicio</label>
                      <div className="input-group mb-5">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt"><FontAwesomeIcon icon={solid("comment")}className="icon-form"/>
                            </span>
                          </span>
                        </div>
                        <input className="form-control" id="date" type="date" aria-label="text" {...register("star_date", { required: true })}/>
                        {errors.star_date && ( <p>Debe ingresar una fecha valida.</p>)}
                        <input className="form-control" id="time" type="time" aria-label="text" {...register("start_datetime", { required: true })}/> 
                        {errors.start_datetime && ( <p>Debe ingresar hora de inicio valida.</p>)}
                        <input className="form-control" id="time" type="time" aria-label="text" {...register("end_datetime", { required: true })}/>
                        {errors.end_datetime && ( <p>Debe ingresar hora fin valida.</p>)}
                      </div>
                    </div>
                  
                    {/* {
                      edit
                      ?<button type="submit" className="btn btn-block btn-primary"> Editar <FontAwesomeIcon icon={solid('paper-plane')}className="icon-form"/></button>
                      :<button type="submit" className="btn btn-block btn-primary"> Crear <FontAwesomeIcon icon={solid('paper-plane')}className="icon-form"/></button>
                    } */}
                    <button type="submit" className="btn btn-block btn-primary"> Crear <FontAwesomeIcon icon={solid('paper-plane')}className="icon-form"/></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}