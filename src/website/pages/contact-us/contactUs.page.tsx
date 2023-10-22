import { Breakpoints } from "@common/constants/breakpoints";
import { PageContainer } from "@common/pageContainer.component";
import { PageHeaderContainer } from "@common/pageHeaderContainer.component";
import { PageTitle } from "@common/titles.component";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ContactUsForm } from "./form.component";

export const ContactUsPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageTitle
          text="Nous contacter"
          scribbleColor={theme.palette.turquoise.light}
          scribbleVerticalOffset={isPhone ? "-54px" : undefined}
        />
        <Typography variant="subtitle2">
          Vous avez des questions? Besoin d'aide ? N'hésitez pas à nous
          contacter. Nous sommes là pour vous aider. Remplissez notre formulaire
          de contact et nous vous répondrons dans les meilleurs délais
        </Typography>
      </PageHeaderContainer>
      <Box sx={{ maxWidth: Breakpoints.lg }}>
        <ContactUsForm />
      </Box>
    </PageContainer>
  );
};
