import { useMediaQuery, useTheme } from "@mui/material";
import { PageTitle } from "~/common/titles.component";
import { AppLayout } from "../../app.layout";
import { EditReservationForm } from "./form/editReservation.form";

export const EditReservationPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppLayout>
      <PageTitle
        text="Modifier ma réservation"
        scribbleColor={theme.palette.orange.light}
        scribbleVerticalOffset={isPhone ? "-54px" : undefined}
      />
      <EditReservationForm />
    </AppLayout>
  );
};
