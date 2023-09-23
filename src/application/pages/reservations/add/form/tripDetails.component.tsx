import { normalizeData } from "@/application/constants/queries.constants";
import { Company } from "@/application/constants/reservations.constants";
import { FormSectionTitle } from "@application/elements/formSectionTitle.component";
import { Grid, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Address from "@pictures/icons/address.svg";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import React from "react";
import { useQuery } from "react-query";
import { getCompaniesQuery, getReasonsQuery } from "../addReservation.queries";
import { DeparturePlaceField } from "./departurePlace.component";
import { ReasonField } from "./reasonField.component";

interface Props {
  departureDate: Dayjs;
  updateDepartureDate: (departureDate: Dayjs) => void;
  updateDeparturePlace: (departurePlaceId: number) => void;
  updateReturnDate: (returnDate: string) => void;
  updateReason: (reasonId: number) => void;
}

export const TripDetailsComponent = ({
  departureDate,
  updateDepartureDate,
  updateDeparturePlace,
  updateReturnDate,
  updateReason,
}: Props) => {
  const today = dayjs();
  const [keyword, setKeyword] = React.useState<string>("");

  const handleKeyword = (e: any) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    // FIXME: add destination handling
    // FIXME: does not work because of cors
    //   const { isLoading, error, data } = useQuery({
    //     queryKey: ["getPlaces"],
    //     queryFn: () =>
    //       fetch(`https://api-adresse.data.gouv.fr/search/?q=${keyword}`, {
    //         method: "GET",
    //       }).then((res) => res.json()),
    //   });
  };

  const handleDepartureDate = (newDate: Dayjs) => {
    updateDepartureDate(newDate);
  };

  const getCompaniesRes = useQuery("getCompanies", getCompaniesQuery);
  const isLoadingCompanies = getCompaniesRes.isLoading;
  const companies = normalizeData(getCompaniesRes.data ?? ({} as Company[]));
  const companiesError = getCompaniesRes.isError;

  const getReasonsRes = useQuery("getReasons", getReasonsQuery);
  const isLoadingReasons = getReasonsRes.isLoading;
  const reasons = normalizeData(getReasonsRes.data ?? ({} as string[]));
  const reasonsError = getReasonsRes.isError;

  // const [normalizedData, setNormalizedData] = React.useState<QueryData>(
  //   data ? normalizeData(data) : ({} as QueryData)
  // );

  // React.useEffect(() => {
  //   if (data) {
  //     setNormalizedData(normalizeData(data));
  //   }
  // }, [data]);

  return (
    <>
      <FormSectionTitle icon={Address} title={"Informations du trajet"} />
      <Grid container spacing={2} alignItems="center">
        {/* Row 1 */}
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DateTimePicker
              sx={{
                width: "100%",
              }}
              defaultValue={today}
              label="Date et heure de départ *"
              onChange={(newDate) => handleDepartureDate(newDate || today)}
              minDate={dayjs(today)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* FIXME: use connected user location as default value */}
          <DeparturePlaceField
            updateDeparturePlace={updateDeparturePlace}
            isLoading={isLoadingCompanies}
            data={companies}
            isError={companiesError}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <ReasonField
            updateReason={updateReason}
            isLoading={isLoadingReasons}
            data={reasons}
            isError={reasonsError}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12} md={9}>
          <TextField
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            required
            onChange={handleKeyword}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DateTimePicker
              sx={{
                width: "100%",
              }}
              defaultValue={departureDate ?? today}
              label="Date et heure de retour *"
              onChange={(newValue) => {
                updateReturnDate(newValue?.format() ?? today.format());
              }}
              minDate={dayjs(departureDate)}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
};
