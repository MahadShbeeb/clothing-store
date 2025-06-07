import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Divider,
  Button,
} from "@mui/material";
import { Order } from "../store/ordersSlice";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }: { order: Order }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Order #{order.id}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          Date: {new Date(order.date).toLocaleDateString()}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          {order.products.map((product) => (
            <Grid item xs={12} key={product.id}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    component="img"
                    src={product.image}
                    sx={{
                      width: 60,
                      height: 60,
                      objectFit: "contain",
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Quantity: {product.quantity}
                    </Typography>
                  </Box>
                </Box>
                <Typography>
                  ${(product.price * product.quantity).toFixed(2)}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Total</Typography>
          <Typography variant="h6">${order.totalAmount.toFixed(2)}</Typography>
        </Box>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(`/orders/${order.id}`)}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const OrdersPage = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <Box sx={{ padding: "40px" }}>
      <Typography variant="h6" color="gray.700" sx={{ mb: 3 }}>
        Your Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body1">
          You haven't placed any orders yet.
        </Typography>
      ) : (
        <Box>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default OrdersPage;
