import { Box, useMediaQuery, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";

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
      }}
    >
      {children}
    </Box>
  );
};
