import React, { useState, useContext } from "react";
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular} from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Login({show, handleClose}) {
    return (
      
      <Modal show={show} onHide={handleClose}>
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
              <h2 className="h4">Ingreso a la plataforma</h2>
              <span>Inicie sesión con su nombre de usuario y contraseña</span>
            </div>
            <div className="card-body">
              <form action="#" className="mt-4">
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
                      id="exampleInputIcon3"
                      placeholder="example@company.com"
                      type="text"
                      aria-label="email adress"
                    />
                  </div>
                </div>
                {/* <!-- End of Form --> */}
                <div className="form-group">
                  {/* <!-- Form --> */}
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
                  {/* <!-- End of Form --> */}
                  <div className="d-block d-sm-flex justify-content-between align-items-center mb-4">
                    <div className="form-check mb-2 mb-sm-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="defaultCheck5"
                      >
                        Recordar
                      </label>
                    </div>
                    <div>
                      <a href="#" className="small text-right">
                        Olvido su contraseña?
                      </a>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  Iniciar sesión
                </button>
              </form>
              <div className="mt-3 mb-4 text-center">
                <span className="font-weight-normal">o ingresar con</span>
              </div>
              <div className="btn-wrapper my-4 text-center">
                <button
                  className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2"
                  type="button"
                  aria-label="facebook button"
                  title="facebook button"
                >
                  <span aria-hidden="true" className="fab fa-facebook-f"></span>
                </button>
                <button
                  className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2"
                  type="button"
                  aria-label="twitter button"
                  title="twitter button"
                >
                  <span aria-hidden="true" className="fab fa-twitter"></span>
                </button>
                <button
                  className="btn btn-icon-only btn-pill btn-outline-light text-facebook"
                  type="button"
                  aria-label="github button"
                  title="github button"
                >
                  <span aria-hidden="true" className="fab fa-github"></span>
                </button>
              </div>
              <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                <span className="font-weight-normal">
                  No estas registrado?
                  <a href="#" className="font-weight-bold">
                    Crea un cuenta
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

