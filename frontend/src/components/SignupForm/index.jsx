import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "grey.50",
        padding: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          color="textPrimary"
        >
          SpecTRE
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          GET STARTED
        </Typography>
        <Typography variant="h6" color="textPrimary" mt={1}>
          Create your account
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            id="name"
            label="Name"
            placeholder="John Doe"
            required
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            placeholder="m@example.com"
            required
            variant="outlined"
            type="email"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            required
            variant="outlined"
            type={showPassword ? "text" : "password"}
            margin="normal"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    color="default"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            // onClick={navigate("/login")}
            sx={{
              mt: 2,
              backgroundColor: "#7c17cf",
              "&:hover": { backgroundColor: "#6a14b2" },
            }}
          >
            Sign Up
          </Button>
          <Typography variant="body2" color="textSecondary" mt={2}>
            Already have an account?
            <Link to="/login">
              <Typography
                component="span"
                color="primary"
                sx={{ "&:hover": { color: "#6a14b2" } }}
              >
                Sign in
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
