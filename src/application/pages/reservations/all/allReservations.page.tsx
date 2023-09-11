import { AppLayout } from "@application/pages/app.layout";
import { useMediaQuery, useTheme } from "@mui/material";
import { allReservations } from "../details/reservationDetails.page";
import { DesktopGrid } from "./result/desktopGrid.component";
import { PhoneSwiper } from "./result/phone/phoneSwiper.component";

export const AllReservationsPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  {
    /* FIXME: make call to get reservations */
  }

  const reservations = allReservations;
  const content = isDesktop ? <DesktopGrid /> : <PhoneSwiper />;

  return <AppLayout>{content}</AppLayout>;
};
