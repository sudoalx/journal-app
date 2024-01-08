import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 2 }}
      className="animate__animated animate__fadeIn animate__fast"
    >
      <Grid item>
        <Typography variant={"h5"}>New note</Typography>
      </Grid>
      <Grid item>
        <Button>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container sx={{ mb: 2, mt: 2 }}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Title"
          sx={{
            border: "none",
            mt: 2,
            mb: 2,
            backgroundColor: "background.paper",
            borderRadius: 2,
          }}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Description"
          multiline
          rows={5}
          sx={{
            border: "none",
            backgroundColor: "background.paper",
            borderRadius: 2,
          }}
        />
      </Grid>
      <Grid container sx={{ mb: 2, justifyContent: "center" }}>
        <ImageGallery />
      </Grid>
    </Grid>
  );
};
