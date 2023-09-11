import { Reservation } from "@application/constants/reservations.constants";
import { allReservations } from "@application/pages/reservations/details/reservationDetails.page";
import { PageTitle } from "@common/titles.component";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CreateReservationButton } from "./createReservationButton.component";
import { ResultLineComponent, ResultLineHeader } from "./resultLine.component";
import { SearchInput } from "./searchInput.component";

export const DesktopGrid = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const legendBoxSize = "16px";
  return (
    <>
      <Grid container>
        <Grid item md={4}>
          <PageTitle
            text="Mes réservations"
            scribbleColor={theme.palette.orange.light}
            scribbleVerticalOffset={isPhone ? "-54px" : undefined}
          />
        </Grid>
        <Grid item md={8} paddingTop={"6px"}>
          <Stack
            direction="row"
            columnGap={"10px"}
            height={"50px"}
            alignItems={"center"}
            justifyContent={"right"}
          >
            <SearchInput />
            <CreateReservationButton />
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} marginBottom={"30px"} alignItems={"center"}>
        <Grid item lg={3}>
          Afficher XXX résultats
        </Grid>
        <Grid item lg={6} textAlign={"center"}>
          {/* FIXME: add real reservations length */}
          <Typography variant="h3">
            Mes réservations ({allReservations.length})
          </Typography>
        </Grid>
        <Grid item lg={3} textAlign={"right"}>
          <Stack
            direction={"row"}
            columnGap={"10px"}
            justifyContent={"right"}
            alignItems={"center"}
          >
            <Stack direction={"row"} alignItems={"center"}>
              <Box
                width={legendBoxSize}
                height={legendBoxSize}
                borderRadius={"4px"}
                bgcolor={theme.palette.primary.main}
                marginRight={"6px"}
              />
              <Typography variant="caption2">Future</Typography>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Box
                width={legendBoxSize}
                height={legendBoxSize}
                borderRadius={"4px"}
                bgcolor={theme.palette.primary.dark}
                marginRight={"6px"}
              />
              <Typography variant="caption2">Passée</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <ResultLineHeader />
      {allReservations.map((r: Reservation) => (
        <ResultLineComponent reservation={r} key={r.id} />
      ))}
    </>
  );
};
