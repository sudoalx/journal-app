import { TurnedInNot } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

export const Sidebar = ({ drawerWidth }) => {
  const { displayName } = useSelector((state) => state.auth);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar>
          <Button variant="text" sx={{ width: "100%" }}>
            <Typography variant="h6" noWrap component="div">
              {displayName}'s Journal
            </Typography>
          </Button>
        </Toolbar>
        <Divider />
        <List disablePadding>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((month) => (
            <ListItem key={month} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot color="primary" />
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={month} />
                  <ListItemText
                    secondary={
                      "Eiusmod ipsum do velit non labore amet cillum ipsum ullamco amet fugiat ea."
                    }
                  />
                </Grid>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
