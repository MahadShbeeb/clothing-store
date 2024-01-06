import { Avatar, Box, Button, Card, Grid, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { firebaseAuth } from '../firebase/BaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { logout, logoutUser } from '../store/authSlice';
import { AppDispatch } from '../store/store';
import { RootState } from '../store/store';

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()

  const handleLogOut = () => {
  localStorage.removeItem('auth');
  dispatch(logoutUser())
  dispatch(logout())
  navigate('/login')
  }

  // const user = firebaseAuth.currentUser;
  const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated);
  const user = useSelector((state:RootState) => state.auth.user);


  return (
        <Grid  container direction="row" justifyContent="space-evenly" alignItems="center">
          <Card style={{display: 'inline-block',alignItems : "center",
                padding :'40px',borderRadius:'10px',margin:'50px'}}>
        <ListItem   style={{display: 'flex', flexDirection: 'column'}}>
            <ListItemAvatar>
              <Avatar src='https://picsum.photos/200' sx={{ objectFit: "cover" , width: 150, height: 150 }}/>
          </ListItemAvatar>
          <ListItemText style={{marginTop:'20px'}}>
            <Typography >
          {isAuthenticated? ' Hello '+ user?.email:' Sorry you not logged in '}</Typography>
          </ListItemText>
              <Box sx={{ my:'10px'}}>
                <Button color="secondary" variant="contained" onClick={handleLogOut}
                  sx={{borderRadius: 12.5,paddingX:'40px',paddingY:'10px'}}>Logout</Button>
              </Box>
          </ListItem>  
    </Card>
  </Grid>
  )
}

export default ProfilePage