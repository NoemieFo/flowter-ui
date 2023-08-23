import { Stack } from "@mui/material";
import { Reservation } from "~/application/constants/reservations.constants";
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
      sx={{ paddingTop: "14px", marginX: "-40px" }}
      alignItems={"center"}
    >
      <ModifyReservationButton />
      <InformationComponent reservation={reservation} />
      <CancelReservationButton />
    </Stack>
  );
};
