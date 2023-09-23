import { QueryData } from "@/application/constants/queries.constants";
import { Company } from "@application/constants/reservations.constants";
import { Message } from "@application/elements/messages.component";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface DeparturePlaceFieldProps {
  isLoading: boolean;
  data: QueryData;
  isError: boolean;
  updateDeparturePlace: (departurePlaceId: number) => void;
}

export const DeparturePlaceField = ({
  updateDeparturePlace,
  isLoading,
  data,
  isError,
}: DeparturePlaceFieldProps) => {
  const departurePlaceContent = () => {
    if (!isLoading && (isError || !data)) {
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

    return data?.result.map((c: Company) => (
      <MenuItem key={c.id} value={c.id}>
        {c.name}
      </MenuItem>
    ));
  };

  const handleChangeDeparturePlace = (e: SelectChangeEvent) => {
    const departurePlaceId = Number(e.target.value);
    updateDeparturePlace(departurePlaceId);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="departure-place-dropdown">Lieu de départ</InputLabel>
      <Select
        endAdornment={
          isLoading ? (
            <CircularProgress size={20} sx={{ marginRight: "20px" }} />
          ) : undefined
        }
        // labelId="departure-place-dropdown"
        defaultValue={""}
        label="Lieu de départ"
        onChange={handleChangeDeparturePlace}
        disabled={isLoading}
      >
        {departurePlaceContent()}
      </Select>
    </FormControl>
  );
};
