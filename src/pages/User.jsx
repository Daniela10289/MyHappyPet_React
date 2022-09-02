import "@styles/User.scss";
import React, { useEffect } from "react";
import { useSearchParams, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro';
import { useForm } from 'react-hook-form';
import {getUsersId, sendUsers} from "@services/user";
import {alertNoty} from "@utils/alerts";

export default function User() {

    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const user_id = searchParams.get("id");
    const edit = (searchParams.get("edit") === "true");

    const { register, handleSubmit, formState: { errors }, setValue, reset} = useForm();

    const onSubmit = (data) => {
        if (user_id && edit) {
            sendUsers(data, user_id, true).then(()=> {
                navigate("/listuser");
                reset();
            })
        }else {
            sendUsers(data, user_id, false).then(()=> {
                reset();
            })
        }
    } 

    if (edit) {
        useEffect(() => {
          getUsersId(user_id).then((userResponse) => {
            setValue("document", userResponse.document);
            setValue("name_user", userResponse.name_user);
            setValue("last_name", userResponse.last_name);
            setValue("phone", userResponse.phone);
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
                  {edit ? (
                    <h2 className="mb-0 h5">Editar Usuario</h2>
                  ) : (
                    <h2 className="mb-0 h5">Crear Usuario</h2>
                  )}
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <label htmlFor="document">Número de identificación</label>
                      <div className="input-group mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={solid("user-large")} className="icon-form"/>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          id="document"
                          placeholder=""
                          type="text"
                          aria-label="text"
                          {...register("document", { required: true })}
                        />
                        {errors.document && (<p>Debe ingresar un documento valido.</p>)}
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-group">
                        <label htmlFor="name_user">Nombre</label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <FontAwesomeIcon
                                icon={solid("file-signature")}
                                className="icon-form"
                              />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="name_user"
                            placeholder=""
                            type="text"
                            aria-label="text"
                            {...register("name_user", { required: true })}
                          />
                          {errors.name_user && (
                            <p>Debe ingresar un nombre valido.</p>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Apellido</label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <FontAwesomeIcon
                                icon={solid("file-pen")}
                                className="icon-form"
                              />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="last_name"
                            placeholder=""
                            type="text"
                            aria-label="text"
                            {...register("last_name", { required: true })}
                          />
                          {errors.last_name && (
                            <p>Debe ingresar un apellido valido.</p>
                          )}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Celular</label>
                        <div className="input-group mb-5">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <FontAwesomeIcon
                                icon={solid("phone")}
                                className="icon-form"
                              />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            id="phone"
                            placeholder=""
                            type="number"
                            aria-label="text"
                            {...register("phone", { required: true })}
                          />
                          {errors.phone && (
                            <p>Debe ingresar un número valido.</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {edit ? (
                      <button
                        type="submit"
                        className="btn btn-block btn-primary"
                      >
                        Editar{" "}
                        <FontAwesomeIcon
                          icon={solid("paper-plane")}
                          className="icon-form"
                        />{" "}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-block btn-primary"
                      >
                        Crear{" "}
                        <FontAwesomeIcon
                          icon={solid("paper-plane")}
                          className="icon-form"
                        />{" "}
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
