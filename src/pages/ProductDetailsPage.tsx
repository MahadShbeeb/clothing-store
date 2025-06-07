import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";
import { RootState } from "../store/store";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useProduct(id!);
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = data
    ? favorites.some((item) => item.id === data.id)
    : false;

  const handleAddToCart = () => {
    if (data) {
      dispatch(addToCart(data));
    }
  };

  const handleToggleFavorite = () => {
    if (data) {
      if (isFavorite) {
        dispatch(removeFromFavorites(data));
      } else {
        dispatch(addToFavorites(data));
      }
    }
  };

  return (
    <Grid container columns={16}>
      <Grid item xs={16} sm={16} md={8} lg={8}>
        <Box
          component="img"
          sx={{
            border: 0,
            width: "100%",
            height: "700px",
            backgroundImage: `url(${data?.image})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Grid>
      <Grid item xs={16} sm={16} md={8} lg={8}>
        <Box padding={10} textAlign="center">
          <Typography
            variant="h4"
            color="gray.800"
            sx={{
              textDecoration: "none",
              textDecorationColor: "gray.900",
              my: "2rem",
            }}
          >
            {data?.title}
          </Typography>
          <Typography color="text" sx={{ my: "1rem" }}>
            {data?.category}
          </Typography>
          <Typography color="text.secondary" sx={{ my: "1rem" }}>
            ${data?.price}
          </Typography>
          <Divider orientation="horizontal" flexItem />
          <Typography sx={{ my: "1rem" }}>Product Description :</Typography>
          <Typography color="text.secondary" sx={{ my: "1rem" }}>
            {data?.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              onClick={handleAddToCart}
              color="secondary"
              variant="contained"
            >
              Add to cart
            </Button>
            <IconButton onClick={handleToggleFavorite} color="secondary">
              {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailsPage;
