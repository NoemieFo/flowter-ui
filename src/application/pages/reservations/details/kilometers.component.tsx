import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { DataCardComponent } from "~/application/elements/dataCard.component";
import {
  FormButtonGroupComponent,
  PrimaryFormButton,
  SecondaryFormButton,
} from "~/common/buttons.component";
import Speedometer from "~/pictures/icons/speedometer.svg";

interface KilometersFieldProps {
  value: number;
  handleChangeKilometers: (newValue: number, fieldName: string) => void;
}

export const StartKilometersField = ({
  value,
  handleChangeKilometers,
}: KilometersFieldProps) => {
  const handleChange = (e: any) => {
    const newValue = e.target.value;
    const fieldName = e.target.name;

    handleChangeKilometers(newValue, fieldName);
  };

  return (
    <TextField
      label="Au départ"
      sx={{ m: { md: 1 }, width: "100%", backgroundColor: "white" }}
      placeholder={String(value)}
      defaultValue={value} // FIXME: use car kilometers to fill default value
      InputProps={{
        endAdornment: <InputAdornment position="end">km</InputAdornment>,
      }}
      name="start-km"
      onChange={handleChange}
      type="number"
    />
  );
};

export const ReturnalKilometersField = ({
  value,
  handleChangeKilometers,
}: KilometersFieldProps) => {
  const handleChange = (e: any) => {
    const newValue = e.target.value;
    const fieldName = e.target.name;

    handleChangeKilometers(newValue, fieldName);
  };

  return (
    <TextField
      label="Au retour"
      sx={{ m: { md: 1 }, width: "100%", backgroundColor: "white" }}
      placeholder="0"
      value={value}
      InputProps={{
        endAdornment: <InputAdornment position="end">km</InputAdornment>,
      }}
      type="number"
      name="return-km"
      onChange={handleChange}
    />
  );
};

export const KilometersComponent = () => {
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

  const mainButton = (
    <PrimaryFormButton text="Enregistrer" onValidate={validate} />
  );

  const secondaryButton = (
    <SecondaryFormButton onClick={() => undefined} text={"Annuler"} />
  );

  return (
    <DataCardComponent
      title="Renseigner le Kilométrage"
      iconPath={Speedometer}
      sticker
    >
      <StartKilometersField
        value={departureKilometers}
        handleChangeKilometers={handleChangeKilometers}
      />
      <ReturnalKilometersField
        value={returnalKilometers}
        handleChangeKilometers={handleChangeKilometers}
      />
      <FormButtonGroupComponent
        mainButton={mainButton}
        secondaryButton={secondaryButton}
      />
    </DataCardComponent>
  );
};
