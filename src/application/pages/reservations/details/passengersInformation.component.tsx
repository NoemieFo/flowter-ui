import { User } from "@/application/constants/user.constants";
import { DataCardComponent } from "@application/elements/dataCard.component";
import { Grid, ListItemText, Stack, Typography } from "@mui/material";
import Users from "@pictures/icons/users.svg";

export interface PassengersInformationProps {
  passengers: User[];
}

export const PassengersInformationComponent = ({
  passengers,
}: PassengersInformationProps) => {
  const getColumnSize = () => {
    switch (passengers.length) {
      case 1:
      case 0:
        // we want to use full width
        return 12;
      case 2:
        // we only use 2 columns, so the column size is 6
        return 6;
      default:
        // based a 3 columns grid (so the column width is 4);
        return 4;
    }
  };

  const list = (
    <Grid container spacing={2}>
      {passengers?.map((p: User) => {
        return (
          <Grid item md={getColumnSize()} key={p.id}>
            <Stack direction="column" alignItems="start">
              <ListItemText primary={`${p.firstname} ${p.lastname}`} />
              <Typography variant="body1">{p.company.name}</Typography>
              <Typography variant="body1">{p.phone}</Typography>
              <Typography variant="body1">{p.email}</Typography>
            </Stack>
          </Grid>
        );
      })}
    </Grid>
  );
  return (
    <DataCardComponent title="Passagers" iconPath={Users}>
      {passengers?.length > 0 ? list : "Pas de passager enregistré"}
    </DataCardComponent>
  );
};
