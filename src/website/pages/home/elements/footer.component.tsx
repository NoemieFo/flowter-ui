import { FooterButton } from "@common/buttons.component";
import { Box, Typography, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box height="150px" bgcolor={theme.palette.primary.light}>
      <FooterButton text="A propos " path="/a-propos" />
      <Typography variant="body1">Footer will come here!!</Typography>
    </Box>
  );
};
