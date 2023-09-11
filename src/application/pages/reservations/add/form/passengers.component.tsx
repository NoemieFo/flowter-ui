import {
  Passenger,
  passengersTest,
} from "@application/constants/people.constants";
import { FormSectionTitle } from "@application/elements/formSectionTitle.component";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import People from "@pictures/icons/people.svg";
import * as React from "react";

interface PassengersComponentProps {
  updatePassengers: (passengers: Passenger[]) => void;
}

export const PassengersComponent = ({
  updatePassengers,
}: PassengersComponentProps) => {
  const [passengers, setPassengers] = React.useState<string[]>([]);
  const [isError, setIsError] = React.useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent<typeof passengers>) => {
    const {
      target: { value },
    } = event;

    setPassengers(typeof value === "string" ? value.split(",") : value);

    let p: Passenger[] = [];
    try {
      const cleanedValue = value.toString().replaceAll("'", "");
      p = JSON.parse(`[${cleanedValue}]`);
      setIsError(false);
    } catch (e) {
      console.error(e);
      setIsError(true);
    }

    updatePassengers(p);
  };

  return (
    <Box>
      <FormSectionTitle icon={People} title={"Passagers"} />
      <FormControl fullWidth error={isError}>
        <InputLabel id="add-passengers-label">Ajouter des passagers</InputLabel>
        {/* FIXME: disable select or display error if the number of passengers is superior than the max number of places of the selected car */}
        <Select
          labelId="add-passengers-label"
          id="add-passengers-chip"
          multiple
          value={passengers}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="add-passengers-chip"
              label="Ajouter des passagers"
            />
          }
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, padding: "0" }}
            >
              {selected.map((value) => {
                let selectedPassenger;
                try {
                  selectedPassenger = JSON.parse(value);
                } catch (e) {
                  console.error(e);
                }
                return (
                  <Chip
                    key={value}
                    label={`${selectedPassenger.firstname} ${selectedPassenger.name}`}
                  />
                );
              })}
            </Box>
          )}
        >
          {passengersTest.map((p: Passenger) => {
            const pString = JSON.stringify(p);
            return (
              <MenuItem key={pString} value={pString}>
                {`${p.firstname} ${p.name} - ${p.school}`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {isError && (
        <p style={{ fontStyle: "italic", color: "red" }}>
          Le format des données saisies est invalide et ne pourra pas être
          traité lors de la validation de la réservation (contactez un
          administrateur si le problème persiste).
        </p>
      )}
    </Box>
  );
};
