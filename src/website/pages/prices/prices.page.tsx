import { PageContainer } from "@common/pageContainer.component";
import { PageHeaderContainer } from "@common/pageHeaderContainer.component";
import { PageTitle } from "@common/titles.component";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Felto from "@pictures/felto.png";
import Minico from "@pictures/minico.png";
import Selecto from "@pictures/selecto.png";
import Image from "mui-image";
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
        <Typography
          variant="subtitle2"
          marginBottom={isPhone ? "20px" : "10px"}
        >
          Nous proposons des tarifs flexibles adaptés à tous les besoins. Vous
          pouvez choisir l'offre qui vous convient le mieux en fonction du
          nombre de véhicules et des fonctionnalités dont vous avez besoin pour
          votre entreprise.
        </Typography>
        <Grid
          container
          spacing={isPhone ? 4 : 8}
          alignItems="center"
          columns={{ xs: 1, sm: 12 }}
        >
          <Grid item xs={4}>
            <Image
              src={Minico}
              alt={"L'offre Minico"}
              style={{ maxWidth: isPhone ? "250px" : "90%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={Selecto}
              alt={"L'offre Selecto"}
              style={{ maxWidth: isPhone ? "250px" : "90%" }}
            />
          </Grid>
          <Grid item xs={4}>
            <Image
              src={Felto}
              alt={"L'offre Felto"}
              style={{ maxWidth: isPhone ? "250px" : "90%" }}
            />
          </Grid>
        </Grid>
      </PageHeaderContainer>
    </PageContainer>
  );
};
