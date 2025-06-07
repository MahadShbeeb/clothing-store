import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const AboutPage = () => {
  const features = [
    {
      icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
      title: "Quality Products",
      description:
        "We carefully curate our collection to ensure the highest quality clothing for our customers.",
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: "Fast Shipping",
      description:
        "Enjoy quick and reliable delivery to your doorstep with our efficient shipping service.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Secure Shopping",
      description:
        "Shop with confidence knowing your transactions are protected by advanced security measures.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: "24/7 Support",
      description:
        "Our dedicated customer service team is always ready to assist you with any questions.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Our Store
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: 800, mx: "auto" }}
        >
          We are passionate about bringing you the latest fashion trends while
          maintaining the highest standards of quality and service.
        </Typography>
      </Box>

      <Grid container spacing={4} mb={8}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 2,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <Box color="secondary.main" mb={2}>
                {feature.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="text.secondary">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ maxWidth: 800, mx: "auto" }}>
        <Typography variant="h4" gutterBottom>
          Our Story
        </Typography>
        <Typography paragraph>
          Founded in 2024, our clothing store began with a simple mission: to
          provide high-quality, stylish clothing at affordable prices. We
          believe that everyone deserves to look and feel their best, and we're
          committed to making that possible.
        </Typography>
        <Typography paragraph>
          Our journey started with a small team of fashion enthusiasts who
          shared a common vision. Today, we've grown into a trusted destination
          for fashion-forward individuals who value quality, style, and
          excellent customer service.
        </Typography>
        <Typography paragraph>
          We carefully select each item in our collection, working with trusted
          manufacturers and designers to ensure that every piece meets our high
          standards. Our commitment to quality extends beyond our products to
          every aspect of your shopping experience.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutPage;
