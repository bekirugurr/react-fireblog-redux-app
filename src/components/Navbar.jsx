import React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import logoB from "../assets/logoB.png";
import profilimg from "../assets/profilimg.png";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const navbarMuiStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  logo: {
    width: "5rem",
    cursor: "pointer",
  },
  nameArea: {
    display: "flex",
    alignItems: "center",
    px: "1.2rem",
    fontSize: "1.4rem",
    position: "absolute",
    right: "4.5rem",
    top: "1.5rem",
    fontFamily: "Roboto",
  },
  menuItems: {
    fontSize: "1.3rem",
    px: "1rem",
    textAlign:"center"
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem",
    mx: ".25rem",
    backgroundColor: "tomato",
  },
  middleText: {
    cursor: "pointer",
    fontFamily: "Girassol",
    position: "absolute",
    right: "calc(50% - 5.8rem)",
    top: "1.4rem",
  },
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const currentUser = true;
  const profileimg = true;
  const classes = navbarMuiStyles();
  const handleLogoClick = () => {
    navigate("/");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="primary" sx={{position: "fixed",
    top: "0",
    left: "0"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
          <Box
            component="img"
            className={classes.logo}
            alt="Your logo."
            src={logoB}
            onClick={handleLogoClick}
          />
          <Box onClick={handleLogoClick}>
            <Typography
              variant="h5"
              className={classes.middleText}
              sx={{ fontFamily: "Girassol" }}
            >
              ────Blog────
            </Typography>
          </Box>

          {currentUser && (
            <Typography className={classes.nameArea} variant="body">
              Bekir Uğur
            </Typography>
          )}
          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              profileimg ? (
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar
                    alt="CurrentUser Name"
                    src={profilimg}
                    sx={{ height: "3.3rem", width: "3rem" }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar sx={{ bgcolor: "white" }}>
                    <PersonIcon color="primary" />
                  </Avatar>
                </IconButton>
              )
            ) : (
              <Button
                size="large"
                sx={{ color: "white", textTransform: "capitalize" }}
                endIcon={<LockOpenOutlinedIcon size="large" />}
              >
                Login
              </Button>
            )}
            <Menu
              sx={{ my: "55px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography className={classes.menuItems}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography

                  className={classes.menuItems}
                  onClick={() => navigate("/new-blog")}
                >
                  New
                </Typography>
              </MenuItem>
              {!currentUser && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography className={classes.menuItems}>
                    Logout
                  </Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
