import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import logo from "@logos/logo_happy_pet.png";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user");
  }

  const clickHome = () => {
    navigate("/");
  }

  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom @@classes">
        <div className="container position-relative">
          <img id="nav-logo" src={logo} alt="Logo" style={{ height: "58px" }} onClick={clickHome} />
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a
                    href="@@path/index.html"
                    className="navbar-brand shadow-soft py-2 px-3 rounded border border-light"
                  >
                    <img src="" alt="Themesberg logo" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <a
                    href="#navbar_global"
                    className="fas fa-times"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    title="close"
                    aria-label="Toggle navigation"
                  ></a>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <span className="nav-link-inner-text">Pages</span>
                  <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="@@path/html/pages/about.html"
                    >
                      Acerca de
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="@@path/html/pages/pricing.html"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="@@path/html/pages/contact.html"
                    >
                      Contactanos
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a href="#" className="nav-link" data-toggle="dropdown">
                  <span className="nav-link-inner-text">Autogestión</span>
                  <span className="fas fa-angle-down nav-link-arrow ml-2"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg">
                  <div className="col-auto px-0" data-dropdown-content>
                    <div className="list-group list-group-flush">
                      <a
                        onClick={handleClick}
                        className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4"
                      >
                        <span className="icon icon-sm icon-secondary">
                          <span className="fas fa-file-alt"></span>
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">
                            Usuarios
                          </span>
                          <span className="small">Crea tu usuario</span>
                        </div>
                      </a>
                      <a href="https://github.com/themesberg/neumorphism-ui/issues"
                        target="_blank"
                        className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                        <span className="icon icon-sm icon-secondary">
                          <span className="fas fa-microphone-alt"></span>
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">Mascotas</span>
                          <span className="small">
                            Registra tu mascota
                          </span>
                        </div>
                      </a>
                      <a href="https://github.com/themesberg/neumorphism-ui/issues"
                        target="_blank"
                        className="list-group-item list-group-item-action d-flex align-items-center p-0 py-3 px-lg-4">
                        <span className="icon icon-sm icon-secondary">
                          <span className="fas fa-microphone-alt"></span>
                        </span>
                        <div className="ml-4">
                          <span className="text-dark d-block">Citas</span>
                          <span className="small">
                            Pide tu cita
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://themesberg.com/product/ui-kits/neumorphism-ui-pro"
              target="_blank"
              className="btn btn-primary text-secondary d-none d-md-inline-block mr-3"
            >
              <i className="far fa-paper-plane mr-2"></i> Upgrade to PRO
            </a>
            <a
              href="https://themesberg.com/docs/neumorphism-ui/getting-started/quick-start/"
              target="_blank"
              className="btn btn-primary"
            >
              <i className="fas fa-book"></i> Docs v1.0
            </a>
            <button
              className="navbar-toggler ml-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
