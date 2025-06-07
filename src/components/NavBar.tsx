import {
  Box,
  IconButton,
  Toolbar,
  Typography,
  Badge,
  useTheme,
} from "@mui/material";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReceiptIcon from "@mui/icons-material/Receipt";

const NavBar = () => {
  const theme = useTheme();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "",
      icon: <HomeIcon />,
    },
    {
      name: "Products",
      link: "products",
      icon: <ShoppingBagIcon />,
    },
    {
      name: "Cart",
      link: "/cart",
      icon: (
        <Box sx={{ position: "relative" }}>
          <Badge
            badgeContent={cartItems.length}
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                top: ".5rem",
                right: 0,
                padding: "0 2px",
                minWidth: "16px",
                height: "16px",
                fontSize: "0.75rem",
              },
            }}
          >
            <ShoppingCartIcon />
          </Badge>
        </Box>
      ),
    },
    {
      name: "Favorites",
      link: "/favorites",
      icon: (
        <Box sx={{ position: "relative" }}>
          <Badge
            badgeContent={favorites.length}
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                top: ".5rem",
                right: 0,
                padding: "0 2px",
                minWidth: "16px",
                height: "16px",
                fontSize: "0.75rem",
              },
            }}
          >
            <FavoriteIcon />
          </Badge>
        </Box>
      ),
    },
    {
      name: "Orders",
      link: "/orders",
      icon: (
        <Box sx={{ position: "relative" }}>
          <Badge
            badgeContent={orders.length}
            color="secondary"
            sx={{
              "& .MuiBadge-badge": {
                top: ".5rem",
                right: 0,
                padding: "0 2px",
                minWidth: "16px",
                height: "16px",
                fontSize: "0.75rem",
              },
            }}
          >
            <ReceiptIcon />
          </Badge>
        </Box>
      ),
    },
    {
      name: "About",
      link: "/about",
      icon: <InfoIcon />,
    },
    {
      name: "FAQ",
      link: "/faq",
      icon: <HelpIcon />,
    },
  ];

  return (
    <>
      <NavDrawer isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
      <Toolbar
        sx={{
          boxShadow: 2,
          minHeight: "70px",
          padding: "0 24px",
          background: theme.palette.background.paper,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="h4"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 4,
            fontWeight: 700,
            color: theme.palette.secondary.main,
            letterSpacing: ".1rem",
            textDecoration: "none",
          }}
        >
          STORE
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Box
              key={item.name}
              marginX={1.5}
              display={{ md: "block", xs: "none" }}
            >
              <Typography
                color="text.primary"
                noWrap
                component={Link}
                to={item.link}
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  "&:hover": {
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                {item.icon} {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
        <ColorModeSwitch />
        <Box display={{ xs: "block", md: "none" }}>
          <IconButton
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            sx={{
              color: theme.palette.secondary.main,
              "&:hover": {
                color: theme.palette.primary.dark,
              },
            }}
          >
            <DragHandleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </>
  );
};

export default NavBar;
