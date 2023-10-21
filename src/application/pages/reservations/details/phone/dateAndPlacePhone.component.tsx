import { Reservation } from "@application/constants/reservations.constants";
import { Box, Stack, Typography } from "@mui/material";
import Address from "@pictures/icons/address.svg";
import Chevron from "@pictures/icons/chevron_right.svg";
import { InformationAccordion } from "./informationAccordion.component";

export interface DateAndPlacePhoneProps {
  reservation: Reservation;
}

export const DateAndPlacePhoneComponent = ({
  reservation,
}: DateAndPlacePhoneProps) => {
  const emptyValue = "-";

  const panel1 = (
    <Stack
      direction={"column"}
      alignItems={"center"}
      rowGap={"10px"}
      paddingY={"16px"}
    >
      <>
        <Typography variant="h4" color="black">
          {reservation.dateOfLoan ?? emptyValue}
        </Typography>
        <Typography>
          {`${reservation?.location?.address?.street} ${reservation?.location?.address?.postalCode} ${reservation?.location?.address?.city}` ??
            emptyValue}
        </Typography>
      </>
      <Box
        component="img"
        src={Chevron}
        sx={{ width: "40px", transform: "rotate(90deg)" }}
      />
      <Stack direction={"column"} alignItems={"center"}>
        {reservation?.destination?.street ?? emptyValue}
        <div>
          {reservation?.destination?.postalCode ?? emptyValue}
          {reservation?.destination?.city ?? emptyValue}
        </div>
      </Stack>

      <Box
        component="img"
        src={Chevron}
        sx={{ width: "40px", transform: "rotate(90deg)" }}
      />
      <>
        <Typography variant="h4" color="black">
          {reservation.dateOfReturn ?? emptyValue}
        </Typography>
        <Typography>
          {`${reservation?.location?.address?.street} ${reservation?.location?.address?.postalCode} ${reservation?.location?.address?.city}` ??
            emptyValue}
        </Typography>
      </>
    </Stack>
  );

  return (
    <InformationAccordion title="Dates et lieux" icon={Address} expanded>
      {panel1}
    </InformationAccordion>
  );
};
