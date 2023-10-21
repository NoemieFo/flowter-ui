import { User } from "@/application/constants/user.constants";
import { Reservation } from "@application/constants/reservations.constants";
import { convertDateToFrenchFormat } from "@common/helpers/utils";
import { Box, Stack, Typography, capitalize, useTheme } from "@mui/material";
import { ReservationActionsButtons } from "../resultLineButtons.component";

interface ResultCardProps {
  reservation: Reservation;
}

export const ResultCard = ({ reservation }: ResultCardProps) => {
  const emptyValue = <Typography>-</Typography>;
  const theme = useTheme();

  const cpAndCity = `${reservation?.destination?.postalCode ?? emptyValue} ${
    reservation?.destination?.city ?? emptyValue
  }`;

  const car = reservation.car ? (
    <>
      <Typography variant="h6">
        {reservation?.car?.model?.brand} {reservation?.car?.model?.label}
      </Typography>
      <Typography variant="body1">{reservation?.car?.licensePlate}</Typography>
    </>
  ) : (
    emptyValue
  );

  const passengersList = reservation.users.map((u: User) => {
    return (
      <Typography variant="body1" key={u.id}>
        {u.firstname} {u.lastname}
      </Typography>
    );
  });

  return (
    <Stack
      direction={"column"}
      rowGap={"16px"}
      width={"80%"}
      borderRadius={"8px"}
      bgcolor={theme.palette.primary.light}
      padding={"20px"}
      height={"100%"}
    >
      <Stack direction={"column"}>
        <Typography variant="caption2">Départ</Typography>
        <Typography variant="h6">
          {reservation?.dateOfLoan
            ? capitalize(
                convertDateToFrenchFormat(new Date(reservation.dateOfLoan))
              )
            : emptyValue}
        </Typography>
        <Typography variant="body1">
          {reservation?.location
            ? `${reservation.location.address?.street} ${reservation.location.address?.postalCode} ${reservation.location.address?.city}`
            : emptyValue}
        </Typography>
      </Stack>
      <Stack direction={"column"}>
        <Typography variant="caption2">Destination</Typography>
        <Typography variant="body1">
          {reservation?.destination
            ? `${reservation.destination.street} ${reservation.destination.postalCode} ${reservation.destination.city}`
            : emptyValue}
        </Typography>
        <Typography variant="body1">{cpAndCity}</Typography>
      </Stack>
      <Stack direction={"column"}>
        <Typography variant="caption2">Retour</Typography>
        <Typography variant="h6">
          {reservation?.dateOfReturn
            ? capitalize(
                convertDateToFrenchFormat(new Date(reservation.dateOfReturn))
              )
            : emptyValue}
        </Typography>
        <Typography variant="body1">
          {reservation?.location
            ? `${reservation.location.address?.street} ${reservation.location.address?.postalCode} ${reservation.location.address?.city}`
            : emptyValue}
        </Typography>
      </Stack>
      <Stack direction={"column"}>
        <Typography variant="caption2">Véhicule</Typography>
        {car}
      </Stack>
      <Stack direction={"column"} rowGap={"5px"}>
        <Typography variant="caption2">Passagers</Typography>
        <Stack direction={"row"} columnGap="10px" alignItems={"center"}>
          <Box
            sx={{ borderRadius: "50%" }}
            bgcolor={theme.palette.primary.dark}
            width={"30px"}
            height={"30px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography variant="h4">{reservation?.users?.length}</Typography>
          </Box>
          <Stack direction={"column"}>
            <Box>{passengersList}</Box>
          </Stack>
        </Stack>
      </Stack>
      <ReservationActionsButtons reservationId={reservation?.id} />
    </Stack>
  );
};
