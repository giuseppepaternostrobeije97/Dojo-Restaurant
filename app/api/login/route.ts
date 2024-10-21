// -- AXIOS
import { AxiosResponse } from "axios";
import { post } from "../generic-services";
// -- PROPERTIES
import { auth,getToken } from "../properties";

const autenticateUser = async (email:string,password:string) => {
    // # POST
    const response:AxiosResponse = await post(auth,{email,password});
    // # CHECK ERROR
    if(response.status !== 200 ){
        throw new Error('lofin failed')
    }
    // # TAKE TOKEN 
    const token = response.data;
    console.log(token)
    return token

}


export const AUTH = async (email:string,password:string) => {
    const token = await autenticateUser(email,password);
    
}