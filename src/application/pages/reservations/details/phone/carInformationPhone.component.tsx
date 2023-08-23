import {
  List,
  ListItem,
  ListItemText,
  Typography,
  capitalize,
} from "@mui/material";
import { Car } from "~/application/constants/cars.constants";
import CarIcon from "~/pictures/icons/car.svg";
import { InformationAccordion } from "./informationAccordion.component";

export interface CarInformationPhoneProps {
  car: Car;
}

export const CarInformationPhoneComponent = ({
  car,
}: CarInformationPhoneProps) => {
  const list = (
    <List>
      <ListItem divider sx={{ textAlign: "center" }}>
        <ListItemText
          primary="Marque"
          secondary={capitalize(car.model.brand)}
        />
      </ListItem>
      <ListItem divider sx={{ textAlign: "center" }}>
        <ListItemText
          primary="Modèle"
          secondary={capitalize(car.model.label)}
        />
      </ListItem>
      <ListItem divider sx={{ textAlign: "center" }}>
        <ListItemText
          primary="Immatriculation"
          secondary={capitalize(car.licensePlate)}
        />
      </ListItem>
      <ListItem divider sx={{ textAlign: "center" }}>
        <ListItemText
          primary="Boîte de vitesse"
          secondary={capitalize(car.gearbox)}
        />
      </ListItem>
      <ListItem sx={{ display: "flex", flexDirection: "column" }}>
        <ListItemText primary="Options" />
        {car.options.map((o) => (
          <Typography>{capitalize(o)}</Typography>
        ))}
      </ListItem>
    </List>
  );

  return (
    <InformationAccordion title="Véhicule" icon={CarIcon}>
      {list}
    </InformationAccordion>
  );
};
