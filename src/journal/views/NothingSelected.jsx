import { NoteAdd } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";

export const NothingSelected = () => {
  const dispatch = useDispatch();
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

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
        <Button
          onClick={onClickNewNote}
          sx={{ borderRadius: "10px", marginBottom: "1rem" }}
        >
          <NoteAdd sx={{ fontSize: "4rem", color: "text.secondary" }} />
        </Button>
        <Typography style={{ textAlign: "center" }} variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
};
