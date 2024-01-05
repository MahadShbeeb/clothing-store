import { useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice';

const BookDetailsPage = () => {
  const {id} = useParams()
  const {data} = useProduct(parseInt(id))
  // const [isFav,setIsFav] = useState(false)
  
  const dispatch = useDispatch()
  const handleAddToCart = () => { dispatch(addToCart(data)) }
  
  return (
    <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Box component="img"
   sx={{
        border: 0 ,
        position: 'absolute',
        width: '50%',
        height: '100%',
        backgroundImage: `url(${data?.image})` ,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}>

    </Box>
  </Grid>
  <Grid item xs={8}>
    <Box padding={10} textAlign='center'>
      <Typography  variant="h4" color='gray.800'
        sx={{ textDecoration: 'none',textDecorationColor:'gray.900',my: '2rem'  }}>
        {data?.title}
        </Typography>
         <Typography  color="text" sx={{ my: '1rem' }}>
          {data?.category}
        </Typography>
        <Typography color="text.secondary" sx={{ my: '1rem' }}>
          ${data?.price}
        </Typography>
        <Divider orientation="horizontal" flexItem />
        <Typography sx={{ my: '1rem' }}>
          Product Description :
        </Typography>
        <Typography  color="text.secondary" sx={{ my: '1rem' }}>
          {data?.description}
        </Typography>
        <Box>
          <Button onClick={handleAddToCart} color="secondary"
          variant="contained" sx={{ mx: '1rem' }}>Add to cart</Button>
        {/* <IconButton onClick={()=>setIsFav(!isFav)}>
          {!isFav?<FavoriteBorderOutlinedIcon /> :<FavoriteIcon/>}
          </IconButton> */}
        </Box>
    </Box>
  </Grid>
</Grid>
  )
}

export default BookDetailsPage

