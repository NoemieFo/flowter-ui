import { MenuItem, capitalize } from "@mui/material";

export const itemToMenuItem = (i: any): JSX.Element => {
  return (
    <MenuItem key={i} value={i}>
      {capitalize(i)}
    </MenuItem>
  );
};
