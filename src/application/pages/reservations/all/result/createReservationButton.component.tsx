import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CreateReservationButton = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      startIcon={<AddCircleIcon />}
      onClick={() => navigate("/reservations/ajouter")}
      sx={{
        width: "fit-content",
        ":hover": {
          backgroundColor: theme.palette.secondary.main,
          color: "white",
        },
      }}
    >
      Créer une réservation
    </Button>
  );
};
