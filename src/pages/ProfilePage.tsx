import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const getUser=()=>{
  let user =localStorage.getItem('user')
  user ? user=JSON.parse(user) : user=null
  return user
}

const ProfilePage = () => {
  // const user = useSelector((state:Auth) => state.user);
  // const isAuthenticated = useSelector((state:Auth) => state.isAuthenticated);
  const navigate = useNavigate();
  const handleLogOut = () => {
  localStorage.removeItem('auth');
  setUser(null);
  navigate('/login')
  }

  const [user,setUser] = useState(getUser())
  console.log(user)
  return (
    <div>
    <Button color="secondary" variant="contained" onClick={handleLogOut}>Logout</Button>
    </div>
  )
}

export default ProfilePage