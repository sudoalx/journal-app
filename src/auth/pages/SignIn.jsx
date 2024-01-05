import { Login, Google } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { PasswordField } from "../components/PasswordField";
import { useForm } from "../../hooks";
import { useDispatch } from "react-redux";
import { checkingAuth, startGoogleLogin } from "../../store/auth";

export const SignIn = () => {
  //const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuth());
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
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
          sx={{
            marginTop: 2,
          }}
        >
          <Grid item>
            <ButtonGroup variant="text">
              <Button>Forgot Password?</Button>

              <Link component={RouterLink} to="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </ButtonGroup>
          </Grid>
          <Grid item>
            <Button variant="contained" type="submit">
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
        <Button variant="contained" fullWidth onClick={handleGoogleSignIn}>
          <Google sx={{ marginRight: 1 }} />
          Sign In with Google
        </Button>
      </Grid>
    </AuthLayout>
  );
};
