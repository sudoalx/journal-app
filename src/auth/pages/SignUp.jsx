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
  email: [(value) => value.includes("@"), "El correo debe de tener una @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener más de 6 letras.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
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
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  console.log(displayNameValid);

  return (
    <AuthLayout title="Sign Up">
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
          error={false}
          helperText="Name is required."
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
