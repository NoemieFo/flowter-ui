import { ButtonSecondaryComponent } from "@common/buttons.component";
import { SectionTitle } from "@common/titles.component";
import {
  Box,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Prices from "@pictures/prices.svg";
import { websiteRoutes } from "@website/constants/routes";
import Image from "mui-image";

export const PricesSection = (): JSX.Element => {
  const theme = useTheme();
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
          <SectionTitle
            text="Tarifs"
            scribbleVerticalOffset={isPhone ? "-35px" : undefined}
            compact
          />
          <Typography variant="body1">
            Nous proposons des tarifs flexibles adaptés à tous les
            besoins.Choisissez l'offre qui vous convient le mieux en fonction du
            nombre de véhicules et des fonctionnalités dont vous avez besoin
            pour votre entreprise.
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

const PricesContainer = styled(Box)(({ theme }) => ({
  padding: "50px 40px",

  ".prices-right-column": {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "20px",
    rowGap: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "50px 20px 40px 20px",
  },
}));
