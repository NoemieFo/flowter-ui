import { Rights, User } from "@/application/constants/user.constants";
import {
  Reservation,
  allReservations,
} from "@application/constants/reservations.constants";
import { PageTitle } from "@common/titles.component";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { CreateReservationButton } from "./createReservationButton.component";
import { ResultLineComponent, ResultLineHeader } from "./resultLine.component";

export const DesktopGrid = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const hasWriteRight = localStorage.getItem("userRights") === Rights.Write;

  let baseData = allReservations;
  if (!hasWriteRight) {
    console.log("here");
    const filteredData: Reservation[] = baseData.filter((r: Reservation) => {
      return r.users.some(
        (u: User) =>
          u.lastname === localStorage.getItem("userLastname") &&
          u.firstname === localStorage.getItem("userFirstname")
      );
    });
    baseData = filteredData;
  }

  const [reservations, setReservations] =
    React.useState<Reservation[]>(baseData);

  const deleteReservation = (id: number) => {
    const index = allReservations.indexOf(
      allReservations.filter((r: Reservation) => r.id === id)[0]
    );
    allReservations.splice(index, 1);
    setReservations([...allReservations]);
  };

  const legendBoxSize = "16px";
  return (
    <>
      <Grid container>
        <Grid item md={4} textAlign={"left"}>
          <PageTitle
            text="Mes réservations"
            scribbleColor={theme.palette.orange.light}
            scribbleVerticalOffset={isPhone ? "-54px" : undefined}
            alignLeft
          />
        </Grid>
        <Grid item md={8} paddingTop={"6px"}>
          <Stack
            direction="row"
            columnGap={"10px"}
            height={"50px"}
            alignItems={"center"}
            justifyContent={"right"}
          >
            {/* 
            TODO: put back search input
            <SearchInput /> 
            */}
            {localStorage.getItem("userRights") === Rights.Write && (
              <CreateReservationButton />
            )}
          </Stack>
        </Grid>
      </Grid>
      {reservations.length === 0 ? (
        <Typography variant={"h3"} textAlign={"center"}>
          Pas de réservation enregistrée.
        </Typography>
      ) : (
        <>
          <Grid
            container
            spacing={2}
            marginBottom={"30px"}
            alignItems={"center"}
          >
            {/* TODO: handle pagniation */}
            <Grid item lg={3}>
              {/* Afficher 333445 résultats*/}
            </Grid>
            <Grid item lg={6} textAlign={"center"}>
              {/* FIXME: add real reservations length */}
              <Typography variant="h3">
                Toutes mes réservations ({reservations.length})
              </Typography>
            </Grid>
            <Grid item lg={3} textAlign={"right"}>
              <Stack
                direction={"row"}
                columnGap={"10px"}
                justifyContent={"right"}
                alignItems={"center"}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  <Box
                    width={legendBoxSize}
                    height={legendBoxSize}
                    borderRadius={"4px"}
                    bgcolor={theme.palette.primary.main}
                    marginRight={"6px"}
                  />
                  <Typography variant="caption2">Future</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"}>
                  <Box
                    width={legendBoxSize}
                    height={legendBoxSize}
                    borderRadius={"4px"}
                    bgcolor={theme.palette.primary.dark}
                    marginRight={"6px"}
                  />
                  <Typography variant="caption2">Passée</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <ResultLineHeader />
          {reservations.map((r: Reservation) => (
            <ResultLineComponent
              reservation={r}
              key={r.id}
              deleteReservation={deleteReservation}
            />
          ))}
        </>
      )}
    </>
  );
};
