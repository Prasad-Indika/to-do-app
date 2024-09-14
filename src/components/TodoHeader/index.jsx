import { Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../../common/components/Button'
import { useNavigate } from 'react-router-dom'

export default function TodoHeader() {

    const navigate = useNavigate();
    const user = localStorage.getItem("user")

    const handleLogout = ()=>{
        localStorage.removeItem("user")
        navigate("/sign-in")
    }
  return (
    <Card sx={{margin:'5px'}}>
        <Grid2 container sx={{margin:'10px'}}>
            <Grid2 sx={{display:'flex',alignItems:'center'}} size={{xs:12 , sm:12 , md:11 , lg:11}}>
                <Typography variant="h4" style={{ color:'#167bf0' }}>
                    User :  {user}
                </Typography>
            </Grid2>
            <Grid2 sx={{display:'flex',alignItems:'center', justifyContent:'end'}} size={{xs:12 , sm:12 , md:1 , lg:1}}>
                <CommonButton
                    name={"Logout"}
                    onClick={handleLogout}
                />  
            </Grid2>
        </Grid2>
    </Card>
  )
}
