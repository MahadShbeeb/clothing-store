import { Box, Drawer, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import ColorModeSwitch from './ColorModeSwitch'
import { Link } from 'react-router-dom';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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
        <Drawer sx={{flexShrink: 0, 
        '& .MuiDrawer-paper': {padding:'20px',width: '25%',boxSizing: 'border-box',},}}
        variant="persistent" anchor="left" open={isOpen}  onClose={() => setIsOpen(false)}  >
       <Box display='flex' justifyContent='end'>
         <IconButton onClick={()=>setIsOpen(false)}>
            <ChevronLeftIcon /> 
        </IconButton>
        </Box>
        <List>
        {navItems.map(item => (
            <ListItem key={item.name} sx={{padding:'20px'}} >
            <Typography color='black' noWrap component={Link} 
            to={item.link} sx={{ textDecoration: 'none'}}> { item.name } </Typography>
            </ListItem>
        ))}
        </List>
        </Drawer>
        <Toolbar  sx={{ boxShadow: 1 }}>
        <Typography variant="h5" noWrap component="a" href="/"
        sx={{mr: 2,fontWeight: 100,fontFamily:'roboto',color:'black',letterSpacing: '.2rem',textDecoration: 'none',
                }}> STORE</Typography>
            <Box sx={{ flexGrow: 1 , display: 'flex' ,justifyContent:'center'}}>
            {navItems.map(item=> 
        <Box marginX={1} display={{ md: 'block', xs: 'none' }}>
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