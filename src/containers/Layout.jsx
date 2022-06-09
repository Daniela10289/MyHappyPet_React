import React from "react";
import Header from '../components/Header';
import "@styles/Layout.scss";

const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Header />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
}

export default Layout;