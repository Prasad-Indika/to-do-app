import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextInput from '../../common/components/TextInput'
import CommonButton from '../../common/components/Button'
import LoginLayout from '../../components/LoginLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function SignIn() {

    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const userData = useSelector((state)=>state.userSlice.data)
    const isValidFields = email && password && !emailError;

    const handleLogin = ()=>{
        const user = userData.find(user => user.email === email)
        if(user){
            if(user.password === password){
                localStorage.setItem('user',user.email)
                navigate("/todolist")
            }else{
                console.log("pasword incorrect");    
            }   
        }else{
            console.log("No user");
            
        }
    }

  return (
   <LoginLayout>
        <Box>
            <Box sx={{margin:4}}>
                <Typography variant="h3" gutterBottom style={{ color:'#167bf0' }}>
                    Sign In
                </Typography>
            </Box>      

            <Box sx={{margin:4}}>
                <TextInput
                    placeholder={'Email'}
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)){
                            setEmailError("Invalid Email")
                        }else{
                            setEmailError("")
                        }
                    }}
                />
                {emailError && (
                    <div style={{color: "red", fontSize: "12px"}}>
                        {emailError}
                    </div>
                )}
            </Box>
            <Box sx={{margin:4}}>
                <TextInput
                    placeholder={'Password'}
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </Box>
            <Box sx={{margin:4}}>
                <CommonButton
                    name={'Login'}
                    fullWidth
                    onClick={()=>{
                        console.log(userData);
                        handleLogin();
                    }}
                    disabled={!isValidFields}
                />
            </Box>
            <Box sx={{margin:4}}>
                <Link to={"/sign-up"}>Create New Account</Link>
            </Box>
        </Box>
   </LoginLayout>
  )
}
