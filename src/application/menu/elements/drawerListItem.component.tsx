import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ListTitleProps {
  appName: string;
  appIcon: string;
  appPath: string;
}

export const DrawerListItem = ({
  appName,
  appIcon,
  appPath,
}: ListTitleProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(appPath);
  };
  return (
    <List disablePadding>
      <ListItem
        key={appName.replaceAll(" ", "_")}
        disablePadding
        sx={{ display: "block" }}
      >
        <ListItemButton
          onClick={handleClick}
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
            <Box component="img" src={appIcon} sx={{ width: "36px" }} />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h4">{appName}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
