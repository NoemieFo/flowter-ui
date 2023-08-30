import { useMediaQuery, useTheme } from "@mui/material";
import { PageTitle } from "~/common/titles.component";
import { AppLayout } from "../../app.layout";

export const AllReservationsPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppLayout>
      <PageTitle
        text="Mes réservations"
        scribbleColor={theme.palette.orange.light}
        scribbleVerticalOffset={isPhone ? "-54px" : undefined}
      />
    </AppLayout>
  );
};
