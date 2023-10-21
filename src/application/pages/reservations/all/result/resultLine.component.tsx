import { User } from "@/application/constants/user.constants";
import { Reservation } from "@application/constants/reservations.constants";
import { convertDateToFrenchFormat } from "@common/helpers/utils";
import {
  Box,
  Stack,
  Typography,
  capitalize,
  styled,
  useTheme,
} from "@mui/material";
import { ReservationActionsButtons } from "./resultLineButtons.component";

interface ResultLineComponentProps {
  reservation: Reservation;
}

export const lineHeight = "62px";

const Cell = styled(Box)(() => ({
  padding: "10px 0px",
  height: lineHeight,
  overflow: "auto",
}));

const Text = styled(Typography)(({ theme }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

const GridPattern = styled(Box)(() => ({
  display: "grid",
  gap: "0px 16px",
  gridTemplateAreas:
    "status departure destination returnal vehicle passengers actions",
  gridTemplateColumns:
    "[status] 12px [departure] 1.2fr [destination] 1.2fr [returnal] 1.2fr [vehicle] 1fr [passengers] 1fr [actions] 140px",
  marginBottom: "8px",
}));

export const ResultLineHeader = () => {
  return (
    <GridPattern>
      <Box gridArea="status" className="destination" />
      <Box gridArea="departure" className="departure">
        <Typography variant="caption2">Date et lieu de départ</Typography>
      </Box>
      <Box gridArea="destination" className="destination">
        <Typography variant="caption2">Destination</Typography>
      </Box>
      <Box gridArea="returnal" className="returnal">
        <Typography variant="caption2">Date et lieu de retour</Typography>
      </Box>
      <Box gridArea="vehicle" className="vehicle">
        <Typography variant="caption2">Véhicule</Typography>
      </Box>
      <Box gridArea="passengers" className="passengers">
        <Typography variant="caption2">Passagers</Typography>
      </Box>
      <Box
        gridArea="actions"
        className="actions"
        padding="2px"
        borderRadius="0px 8px 8px 0px"
      />
    </GridPattern>
  );
};

export const ResultLineComponent = ({
  reservation,
}: ResultLineComponentProps) => {
  const theme = useTheme();
  const emptyValue = <Typography>-</Typography>;

  const car = reservation.car ? (
    <Stack direction={"column"}>
      <Text variant="h6">
        {reservation?.car?.model?.brand} {reservation?.car?.model?.label}
      </Text>
      <Text variant="body2">{reservation?.car?.licensePlate}</Text>
    </Stack>
  ) : (
    emptyValue
  );

  const destination = () => {
    if (!reservation?.destination) {
      return emptyValue;
    }

    const cpAndCity = `${reservation?.destination?.postalCode ?? emptyValue} ${
      reservation?.destination?.city ?? emptyValue
    }`;

    return (
      <Stack direction={"column"}>
        <Text variant="body2">
          {reservation?.destination?.street ?? emptyValue}
        </Text>
        <Text variant="body2">{cpAndCity}</Text>
      </Stack>
    );
  };

  const passengers = (): JSX.Element => {
    let passengersList;

    switch (true) {
      case reservation?.users?.length === 0:
        passengersList = emptyValue;
        break;
      case reservation?.users?.length > 3:
        passengersList = (
          <>
            <Text
              variant="body2"
              key={reservation.users[0].id}
              lineHeight={1.2}
            >
              {reservation?.users[0].firstname} {reservation?.users[0].lastname}
            </Text>

            <Text
              variant="body2"
              key={reservation.users[1].id}
              lineHeight={1.2}
            >
              {reservation.users[1].firstname} {reservation.users[1].lastname}
            </Text>
            <Text
              variant="body2"
              key={reservation.users[2].id}
              lineHeight={1.2}
            >
              ...
            </Text>
          </>
        );
        break;
      default:
        passengersList = reservation.users.map((u: User) => {
          return (
            <Text variant="body2" key={u.id}>
              {u.firstname} {u.lastname}
            </Text>
          );
        });
    }

    return (
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
        <Stack direction={"column"}>{passengersList}</Stack>
      </Stack>
    );
  };

  const today = new Date();
  const reservationDate = new Date(reservation.dateOfLoan);

  let lineColor;
  if (reservationDate > today) {
    lineColor = theme.palette.primary.main;
  } else {
    lineColor = theme.palette.primary.dark;
  }

  return (
    <GridPattern
      bgcolor={theme.palette.lightGrey.main}
      height={lineHeight}
      borderRadius={"8px"}
    >
      <Box
        className="status"
        gridArea="status"
        bgcolor={lineColor}
        borderRadius={"8px 0px 0px 8px"}
        height={lineHeight}
      />
      <Cell className="departure" gridArea={"departure"}>
        <Stack direction={"column"}>
          <Text variant="h6">
            {reservation?.dateOfLoan
              ? capitalize(
                  convertDateToFrenchFormat(new Date(reservation.dateOfLoan))
                )
              : emptyValue}
          </Text>
          <Text variant="body2">
            {`${reservation?.location?.address?.street} ${reservation?.location?.address?.postalCode} ${reservation?.location?.address?.city}` ??
              emptyValue}
          </Text>
        </Stack>
      </Cell>
      <Cell className="destination" gridArea={"destination"}>
        {destination()}
      </Cell>
      <Cell className="returnal" gridArea={"returnal"}>
        <Stack direction={"column"} width={"100%"}>
          <Text variant="h6">
            {reservation?.dateOfReturn
              ? capitalize(
                  convertDateToFrenchFormat(new Date(reservation.dateOfReturn))
                )
              : emptyValue}
          </Text>
          <Text variant="body2">
            {`${reservation?.location?.address?.street} ${reservation?.location?.address?.postalCode} ${reservation?.location?.address?.city}` ??
              emptyValue}
          </Text>
        </Stack>
      </Cell>
      <Cell className="vehicle" gridArea={"vehicle"}>
        {car}
      </Cell>
      <Box
        className="passengers"
        gridArea={"passengers"}
        display={"flex"}
        alignItems={"center"}
        height={lineHeight}
      >
        {passengers()}
      </Box>
      <Box
        className="actions"
        gridArea={"actions"}
        padding={"2px"}
        borderRadius={"0px 8px 8px 0px"}
      >
        <ReservationActionsButtons reservationId={reservation?.id} />
      </Box>
    </GridPattern>
  );
};
