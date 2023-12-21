import { Login, Google, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, ButtonGroup, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <AuthLayout title="Sign In">
      <form>
        {/* email field */}
        <TextField
          label="Email"
          placeholder="Enter your email"
          autoComplete="email"
          type="email"
          fullWidth
          variant="outlined"
        />
        {/* password field */}
        <TextField
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          sx={{
            marginTop: 2,
          }}
          InputProps={{
            // show/hide password icon
            endAdornment: !showPassword ? (
              <VisibilityOff
                onClick={handleClickShowPassword}
                sx={{
                  cursor: "pointer",
                }}
              />
            ) : (
              <Visibility
                onClick={handleClickShowPassword}
                sx={{
                  cursor: "pointer",
                }}
              />
            ),
          }}
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
            <Button variant="contained">
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
        <Button variant="contained" fullWidth>
          <Google sx={{ marginRight: 1 }} />
          Sign In with Google
        </Button>
      </Grid>
    </AuthLayout>
  );
};
