import { apps } from "@/application/constants/applications";
import {
  Reservation,
  allReservations,
} from "@/application/constants/reservations.constants";
import { AppLayout } from "@application/pages/app.layout";
import { ErrorLayout } from "@application/pages/error.layout";
import { PageTitle } from "@common/titles.component";
import { useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { ReservationDetailsPhoneComponent } from "./phone/reservationDetailsPhone.component";
import { ReservationDetailsComponent } from "./reservationDetails.component";

export const ReservationDetailsPage = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const params = useParams();
  const id = params.id;

  if (isNaN(Number(id))) {
    return (
      <AppLayout>
        <ErrorLayout
          description={`L'identifiant de réservation #${id} est invalide. Veuillez réessayer.`}
        />
      </AppLayout>
    );
  }

  const reservation = allReservations.filter(
    (r: Reservation) => r.id === Number(id)
  )[0];

  if (!reservation || Object.keys(reservation).length === 0) {
    return (
      <AppLayout>
        <ErrorLayout
          description={`Aucune réservation correspond à l'ID #${id} enregistrée.`}
          subtitle="Retour à la liste des réservations..."
          needRedirection
          path={apps.reservations.subPages.myReservations.path}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <PageTitle
        text={`Détails de ma réservation #${id}`}
        scribbleColor={theme.palette.orange.light}
        scribbleVerticalOffset={isPhone ? "-54px" : undefined}
      />
      {isTablet ? (
        <ReservationDetailsComponent reservation={reservation} />
      ) : (
        <ReservationDetailsPhoneComponent reservation={reservation} />
      )}
    </AppLayout>
  );
};
