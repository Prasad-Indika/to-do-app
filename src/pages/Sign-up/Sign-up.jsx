import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextInput from '../../common/components/TextInput'
import CommonButton from '../../common/components/Button'
import LoginLayout from '../../components/LoginLayout'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../store/slice/userSlice'
import { Link, useNavigate } from 'react-router-dom'



export default function SignUp() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError,setEmailError] = useState('');
    const [nameError,setNameError] = useState('');
    const userData = useSelector((state)=>state.userSlice)

    const isValidFields = name && email && password && !emailError && !nameError;

  return (
   <LoginLayout>
        <Box>
            <Box sx={{margin:4}}>
                <Typography variant="h3" gutterBottom style={{ color:'#167bf0' }}>
                    Sign Up
                </Typography>
            </Box>      

            <Box sx={{margin:4}}>
                <TextInput
                    placeholder={'Name'}
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                        if (!/^[a-zA-Z]+( [a-zA-Z]+)*$/.test(e.target.value)) {
                            setNameError("Invalid Name");
                        } else {
                            setNameError("");
                        }
                    }}
                />
                {nameError && (
                    <div style={{color: "red", fontSize: "12px"}}>
                        {nameError}
                    </div>
                )}
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
                    type="password"
                    placeholder={'Password'}
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
            </Box>
            <Box sx={{margin:4}}>
                <CommonButton
                    name={'Sign Up'}
                    fullWidth
                    onClick={()=>{
                        const user = {
                            name:name,
                            email:email,
                            password:password
                        }
                        dispatch(addUser(user))
                        navigate("/sign-in")
                    }}
                    disabled={!isValidFields}
                />
            </Box>

            <Box sx={{margin:4}}>
                <Link to={"/sign-in"}>Already Have Account? </Link>
            </Box>
        </Box>
   </LoginLayout>
  )
}
