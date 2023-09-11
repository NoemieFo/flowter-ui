import { CSSObject, Theme, styled } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import Bear from "@pictures/bear.png";
import Image from "mui-image";
import { apps } from "../constants/applications";
import { DrawerAccordionList } from "./elements/drawerAccordionList.component";
import { DrawerListItem } from "./elements/drawerListItem.component";

interface DesktopMenuProps {
  opened: boolean;
}

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

export const AppMenuContent = ({ opened }: DesktopMenuProps) => {
  return (
    <>
      <Drawer variant="permanent" open={opened}>
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
          isMenuOpened={opened}
          appName={apps.profile.name}
          appIcon={apps.profile.icon}
          subPages={apps.profile.subPages}
        />
        <DrawerListItem
          appName={apps.planning.name}
          appIcon={apps.planning.icon}
          appPath={apps.planning.subPages["myPlanning"].path}
        />
        <DrawerAccordionList
          isMenuOpened={opened}
          appName={apps.reservations.name}
          appIcon={apps.reservations.icon}
          subPages={Object.fromEntries(
            Object.entries(apps.reservations.subPages).filter(
              ([k, _]) => k !== "editReservation" && k !== "reservationDetails"
            )
          )}
        />
        <DrawerListItem
          appName={apps.crash.name}
          appIcon={apps.crash.icon}
          appPath={apps.crash.subPages["addCrash"].path}
        />
      </Drawer>
    </>
  );
};
