import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";
import { Breakpoints } from "./constants/breakpoints";

interface Props extends PropsWithChildren {}

export const PageHeaderContainer = ({ children }: Props) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: isPhone ? "flex-start" : "center",
        rowGap: !isPhone ? "18px" : undefined,
        maxWidth: Breakpoints.xl,
      }}
    >
      {children}
    </Box>
  );
};
