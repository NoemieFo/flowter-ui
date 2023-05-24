import { Box, Typography, useTheme } from "@mui/material";
import { FooterButton } from "~/common/buttons.component";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box height="150px" bgcolor={theme.palette.primary.light}>
      <FooterButton text="C'est quoi Flowter ? " path="/fonctionnalites" />
      <FooterButton text="Tarif " path="/tarifs" />
      <FooterButton text="A propos " path="/a-propos" />
      <FooterButton text="Nous contacter " path="nous-contacter" />
      <FooterButton text="Souscrire " path="/a-propos" />
      <FooterButton text="Se connecter " path="/a-propos" />
      <FooterButton text="CGV " path="/a-propos" />

      <Typography variant="body1">Footer will come here!!</Typography>
    </Box>
  );
};
