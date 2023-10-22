import {
  ButtonSecondaryComponent,
  MoreInformationButtonWithAnchor,
} from "@common/buttons.component";
import { SectionTitle } from "@common/titles.component";
import {
  Box,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Features from "@pictures/features.svg";
import { features } from "@website/constants/features";
import { websiteRoutes } from "@website/constants/routes";
import Image from "mui-image";

export const FeaturesSection = (): JSX.Element => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FeaturesContainer
      component={"div"}
      rowGap="20px"
      bgcolor={theme.palette.lightGrey.main}
      textAlign={"center"}
      padding={"50px 40px"}
    >
      {isPhone && (
        <Image
          src={Features}
          alt="fonctionnalités"
          style={{ marginTop: "-170px", marginBottom: "20px" }}
        />
      )}
      <Box
        component={"div"}
        display="flex"
        flexDirection="column"
        maxWidth="1200px"
        margin="auto"
        marginBottom="20px"
        rowGap="20px"
      >
        <SectionTitle
          text="Fonctionnalités"
          scribbleColor={theme.palette.purple.light}
          scribbleWidth={isPhone ? "230px" : "300px"}
        />
        <Typography variant="subtitle2" paragraph>
          Flowter fonctionne en quelques clics seulement. Pour réserver un
          véhicule, il suffit de se connecter à l'application, de choisir les
          options de véhicule souhaitées, la date et l'heure de la réservation
          ainsi que son motif.
          <br />
          L'application indiquera alors si un véhicule est disponible et
          permettra de confirmer votre réservation.
        </Typography>
        <Grid
          container
          spacing={{ sm: 4, md: 6 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          rowSpacing="30"
        >
          {features.map((feature, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardContainer>
                {!isPhone && (
                  <Image
                    src={feature.avatar.path}
                    alt={feature.avatar.description}
                    width="172px"
                    className="feature-img"
                  />
                )}
                <Typography gutterBottom variant="h3" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="black">
                  {feature.descriptionShorten}
                </Typography>
                {!isPhone && (
                  <MoreInformationButtonWithAnchor
                    path={`${feature.path}#${feature.id}`}
                  />
                )}
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Box>
      <ButtonSecondaryComponent
        text={`${isPhone ? "Voir" : "Découvrir"} toutes les fonctionnalités`}
        color="purple"
        path={websiteRoutes["features"].path}
      />
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: " 40px 20px 40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "100px",
  },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "20px",

  ".feature-img": {
    marginBottom: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    textAlign: "left",
  },
}));
