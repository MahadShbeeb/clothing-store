import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { clearCart } from "../store/cartSlice";
import { addOrder } from "../store/ordersSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Summary = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);
  const totalCount = cartItems.reduce((total, product) => {
    return (total += product.quantity);
  }, 0);

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      const newOrder = {
        id: uuidv4(),
        products: [...cartItems],
        totalAmount: totalPrice,
        date: new Date().toISOString(),
      };

      dispatch(addOrder(newOrder));
      dispatch(clearCart());
      navigate("/orders");
    }
  };

  return (
    <Grid
      xs={16}
      md={4}
      sm={16}
      style={{
        minWidth: 350,
        padding: "10px",
        paddingRight: "30px",
        borderRadius: "10px",
        marginTop: "50px",
        marginRight: "20px",
      }}
    >
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography
            sx={{ mb: 1.5, display: "flex", justifyContent: "center" }}
            variant="h6"
            color="text.primary"
          >
            Summary
          </Typography>
          <Divider sx={{ my: 1.5 }} orientation="horizontal" flexItem />
          <Typography
            sx={{ mb: 1.5, display: "flex", justifyContent: "center" }}
            color="text.secondary"
          >
            Total products : {totalCount}
          </Typography>
          <Typography
            sx={{ mb: 1.5, display: "flex", justifyContent: "center" }}
            variant="body1"
            color="text.secondary"
          >
            Shipping : $00
          </Typography>
          <Divider sx={{ my: 1.5 }} orientation="horizontal" flexItem />
          <Typography
            sx={{ mb: 1.5, display: "flex", justifyContent: "center" }}
            color="text.secondary"
          >
            Total price : {`$ ${totalPrice.toFixed(2)}`}
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Box margin={1}>
            <Button
              color="secondary"
              variant="contained"
              sx={{ borderRadius: 12.5, paddingX: "40px", paddingY: "10px" }}
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Checkout
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Summary;
