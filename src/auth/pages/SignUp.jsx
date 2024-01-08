import {
  Google,
  Visibility,
  VisibilityOff,
  AppRegistration,
} from "@mui/icons-material";
import {
  Alert,
  Button,
  ButtonGroup,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import { PasswordField } from "../components/PasswordField";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import {
  startCreateUserWithEmailAndPassword,
  startGoogleLogin,
} from "../../store/auth";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [
    (value) => value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
    "Por favor ingrese un correo electrónico válido.",
  ],
  password: [
    (value) => value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    "La contraseña debe tener al menos 8 caracteres, una letra y un número.",
  ],
  displayName: [
    (value) => value.match(/^[a-zA-Z\s]*$/) && value.length > 2,
    "Solo se permiten letras y espacios.",
  ],
};

export const SignUp = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuth = useMemo(() => status === "checking", [status]);

  const {
    formState,
    displayName,
    email,
    password,
    // confirmPassword,
    onInputChange,
    displayNameValid,
    passwordValid,
    emailValid,
    isFormValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setFormSubmitted(true);
      return;
    }
    console.log(formState);
    dispatch(startCreateUserWithEmailAndPassword(formState));
  };
  const handleGoogleSignIn = () => {
    dispatch(startGoogleLogin());
  };

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
          error={!!displayNameValid && formSubmitted}
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
          error={!!emailValid && formSubmitted}
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
          error={!!passwordValid && formSubmitted}
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
          <Grid
            item
            xs={12}
            sx={{ mb: 2, mt: 2 }}
            display={!!errorMessage ? "block" : "none"}
          >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              disabled={isCheckingAuth}
            >
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
        <Button
          variant="contained"
          fullWidth
          disabled={isCheckingAuth}
          onClick={handleGoogleSignIn}
        >
          <Google sx={{ marginRight: 1 }} />
          Sign Up with Google
        </Button>
      </Grid>
    </AuthLayout>
  );
};
