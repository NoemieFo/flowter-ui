import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import React from "react";
import { PageDetails } from "~/application/constants/applications";
import ExpandArrowWhite from "~/pictures/icons/menu/expand_arrow_white.svg";

export interface DrawerAccordionListProps {
  isMenuOpened: boolean;
  appName: string;
  appIcon: string;
  subPages: Record<string, PageDetails>;
}

export const DrawerAccordionList = ({
  isMenuOpened,
  appName,
  appIcon,
  subPages,
}: DrawerAccordionListProps) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List disablePadding>
      <ListItem
        key={appName.replaceAll(" ", "_")}
        disablePadding
        sx={{ display: "block" }}
      >
        <ListItemButton
          onClick={isMenuOpened ? handleClick : undefined}
          sx={{
            minHeight: 48,
            px: 1.8,
            borderBottom: open ? "none" : "2px solid #6D828C",
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
          <Image
            src={ExpandArrowWhite}
            alt="arrow"
            duration={0}
            wrapperStyle={{
              transform: open ? "rotate(90deg)" : "rotate(-90deg)",
              width: "28px",
              height: "28px",
              backgroundColor: "none",
            }}
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            {Object.values(subPages).map((page) => (
              <ListItem
                key={page.name.replaceAll(" ", "_")}
                disablePadding
                sx={{
                  display: "block",
                  backgroundColor: "#6D828C",
                  borderBottom: "1px solid white",
                  ":first-child": { marginTop: open ? "auto" : "-2px" },
                  ":last-child": { borderBottom: "none" },
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.4,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      marginRight: 3.3,
                      justifyContent: "center",
                      opacity: "85%",
                    }}
                  >
                    <Image
                      src={page.icon}
                      wrapperStyle={{ width: "26px" }}
                      duration={0}
                    />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h5">{page.name}</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </ListItem>
    </List>
  );
};
