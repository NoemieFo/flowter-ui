import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { AppMenu } from "../menu/appMenu.component";

export const phoneMarginHorizontal = "12px";

export const AppLayout = ({
  children,
}: React.PropsWithChildren): JSX.Element => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ display: "flex" }}>
      <AppMenu />
      <Box
        component="main"
        flexGrow={1}
        padding={isPhone ? `20px ${phoneMarginHorizontal}` : "50px"}
        paddingBottom={isPhone ? "80px" : "auto"}
        maxWidth={"100%"}
      >
        {children}
      </Box>
    </Box>
  );
};
