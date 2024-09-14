import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'
import todopic from '../../assets/todopic.jpg'



export default function LoginLayout({children}) {
  return (
    <Box width="100%" height="100vh">
        <Grid2 container justifyContent={'center'} height={"100%"}>
            <Grid2 display={{xs:  'none', sm: 'none', md: 'block'}} size={{xs:0 , sm:0 , md:6.75 , lg:6.75}}>
                <Box width="100%" height="100vh" sx={{display:'flex',justifyContent:'space-around',alignItems:'center', backgroundImage:`url(${todopic})`, backgroundSize:'cover', minHeight: '200px' }}></Box>
            </Grid2>
            <Grid2 sx={{display:'flex',justifyContent:'center',alignItems:'center'}} size={{xs:12 , sm:12 , md:5.25 , lg:5.25}}>
               <Box sx={{width:'75%'}}>
                    {children}
               </Box>
            </Grid2>
        </Grid2>
        
    </Box>
  )
}
