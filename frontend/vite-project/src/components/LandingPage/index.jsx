import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Box,
  Tabs,
  Tab,
  styled,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Lottie from 'lottie-react'
import animation from './animation.json'
// import CloseIcon from '@mui/icons-material/Close';

// Create styled components for custom styling
const StyledCard = styled(Card)(({ theme }) => ({
  // maxWidth: 600,
  minWidth: 500,
  minHeight: "100vh",
  borderRadius: theme.spacing(2),
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 36,
  "& .MuiTab-root": {
    minHeight: 36,
    textTransform: "none",
    fontSize: "0.875rem",
  },
}));

const LandingPage = ({ isAuth }) => {
  //   const [value, setValue] = React.useState(0);

  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };

  useEffect(() => {
    if (isAuth) {
      navigate("/scans");
    }
  }, [isAuth]);

  const navigate = useNavigate();

  return (
    <StyledCard maxWidth={false}>
      <CardHeader
        sx={{ pb: 0 }}
        avatar={
          <Box
            component="img"
            src="/logo.png"
            alt="SpecTRE logo"
            sx={{
              width: 40,
              height: 65,
              borderRadius: '4px',
              font: '2rem'
            }}
          />
        }
        title="SpecTRE"
        titleTypographyProps={{ variant: 'h4' }}
        onClick={navigate("/")}
      />
      <CardContent>
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary", fontWeight: 500, mb: 5 }}
        >
          WELCOME!
        </Typography>
        <Box sx={{ width: "100%", mx: "auto", mb: 5 }}>
          <Lottie animationData={animation} />
        </Box>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 500, mb: 5 }}>
          Don't Let Vulnerabilities Take Flight: Use SpecTRE.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
          <Typography
            variant="body2"
            component="a"
            sx={{
              color: "text.secondary",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: "#7c17cf" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Get Started
            </Button>
          </Typography>
        </Box>

        {/* <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="site information tabs"
        >
          <Tab label="Font" />
          <Tab label="Color" />
          <Tab label="Assets" />
        </StyledTabs> */}
      </CardContent>
    </StyledCard>
  );
};

export default LandingPage;