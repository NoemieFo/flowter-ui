import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
} from "@mui/material";
import { websiteRoutes } from "@website/constants/routes";
import { Link } from "react-router-dom";

interface Props {
  handleIsOpen: (value: boolean) => void;
}

export const PhoneMenuComponent = ({ handleIsOpen }: Props): JSX.Element => {
  const handleClick = () => handleIsOpen(false);

  const menuItems = Object.fromEntries(
    Object.entries(websiteRoutes).filter(([key, _]) => key !== "cgv")
  );

  return (
    <PhoneMenu onClick={() => handleClick()}>
      {Object.values(menuItems).map((item, index) => (
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
