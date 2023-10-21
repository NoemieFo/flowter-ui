import ClearIcon from "@mui/icons-material/Clear";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";
import {
  IconButton,
  Stack,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

interface ActionButtonsProps {
  reservationId: number;
}

const ButtonWrapper = styled(Stack)(() => ({
  alignItems: "center",
  justifyContent: "center",
  width: "33%",
  backgroundColor: "white",
  marginLeft: "2px",
}));

export const DetailsButton = (reservationId: number) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ButtonWrapper borderRadius={isDesktop ? "0px 8px 8px 0px" : "0"}>
      <Link to={`/reservations/${reservationId}/details`}>
        <IconButton>
          <SearchIcon color={"primary"} />
        </IconButton>
      </Link>
    </ButtonWrapper>
  );
};

export const CancelButton = () => {
  return (
    <ButtonWrapper>
      <IconButton>
        <ClearIcon color="error" />
      </IconButton>
    </ButtonWrapper>
  );
};

export const EditButton = () => {
  return (
    <ButtonWrapper>
      <IconButton>
        <ModeEditIcon />
      </IconButton>
    </ButtonWrapper>
  );
};

export const ReservationActionsButtons = ({
  reservationId,
}: ActionButtonsProps) => {
  const theme = useTheme();
  const isDesktop = theme.breakpoints.up("lg");

  return isDesktop ? (
    <Stack
      direction={"row"}
      width={"100%"}
      height={"58px"}
      borderRadius={"10px"}
    >
      <CancelButton />
      <EditButton />
      {DetailsButton(reservationId)}
    </Stack>
  ) : (
    <Stack width={"100%"}>
      <CancelButton />
      <EditButton />
      {DetailsButton(reservationId)}
    </Stack>
  );
};
