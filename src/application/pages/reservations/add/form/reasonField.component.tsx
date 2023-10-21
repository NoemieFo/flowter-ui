import { Motive, allMotives } from "@/application/constants/motives.constants";
import { QueryData } from "@application/constants/queries.constants";
import { Message } from "@application/elements/messages.component";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface ReasonFieldProps {
  // isLoading: boolean;
  // isError: boolean;
  selectedMotive: Motive;
  updateReason: (reason: Motive) => void;
  data: QueryData;
}

export const ReasonField = ({
  updateReason,
  data,
  selectedMotive,
}: // isLoading,
// isError,
ReasonFieldProps) => {
  const normalizedData = data;

  const reasonContent = () => {
    if (
      // isError ||
      !data
    ) {
      return (
        <Message
          type="error"
          error={"Erreur lors de la récupération des motifs de réservation"}
          sx={{ marginX: "8px" }}
        />
      );
    }

    if (data?.totalItems === 0) {
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

    return data?.result.map((m: Motive) => (
      <MenuItem key={m.id} value={m.id}>
        {m.label}
      </MenuItem>
    ));
  };

  const handleChangeReason = (e: SelectChangeEvent) => {
    const reasonId = Number(e.target.value);
    updateReason(allMotives.filter((m: Motive) => m.id === reasonId)[0]);
  };

  return (
    <FormControl fullWidth required>
      <InputLabel id="reason-dropdown">Motif</InputLabel>
      <Select
        // endAdornment={
        //   isLoading ? (
        //     <CircularProgress size={20} sx={{ marginRight: "20px" }} />
        //   ) : undefined
        // }
        // disabled={isLoading}
        labelId="reason-dropdown"
        defaultValue=""
        label="Motif"
        onChange={handleChangeReason}
        value={
          Object.keys(selectedMotive).length > 0
            ? String(selectedMotive.id)
            : ""
        }
      >
        {reasonContent()}
      </Select>
    </FormControl>
  );
};
