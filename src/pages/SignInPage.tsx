import {Avatar,Button,CssBaseline,TextField,FormControlLabel,Grid,Box,Checkbox,Container,Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/authSlice';
import { useState } from 'react';
import { AppDispatch } from '../store/store';


export default function SignInPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser({ email, password })).then(result=>{
      if (result.payload){
        setEmail('')
        setPassword('')
        navigate('/profile')
      }
    })
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Email Address" 
              name="email" autoComplete="email" value={email} autoFocus
              onChange={(e) => setEmail(e.target.value)} 
            />
            <TextField margin="normal" required fullWidth name="password" label="Password"
              type="password" id="password" autoComplete="current-password" value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button color='secondary' type="submit" fullWidth variant="contained" 
            sx={{ mt: 3, mb: 2 }}>Sign In</Button>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2">
                  Forgot password?
                </Typography>
              </Grid>
              <Grid item>
                <Typography  variant="body2">
                  {"Don't have an account?"}
                <Link to={'/signup'} >Sign Up</Link>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}