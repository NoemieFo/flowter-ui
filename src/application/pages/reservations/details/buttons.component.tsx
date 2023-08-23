import { useTheme } from "@mui/material";
import { apps } from "~/application/constants/applications";
import {
  ButtonSecondaryComponent,
  FormButtonGroupComponent,
  SecondaryFormButton,
} from "~/common/buttons.component";

export const ModifyReservationButton = () => {
  return (
    <ButtonSecondaryComponent
      text="Modifier ma réservation"
      color="orange"
      path={apps.reservations.subPages["editReservation"].path}
    />
  );
};

export const CancelReservationButton = () => {
  const theme = useTheme();
  const cancel = () => {
    // FIXME: define action
    console.log("Cancel reservation");
  };
  return (
    <SecondaryFormButton
      onClick={cancel}
      text="Annuler ma réservation"
      borderColor={theme.palette.orange.main}
    />
  );
};

export const ReservationDetailsButtons = () => {
  return (
    <FormButtonGroupComponent
      mainButton={<ModifyReservationButton />}
      secondaryButton={<CancelReservationButton />}
    />
  );
};
