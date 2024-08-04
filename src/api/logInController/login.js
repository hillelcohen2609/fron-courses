import axios from "axios";
import { PATH } from "../../constant";

export async function login(){
    
    try{
        const res =await axios.get(`${PATH}/users/getUsers`).then(res=>{
            if (res.data) {
                return res.data;
            }
        })
        return res;
    }catch(err){
        console.log(err);
    }
    
    
}

export async function addNewUser(user){
    try {
        const res =await axios.post(`${PATH}/users/addUsers`,user).then(res=>{
            console.log(res);
            if (res.status===201) {
                return res.data;
            }
        })
        return res;
        
    } catch (error) {
        console.log(error);
    }
}