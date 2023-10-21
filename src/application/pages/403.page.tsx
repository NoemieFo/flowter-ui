import { Box, Grid, Stack, Typography } from "@mui/material";
import Error403 from "@pictures/403.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { apps } from "../constants/applications";
import { AppLayout } from "./app.layout";

export const Page403 = () => {
  const navigate = useNavigate();
  const isConnected = localStorage.getItem("userLastname");
  React.useEffect(() => {
    const timer = setTimeout(() => {
      return navigate(
        isConnected ? apps.reservations.subPages["myReservations"].path : "/"
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ width: "fit-content", margin: "auto" }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Error403}
            alt={"Accès interdit"}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <Typography variant="h1">
              Vous n'avez pas accès à cette page !
            </Typography>
            <Typography variant="subtitle1">
              Vous n'êtes pas identifié ou ne bénéficiez pas des droits
              nécessaires pour accéder à contenu.
            </Typography>
            <Typography marginTop="10px" variant="h4" color={"primary.dark"}>
              Redirection vers la page d'accueil...
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
