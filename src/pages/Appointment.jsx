import "@styles/User.scss";
import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import {getUsers} from "@services/user";
import {getPetsUserId} from "@services/pet";
import {sendAppointments, getAppointmentId} from "@services/appointment";
import moment from 'moment';
import {alertNoty, DialogWindow} from "@utils/alerts";

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
            if (edit) { 
                getAppointmentId(appt_id).then((apptResponse) => {
                  
                  const startDateTime = moment( apptResponse.start_time);
                  const endDateTime = moment( apptResponse.end_time);
                  
                  setValue("user_id", apptResponse.user_id);
                  setValue("description", apptResponse.description);
                  setValue("start_date", startDateTime.format("YYYY-MM-DD"));
                  setValue("start_time", startDateTime.format("hh:mm"));
                  setValue("end_time", endDateTime.format("hh:mm"));  
                  setValue("title", apptResponse.title);
                  getPetsUserId(apptResponse.user_id).then((petsResponse) => {
                    setPetOptions(petsResponse)
                    setValue("pet_id", apptResponse.pet_id);
                  })
                })
          }
        })
      }, []);

    const [ petOptions, setPetOptions ] = useState([]);
    const handleUserSelectChange = (event) => {
      if (event.target.value){
        getPetsUserId(event.target.value).then((petsResponse) => {
          setPetOptions(petsResponse)
        })
      }else {
        setPetOptions([]);
      }
    }

    const validationDate = (date, startTime, endTime) =>  {
      
      let now = moment().format("YYYY-MM-DD");
      let state = Boolean;

      if (date <= now){
        alertNoty('warning', 'La fecha seleccionada no puede ser menor a la fecha actual!');
        state = false
      }else {
        state = true
      }

      if (startTime >= endTime) {
        alertNoty('warning', 'La hora seleccionada no es valida!');
        state = false
      }else {
        state = true
      }

      return state

    }

    const onSubmit = (data) => {
      
      let start_time = data.start_date + " " + data.start_time + ":00";
      let end_time = data.start_date + " " + data.end_time + ":00";
      let startDateTime = moment(start_time);
      let endDateTime = moment(end_time);

      let cleanedData = {
        pet_id: data.pet_id,
        user_id: data.user_id,
        description: data.description,
        start_time: startDateTime.format(),
        end_time: endDateTime.format(),
        title: data.title
      }
      
      if (validationDate(data.start_date, data.start_time, data.end_time)) {
        if (appt_id && edit) {
          sendAppointments(cleanedData, appt_id, true).then(()=>{  
            navigate("/listappointment");
            reset();
          });
        }else {
          sendAppointments(cleanedData, appt_id, false).then(()=>{
            navigate("/listappointment");
            reset();
          });
        }
      }else{
        
      }

      
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
                      ? <h2 className="mb-0 h5">Editar Cita</h2>
                      : <h2 className="mb-0 h5">Agendar Cita</h2>
                }
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="user_id">Nombre del usuario</label>
                      <div className="input-group">
                        <div className="input-group-prepend"> 
                          <span className="input-group-text">
                            <span className="fas fa-envelope">
                              <FontAwesomeIcon icon={solid("user-large")} className="icon-form"/>
                            </span>
                          </span>
                        </div>
                        <select className="form-control" name="user_id"  {...register("user_id", { required: true })} onChange={handleUserSelectChange}>  
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
                      <div className="input-group">
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
                      <div className="input-group">
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
                      <div className="input-group">
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
                        <input className="form-control" id="name" type="text" aria-label="text" {...register("description", { required: false })}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">Fecha</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt"><FontAwesomeIcon icon={solid("calendar-check")}className="icon-form"/>
                            </span>
                          </span>
                        </div>
                        <input className="form-control" id="date" type="date" aria-label="text" {...register("start_date", { required: true })}/>
                        {errors.start_date && ( <p>Debe ingresar una fecha valida.</p>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Hora</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <span className="fas fa-unlock-alt">
                              <FontAwesomeIcon icon={solid("clock")} className="icon-form"/>
                            </span>
                          </span>
                        </div>
                        <input className="form-control" id="time" type="time" aria-label="text" {...register("start_time", { required: true })}/> 
                        {errors.start_time && ( <p>Debe ingresar hora de inicio valida.</p>)}
                        <input className="form-control" id="time" type="time" aria-label="text" {...register("end_time", { required: true })}/>
                        {errors.end_time && ( <p>Debe ingresar hora fin valida.</p>)}
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
    )
}