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
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import toast from "react-hot-toast";

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

export default function LoginForm({setIsAuth}) {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [isloding, setIsloding] = useState(false);

  const onChange = (e) => {
    setCreds((prevCreds) => ({
      ...prevCreds,
      [e.target.id]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  const loginCall = async () => {
    let data = qs.stringify({
      email: creds.email,
      password: creds.password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:4444/api/users/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
      data: data,
    };

    try {
      const response = await axios.request(config);
      return response; // Return response here
    } catch (error) {
      console.log(error);
      throw error; // Throw error to be caught in handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloding(true);

    try {
      const response = await loginCall(); // Await response from loginCall

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", JSON.stringify(response.data.email));
      localStorage.setItem("name", JSON.stringify(response.data.name));

      toast.success("Login Successful", { position: "top" });
      setIsAuth(true);

      navigate("/scans");
    } catch (err) {
      toast.error("Login Failed", { position: "top" });
    } finally {
      setIsloding(false);
    }
  };

  return (
    <StyledContainer maxWidth={false}>
      <StyledForm>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            onClick={() => {
              navigate("/");
            }}
            sx={{
              cursor: "pointer",
            }}
          >
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
          </Box>
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
              value={creds.email}
              onChange={onChange}
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
              value={creds.password}
              onChange={onChange}
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

          {isloding ? (
            <CircularProgress />
          ) : (
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
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
          )}

          <Typography variant="body2" align="center" sx={{ color: "#4b5563" }}>
            Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
          </Typography>
        </Box>
      </StyledForm>
    </StyledContainer>
  );
}
