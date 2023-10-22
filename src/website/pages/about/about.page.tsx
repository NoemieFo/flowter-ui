import { ButtonSecondaryComponent } from "@/common/buttons.component";
import { websiteRoutes } from "@/website/constants/routes";
import { PageContainer } from "@common/pageContainer.component";
import { PageHeaderContainer } from "@common/pageHeaderContainer.component";
import { PageTitle } from "@common/titles.component";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Mockups from "@pictures/mockups.png";
import Reservation from "@pictures/reservation.png";
import Image from "mui-image";

export const AboutPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageTitle
          compact
          text="A propos"
          scribbleColor={theme.palette.pink.light}
          scribbleVerticalOffset={isPhone ? "-54px" : "-64px"}
        />
        <Typography variant="subtitle2">
          Alestio est une jeune entreprise française spécialisée dans la gestion
          de flotte automobile.
          <br />
          Fondée par trois amis issus du domaine de l'informatique, l'entreprise
          a pour vocation de simplifier la vie des entreprises en leur proposant
          des solutions innovantes et performantes. Flowter est la première
          solution développée par Alestio.
        </Typography>
        <Grid
          container
          spacing={isPhone ? 4 : 8}
          alignItems="center"
          columns={{ xs: 1, sm: 12 }}
          marginTop={"10px"}
        >
          <Grid item xs={12}>
            <Image
              src={Mockups}
              alt={"L'application sur différents appareils"}
            />
            <Typography gutterBottom variant="h3">
              Flowter, la solution web de gestion des réservations de vos
              véhicules d'entreprise, accessible à tous
            </Typography>
            <Typography variant="body1">
              Flowter est une solution web qui ne nécessite aucune installation.
              Elle est accessible à tous les collaborateurs de l'entreprise,
              quel que soit leur niveau de compétences informatiques. Elle est
              disponible sur leur ordinateur, leur tablette ou leur smartphone.
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Image src={Reservation} alt={"Page de réservation"} />
          </Grid>
          <Grid item xs={7}>
            <Typography gutterBottom variant="h3">
              Flowter, une solution automatisée pour gagner du temps
            </Typography>
            <Typography variant="body1">
              Flowter fonctionne en quelques clics seulement. Pour réserver un
              véhicule, il suffit de se connecter à l'application, de choisir
              les options de véhicule souhaitées, la date et l'heure de la
              réservation ainsi que son motif. L'application indiquera alors si
              un véhicule est disponible et permettra de confirmer votre
              réservation.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h3">
              Flowter, une solution complète pour tous les besoins
            </Typography>
            <Typography variant="body1" paddingBottom={"20px"}>
              En tant que gestionnaire, vous avez accès à un tableau de bord
              complet qui vous permet de suivre l'utilisation de votre flotte
              automobile. Vous pouvez visualiser toutes les réservations,
              passées, en cours et à venir, ainsi que les statistiques
              d'utilisation détaillées. Flowter offre de nombreuses autres
              fonctionnalités pour simplifier et optimiser la gestion de votre
              flotte automobile, rendez-vous sur la page "Tarif" pour en savoir
              plus.
            </Typography>
            <ButtonSecondaryComponent
              text={isPhone ? "Voir les tarifs" : "Découvrir les tarifs"}
              color="orange"
              path={websiteRoutes["prices"].path}
            />
          </Grid>
        </Grid>
      </PageHeaderContainer>
    </PageContainer>
  );
};
