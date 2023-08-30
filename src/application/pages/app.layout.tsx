import { Box } from "@mui/material";
import React from "react";
import { AppMenu } from "../menu/appMenu.component";

export const AppLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppMenu />
      <Box component="main" sx={{ flexGrow: 1, p: 5 }}>
        {children}
      </Box>
    </Box>
  );
};
