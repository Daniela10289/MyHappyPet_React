import axios from "axios";
import config from "../config"

export const getUsers = () => {
    return axios
      .get(`${config.baseHost}/api/users/`)
      .then((res) => {
        console.log(res);
        return res.data
      })
      .catch((error) => {
        console.log("error!!! " + error);
        return []
      });
  };

  export const getUsersId = (id) => {
    return axios
      .get(`${config.baseHost}/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((error) => {
        console.log("error!!! " + error);
        return []
      });
  };

  export const sendUsers = (data, id, valor) => {
    let promise = null;
    if (valor) {
        promise = axios.put(`${config.baseHost}/api/users/${id}`, data);
    }else {
        promise = axios.post(`${config.baseHost}/api/users/`, data);
    }
    return promise
        .then(res => {
            console.log(res.data);
        })
        .catch ((error) => {
            console.log("error!!! " + error);
        });
  }

  export const deleteUsers = (id) => {
    const url = `${config.baseHost}/api/users/${id}`;
    console.log(id);
    return axios
      .delete(url)
      .then(res => {
        return true
      })
      .catch(err => {
        console.log(err);
        throw err
      });
  };

  
