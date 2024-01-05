import { Box, Toolbar, Typography } from '@mui/material'
import ColorModeSwitch from './ColorModeSwitch'
import { Link } from 'react-router-dom';

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
    return (
        <Toolbar  sx={{ boxShadow: 1 }}>
        <Typography variant="h5" noWrap component="a" href="/"
        sx={{mr: 2,fontWeight: 100,fontFamily:'roboto',color:'black',letterSpacing: '.2rem',textDecoration: 'none',
                }}> STORE</Typography>
            <Box sx={{ flexGrow: 1 , display: 'flex' ,justifyContent:'center'}}>
            {navItems.map(item=> 
        <Box marginX={1}>
        <Typography key={item.name} color='black' noWrap component={Link} 
        to={item.link} sx={{ textDecoration: 'none'}}> { item.name } </Typography>
        </Box>
            // <Button key={item.link} component={Link} to={item.link}
            // variant="text" color="inherit">{item.name}</Button>
            )}
            </Box>
            <ColorModeSwitch/>
        </Toolbar>
    )
}

export default NavBar