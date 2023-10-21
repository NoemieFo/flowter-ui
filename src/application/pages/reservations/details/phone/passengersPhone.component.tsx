import { User } from "@/application/constants/user.constants";
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
      <ListItem key={p.id}>
        <Stack direction="column" alignItems="start">
          <ListItemText primary={`${p.firstname} ${p.lastname}`} />
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
