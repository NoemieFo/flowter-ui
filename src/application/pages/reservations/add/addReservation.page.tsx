import { AppLayout } from "@application/pages/app.layout";
import { PageTitle } from "@common/titles.component";
import { useMediaQuery, useTheme } from "@mui/material";
import { AddReservationForm } from "./form/addReservation.form";

export const AddReservationPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppLayout>
      <PageTitle
        text="Réserver un véhicule"
        scribbleColor={theme.palette.orange.light}
        scribbleVerticalOffset={isPhone ? "-54px" : undefined}
      />
      <AddReservationForm />
    </AppLayout>
  );
};
