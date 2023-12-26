import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelected } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelected />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "text.primary",
          transition: "all 0.3s ease",
          backgroundColor: "primary.main",
          ":hover": {
            backgroundColor: "primary.dark",
          },
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          boxShadow: 2,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
