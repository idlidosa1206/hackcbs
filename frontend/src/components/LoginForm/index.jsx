import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: "#f9fafb",
  padding: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledForm = styled(Box)(({ theme }) => ({
  maxWidth: "28rem",
  width: "100%",
  margin: "0 auto",
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#7c17cf",
  textDecoration: "none",
  "&:hover": {
    color: "#6a14b2",
  },
}));

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <StyledContainer maxWidth={false}>
      <StyledForm>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.025em",
              mb: 1,
            }}
          >
            SpecTRE
          </Typography>
          <Typography variant="body1" sx={{ color: "#4b5563", mb: 1 }}>
            WELCOME BACK!
          </Typography>
          <Typography variant="h5" sx={{ color: "#1f2937" }}>
            Sign in to your account
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Box>
            <Typography
              component="label"
              htmlFor="email"
              sx={{
                display: "block",
                mb: 1,
                color: "#374151",
                fontSize: "0.875rem",
              }}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#d1d5db",
                  },
                },
                "& input::placeholder": {
                  color: "#9ca3af",
                },
              }}
            />
          </Box>

          <Box>
            <Typography
              component="label"
              htmlFor="password"
              sx={{
                display: "block",
                mb: 1,
                color: "#374151",
                fontSize: "0.875rem",
              }}
            >
              Password
            </Typography>
            <TextField
              fullWidth
              id="password"
              required
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: "#9ca3af" }}
                    >
                      {showPassword ? (
                        <VisibilityOff sx={{ fontSize: "1.25rem" }} />
                      ) : (
                        <Visibility sx={{ fontSize: "1.25rem" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "#d1d5db",
                  },
                },
              }}
            />
          </Box>

          <Button
            fullWidth
            variant="contained"
            // onClick={navigate("/signup")}
            sx={{
              backgroundColor: "#7c17cf",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#6a14b2",
              },
            }}
          >
            Sign In
          </Button>

          <Typography variant="body2" align="center" sx={{ color: "#4b5563" }}>
            Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
          </Typography>
        </Box>
      </StyledForm>
    </StyledContainer>
  );
}
