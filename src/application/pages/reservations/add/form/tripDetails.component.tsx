import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import React from "react";
import {
  EniSchoolsNames,
  eniSchoolsNames,
} from "~/application/constants/places.constants";
import { FormSectionTitle } from "~/application/elements/formSectionTitle.component";
import { itemToMenuItem } from "~/common/helpers/utils";
import Address from "~/pictures/icons/address.svg";
import { ReasonField } from "./reasonField.component";

interface Props {
  departureDate: Dayjs;
  departurePlace: string;
  updateDepartureDate: (departureDate: Dayjs) => void;
  updateDeparturePlace: (departurePlace: EniSchoolsNames) => void;
  updateReturnDate: (returnDate: string) => void;
  updateReason: (reason: number) => void;
}

export const TripDetailsComponent = ({
  departureDate,
  departurePlace,
  updateDepartureDate,
  updateDeparturePlace,
  updateReturnDate,
  updateReason,
}: Props) => {
  const today = dayjs();
  const [keyword, setKeyword] = React.useState<string>("");

  const handleChangeDeparturePlace = (e: SelectChangeEvent) => {
    const newDeparturePlace = e.target.value as EniSchoolsNames;
    updateDeparturePlace(newDeparturePlace);
  };

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
          <FormControl fullWidth required>
            <InputLabel id="departure-place-dropdown">
              Lieu de départ
            </InputLabel>
            {/* FIXME: use connected user location as default value */}
            <Select
              labelId="departure-place-dropdown"
              id="departure-place-select"
              value={departurePlace}
              label="Lieu de départ"
              onChange={handleChangeDeparturePlace}
            >
              {eniSchoolsNames.map((p: EniSchoolsNames) => itemToMenuItem(p))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5}>
          <ReasonField updateReason={updateReason} />
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
