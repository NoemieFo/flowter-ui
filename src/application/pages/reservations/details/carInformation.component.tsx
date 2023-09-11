import { Car } from "@application/constants/cars.constants";
import { DataCardComponent } from "@application/elements/dataCard.component";
import { Grid, List, ListItem, ListItemText, capitalize } from "@mui/material";
import CarIcon from "@pictures/icons/car.svg";

export interface CarInformationProps {
  car: Car;
}

export const CarInformationComponent = ({ car }: CarInformationProps) => {
  const list = (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item md={4}>
        <List>
          <ListItem>
            <ListItemText
              primary="Marque"
              secondary={capitalize(car.model.brand)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Modèle"
              secondary={capitalize(car.model.label)}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={4}>
        <List>
          <ListItem>
            <ListItemText
              primary="Immatriculation"
              secondary={capitalize(car.licensePlate)}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Boîte de vitesse"
              secondary={capitalize(car.gearbox)}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item md={4}>
        <List>
          <ListItem sx={{ flexDirection: "column" }}>
            <ListItemText primary="Options" />
            <ul>
              {car.options.map((o) => (
                <li key={o}>{capitalize(o)}</li>
              ))}
            </ul>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
  return (
    <DataCardComponent title="Informations du véhicule" iconPath={CarIcon}>
      {list}
    </DataCardComponent>
  );
};
