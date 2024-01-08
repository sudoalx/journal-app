import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__fast"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.background",
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          boxShadow: 3,
          p: 4,
          backgroundColor: "background.paper",
          borderRadius: 2,
          maxWidth: 500,
          margin: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 1, color: "primary.main" }}>
          {title}
        </Typography>
        <Grid
          item
          sx={{
            maxWidth: 400,
            margin: 2,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
