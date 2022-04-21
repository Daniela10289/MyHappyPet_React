import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import '@styles/global.scss';
import User from "../pages/User";
import Pet from "../pages/Pet";

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="user" element={<User/>}/>
                    <Route exact path="pet" element={<Pet/>}/>
                    {/* <Route path="*" element={<NotFound/>}/> */}
                </Routes>  
            </Layout>
        </Router>
    );
}
