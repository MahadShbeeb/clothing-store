import { Box,  IconButton, Toolbar, Typography } from '@mui/material'
import ColorModeSwitch from './ColorModeSwitch'
import { Link } from 'react-router-dom';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState } from 'react';
import NavDrawer from './NavDrawer';

const NavBar = () => {
    const navItems = [
	{
        name: "Home",
        link: "",
	},
    {
        name: "Products",
        link: "products",
	},
    {
        name: "Cart",
        link: "/cart",
	},
    {
        name: "About",
        link: "",
	},
    {
        name: "FAQ",
        link: "",
	}
];
    const [isOpen,setIsOpen]=useState(false)
    return ( 
        <>
        <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        <Toolbar  sx={{ boxShadow: 1 }}>
        <Typography variant="h5" noWrap component="a" href="/"
        sx={{mr: 2,fontWeight: 100,fontFamily:'roboto',color:'black',letterSpacing: '.2rem',textDecoration: 'none',
                }}> STORE</Typography>
            <Box sx={{ flexGrow: 1 , display: 'flex' ,justifyContent:'center'}}>
            {navItems.map(item=> 
        <Box key={item.name} marginX={1} display={{ md: 'block', xs: 'none' }}>
        <Typography key={item.name} color='black' noWrap component={Link} 
        to={item.link} sx={{ textDecoration: 'none'}}> { item.name } </Typography>
        </Box>)}</Box>
        <ColorModeSwitch/>
        <Box display={{ xs: 'block', md: 'none' }}>
            <IconButton onClick={()=>{setIsOpen(!isOpen)}}> 
                <DragHandleIcon/>
            </IconButton>
        </Box>
        </Toolbar>
        </>
    )
}

export default NavBar