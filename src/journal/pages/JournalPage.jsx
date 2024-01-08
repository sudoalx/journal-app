import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelected } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal";
import { useSelector } from "react-redux";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {active ? (
        <NoteView />
      ) : (
        <>
          <NothingSelected />

          <IconButton
            onClick={onClickNewNote}
            disabled={isSaving}
            size="large"
            sx={{
              color: "text.primary",
              transition: "all 0.3s ease",
              backgroundColor: "primary.main",
              "&:disabled": {
                backgroundColor: "primary.light",
              },
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
        </>
      )}
    </JournalLayout>
  );
};
