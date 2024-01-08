import {
  Google,
  Visibility,
  VisibilityOff,
  AppRegistration,
} from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import { PasswordField } from "../components/PasswordField";
import { useForm } from "../../hooks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    (value) => value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    "Email inválido.",
  ],
  password: [
    (value) => value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    "La contraseña debe tener al menos 8 caracteres, una letra y un número.",
  ],
  displayName: [
    (value) => value.match(/^[a-zA-Z\s]*$/) && value.length > 2,
    "Nombre inválido: solo se permiten letras y espacios.",
  ],
};

export const SignUp = () => {
  const {
    formState,
    displayName,
    email,
    password,
    confirmPassword,
    onInputChange,
    displayNameValid,
    passwordValid,
    emailValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending:", formState);
  };

  return (
    <AuthLayout title="Sign Up">
      <h1>FormValid {isFormValid ? "true" : "false"}</h1>
      <form onSubmit={handleSubmit}>
        {/* name field */}
        <TextField
          label="Name"
          placeholder="Enter your name"
          autoComplete="name"
          fullWidth
          variant="outlined"
          name="displayName"
          value={displayName}
          onChange={onInputChange}
          error={!!displayNameValid}
          helperText={displayNameValid}
          required
          sx={{
            marginTop: 2,
          }}
        />
        {/* email field */}
        <TextField
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          type="email"
          fullWidth
          variant="outlined"
          name="email"
          value={email}
          onChange={onInputChange}
          error={!!emailValid}
          helperText={emailValid}
          required
          sx={{
            marginTop: 2,
          }}
        />
        {/* password field */}
        <TextField
          label="Password"
          placeholder="Enter your password"
          autoComplete="new-password"
          type="password"
          fullWidth
          variant="outlined"
          name="password"
          value={password}
          onChange={onInputChange}
          error={!!passwordValid}
          helperText={passwordValid}
          required
          sx={{
            marginTop: 2,
          }}
        />
        {/* confirm password field */}
        {/* <TextField
          label="Confirm Password"
          placeholder="Confirm your password"
          autoComplete="new-password"
          type="password"
          fullWidth
          variant="outlined"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onInputChange}
          sx={{
            marginTop: 2,
          }}
        /> */}
        {/* other links */}
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          justifyContent="end"
          alignItems="center"
          sx={{
            marginTop: 2,
          }}
        >
          <Grid item marginRight={1}>
            <ButtonGroup variant="text">
              <Link component={RouterLink} to="/auth/signin">
                <Button>Aleady have an account?</Button>
              </Link>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit" onClick={handleSubmit}>
              <AppRegistration sx={{ marginRight: 1 }} />
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* Divider */}
      <Grid
        item
        sx={{
          marginTop: 2,
          backgroundColor: "primary.main",
        }}
      >
        <hr
          style={{
            width: "100%",
            height: "1px",
            border: "none",
          }}
        />
      </Grid>
      {/* Login with Google button */}
      <Grid
        item
        sx={{
          marginTop: 2,
        }}
      >
        <Button variant="contained" fullWidth>
          <Google sx={{ marginRight: 1 }} />
          Sign Up with Google
        </Button>
      </Grid>
    </AuthLayout>
  );
};
