import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import '@styles/global.scss';
import ListUser from "../pages/ListUser";
import ListPet from "../pages/ListPet";
import ListAppointment from "../pages/ListAppointment";
import User from "../pages/User";
import Pet from "../pages/Pet";
import Appointment from "../pages/Appointment";

export default function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="listuser" element={<ListUser/>}/>
                    <Route exact path="listpet" element={<ListPet/>}/>
                    <Route exact path="listappointment" element={<ListAppointment/>}/>
                    <Route exact path="user" element={<User/>}/>
                    <Route exact path="pet" element={<Pet/>}/>
                    <Route exact path="appointment" element={<Appointment/>}/>
                    {/* <Route path="*" element={<NotFound/>}/> */}
                </Routes>  
            </Layout>
        </Router>
    );
}
