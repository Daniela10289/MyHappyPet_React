import React, { useState, useContext } from "react";
import '@styles/Header.scss';

export default function Header () {
    return (
        <nav>
           
            <div className="navbar-left">
               
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Servicios</a>
                    </li>
                    <li>
                        <a href="/">Acerca de</a>
                    </li>
                    <li>
                        <a href="/">Blog</a>
                    </li>
                    <li>
                        <a href="/">Contactanos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

