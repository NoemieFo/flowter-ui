import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { websiteRoutes } from "website/constants/routes";

interface Props {
  handleIsOpen: (value: boolean) => void;
}

export const PhoneMenuComponent = ({ handleIsOpen }: Props): JSX.Element => {
  const handleClick = () => handleIsOpen(false);

  return (
    <PhoneMenu onClick={() => handleClick()}>
      {Object.values(websiteRoutes).map((item, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link to={item.path}>{item.name}</Link>
          </ListItemButton>
          <Divider />
        </ListItem>
      ))}
    </PhoneMenu>
  );
};

const PhoneMenu = styled(List)(() => ({
  width: "300px",
}));
