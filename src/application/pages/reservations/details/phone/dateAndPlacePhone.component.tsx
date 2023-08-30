import { Box, Stack, Typography } from "@mui/material";
import { Reservation } from "~/application/constants/reservations.constants";
import Address from "~/pictures/icons/address.svg";
import Chevron from "~/pictures/icons/chevron_right.svg";
import { InformationAccordion } from "./informationAccordion.component";

export interface DateAndPlacePhoneProps {
  reservation: Reservation;
}

export const DateAndPlacePhoneComponent = ({
  reservation,
}: DateAndPlacePhoneProps) => {
  const panel1 = (
    <Stack
      direction={"column"}
      alignItems={"center"}
      rowGap={"10px"}
      paddingY={"16px"}
    >
      <>
        <Typography variant="h4" color="black">
          {reservation.dateOfLoan}
        </Typography>
        <Typography>{reservation.location}</Typography>
      </>
      <Box
        component="img"
        src={Chevron}
        sx={{ width: "40px", transform: "rotate(90deg)" }}
      />
      {reservation.destination}
      <Box
        component="img"
        src={Chevron}
        sx={{ width: "40px", transform: "rotate(90deg)" }}
      />
      <>
        <Typography variant="h4" color="black">
          {reservation.dateOfReturn}
        </Typography>
        <Typography>{reservation.location}</Typography>
      </>
    </Stack>
  );

  return (
    <InformationAccordion title="Dates et lieux" icon={Address} expanded>
      {panel1}
    </InformationAccordion>
  );
};
