import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export const PasswordField = ({
  label = "Password",
  placeholder = "Enter your password",
  password,
  handlePassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      autoComplete="new-password"
      fullWidth
      variant="outlined"
      value={password}
      onChange={handlePassword}
      sx={{
        marginTop: 2,
      }}
      InputProps={{
        // show/hide password icon
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOff color="primary" />
              ) : (
                <Visibility color="primary" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
