import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.background",
        // set default outline color
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "primary.main",
        },
      }}
    >
      <Grid
        item
        sx={{
          // align center vertically and horizontally
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // set default outline color
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          // add shadow to the card
          boxShadow: 3,
          // add padding
          p: 4,
          // set background color
          backgroundColor: "background.paper",
          // set border radius
          borderRadius: 2,
          // set max width
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
            // set max width
            maxWidth: 400,
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
