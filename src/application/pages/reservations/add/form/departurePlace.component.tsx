import {
  Company,
  allCompanies,
} from "@/application/constants/companies.constants";
import { QueryData } from "@/application/constants/queries.constants";
import { Message } from "@application/elements/messages.component";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface DeparturePlaceFieldProps {
  // isLoading: boolean;
  // isError: boolean;
  selectedDeparturePlace: Company;
  data: QueryData;
  updateDeparturePlace: (departurePlace: Company) => void;
}

export const DeparturePlaceField = ({
  // isLoading,
  // isError,
  selectedDeparturePlace,
  updateDeparturePlace,
  data,
}: DeparturePlaceFieldProps) => {
  const departurePlaceContent = () => {
    if (
      // !isLoading &&
      // (isError || !data)
      !data
    ) {
      return (
        <Message
          type="error"
          error={"Erreur lors de la récupération des sites"}
          sx={{ marginX: "8px" }}
        />
      );
    }

    if (data?.totalItems === 0) {
      return (
        <Message
          type="warning"
          error={"Aucun site enregistré"}
          description={
            "Veuillez contacter un administrateur et réessayer ultérieurement"
          }
          sx={{ marginX: "8px" }}
        />
      );
    }

    return data?.result?.map((c: Company) => (
      <MenuItem key={c.id} value={c.id}>
        {c.name}
      </MenuItem>
    ));
  };

  const handleChangeDeparturePlace = (e: SelectChangeEvent) => {
    const departurePlaceId = Number(e.target.value);
    updateDeparturePlace(
      allCompanies.filter((c: Company) => c.id === departurePlaceId)[0]
    );
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="departure-place-dropdown">Lieu de départ</InputLabel>
      <Select
        // endAdornment={
        //   isLoading ? (
        //     <CircularProgress size={20} sx={{ marginRight: "20px" }} />
        //   ) : undefined
        // }
        // disabled={isLoading}
        defaultValue={""}
        label="Lieu de départ"
        onChange={handleChangeDeparturePlace}
        value={
          Object.keys(selectedDeparturePlace).length > 0
            ? String(selectedDeparturePlace.id)
            : ""
        }
      >
        {departurePlaceContent()}
      </Select>
    </FormControl>
  );
};
