import axios from "axios";
import config from "../config";
import {alertNoty, DialogWindow} from "@utils/alerts";


export const getAppointment = () => {
    return axios
    .get(`${config.baseHost}/api/appointments/`)
    .then(res => {
        return res.data;
    })
    .catch ((error) => {
        console.log("error!!! " + error);
        throw error
    });
}

export const getAppointmentId = (id) => {
    return axios
        .get(`${config.baseHost}/api/appointments/${id}`)
        .then((res) => {
        return res.data;
        })
        .catch((error) => {
        console.log("error!!! " + error);
        throw error
        });
};


export const sendAppointments = (data, id, valor) => {
    let promise = null;
    if (valor) {
        promise = axios.put(`${config.baseHost}/api/appointments/${id}`, data);
    }else {
        promise = axios.post(`${config.baseHost}/api/appointments/`, data);
    }
    return promise
        .then(res => {
            console.log(res.data);
            // if (valor === true) {
            // alertNoty('success', 'Se modifico correctamente!');
            // } else {
            // }
            alertNoty('success', 'Se creo correctamente!');
        })
        .catch ((error) => {
            console.log("error!!! " + error);
            alertNoty('error', 'Ups!! Hubo un error!');
            throw error
        });
}