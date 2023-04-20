import * as React from "react";
// import PropTypes from 'prop-types';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import Container from '@mui/material/Container';
import "../App.css";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";



// const drawerWidth = 320;
const style = getComputedStyle(document.body);
const maxWidth = style.getPropertyValue("--max-width");

const navItems = ["Home", "About", "Contact", "LOGIN"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              
              
              <Typography variant="h6" sx={{ my: 2 }}>
        My <br></br>Company
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="static" sx={{ maxWidth: "1366px" }}>
        <Toolbar sx={{ 
          justifyContent: "flex-end", 
          bgcolor:'rgba(211, 211, 211, 1)',
        color: "rgb(34, 34, 34)",
         fontWeight:"bold",

        }}>
        
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { 
              lg: 'block'},
              alignItems: "flex-end" ,            }}
          >
            <TrackChangesIcon sx={{ marginRight: "8px" }} />
            My Company
          </Typography>
          <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" },
        
         }}
        >
          <MenuIcon />
        </IconButton>
          {/* menu disappears on small screens */}
          <Box sx={{ display: { xs: "none", sm: "block"  }, marginLeft: "auto" }}>
            {navItems.map((item) => (
              <Button
                key={item}
               
                sx={{
                  color: "rgb(34, 34, 34)",
                  "&:last-of-type": {
                    border: "1px solid rgb(34, 34, 34)",
                   
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right" // set the anchor to "right"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: {
                lg: maxWidth,
              },
              left: "auto", // set the left style to "auto"
              right: 0, // set the right style to 0
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}
export default DrawerAppBar;
