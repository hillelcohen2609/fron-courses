import { Button, Stack, TextField, Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/logInController/login';

export default function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [usersList , setUsersList] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        login().then(res=>{
            setUsersList(res)
        }).catch(err=>console.log(err));
    },[])

    console.log(usersList);

    const submit = ()=>{
        const user = usersList.find(user=>{
            return user.name===username&&user.password===password
        })
        if (user) {
            if(username==="admin"&&password==="1234"){
                localStorage.setItem("admin","true");
            }
            localStorage.setItem("id",`${user.id}`);
            navigate("/courses");
        } else {
            setPassword("");
            alert("שם משתמש או סיסמא שגויים");
            
        }
    }

  return (
    <Stack textAlign={"center"}  width={"25vw"} margin={"auto"} marginTop={"30vh"}>
        <Stack width={"90%"} margin={"auto"} paddingBottom={"2vh"}>
        <Typography variant='h4' marginBottom={"2vh"}>התחבר</Typography>
        <TextField placeholder='שם משתמש' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
        <TextField placeholder='הכנס סיסמא' value={password} type='password' onChange={(event)=>{setPassword(event.target.value)}}/> 
        <Button disabled={!username||!password} size='large' variant='contained'  onClick={submit}>התחבר</Button>
        </Stack>
        <Stack alignItems={"center"} marginTop={"2vh"} >
        
        <Stack direction={"row"} spacing={1.5}>
        <Link to={"/signin"} style={{textDecoration:"none", color:"blue"}}><Typography variant='body1'>לעמוד הרשמה</Typography></Link>
        <Typography variant='body1'>?עוד לא נרשמתם</Typography>
        </Stack>
        
        </Stack>
    </Stack>
  )
}
