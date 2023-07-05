import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import MediaCard from "../../components/HomeCard";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Home() {
  const [open, setOpen] = React.useState(true);

  const count = useSelector((state) => state.products.count);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "black", border: "black", width:'100%', opacity:'0.5' }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" noWrap component="div">
              Online Shopping
            </Typography>

            <Link to="/table">
              <IconButton
                style={{ position: "absolute", right: 50 }}
                aria-label="cart"
              >
                <StyledBadge badgeContent={count} color="primary">
                  <ShoppingCartIcon style={{ color: "white" }} />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <MediaCard />
      </Main>
    </Box>
  );
}
