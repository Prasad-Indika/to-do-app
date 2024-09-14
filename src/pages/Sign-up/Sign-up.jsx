import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextInput from '../../common/components/TextInput'
import CommonButton from '../../common/components/Button'
import LoginLayout from '../../components/LoginLayout'



export default function SignUp() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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
                    onChange={(e)=>{setName(e.target.value)}}
                />
            </Box>
            <Box sx={{margin:4}}>
                <TextInput
                    placeholder={'Email'}
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
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
                    name={'Sign Up'}
                    fullWidth
                    onClick={()=>{console.log(password);
                    }}
                />
            </Box>
        </Box>
   </LoginLayout>
  )
}
