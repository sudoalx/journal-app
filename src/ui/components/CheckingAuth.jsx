import { Grid, CircularProgress, Typography } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
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
        <CircularProgress color="warning"></CircularProgress>
      </Grid>
    </Grid>
  );
};
