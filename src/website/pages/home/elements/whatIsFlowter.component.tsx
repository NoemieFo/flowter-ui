import { MoreInformationButton } from "@common/buttons.component";
import { SectionTitle } from "@common/titles.component";
import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { websiteRoutes } from "@website/constants/routes";

export const WhatIsFlowter = (): JSX.Element => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WhatIsFlowterSection>
      <SectionTitle
        text="C'est quoi flowter ?"
        scribbleColor={theme.palette.pink.light}
        scribbleWidth={isPhone ? "230px" : "300px"}
        scribbleVerticalOffset={isPhone ? "-52px" : undefined}
      />
      <Typography variant="subtitle2">
        Flowter est une solution web qui permet aux entreprises de gérer la
        réservation de leurs véhicules internes.
        <br />
        Simple, intuitive et accessible à tous les collaborateurs, c'est la
        solution idéale pour les entreprises de toutes tailles qui souhaitent
        gagner du temps et de l'efficacité dans leur gestion de flotte.
      </Typography>
      <MoreInformationButton path={websiteRoutes["about"].path} />
    </WhatIsFlowterSection>
  );
};

const WhatIsFlowterSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  maxWidth: "1200px",
  margin: "auto",
  padding: "0 80px 20px 80px",

  [theme.breakpoints.down("sm")]: {
    padding: " 40px 20px 40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
}));
