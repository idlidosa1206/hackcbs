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
// import CloseIcon from '@mui/icons-material/Close';

// Create styled components for custom styling
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
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
    <StyledCard>
      <CardHeader
        sx={{ pb: 0 }}
        // avatar={
        //   <Box
        //     component="img"
        //     src="/placeholder.svg"
        //     alt="Pullweb logo"
        //     sx={{
        //       width: 24,
        //       height: 24,
        //       borderRadius: '4px'
        //     }}
        //   />
        // }
        // action={
        //   <IconButton aria-label="close">
        //     {/* <CloseIcon /> */}
        //   </IconButton>
        // }
        title="SpecTRE"
        onClick={navigate("/")}
      />
      <CardContent>
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "text.secondary", fontWeight: 500, mb: 1 }}
        >
          WELCOME!
        </Typography>

        <Typography variant="h6" component="h2" sx={{ fontWeight: 500, mb: 1 }}>
          Don't Let Vulnerabilities Take Flight: Use SpecTRE.
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          {/* <Box
            component="span"
            sx={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              backgroundColor: '#ea4c89',
              mr: 1,
              display: 'inline-block',
            }}
          /> */}
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
