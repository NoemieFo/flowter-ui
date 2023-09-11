import { Reservation } from "@application/constants/reservations.constants";
import { Box, Grid } from "@mui/material";
import ReservationDetails from "@pictures/reservation_details.svg";
import { BannerComponent } from "./banner.component";
import { ReservationDetailsButtons } from "./buttons.component";
import { CarInformationComponent } from "./carInformation.component";
import { KilometersComponent } from "./kilometers.component";
import { PassengersInformationComponent } from "./passengersInformation.component";

interface ReservationDetailsProps {
  reservation: Reservation;
}

export const ReservationDetailsComponent = ({
  reservation,
}: ReservationDetailsProps) => {
  return (
    <Box>
      <BannerComponent reservation={reservation} />
      <Grid container spacing={2}>
        <Grid item md={8} display={"flex"} alignItems={"stretch"}>
          <CarInformationComponent car={reservation.car} />
        </Grid>
        <Grid item md={4}>
          <KilometersComponent />
        </Grid>
        <Grid item md={8}>
          <PassengersInformationComponent passengers={reservation.users} />
          <ReservationDetailsButtons />
        </Grid>
        <Grid item md={4}>
          <Box
            component="img"
            sx={{
              width: "100%",
            }}
            alt="Détails d'un véhicule"
            src={ReservationDetails}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
