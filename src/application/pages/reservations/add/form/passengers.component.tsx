import { User, allUsers } from "@/application/constants/user.constants";
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
  updatePassengers: (passengers: User[]) => void;
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

    let p: User[] = [];

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
          renderValue={(selected: string[]) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, padding: "0" }}
            >
              {selected.map((value: string) => {
                let selectedPassenger: User = {} as User;
                try {
                  selectedPassenger = JSON.parse(value);
                } catch (e) {
                  console.error(e);
                }
                return (
                  <Chip
                    key={value}
                    label={`${selectedPassenger.firstname} ${selectedPassenger.lastname}`}
                  />
                );
              })}
            </Box>
          )}
        >
          {allUsers
            .filter(
              (u: User) =>
                u.firstname !== localStorage.getItem("userFirstname") &&
                u.lastname !== localStorage.getItem("userLastname")
            )
            .sort((userA: User, userB: User) => {
              // Compare last names
              const lastNameComparison = userA.lastname.localeCompare(
                userB.lastname
              );

              // If the last names are the same, compare the first names
              if (lastNameComparison === 0) {
                return userA.firstname.localeCompare(userB.firstname);
              }

              return lastNameComparison;
            })
            .map((p: User) => {
              const pString = JSON.stringify(p);
              return (
                <MenuItem key={pString} value={pString}>
                  {`${p.lastname} ${p.firstname} - ${p.company.name}`}
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
