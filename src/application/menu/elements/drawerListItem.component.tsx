import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "mui-image";

interface ListTitleProps {
  appName: string;
  appIcon: string;
}

export const DrawerListItem = ({ appName, appIcon }: ListTitleProps) => {
  return (
    <List disablePadding>
      <ListItem
        key={appName.replaceAll(" ", "_")}
        disablePadding
        sx={{ display: "block" }}
      >
        <ListItemButton
          onClick={undefined}
          sx={{
            minHeight: 48,
            px: 1.8,
            borderBottom: "2px solid #6D828C",
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              marginRight: 2.7,
              justifyContent: "center",
            }}
          >
            <Image
              src={appIcon}
              wrapperStyle={{ width: "36px" }}
              duration={0}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h4">{appName}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
