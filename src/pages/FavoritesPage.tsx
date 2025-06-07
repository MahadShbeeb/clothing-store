import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { Grid, Typography, Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { removeFromFavorites } from "../store/favoritesSlice";

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const dispatch = useDispatch();

  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h6" color="gray.700" sx={{ mb: 3 }}>
        Your Favorites
      </Typography>
      {favorites.length === 0 ? (
        <Typography variant="body1">
          You haven't added any items to your favorites yet.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default FavoritesPage;
