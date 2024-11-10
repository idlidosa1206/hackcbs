import  { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Box,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import qs from "qs"; 
import axios from "axios"; 
import toast from "react-hot-toast"; 

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#7c17cf",
  textDecoration: "none",
  "&:hover": {
    color: "#6a14b2",
  },
}));

export default function SignupForm({ setIsAuth }) {
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState({
    name: "",
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

  const SignupCall = async () => {
    let data = {
      name: creds.name,
      email: creds.email,
      password: creds.password,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:4444/api/users/register",
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
      const response = await SignupCall();
      console.log(response)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", JSON.stringify(response.data.email));
      localStorage.setItem("name", JSON.stringify(response.data.name));

      setIsAuth(true);

      toast.success("Signup Successful", { position: "top" });

      navigate("/scans");
    } catch (err) {
      toast.error("Signup Failed", { position: "top" });
    } finally {
      setIsloding(false);
    }
  };

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
        <Box
          onClick={() => {
            navigate("/");
          }}
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            color="textPrimary"
          >
            SpecTRE
          </Typography>
        </Box>
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
            value={creds.name}
            onChange={onChange}
            placeholder="John Doe"
            required
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            value={creds.email}
            onChange={onChange}
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
            value={creds.password}
            onChange={onChange}
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
              Sign Up {/* Corrected button text */}
            </Button>
          )}
          <Typography variant="body2" color="textSecondary" mt={2}>
            Already have an account?{" "}
            <StyledLink to="/login">Sign in</StyledLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
