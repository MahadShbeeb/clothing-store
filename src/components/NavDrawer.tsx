import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
}

const NavDrawer = ({ isOpen, setIsOpen, navItems }: Props) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          padding: "50px",
          width: "25%",
          boxSizing: "border-box",
          background: theme.palette.background.paper,
          borderRight: `1px solid ${theme.palette.divider}`,
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={() => setIsOpen(false)}
    >
      <Box display="flex" justifyContent="end">
        <IconButton
          onClick={() => setIsOpen(false)}
          sx={{
            color: theme.palette.secondary.main,
            "&:hover": {
              color: theme.palette.primary.dark,
            },
          }}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} sx={{ padding: "20px" }}>
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
                fontSize: "1.1rem",
                fontWeight: 500,
                transition: "color 0.2s",
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              {item.icon} {item.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
