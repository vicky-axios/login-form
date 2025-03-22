import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

const Login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    navigate("/Blog", { state: { userName: data.name || "User" } });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={7} sx={{ padding: 4, width: 400, borderRadius: 3 }}>
        {/* Header Title Section */}
        <Typography variant="h4" align="center" gutterBottom>
          {isLoginMode ? "Login" : "Sign Up"}
        </Typography>

        {/* Toggle Section */}
        <ToggleButtonGroup
          fullWidth
          value={isLoginMode ? "login" : "signup"}
          exclusive
          onChange={(_, newValue) => {
            if (newValue) setIsLoginMode(newValue === "login");
          }}
          sx={{ marginBottom: 3 }}
        >
          <ToggleButton value="login">Login</ToggleButton>
          <ToggleButton value="signup">Sign Up</ToggleButton>
        </ToggleButtonGroup>

        {/* Form Section */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field (Only for Signup) */}
          {!isLoginMode && (
            <TextField
              fullWidth
              label="Name"
              {...register("name", { required: !isLoginMode })}
              error={!!errors.name}
              helperText={errors.name?.message}
              margin="normal"
            />
          )}

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/, message: "Invalid email format" },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            margin="normal"
          />

          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            margin="normal"
          />

          {/* Confirm Password (Only for Signup) */}
          {!isLoginMode && (
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              margin="normal"
            />
          )}

          {/* Forgot Password (Only for Login) */}
          {isLoginMode && (
            <Typography align="right" sx={{ cursor: "pointer", color: "primary.main", marginBottom: 2 }}>
              Forgot Password?
            </Typography>
          )}

          {/* Submit Button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, py: 1.5 }}>
            {isLoginMode ? "Login" : "Sign Up"}
          </Button>

          {/* Toggle Between Login and Signup */}
          <Typography align="center" sx={{ mt: 2 }}>
            {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLoginMode(!isLoginMode)}
              style={{ cursor: "pointer", color: "#1976d2", fontWeight: "bold" }}
            >
              {isLoginMode ? "Sign up now" : "Login"}
            </span>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;