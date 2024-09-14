import { Card, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'
import CommonButton from '../../common/components/Button'

export default function TodoHeader() {
  return (
    <Card sx={{margin:'5px'}}>
        <Grid2 container sx={{margin:'5px'}}>
            <Grid2 sx={{display:'flex',alignItems:'center'}} size={{lg:11}}>
                <Typography variant="h3" style={{ color:'#167bf0' }}>
                    Welcome Prasad
                </Typography>
            </Grid2>
            <Grid2 sx={{display:'flex',alignItems:'center'}} size={{lg:1}}>
                <CommonButton
                    name={"Logout"}
                />  
            </Grid2>
        </Grid2>
    </Card>
  )
}
