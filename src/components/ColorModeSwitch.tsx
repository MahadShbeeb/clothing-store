import { Box, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom';
// import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
// import { firebaseAuth } from '../firebase/BaseConfig';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';


const ColorModeSwitch = () => {
    // const user = firebaseAuth.currentUser;
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated);

    return (
    <Stack direction="row" alignItems='center' justifyContent="center" padding='10px'>
        {/* <IconButton color='secondary'
                  sx={{p: 1,border: `1px ${theme.palette.text.disabled} solid`,
                  color:'secondary'}} size="small">
                  {theme.palette.mode === "dark" ? (
                    <LightModeOutlined />
                  ) : (
                    <DarkModeOutlined color="secondary" />
                  )}
        </IconButton> */}
        {/* <p>{activateName}</p> */}
        {/* <Switch color='success' 
        checked={toggleDarkMode} onChange={switchColorMode}
        />
        <p>Dark Mode</p> */}
        <Box marginLeft={2}>
            {!isAuthenticated?<Button color="secondary" sx={{borderRadius: 12.5,paddingX:'25px',
            ':hover': {bgcolor: 'secondary.dark',color: 'white'},}}
            component={Link} to={'/login'} variant="outlined" >Login</Button> :
            <Button color="secondary" sx={{borderRadius: 12.5,paddingX:'25px',
            ':hover': {bgcolor: 'secondary.dark',color: 'white'},}}
            component={Link} to={'/profile'} variant="outlined" >Profile</Button> 
            }  
        </Box>
        </Stack>
)
}

export default ColorModeSwitch