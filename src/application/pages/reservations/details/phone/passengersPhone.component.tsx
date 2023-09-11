import { User } from "@application/constants/people.constants";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import People from "@pictures/icons/people.svg";
import { InformationAccordion } from "./informationAccordion.component";

interface PassengersPhoneProps {
  passengers: User[];
}

export const PassengersPhoneComponent = ({
  passengers,
}: PassengersPhoneProps) => {
  const panel = passengers.map((p: User) => {
    return (
      <ListItem>
        <Stack direction="column" alignItems="start">
          <ListItemText primary={`${p.firstName} ${p.lastName}`} />
          <Typography variant="body1">{p.company.name}</Typography>
          <Typography variant="body1">{p.phone}</Typography>
          <Typography variant="body1">{p.email}</Typography>
        </Stack>
      </ListItem>
    );
  });

  return (
    <InformationAccordion title="Passagers" icon={People}>
      <List>{panel}</List>
    </InformationAccordion>
  );
};
