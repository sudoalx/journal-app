import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";

export const NoteView = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ mb: 2 }}
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

      <Grid container>
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
          rows={4}
          sx={{
            border: "none",
            backgroundColor: "background.paper",
            borderRadius: 2,
          }}
        />
      </Grid>
    </Grid>
  );
};
