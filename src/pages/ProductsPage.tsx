import { Backdrop, CircularProgress } from '@mui/material';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts'
import Grid from '@mui/material/Grid';

const Products = () => {
    const {data ,isLoading} = useProducts()
    return (
        <Grid container padding={10} rowSpacing={3} spacing={8} columns={{ xs: 4, sm: 8, md: 12 }} >  
        {isLoading &&  
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        >
        <CircularProgress color="inherit" />
        </Backdrop>
      }   
        {data?.map(product =>
        <Grid item xs={4} key={product.id}>
            <ProductCard key={product.id} product={product}/>
            </Grid>
        )}
        </Grid> 
    )
}

export default Products