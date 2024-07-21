import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='success'>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          <Button><Link style={{textDecoration:'none', color:'floralwhite'}} to={'/'}>Home</Link></Button>&nbsp;&nbsp;
          <Button><Link style={{textDecoration:'none', color:'floralwhite'}} to={'/a'}>Add</Link></Button>

            </Toolbar> 
            </AppBar>
            </Box>
    </div>
  )
}

export default Navbar
