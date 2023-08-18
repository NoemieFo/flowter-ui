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

interface Props {
  updateDepartureDate: (departureDate: string) => void;
  updateDeparturePlace: (departurePlace: EniSchoolsNames) => void;
  updateReturnDate: (returnDate: string) => void;
  updateReason: (reason: string) => void;
}

export const TripDetailsComponent = ({
  updateDepartureDate,
  updateDeparturePlace,
  updateReturnDate,
  updateReason,
}: Props) => {
  const today = dayjs();
  const [departurePlace, setDeparturePlace] = React.useState<EniSchoolsNames>(
    EniSchoolsNames.DefaultEmpty
  );
  const [departureDate, setDepartureDate] = React.useState<Dayjs>(today);
  const [reason, setReason] = React.useState("");
  const [keyword, setKeyword] = React.useState<string>("");

  const handleChangeDeparturePlace = (e: SelectChangeEvent) => {
    const newDeparturePlace = e.target.value as EniSchoolsNames;
    setDeparturePlace(newDeparturePlace);
    updateDeparturePlace(newDeparturePlace);
  };

  const handleChangeReason = (e: SelectChangeEvent) => {
    const newReason = e.target.value;
    setReason(newReason);
    updateReason(newReason);
  };

  const handleKeyword = (e: any) => {
    const newKeyword = e.target.value;
    setKeyword(newKeyword);
  };

  const handleDepartureDate = (newDate: Dayjs) => {
    const dateString = newDate.format();
    updateDepartureDate(dateString);
    setDepartureDate(newDate);
  };

  React.useEffect(() => {});

  // FIXME: does not work because of cors
  //   const { isLoading, error, data } = useQuery({
  //     queryKey: ["getPlaces"],
  //     queryFn: () =>
  //       fetch(`https://api-adresse.data.gouv.fr/search/?q=${keyword}`, {
  //         method: "GET",
  //       }).then((res) => res.json()),
  //   });

  return (
    <>
      <FormSectionTitle icon={Address} title={"Informations du trajet"} />
      <Grid container spacing={2} alignItems="center">
        {/* Row 1 */}
        <Grid item xs={12} sm={5} md={3}>
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
        <Grid item xs={12} sm={7} md={4}>
          <FormControl fullWidth>
            <InputLabel id="departure-place-dropdown">
              Lieu de départ *
            </InputLabel>
            {/* FIXME: use connected user school as default value */}
            <Select
              labelId="departure-place-dropdown"
              id="departure-place-select"
              value={departurePlace}
              label="Lieu de départ *"
              onChange={handleChangeDeparturePlace}
            >
              {eniSchoolsNames.map((p: EniSchoolsNames) => itemToMenuItem(p))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={5}>
          <FormControl fullWidth>
            <InputLabel id="reason-dropdown">Motif *</InputLabel>
            <Select
              labelId="reason-dropdown"
              id="reason-select"
              value={reason}
              label="Motif *"
              onChange={handleChangeReason}
            >
              {["Motif 1", "Motif 2"].map((m: string) => itemToMenuItem(m))}
            </Select>
          </FormControl>
        </Grid>
        {/* Row 2 */}
        <Grid item xs={12} sm={5} md={9}>
          <TextField
            id="outlined-basic"
            label="Destination"
            variant="outlined"
            required
            onChange={handleKeyword}
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={7} md={3}>
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
