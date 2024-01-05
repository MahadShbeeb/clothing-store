import { useSelector } from 'react-redux'
import { RootState } from '../store/store';
import { List,Typography,Grid} from '@mui/material';
import CartItem from '../components/CartItem';
import Summary from '../components/Summary';

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  
  return (
    <>
    {cartItems.length != 0 ?<Typography variant="h6" color='gray.700'
    sx={{ textDecoration: 'none',my: '10px', padding:'10px' ,mx:'25px' }}
    >Shopping cart</Typography>:''} 
    <Grid container spacing={2} columns={16} >
      <Grid item xs={12} >
      <List sx={{padding:'40px'}}>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
        ):(cartItems.map((item) => (<CartItem key={item.id} product={item}/>)))}
    </List>
  </Grid>
  <Grid item xs={4} >
    {cartItems.length != 0 ?<Summary/>:''}
  </Grid>
</Grid> 
</>  
)
}

export default CartPage

