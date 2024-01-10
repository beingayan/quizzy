
import axios from "axios";
export const setAxiosDefaultHeader = (token) => {
    axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
};

export const setUserDetailInLocalStorage = (data, token) => {
    const con_data_into_json = JSON.stringify(data);
    window.localStorage.setItem('userDetail', con_data_into_json);
    window.localStorage.setItem('token', token);
}


