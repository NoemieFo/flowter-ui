import {
  FormButtonGroupComponent,
  PrimaryFormButton,
  SecondaryFormButton,
} from "@common/buttons.component";
import { useMediaQuery, useTheme } from "@mui/material";

interface AddReservationButtonsProps {
  isValid: boolean;
  validate: () => void;
  clearForm: () => void;
}

export const AddReservationButtons = ({
  isValid,
  validate,
  clearForm,
}: AddReservationButtonsProps) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const mainButton = (
    <PrimaryFormButton
      text="Réserver"
      onValidate={validate}
      disabled={!isValid}
    />
  );

  const secondaryButton = (
    <SecondaryFormButton onClick={clearForm} text={"Annuler ma saisie"} />
  );
  return (
    <>
      <FormButtonGroupComponent
        mainButton={mainButton}
        secondaryButton={secondaryButton}
        centered={isPhone}
      />
    </>
  );
};
