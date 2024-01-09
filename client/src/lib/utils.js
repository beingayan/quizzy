import FormHelperText from "@mui/material/FormHelperText";
import axios from 'axios'
export const errorMsg = (msg) => (
<FormHelperText sx={{ color: "red" }}>
    {msg}
</FormHelperText>
);


export const setCredentials = (token)=>{
    axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
};

export const setUserDetailInLocalStorage = (data,token)=>{
    console.log("token",token)
    console.log("userr-->",data)
   
    const con_data_into_json = JSON.stringify(data);
    window.localStorage.setItem('userDetail',con_data_into_json);
    window.localStorage.setItem('token', token);
}