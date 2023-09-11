import {
  apiDataNode,
  apiTotalItems,
} from "@application/constants/queries.constants";
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
import { useQuery } from "react-query";
import { getCompaniesQuery } from "../addReservation.queries";

interface DeparturePlaceField {
  updateDeparturePlace: (departurePlaceId: number) => void;
}

export const DeparturePlaceField = ({
  updateDeparturePlace,
}: DeparturePlaceField) => {
  const { isLoading, data, isError } = useQuery(
    "getCompanies",
    getCompaniesQuery
  );

  const departurePlaceContent = () => {
    if (isError || !data) {
      return (
        <Message
          type="error"
          error={"Erreur lors de la récupération des sites"}
          sx={{ marginX: "8px" }}
        />
      );
    }

    if (data[apiTotalItems] === 0) {
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

    const res: Company[] = data[apiDataNode];

    return res.map((c: Company) => (
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
