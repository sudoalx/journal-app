import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.background",
        padding: 4,
        // set default outline color
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
      }}
    >
      <Grid
        item
        sx={{
          color: "primary.main",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        <Typography variant="h3" sx={{ mb: 1 }}>
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
