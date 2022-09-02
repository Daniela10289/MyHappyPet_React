import React, { useState, useContext } from "react";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'
import { useForm } from 'react-hook-form';


export default function Register({show, registerClose}) {
    
    const { register, handleSubmit, formState: { errors }, setValue, reset} = useForm();

    const [hidden, setHidden] = useState(true);
    
    return (
      
      <Modal show={show} onHide={registerClose}>
        <Modal.Body className="card bg-primary shadow-soft border-light p-4">
            <button
              type="button"
              className="close ml-auto btn-close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <Modal.Header closeButton>
              
              </Modal.Header>
            </button>
            <div className="card-header text-center pb-0">
              <h2 className="h4">Registro en la plataforma</h2>
              <span>Ingrese los datos para iniciar sesión</span>
            </div>
            <div className="card-body">
              <form action="#" className="mt-3">
                {/* <!-- Form --> */}
                <div className="form-group">
                  <label htmlFor="exampleInputIcon3">Correo electrónico</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon icon={solid('envelope')} className="icon-plus"/>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      id="input-email"
                      placeholder="example@company.com"
                      type="email"
                      aria-label="email adress"
                    />
                  </div>
                </div>
                
                <div className="form-group">  
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword6">Contraseña</label>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                        <FontAwesomeIcon icon={solid('unlock-keyhole')} className="icon-plus"/>
                        </span>
                      </div>
                      <input
                        className="form-control"
                        id="exampleInputPassword6"
                        placeholder="Password"
                        type="password"
                        aria-label="Password"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                  <label htmlFor="exampleId">Identificación</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon icon={solid('user-large')} className="icon-plus"/>
                      </span>
                    </div>
                    <input
                    // hidden={hidden}                    
                      className="form-control"
                      id="input-id"
                      // placeholder="12312"
                      type="text"
                      aria-label="id"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleName">Nombre</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon icon={solid('file-signature')} className="icon-plus"/>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      id="input-name"
                      // placeholder=""
                      type="text"
                      aria-label="name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleLastname">Apellido</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon icon={solid('file-pen')} className="icon-plus"/>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      id="input-lastname"
                      // placeholder=""
                      type="text"
                      aria-label="lastname"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="examplePhone">Celular</label>
                  <div className="input-group mb-4">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <FontAwesomeIcon icon={solid('phone')} className="icon-plus"/>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      id="input-phone"
                      // placeholder="***"
                      type="number"
                      aria-label="phone"
                    />
                  </div>
                </div>
                  {/* <!-- End of Form --> */}

                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Registrarse
                </button>
              </form>
             
             
              <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                <span className="font-weight-normal">
                  Ya estas registrado?
                  <a href="#" className="font-weight-bold">
                    ingresa aqui
                  </a>
                </span>
              </div>
            </div>
          
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    );
}

