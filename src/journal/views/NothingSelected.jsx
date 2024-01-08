import { NoteAdd } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";

export const NothingSelected = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: "86vh",
        backgroundColor: "background.paper",
        borderRadius: "10px",
      }}
      className="animate__animated animate__fadeIn animate__fast"
    >
      <Grid item sx={{ textAlign: "center" }}>
        <Button sx={{ borderRadius: "10px", marginBottom: "1rem" }}>
          <NoteAdd sx={{ fontSize: "4rem", color: "text.secondary" }} />
        </Button>
        <Typography style={{ textAlign: "center" }} variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
