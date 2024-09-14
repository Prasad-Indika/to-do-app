import { Box, Typography } from '@mui/material'
import React from 'react'
import TextInput from '../../common/components/TextInput'
import CommonButton from '../../common/components/Button'
import LoginLayout from '../../components/LoginLayout'



export default function SignIn() {
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
                    onChange={()=>{}}
                />
            </Box>
            <Box sx={{margin:4}}>
                <TextInput
                    placeholder={'Password'}
                    onChange={()=>{}}
                />
            </Box>
            <Box sx={{margin:4}}>
                <CommonButton
                    name={'Login'}
                    fullWidth
                />
            </Box>
        </Box>
   </LoginLayout>
  )
}
