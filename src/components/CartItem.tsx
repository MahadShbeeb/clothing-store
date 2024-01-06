import { useDispatch } from 'react-redux'
import { ListItem, ListItemText, ListItemAvatar, Avatar,Button, Box, Card } from '@mui/material';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/cartSlice';
import { Product } from "../entities/Product"

interface Props{
    product :Product
}

const CartItem = ({product}:Props) => {
    const dispatch = useDispatch()
    return (
   <Card style={{minWidth: 350, padding :'30px',borderRadius:'10px',marginTop:'20px'}} >
     <ListItem key={product.id} >
            <ListItemAvatar>
              <Avatar src={product.image} 
              sx={{ objectFit: "cover" , width: 150, height: 150 }}/>
            </ListItemAvatar>
             <Box display={{ xs: 'none', sm: 'block' }}>
               <ListItemText  sx={{ mx: '30px' }} primary={product.title.split(' ').slice(0,3).join(" ")}
              secondary={`$${(product.price* product.quantity).toFixed(2)}`} />
             </Box>
              <ListItemText sx={{ mx: '30px' }} primary={product.quantity} />
              <Box sx={{ mx: '2px' }}>
                <Button variant="contained" color="secondary"
                onClick={() => { dispatch(increaseQuantity(product)) }}
                style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                >+</Button>
              </Box>
              <Box sx={{ mx: '2px' }}>
                <Button variant="contained" color="secondary"
                style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', 
                minHeight: '30px',color: 'white'}}
                onClick={() => { dispatch(decreaseQuantity(product)) }}
                >-</Button>
              </Box>
              <Box sx={{ mx: '2px'}}>
                <Button sx={{borderRadius: 12.5,':hover': {bgcolor: 'error.main',color: 'white'},}} 
                variant="outlined" color="error"
                onClick={() => { dispatch(removeFromCart(product)) }}
                >Delete</Button>
              </Box>
          </ListItem>
   </Card>
  )
}

export default CartItem