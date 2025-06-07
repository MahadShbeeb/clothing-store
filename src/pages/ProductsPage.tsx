import {
  Backdrop,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Paper,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import Grid from "@mui/material/Grid";
import { useState, useMemo } from "react";

const Products = () => {
  const { data, isLoading } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  // Get unique categories from products
  const categories = useMemo(() => {
    if (!data) return [];
    return ["all", ...new Set(data.map((product) => product.category))];
  }, [data]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!data) return [];

    const filtered = data.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    switch (sortBy) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return filtered;
  }, [data, searchQuery, selectedCategory, sortBy]);

  return (
    <Container maxWidth="xl">
      <Paper
        elevation={3}
        sx={{
          mb: 4,
          mt: 2,
          p: 3,
          backgroundColor: "secondary.main",
          color: "secondary.contrastText",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              label="Search Products"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "transparent",
                  "& fieldset": {
                    borderColor: "secondary.contrastText",
                  },
                  "&:hover fieldset": {
                    borderColor: "secondary.contrastText",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "secondary.contrastText",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "secondary.contrastText",
                },
                "& .MuiInputBase-input": {
                  color: "secondary.contrastText",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "secondary.contrastText" }}>
                Category
              </InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
                sx={{
                  color: "secondary.contrastText",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "secondary.contrastText",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "secondary.contrastText",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "secondary.contrastText",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "secondary.contrastText",
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel sx={{ color: "secondary.contrastText" }}>
                Sort By
              </InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
                sx={{
                  color: "secondary.contrastText",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "secondary.contrastText",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "secondary.contrastText",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "secondary.contrastText",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "secondary.contrastText",
                  },
                }}
              >
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                <MenuItem value="price-desc">Price: High to Low</MenuItem>
                <MenuItem value="name-asc">Title: A to Z</MenuItem>
                <MenuItem value="name-desc">Title: Z to A</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {isLoading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <Grid
        container
        padding={2}
        rowSpacing={3}
        spacing={8}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {filteredProducts.map((product) => (
          <Grid item xs={4} key={product.id}>
            <ProductCard key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
