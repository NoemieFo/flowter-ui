import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { menuItems } from "./navbar.component";

interface Props {
  handleIsOpen: (value: boolean) => void;
}

export const PhoneMenuComponent = ({ handleIsOpen }: Props): JSX.Element => {
  const handleClick = () => handleIsOpen(false);

  return (
    <PhoneMenu onClick={() => handleClick()}>
      {menuItems.map((item, index) => (
        <ListItem disablePadding key={index}>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <Link to={item.route}>{item.name}</Link>
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
