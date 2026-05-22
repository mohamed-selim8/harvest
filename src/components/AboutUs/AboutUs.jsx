import React from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  LocalShipping as LocalShippingIcon,
  Favorite as FavoriteIcon,
  EmojiEvents as EmojiEventsIcon,
  Info as InfoIcon,
  Restaurant as RestaurantIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
// Styled Components
const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0),
  },
}));

const SectionBadge = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  padding: theme.spacing(0.75, 2.5),
  background: "#28a745",
  color: "white",
  borderRadius: "50px",
  fontSize: "0.875rem",
  fontWeight: 600,
  marginBottom: theme.spacing(2.5),
  gap: theme.spacing(1),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 800,
  color: "#2c3e2f",
  marginBottom: theme.spacing(2.5),
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -10,
    right: 0,
    width: 80,
    height: 4,
    background: "#28a745",
    borderRadius: "2px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(4),
  marginBottom: theme.spacing(2.5),
  padding: theme.spacing(1.25),
  borderRadius: theme.spacing(1.5),
  transition: "all 0.3s ease",
  "&:hover": {
    background: "white",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
    transform: "translateX(-5px)",
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  background: "linear-gradient(135deg, #28a745, #20c997)",
  borderRadius: theme.spacing(1.5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  "& svg": {
    fontSize: 24,
  },
}));

const StatsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  marginTop: theme.spacing(5),
  flexWrap: "wrap",
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
}));

const StatItem = styled(Box)({
  textAlign: "center",
  flex: 1,
  minWidth: 100,
});

const StatNumber = styled(Typography)({
  fontSize: "2rem",
  fontWeight: 800,
  color: "#28a745",
  display: "block",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

const StatLabel = styled(Typography)({
  fontSize: "0.9rem",
  color: "#666",
  fontWeight: 500,
});

const CustomButton = styled(Button)(({ theme }) => ({
  background: "#28a757",
  color: "white",
  padding: theme.spacing(1.5, 4.5),
  borderRadius: "50px",
  fontWeight: 600,
  marginTop: theme.spacing(3),
  transition: "all 0.3s ease",
  "&:hover": {
    background: "#218838",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 20px rgba(40,167,69,0.3)",
  },
}));

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: <CheckCircleIcon />,
      title: "High Quality",
      description: "Fresh & certified products",
    },
    {
      icon: <LocalShippingIcon />,
      title: "Fast Delivery",
      description: "Safe & quick delivery service",
    },
    {
      icon: <FavoriteIcon />,
      title: "Customer Service",
      description: "24/7 support available",
    },
    {
      icon: <EmojiEventsIcon />,
      title: "Quality Certificates",
      description: "Internationally certified standards",
    },
  ];

  const stats = [
    { number: "+10", label: "Years of Experience" },
    { number: "+500", label: "Variety Products" },
    { number: "+50K", label: "Happy Customers" },
  ];

  return (
    <AboutSection component="section">
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
          {/* Image Section */}

          {/* Content Section */}
          <Grid item xs={12} md={6}>
            <SectionBadge>
              <RestaurantIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                About Our Company
              </Typography>
            </SectionBadge>

            <SectionTitle variant="h2">
              Providing the Finest Food Products
            </SectionTitle>

            <Typography
              variant="body1"
              sx={{ color: "#555", lineHeight: 1.8, mb: 2.5 }}
            >
              We are a leading company in the field of food products and
              services, committed to the highest standards of quality and
              hygiene. We strive to provide the best natural and fresh
              ingredients to our valued customers, ensuring exceptional quality
              and taste.
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#555", lineHeight: 1.8, mb: 3 }}
            >
              Since our establishment, we have aimed to be the first choice in
              the local market by offering innovative products that meet
              customer needs and exceed their expectations. We believe that
              healthy food is the foundation of a happy life.
            </Typography>

            {/* Features Grid */}
            <Grid container spacing={1}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <FeatureItem>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, color: "#2c3e2f", mb: 0.5 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#666" }}>
                        {feature.description}
                      </Typography>
                    </Box>
                  </FeatureItem>
                </Grid>
              ))}
            </Grid>

            {/* Statistics */}
            <StatsContainer>
              {stats.map((stat, index) => (
                <StatItem key={index}>
                  <StatNumber variant="h3">{stat.number}</StatNumber>
                  <StatLabel variant="body2">{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsContainer>

            {/* CTA Button */}
            <CustomButton
              variant="contained"
              disableElevation
              startIcon={<InfoIcon />}
            >
              Learn More About Us
            </CustomButton>
            <CustomButton
              className=" mx-md-2"
              variant="outlined"
              disableElevation
              startIcon={<ArrowLeftIcon />}
            >
              <Link to={"/"} className="text-white text-decoration-none">
                Back to home
              </Link>
            </CustomButton>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default About;
