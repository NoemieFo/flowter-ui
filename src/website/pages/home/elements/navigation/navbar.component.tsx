import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { websiteRoutes } from "@website/constants/routes";
import React from "react";
import { Link } from "react-router-dom";
import { PhoneMenuComponent } from "./phoneMenu.component";

export const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleIsOpen = (value: boolean) => setIsOpen(value);

  const phoneNavbar = (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <PhoneMenuWrapper
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.primary.dark,
          },
        }}
        open={isOpen}
        anchor={"left"}
        onClose={() => setIsOpen(false)}
      >
        <PhoneMenuComponent handleIsOpen={handleIsOpen} />
      </PhoneMenuWrapper>
      <Link to={websiteRoutes["login"].path}>
        <ConnectButton variant="contained">Se connecter</ConnectButton>
      </Link>
    </Toolbar>
  );

  const menuItems = Object.fromEntries(
    Object.entries(websiteRoutes).filter(([key, _]) => key !== "login")
  );

  const desktopNavbar = (
    <Toolbar>
      <Typography variant="h4">Logo</Typography>
      <DesktopMenuWrapper>
        <LinkWrapper>
          {Object.values(menuItems).map((item, index) => (
            <Link key={index} to={item.path}>
              {item.name}
            </Link>
          ))}
        </LinkWrapper>
        <Link to={websiteRoutes["login"].path}>
          <ConnectButton variant="contained">Se connecter</ConnectButton>
        </Link>
      </DesktopMenuWrapper>
    </Toolbar>
  );

  return (
    <AppBar position="static">{isDesktop ? desktopNavbar : phoneNavbar}</AppBar>
  );
};

const ConnectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: "white",
  "&:hover": {
    background: theme.palette.primary.main,
  },
}));

const LinkWrapper = styled(Box)(() => ({
  a: {
    marginRight: "40px",
    textDecoration: "none",
    color: "black",
  },
}));

const DesktopMenuWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const PhoneMenuWrapper = styled(Drawer)(({ theme }) => ({
  a: {
    color: "white",
    textDecoration: "none",
    fontSize: "16",
    fontFamily: "Poppins",
    margin: "10px 0",
  },
}));
