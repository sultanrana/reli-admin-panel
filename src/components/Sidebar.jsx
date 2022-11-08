import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
  ListItemButton,
  Button,
} from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import links from "../mock/sidebarLinks";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { setIsDrawerOpen } from "../features/login/loginSlice";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const Sidebar = () => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const {isDrawerOpen} = useSelector((store) => store.login)
  const dispatch  = useDispatch()
  const matches = useMediaQuery('(max-width:600px)');
  const handleDrawer = () => {
    if (isDrawerOpen) {
      dispatch(setIsDrawerOpen(false));
    } else {
      dispatch(setIsDrawerOpen(true));
    }
  };
return (
      <Drawer
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          top: "60px",
          backgroundColor: "#FAFAFA",
          boxShadow: "none",
          height: "calc(100vh - 60px)",
          width: drawerWidth,
          py: 3,
          borderRight: 0
        }
      }}
      open={isDrawerOpen}
      hideBackdrop={false}
    >
      <Box component="div" role="presentation">
      <List>
        {links.map((link, index) => (
          <Link to={link.route} style={{ color: window.location.pathname == link.route ? "#D0347E" : "#000000" }} >
              <ListItem disablePadding sx={{ display: "block" }} key={index} >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isDrawerOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isDrawerOpen ? 3 : "auto",
                      justifyContent: "center",
                      color: "#000000",
                    }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.text}
                    sx={{ opacity: isDrawerOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
          </Link>
        ))}
        </List>
      </Box>
      <Button
        color="inherit"
        sx={{
          position: "absolute",
          right: "5px",
          bottom: "0",
          height: "50px",
          minWidth: "50px !important",
          borderRadius: "50%",
          padding: "0",
          "&:hover": {},
        }}
        onClick={handleDrawer}
      >
        {isDrawerOpen ? (
          <ArrowBackIosRoundedIcon />
        ) : (
          <ArrowForwardIosRoundedIcon />
        )}
      </Button>
    </Drawer>
)
};

export default Sidebar;
