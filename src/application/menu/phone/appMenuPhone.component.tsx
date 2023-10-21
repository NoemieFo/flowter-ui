import { apps } from "@/application/constants/applications";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { Link } from "react-router-dom";
import { AppMenuContent } from "../appMenuContent.component";

export const AppMenuPhone = () => {
  const [isOpened, setIsOpened] = React.useState<boolean>(false);

  const theme = useTheme();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar
          sx={{
            backgroundColor: theme.palette.primary.dark,
            zIndex: "100000000000",
          }}
        >
          <IconButton
            sx={{ color: "white" }}
            aria-label="open drawer"
            onClick={() => setIsOpened(!isOpened)}
          >
            {isOpened ? <ClearIcon /> : <MenuIcon />}
          </IconButton>
          <Box sx={{ flexGrow: 1 }} alignItems={"center"} />
          <Link to={apps.reservations.subPages["myReservations"].path}>
            <img
              src={apps.reservations.subPages["myReservations"].icon}
              alt="Ajouter une réservation"
              style={{
                width: "40px",
                height: "40px",
                marginRight: "20px",
              }}
            />
          </Link>
          <Link to={apps.reservations.subPages["addReservation"].path}>
            <img
              src={apps.reservations.subPages["addReservation"].icon}
              alt="Ajouter une réservation"
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </Link>
        </Toolbar>
        {isOpened && <AppMenuContent opened={true} />}
      </AppBar>
    </React.Fragment>
  );
};
