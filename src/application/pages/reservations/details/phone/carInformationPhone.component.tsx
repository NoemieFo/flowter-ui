import { Car } from "@application/constants/cars.constants";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  capitalize,
} from "@mui/material";
import CarIcon from "@pictures/icons/car.svg";
import { InformationAccordion } from "./informationAccordion.component";

export interface CarInformationPhoneProps {
  car: Car;
}

export const CarInformationPhoneComponent = ({
  car,
}: CarInformationPhoneProps) => {
  const list = (
    <List>
      <ListItem
        divider
        sx={{ textAlign: "center" }}
        key={`${car?.model?.brand}-${car?.id}`}
      >
        <ListItemText
          primary="Marque"
          secondary={capitalize(car?.model?.brand)}
        />
      </ListItem>
      <ListItem
        divider
        sx={{ textAlign: "center" }}
        key={`${car?.model?.label}-${car?.id}`}
      >
        <ListItemText
          primary="Modèle"
          secondary={capitalize(car?.model?.label)}
        />
      </ListItem>
      <ListItem
        divider
        sx={{ textAlign: "center" }}
        key={`${car?.licensePlate}-${car?.id}`}
      >
        <ListItemText
          primary="Immatriculation"
          secondary={capitalize(car?.licensePlate)}
        />
      </ListItem>
      <ListItem
        divider
        sx={{ textAlign: "center" }}
        key={`${car?.gearbox}-${car.id}`}
      >
        <ListItemText
          primary="Boîte de vitesse"
          secondary={capitalize(car?.gearbox)}
        />
      </ListItem>
      <ListItem
        sx={{ display: "flex", flexDirection: "column" }}
        key={`${car?.options[0]}-${car.id}`}
      >
        <ListItemText primary="Options" />
        {car?.options?.map((o) => (
          <Typography key={o}>{capitalize(o)}</Typography>
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
