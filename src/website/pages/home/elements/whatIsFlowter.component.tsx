import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MoreInformationButton } from "~/common/buttons.component";
import { SectionTitle } from "~/common/titles.component";
import { websiteRoutes } from "~/website/constants/routes";

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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim
        sit amet tortor ullamcorper, vel tincidunt metus feugiat. Sed elementum
        nunc at neque feugiat porta. Phasellus rutrum efficitur tempus. Cras id
        ex at erat porta lacinia. Etiam sem velit, ultricies at lacinia ac,
        congue sit amet urna.
      </Typography>
      <MoreInformationButton path={websiteRoutes["about"].path} />
    </WhatIsFlowterSection>
  );
};

const WhatIsFlowterSection = styled(Box)(({ theme }) => ({
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
