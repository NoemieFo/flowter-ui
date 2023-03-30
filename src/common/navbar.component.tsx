import EmailIcon from "@mui/icons-material/Email";
import EuroIcon from "@mui/icons-material/Euro";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Groups2Icon from "@mui/icons-material/Groups2";
import HomeIcon from "@mui/icons-material/Home";
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
import React from "react";
import { Link } from "react-router-dom";
import { PhoneMenuComponent } from "./phone-menu.component";

interface MenuItem {
  name: string;
  icon: JSX.Element;
  route: string;
}

export const menuItems: MenuItem[] = [
  {
    name: "Accueil",
    icon: <HomeIcon style={{ color: "white" }} />,
    route: "",
  },
  {
    name: "A propos",
    icon: <Groups2Icon style={{ color: "white" }} />,
    route: "/a-propos",
  },
  {
    name: "Fonctionnalités",
    icon: <FormatListBulletedIcon style={{ color: "white" }} />,
    route: "/fonctionnalites",
  },
  {
    name: "Nous contacter",
    icon: <EmailIcon style={{ color: "white" }} />,
    route: "/nous-contacter",
  },
  {
    name: "Tarifs",
    icon: <EuroIcon style={{ color: "white" }} />,
    route: "/tarifs",
  },
];

export const Navbar = () => {
  const theme = useTheme();
  const isPhoneDisplay = useMediaQuery(theme.breakpoints.down("md"));

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
    </Toolbar>
  );

  const desktopNavbar = (
    <Toolbar>
      <Typography variant="h4">Logo</Typography>
      <DesktopMenuWrapper>
        <LinkWrapper>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.route}>
              {item.name}
            </Link>
          ))}
        </LinkWrapper>
        <ConnectButton variant="contained">Se connecter</ConnectButton>
      </DesktopMenuWrapper>
    </Toolbar>
  );

  return (
    <AppBar position="static">
      {isPhoneDisplay ? phoneNavbar : desktopNavbar}
    </AppBar>
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
