import { Reservation } from "@application/constants/reservations.constants";
import { phoneMarginHorizontal } from "@application/pages/app.layout";
import { Stack } from "@mui/material";
import {
  CancelReservationButton,
  ModifyReservationButton,
} from "../buttons.component";
import { InformationComponent } from "./informationAccordion.component";

interface ReservationDetailsProps {
  reservation: Reservation;
}

export const ReservationDetailsPhoneComponent = ({
  reservation,
}: ReservationDetailsProps) => {
  return (
    <Stack
      direction={"column"}
      rowGap={"30px"}
      sx={{ paddingTop: "14px", marginX: `-${phoneMarginHorizontal}` }}
      alignItems={"center"}
    >
      <ModifyReservationButton />
      <InformationComponent reservation={reservation} />
      <CancelReservationButton />
    </Stack>
  );
};
