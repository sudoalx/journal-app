import { Box, Divider, Drawer, Toolbar, Typography } from "@mui/material";

export const Sidebar = ({ drawerWidth }) => {
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
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Alex
          </Typography>
        </Toolbar>
        <Divider />
      </Drawer>
    </Box>
  );
};
