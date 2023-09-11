import {
  apiDataNode,
  apiTotalItems,
} from "@application/constants/queries.constants";
import { Motive } from "@application/constants/reservations.constants";
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
import { getReasonsQuery } from "../addReservation.queries";

interface ReasonFieldProps {
  updateReason: (reasonId: number) => void;
}

export const ReasonField = ({ updateReason }: ReasonFieldProps) => {
  const { isLoading, data, isError } = useQuery("getReasons", getReasonsQuery);

  const reasonContent = () => {
    if (isError || !data) {
      return (
        <Message
          type="error"
          error={"Erreur lors de la récupération des motifs de réservation"}
          sx={{ marginX: "8px" }}
        />
      );
    }

    if (data[apiTotalItems] === 0) {
      return (
        <Message
          type="warning"
          error={"Aucun motif de réservation enregistré"}
          description={
            "Veuillez contacter un administrateur et réessayer ultérieurement"
          }
          sx={{ marginX: "8px" }}
        />
      );
    }
    const res: Motive[] = data[apiDataNode];

    return res.map((m: Motive) => (
      <MenuItem key={m.id} value={m.id}>
        {m.label}
      </MenuItem>
    ));
  };

  const handleChangeReason = (e: SelectChangeEvent) => {
    const reasonId = Number(e.target.value);
    updateReason(reasonId);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="reason-dropdown">Motif</InputLabel>
      <Select
        endAdornment={
          isLoading ? (
            <CircularProgress size={20} sx={{ marginRight: "20px" }} />
          ) : undefined
        }
        labelId="reason-dropdown"
        defaultValue={""}
        label="Motif"
        onChange={handleChangeReason}
        disabled={isLoading}
      >
        {reasonContent()}
      </Select>
    </FormControl>
  );
};
