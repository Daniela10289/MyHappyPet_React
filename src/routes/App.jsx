import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Home from "../pages/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={Home} />
                </Routes>  
            </Layout>
        </BrowserRouter>
    );
}