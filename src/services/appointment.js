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