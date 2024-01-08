import { Login, Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  ButtonGroup,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { PasswordField } from "../components/PasswordField";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import {
  checkingAuth,
  startGoogleLogin,
  startLoginWithEmailAndPassword,
} from "../../store/auth/thunks";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
};

export const SignIn = () => {
  //const [password, setPassword] = useState("");

  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm(formData);

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(startLoginWithEmailAndPassword({ email, password }));
  };

  const handleGoogleSignIn = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <AuthLayout title="Sign In">
      <form onSubmit={handleSubmit}>
        {/* email field */}
        <TextField
          sx={{
            marginBottom: 2,
          }}
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          type="email"
          fullWidth
          variant="outlined"
          name="email"
          onChange={onInputChange}
        />
        {/* password field */}
        <TextField
          sx={{
            marginBottom: 2,
          }}
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          type="password"
          fullWidth
          variant="outlined"
          name="password"
          onChange={onInputChange}
        />
        {/* Forgot Password? and Sign Up buttons */}
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          sx={{}}
        >
          <Grid item display={errorMessage ? "block" : "none"}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid item>
            <ButtonGroup variant="text">
              <Button>Forgot Password?</Button>

              <Link component={RouterLink} to="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              type="submit"
              disabled={isAuthenticating}
            >
              <Login sx={{ marginRight: 1 }} />
              Sign In
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
          onClick={handleGoogleSignIn}
          disabled={isAuthenticating}
        >
          <Google sx={{ marginRight: 1 }} />
          Sign In with Google
        </Button>
      </Grid>
    </AuthLayout>
  );
};
