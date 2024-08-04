import axios from "axios";
import { PATH } from "../../constant";

export async function login(user){
    return (await axios.post(`${PATH}/users/login`,user)).data;

}

export async function addNewUser(user){
    return (await axios.post(`${PATH}/users/signup`,user)).data;
}