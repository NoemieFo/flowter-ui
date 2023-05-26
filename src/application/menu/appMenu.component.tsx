import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, Theme, styled, useTheme } from "@mui/material/styles";
import Image from "mui-image";
import * as React from "react";
import Bear from "~/pictures/bear.png";
import ExpandArrowWhite from "~/pictures/icons/menu/expand_arrow_white.svg";
import { apps } from "../constants/applications";
import { DrawerAccordionList } from "./elements/drawerAccordionList.component";
import { DrawerListItem } from "./elements/drawerListItem.component";

const drawerWidth = 340;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ".MuiDrawer-paper": {
    backgroundColor: theme.palette.primary.dark,
    border: "none",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const AppMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        onClick={() => setOpen(!open)}
        sx={{
          width: "40px",
          height: "64px",
          backgroundColor: theme.palette.primary.dark,
          right: "auto",
          left: open ? "0px" : "64px",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Image
          src={ExpandArrowWhite}
          alt="arrow"
          style={{ width: "28px", height: "28px" }}
          duration={0}
          wrapperStyle={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{ borderBottom: "1px solid #6D828C", height: "70px" }}
        >
          <Image
            src={Bear}
            alt="profile picture"
            style={{ width: "50px", height: "50px" }}
            duration={0}
            wrapperStyle={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          />
        </DrawerHeader>
        <DrawerAccordionList
          isMenuOpened={open}
          appName={apps.profile.name}
          appIcon={apps.profile.icon}
          subPages={apps.profile.subPages}
        />
        <DrawerListItem
          appName={apps.planning.name}
          appIcon={apps.planning.icon}
        />
        <DrawerAccordionList
          isMenuOpened={open}
          appName={apps.reservations.name}
          appIcon={apps.reservations.icon}
          subPages={Object.fromEntries(
            Object.entries(apps.reservations.subPages).filter(
              ([k, _]) => k !== "editReservation"
            )
          )}
        />
        <DrawerListItem
          appName={apps.vehicles.subPages["vehicleDetails"].name}
          appIcon={apps.vehicles.subPages["vehicleDetails"].icon}
        />
        <DrawerListItem appName={apps.crash.name} appIcon={apps.crash.icon} />
      </Drawer>
    </>
  );
};
