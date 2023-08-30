import { Stack } from "@mui/material";
import React from "react";
import {
  FormButtonGroupComponent,
  PrimaryFormButton,
  SecondaryFormButton,
} from "~/common/buttons.component";
import Speedometer from "~/pictures/icons/speedometer.svg";
import {
  ReturnalKilometersField,
  StartKilometersField,
} from "../kilometers.component";
import { InformationAccordion } from "./informationAccordion.component";

export const KilomtersPhoneComponent = () => {
  const clearForm = () => {};
  const validate = () => {};

  const [departureKilometers, setDepartureKilometers] =
    React.useState<number>(0);

  const [returnalKilometers, setReturnalKilometers] = React.useState<number>(0);

  const handleChangeKilometers = (newValue: number, name: string) => {
    switch (name) {
      case "return-km":
        setReturnalKilometers(newValue);
        break;
      case "start-km":
        setDepartureKilometers(newValue);
        break;
      default:
        console.error("unknown field, cannot update kilometers");
    }
  };

  return (
    <InformationAccordion icon={Speedometer} title="Kilométrage">
      <Stack direction={"column"} rowGap={"20px"} paddingY={"24px"}>
        <StartKilometersField
          value={departureKilometers}
          handleChangeKilometers={handleChangeKilometers}
        />
        <ReturnalKilometersField
          value={returnalKilometers}
          handleChangeKilometers={handleChangeKilometers}
        />
      </Stack>
      <FormButtonGroupComponent
        mainButton={
          <PrimaryFormButton text="Enregistrer" onValidate={validate} />
        }
        secondaryButton={
          <SecondaryFormButton
            onClick={() => setReturnalKilometers(0)}
            text={"Annuler"}
          />
        }
      />
    </InformationAccordion>
  );
};
