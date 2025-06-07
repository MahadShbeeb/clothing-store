import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const orders = useSelector((state: RootState) => state.orders.orders);
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return (
      <Box sx={{ padding: "40px", textAlign: "center" }}>
        <Typography variant="h6" color="error">
          Order not found
        </Typography>
        <Button
          color="secondary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/orders")}
          sx={{ mt: 2 }}
        >
          Back to Orders
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "40px" }}>
      <Button
        color="secondary"
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/orders")}
        sx={{ mb: 3 }}
      >
        Back to Orders
      </Button>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Order Details
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Order #{order.id}
          </Typography>
          <Typography color="text.secondary" gutterBottom>
            Date: {new Date(order.date).toLocaleDateString()}
          </Typography>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h6" gutterBottom>
            Products
          </Typography>
          <Grid container spacing={3}>
            {order.products.map((product) => (
              <Grid item xs={12} key={product.id}>
                <Card variant="outlined">
                  <CardContent>
                    <Box sx={{ display: "flex", gap: 3 }}>
                      <Box
                        component="img"
                        src={product.image}
                        sx={{
                          width: 100,
                          height: 100,
                          objectFit: "contain",
                        }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6">{product.title}</Typography>
                        <Typography color="text.secondary" gutterBottom>
                          Category: {product.category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Quantity: {product.quantity}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Price per item: ${product.price}
                        </Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography variant="h6">
                          ${(product.price * product.quantity).toFixed(2)}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 3 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Total Amount</Typography>
            <Typography variant="h5">
              ${order.totalAmount.toFixed(2)}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderDetailsPage;
