import {
  FormButtonGroupComponent,
  PrimaryFormButton,
  SecondaryFormButton,
} from "~/common/buttons.component";

interface AddReservationButtonsProps {
  validate: () => void;
}

export const AddReservationButtons = ({
  validate,
}: AddReservationButtonsProps) => {
  const clearForm = () => {
    console.log("clear");
  };

  const mainButton = (
    <PrimaryFormButton text="Réserver" onValidate={validate} />
  );

  const secondaryButton = (
    <SecondaryFormButton onClick={clearForm} text={"Annuler ma saisie"} />
  );
  return (
    <>
      <FormButtonGroupComponent
        mainButton={mainButton}
        secondaryButton={secondaryButton}
      />
    </>
  );
};
