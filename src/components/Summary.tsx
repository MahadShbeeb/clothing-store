import { Box, Button, Card, CardActions, CardContent, Divider, Grid, Typography } from "@mui/material"
import { useSelector , useDispatch } from 'react-redux'
import { RootState } from '../store/store';
import { clearCart } from "../store/cartSlice";

const Summary = () => {
const cartItems = useSelector((state: RootState) => state.cart.cart);
const dispatch = useDispatch()

const totalPrice=cartItems.reduce((total, product)=>{
      return total += product.price*product.quantity
  },0)
  const totalCount=cartItems.reduce((total, product)=>{
      return total += product.quantity
  },0)
  return (
    <Grid  xs={4} 
    style={{minWidth: 350, paddingRight :'30px',borderRadius:'10px',marginTop:'58px'}}>
    <Card sx={{ maxWidth: 600 }} >
      <CardContent  >
        <Typography variant="h6" color="text.primary">
          Summary
        </Typography>
        <Divider sx={{ my: 1.5 }} orientation="horizontal" flexItem />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Total products : {totalCount}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body1" color="text.secondary">
          Shipping : $00
          <Divider sx={{ my: 1.5 }} orientation="horizontal" flexItem />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Total price : {`$ ${totalPrice.toFixed(2)}`}
        </Typography>
        </Typography>
      </CardContent>
      <CardActions >
      <Box margin={1}>
          <Button color="secondary" variant="contained" sx={{borderRadius: 12.5}}
        onClick={()=>{ dispatch(clearCart()) }}>Checkout</Button>
      </Box>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default Summary