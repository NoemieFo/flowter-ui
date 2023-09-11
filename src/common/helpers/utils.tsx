import { MenuItem, capitalize } from "@mui/material";

export const itemToMenuItem = (i: any): JSX.Element => {
  return (
    <MenuItem key={i} value={i}>
      {capitalize(i)}
    </MenuItem>
  );
};

export const convertDateToFrenchFormat = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Paris",
  };
  return date.toLocaleDateString("fr-FR", options);
};
