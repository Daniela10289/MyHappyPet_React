 import React, { useState } from 'react';
import "@styles/User.scss";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Pet() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const [count, setCount] = useState(0);
    
    const onSubmit = (data) => {
        console.log(data);
        // axios.post(`http://localhost:8080/api/pet/`, data)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch ((error) => {
        //         console.log("error!!! " + error);
        //     });
    const getSubmit = (data) => {
            console.log(data);
        axios.get(`http://localhost:8080/api/users/`, get_data)
        .then(res => {
            console.log(res);
            console.log(res.get_data);
        })
        .catch ((error) => {
            console.log("error!!! " + error);
        });
    }
    } 
    return (
        <div className="section-header" id="section-header">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3" id="form-user">
                        <div className="card bg-primary shadow-soft border-light p-4">
                            <div className="card-header text-center pb-0">
                                <h2 className="mb-0 h5">Crear Mascota</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label htmlFor="">Nombre del usuario</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-envelope"></span></span></div>
                                            <select className="form-control" name="func">
                                                <option value=""></option>
                                                <option value="5">{}</option>
                                                <option value="6">{}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group">
                                            <label htmlFor="name">Nombre de la mascota</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt"></span></span></div>
                                                <input className="form-control" id="name" placeholder="lulu" type="text" aria-label="text" {...register('name_user', { required: true })} />
                                                {errors.name_user && <p>Debe ingresar un nombre valido.</p>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last_name">Raza</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt"></span></span></div>
                                                <select className="form-control" name="func">
                                                    <option value=""></option>
                                                    <option value="felino">Felino</option>
                                                    <option value="canino">Canino</option>
                                                </select>                                                
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Genero</label>
                                            <div className="input-group mb-5">
                                                <div className="input-group-prepend"><span className="input-group-text"><span className="fas fa-unlock-alt"></span></span></div>
                                                <select className="form-control" name="func">
                                                    <option value=""></option>
                                                    <option value="macho">Macho</option>
                                                    <option value="hembra">Hembra</option>
                                                </select> 
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">Sigiente</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}