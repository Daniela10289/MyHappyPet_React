import axios from "axios";
import config from "../config";
import {alertNoty, DialogWindow} from "@utils/alerts";

export const getUsers = () => {
  return axios
    .get(`${config.baseHost}/api/users/`)
    .then((res) => {
      console.log(res);
      return res.data
    })
    .catch((error) => {
      console.log("error!!! " + error);
      throw error
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
      throw error
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
          if (valor === true) {
            alertNoty('success', 'Se modifico correctamente!');
          } else {
            alertNoty('success', 'Se creo correctamente!');
          }
      })
      .catch ((error) => {
          console.log("error!!! " + error);
          alertNoty('error', 'Ups!! Hubo un error!');
          throw error
      });
}

  export const deleteUsers = (id) => {
    const url = `${config.baseHost}/api/users/${id}`;
    console.log(id);
    return DialogWindow('Esta seguro?', 'Se eliminara el registro', 'warning', true).then((result) => {
      if (result.isConfirmed) {
        return axios
        .delete(url)
          .then(res => {
            alertNoty('success', 'Se elimino correctamente!')
            return true
          })
          .catch(err => {
            alertNoty('error', 'No es posible eliminar!')
            throw err
          });
      }
    })
  };

  
