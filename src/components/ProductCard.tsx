import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { Product } from "../entities/Product";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToFavorites, removeFromFavorites } from "../store/favoritesSlice";
import { RootState } from "../store/store";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        height="200px"
        sx={{ padding: "10px", objectFit: "contain" }}
      />
      <Divider orientation="horizontal" flexItem />
      <CardContent sx={{ padding: "20px", flexGrow: 1 }}>
        <Typography
          color="black"
          noWrap
          variant="h6"
          component={Link}
          to={"/products/" + product.id}
          sx={{ textDecoration: "none" }}
        >
          {product.title.split(" ").slice(0, 4).join(" ")}...
        </Typography>
        <Box marginTop={1}>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </Box>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            variant="contained"
            startIcon={<AddShoppingCartIcon />}
            onClick={handleAddToCart}
            sx={{
              flexGrow: 1,
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            Add to Cart
          </Button>
          <IconButton
            onClick={handleToggleFavorite}
            sx={{
              color: isFavorite ? "secondary.main" : "grey.500",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Stack>
      </Box>
    </Card>
  );
};

export default ProductCard;
