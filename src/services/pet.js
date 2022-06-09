import axios from "axios";
import config from "../config";
import {alertNoty, DialogWindow} from "@utils/alerts";

export const getPets = () => {
    return axios
    .get(`${config.baseHost}/api/pets/`)
    .then(res => {
        console.log(res);
        return res.data;
    })
    .catch ((error) => {
        console.log("error!!! " + error);
        return [];
    });
    }