import { Reservation } from "@application/constants/reservations.constants";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import Car from "@pictures/car.svg";
import Chevron from "@pictures/icons/chevron_right.svg";
import Pin from "@pictures/icons/pin.svg";
import Sign from "@pictures/icons/sign.svg";

interface BannerProps {
  reservation: Reservation;
}
export const BannerComponent = ({ reservation }: BannerProps) => {
  const theme = useTheme();
  const chevronColumn = (
    <Grid
      item
      md={1}
      padding={"0px"}
      display={"flex"}
      justifyContent={"center"}
    >
      <Box component="img" src={Chevron} sx={{ width: "40px" }} />
    </Grid>
  );

  const emptyValue = "-";

  return (
    <Box position={"relative"} marginTop={"50px"}>
      <img
        src={Pin}
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          top: "-30px",
        }}
        alt="Pin"
      />
      <Box
        sx={{
          backgroundColor: theme.palette.lightGrey.main,
          borderRadius: "8px",
          width: "100%",
          padding: "20px 40px",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent={"center"}
          sx={{
            backgroundColor: theme.palette.lightGrey.main,
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <Grid
            item
            md={3}
            padding={"0px"}
            sx={{ display: "flex", columnGap: "20px", alignItems: "center" }}
          >
            <Box component="img" src={Car} sx={{ width: "62px" }} />
            <Stack direction="column">
              <Typography variant="h4" color="black">
                {reservation.dateOfLoan}
              </Typography>
              <Typography>
                {`${reservation?.location?.address?.street} ${reservation?.location?.address?.postalCode} ${reservation?.location?.address?.city}` ??
                  emptyValue}
              </Typography>
            </Stack>
          </Grid>
          {chevronColumn}
          <Grid item md={4} padding={"0px"} textAlign={"center"}>
            {reservation?.destination?.street}{" "}
            {reservation?.destination?.postalCode}{" "}
            {reservation?.destination?.city}
          </Grid>
          {chevronColumn}
          <Grid
            item
            md={3}
            padding={"0px"}
            sx={{ display: "flex", columnGap: "20px", alignItems: "center" }}
          >
            <Box component="img" src={Sign} sx={{ width: "19px" }} />
            <Stack direction="column">
              <Typography variant="h4" color="black">
                {reservation.dateOfReturn}
              </Typography>
              <Typography>
                {`${reservation?.location?.address?.street} ${reservation?.location?.address?.postalCode} ${reservation?.location?.address?.city}` ??
                  emptyValue}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
