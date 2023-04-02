import { Box, Grid, Typography, styled, useMediaQuery } from "@mui/material";
import { ButtonSecondaryComponent } from "common/buttons.component";
import { SectionTitleCompact } from "common/titles.component";
import Image from "mui-image";
import Prices from "pictures/prices.svg";
import { theme } from "theme";
import { websiteRoutes } from "website/constants/routes";

export const PricesSection = (): JSX.Element => {
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PricesContainer component={"div"}>
      <Grid
        container
        spacing={8}
        alignItems="center"
        columns={{ xs: 1, sm: 12 }}
      >
        {!isPhone && (
          <Grid item xs={4}>
            <Image src={Prices} alt="tarifs" style={{ maxWidth: "300px" }} />
          </Grid>
        )}
        <Grid item xs={8} className="prices-right-column">
          <SectionTitleCompact
            text="Tarifs"
            scribbleVerticalOffset={isPhone ? "-35px" : undefined}
          />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia
            enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim
            sit amet tortor ullamcorper, vel tincidunt metus feugiat.
          </Typography>
          <ButtonSecondaryComponent
            text={isPhone ? "Voir les tarifs" : "Découvrir les tarifs"}
            color="orange"
            path={websiteRoutes["prices"].path}
          />
        </Grid>
      </Grid>
    </PricesContainer>
  );
};

const PricesContainer = styled(Box)(() => ({
  padding: "50px 40px",

  ".prices-right-column": {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "20px",
    rowGap: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 20px 40px 20px",
  },
}));
