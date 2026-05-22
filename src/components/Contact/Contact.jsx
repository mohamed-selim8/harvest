import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
  Facebook as FacebookIcon,
  LinkedIn as LinkedInIcon,
  Room as RoomIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Styled Components
const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(5, 0),
  },
}));

const ContactCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  textAlign: "center",
  transition: "all 0.3s ease",
  height: "100%",
  background: "white",
  boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 35px rgba(40,167,69,0.1)",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  background: "linear-gradient(135deg, #28a745, #20c997)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px",
  color: "white",
  "& svg": {
    fontSize: 32,
  },
}));

const FormCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

const SocialIcon = styled(Box)(({ theme }) => ({
  width: 45,
  height: 45,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f8f9fa",
  color: "#28a745",
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    background: "#28a745",
    color: "white",
    transform: "translateY(-3px)",
  },
  "& svg": {
    fontSize: 22,
  },
}));

const ContactInfo = ({ icon, title, info, details }) => (
  <ContactCard elevation={0}>
    <IconWrapper>{icon}</IconWrapper>
    <Typography variant="h6" sx={{ fontWeight: 700, color: "#2c3e2f", mb: 1 }}>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ color: "#555", mb: 0.5 }}>
      {info}
    </Typography>
    {details && (
      <Typography variant="body2" sx={{ color: "#888" }}>
        {details}
      </Typography>
    )}
  </ContactCard>
);

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSnackbar({
      open: true,
      message: "Message sent successfully! We will contact you soon.",
      severity: "success",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LocationIcon />,
      title: "Our Location",
      info: "123 Business District",
      details: "Zagazig, EG",
    },
    {
      icon: <PhoneIcon />,
      title: "Phone Number",
      info: "+201140321164",
      details: "Mon - Fri, 9AM - 6PM",
    },
    {
      icon: <EmailIcon />,
      title: "Email Address",
      info: "nam98333@gmail.com",
      details: "support@foodcompany.com",
    },
    {
      icon: <TimeIcon />,
      title: "Working Hours",
      info: "Monday - Friday",
      details: "8:00 AM - 8:00 PM",
    },
  ];

  //   social media
  const socialLinks = [
    {
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/Mohamed Selim",
      color: "#1877f2",
    },
    {
      icon: <WhatsAppIcon />,
      url: "https://wa.me/01140321164",
      color: "#e4405f",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/mohamedselim-82039336b",
      color: "#0077b5",
    },
  ];

  return (
    <ContactSection component="section">
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#28a745",
              fontWeight: 600,
              mb: 2,
              display: "inline-block",
              px: 2,
              py: 0.5,
              borderRadius: "50px",
              background: "rgba(40,167,69,0.1)",
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#2c3e2f",
              mb: 2,
              fontSize: isMobile ? "1.8rem" : "2.5rem",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.1rem",
            }}
          >
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </Typography>
        </Box>

        {/* Contact Information Cards - Bootstrap Grid */}
        <div className="row g-4 mb-5">
          {contactInfo.map((info, index) => (
            <div key={index} className="col-md-6 col-lg-3 mb-3 ">
              <ContactInfo {...info} />
            </div>
          ))}
        </div>

        {/* Contact Form and Map Section */}
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <FormCard elevation={0}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#2c3e2f",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid #28a745",
                  display: "inline-block",
                }}
              >
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            borderColor: "#28a745",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            borderColor: "#28a745",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            borderColor: "#28a745",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            borderColor: "#28a745",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          "&:hover fieldset": {
                            borderColor: "#28a745",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        background: "linear-gradient(135deg, #28a745, #20c997)",
                        padding: "12px",
                        borderRadius: "12px",
                        fontSize: "1rem",
                        fontWeight: 600,
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #218838, #1aa179)",
                          transform: "translateY(-2px)",
                          boxShadow: "0 5px 15px rgba(40,167,69,0.3)",
                        },
                      }}
                      endIcon={<SendIcon />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>

              {/* Social Links */}
              <Box sx={{ mt: 4, pt: 3, borderTop: "1px solid #e0e0e0" }}>
                <Typography
                  variant="body2"
                  sx={{ color: "#666", mb: 2, textAlign: "center" }}
                >
                  Follow us on social media
                </Typography>
                <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
                  {socialLinks.map((social, index) => (
                    <SocialIcon
                      key={index}
                      component="a"
                      href={social.url}
                      target="_blank"
                    >
                      {social.icon}
                    </SocialIcon>
                  ))}
                </Box>
              </Box>
            </FormCard>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} md={5}>
            <FormCard elevation={0} sx={{ height: "100%", p: 2 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#2c3e2f",
                  mb: 3,
                  pb: 2,
                  borderBottom: "2px solid #28a745",
                  display: "inline-block",
                }}
              >
                Find Us Here
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  borderRadius: "12px",
                  mb: 3,
                }}
              >
                <iframe
                  title="Company Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54959.12852279905!2d31.4695554678664!3d30.579082966769228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7f044ed84e6db%3A0xc970f35c23cfc0a3!2sZagazig%2C%20El-Hariry%2C%20Zagazig%201%2C%20Al-Sharqia%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1774099919311!5m2!1sen!2sus"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: 0,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  p: 2,
                  bgcolor: "#f8f9fa",
                  borderRadius: "12px",
                }}
              >
                <RoomIcon sx={{ color: "#28a745", fontSize: 28 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: "#888" }}>
                    Visit our headquarters
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, color: "#2c3e2f" }}
                  >
                    Zagazig Business Bay, EG
                  </Typography>
                  <Typography
                    className="mt-2"
                    variant="body1"
                    sx={{ fontWeight: 600, color: "#2c3e2f" }}
                  >
                    <Button variant="contained" size="small">
                      <Link
                        className="text-white text-decoration-none"
                        to={"/"}
                      >
                        Back to home
                      </Link>
                    </Button>
                  </Typography>
                </Box>
              </Box>
            </FormCard>
          </Grid>
        </Grid>

        {/* Snackbar for notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: "100%", borderRadius: "12px" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ContactSection>
  );
};

export default Contact;
