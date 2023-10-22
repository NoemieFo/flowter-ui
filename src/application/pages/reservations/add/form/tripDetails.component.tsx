import {
  Company,
  company1,
  company2,
  company3,
} from "@/application/constants/companies.constants";
import { Motive, allMotives } from "@/application/constants/motives.constants";
import { Address } from "@/application/constants/reservations.constants";
import { FormSectionTitle } from "@application/elements/formSectionTitle.component";
import { Grid, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import AddressPicture from "@pictures/icons/address.svg";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import React from "react";
import { DeparturePlaceField } from "./departurePlace.component";
import { ReasonField } from "./reasonField.component";

interface Props {
  departureDate: Dayjs;
  departurePlace: Company;
  returnDate: Dayjs;
  destination: Address;
  motive: Motive;
  updateDepartureDate: (departureDate: Dayjs) => void;
  updateDeparturePlace: (departurePlace: Company) => void;
  updateReturnDate: (returnDate: Dayjs) => void;
  updateReason: (reason: Motive) => void;
  updateDestination: (newDestination: Address) => void;
}

export const TripDetailsComponent = ({
  departureDate,
  departurePlace,
  returnDate,
  destination,
  motive,
  updateDepartureDate,
  updateDeparturePlace,
  updateReturnDate,
  updateReason,
  updateDestination,
}: Props) => {
  const today = dayjs();
  const [keyword, setKeyword] = React.useState<string>("");

  const handleDestination = (e: any) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
    // FIXME: add destination handling
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

  const handleReturnDate = (newDate: Dayjs) => {
    updateReturnDate(newDate);
  };

  // const getCompaniesRes = useQuery("getCompanies", getCompaniesQuery);
  // const isLoadingCompanies = getCompaniesRes.isLoading;
  // const companies = normalizeData(getCompaniesRes.data ?? ({} as Company[]));
  // const companiesError = getCompaniesRes.isError;

  // const getReasonsRes = useQuery("getReasons", getReasonsQuery);
  // const isLoadingReasons = getReasonsRes.isLoading;
  // const reasons = normalizeData(getReasonsRes.data ?? ({} as string[]));
  // const reasonsError = getReasonsRes.isError;

  const reasons = {
    result: allMotives,
  };

  const [isDestinationError, setDestinationError] =
    React.useState<boolean>(false);

  const validateDestination = () => {
    const addressRegex = /(\d+ [^\d]+) (\d{5}) ([^\d]+)/;
    const match = addressRegex.exec(keyword);

    if (match) {
      const address: Address = {
        street: match[1],
        postalCode: match[2],
        city: match[3],
      };
      updateDestination(address);
      setDestinationError(false);
    } else {
      console.error("Failed to parse destination");
      setDestinationError(true);
    }
  };

  const companies = { result: [company1, company2, company3] };
  const todayPlus1Hour = today.add(1, "hour");

  return (
    <>
      <FormSectionTitle
        icon={AddressPicture}
        title={"Informations du trajet"}
      />
      <Grid container spacing={2} alignItems="flex-start">
        {/* Row 1 */}
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DateTimePicker
              sx={{
                width: "100%",
              }}
              defaultValue={today}
              value={departureDate}
              label="Date et heure de départ *"
              onChange={(newDate) => handleDepartureDate(newDate ?? today)}
              minDate={dayjs(today)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* FIXME: use connected user location as default value */}
          <DeparturePlaceField
            selectedDeparturePlace={departurePlace}
            updateDeparturePlace={updateDeparturePlace}
            data={companies}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <ReasonField
            selectedMotive={motive}
            updateReason={updateReason}
            data={reasons}
          />
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12} md={9}>
          <TextField
            error={isDestinationError}
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            required
            helperText={
              isDestinationError ? "L'adresse de destination est invalide." : ""
            }
            onChange={handleDestination}
            value={
              Object.keys(destination).length > 0
                ? `${destination?.street} ${destination?.postalCode} ${destination?.city}`
                : keyword
            }
            sx={{ width: "100%" }}
            onBlur={() => validateDestination()}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
            <DateTimePicker
              sx={{
                width: "100%",
              }}
              defaultValue={todayPlus1Hour}
              value={returnDate}
              label="Date et heure de retour *"
              onChange={(newDate) => handleReturnDate(newDate ?? today)}
              minDate={dayjs(departureDate)}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
};
