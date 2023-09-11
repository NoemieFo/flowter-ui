import { PageContainer } from "@common/pageContainer.component";
import { PageHeaderContainer } from "@common/pageHeaderContainer.component";
import { PageTitle } from "@common/titles.component";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export const PricesPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageTitle
          text="Tarifs"
          scribbleColor={theme.palette.orange.light}
          compact
          scribbleVerticalOffset={isPhone ? "-70px" : "-64px"}
        />
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia
          enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Sed
          elementum nunc at neque feugiat porta. Phasellus rutrum efficitur
          tempus. Cras id ex at erat porta lacinia. Etiam sem velit, ultricies
          at lacinia ac, congue sit amet urna.
        </Typography>
      </PageHeaderContainer>
    </PageContainer>
  );
};
