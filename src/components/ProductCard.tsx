import {  Box, Card,CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { Product } from '../entities/Product'
import { Link } from 'react-router-dom'

interface Props{
  product : Product
}

const ProductCard = ({product}:Props) => {
  return (
  <Card sx={{ maxWidth: 345 ,borderRadius:'10px'}} >
    <CardMedia component="img" image={product.image} height ='200px'
      sx={{ padding: "10px", objectFit: "contain" }}/>

      <Divider orientation="horizontal" flexItem />
      <CardContent sx={{padding:'20px'}}>
        <Typography color='black' noWrap variant="h6" component={Link} 
        to={'/products/'+product.id} 
        sx={{ textDecoration: 'none'}}>
        {product.title.split(' ').slice(0,4).join(" ")}...
        </Typography>
        <Box marginTop={1}>
          <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        </Box>
    </CardContent>
  </Card>
  )
}

export default ProductCard