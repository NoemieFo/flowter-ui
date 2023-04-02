import {
  Box,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ButtonSecondaryComponent,
  MoreInformationButton,
} from "common/buttons.component";
import { SectionTitle } from "common/titles.component";
import Image from "mui-image";
import Features from "pictures/features.svg";
import FollowMaintenance from "pictures/follow_maintenance.svg";
import HandleUsers from "pictures/handle_users.svg";
import ManageFleet from "pictures/manage_your_fleet.svg";
import PlanRides from "pictures/plan_rides.svg";
import VisualizeStats from "pictures/visualize_stats.svg";
import { lightGrey } from "theme";
import { websiteRoutes } from "website/routes";

export interface Feature {
  title: string;
  img: FeatureImg;
  description: string;
  path: string;
}

export interface FeatureImg {
  path: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Planifiez des trajets",
    img: { path: PlanRides, description: "planification de trajets" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    title: "Gérez votre parc",
    img: { path: ManageFleet, description: "gestion de parc" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    title: "Visualisez des statistiques",
    img: {
      path: VisualizeStats,
      description: "visualisation de statistiques",
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    title: "Suivez l’entretien",
    img: { path: FollowMaintenance, description: "suivi de l'entretien" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    title: "Gérez les utilisateurs",
    img: { path: HandleUsers, description: "gestion des utilisateurs" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
];

export const FeaturesSection = () => {
  const theme = useTheme();
  const isPhoneDisplay = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <FeaturesContainer component={"div"}>
      {isPhoneDisplay && (
        <Image
          src={Features}
          alt="fonctionnalités"
          style={{ marginTop: "-170px", marginBottom: "20px" }}
        />
      )}
      <FeaturesContent component={"div"}>
        <div>
          <SectionTitle
            text="Fonctionnalités"
            scribbleColor={theme.palette.purple.light}
            scribbleWidth={isPhoneDisplay ? "230px" : "300px"}
          />
          <Typography variant="subtitle2" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia
            enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Sed
            elementum nunc at neque feugiat porta. Phasellus rutrum efficitur
            tempus. Cras id ex at erat porta lacinia. Etiam sem velit, ultricies
            at lacinia ac, congue sit amet urna.
          </Typography>
        </div>
        <Grid
          container
          spacing={{ sm: 4, md: 6 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
          rowSpacing="30"
        >
          {features.map((feature, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardContainer>
                {!isPhoneDisplay && (
                  <Image
                    src={feature.img.path}
                    alt={feature.img.description}
                    width="172px"
                    className="feature-img"
                  />
                )}
                <Typography gutterBottom variant="h3" component="div">
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="black">
                  {feature.description}
                </Typography>
                {!isPhoneDisplay && (
                  <MoreInformationButton path={feature.path} />
                )}
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </FeaturesContent>
      <ButtonSecondaryComponent
        text={
          isPhoneDisplay
            ? "Voir toutes les fonctionnalités"
            : "Découvrir toutes les fonctionnalités"
        }
        color="purple"
      />
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: lightGrey,
  padding: "50px 40px",
  textAlign: "center",
  rowGap: "30px",

  [theme.breakpoints.down("sm")]: {
    padding: " 40px 20px 40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "100px",
  },
}));

const FeaturesContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1200px",
  margin: "auto",
  marginBottom: "20px",
  rowGap: "30px",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  ".feature-img": {
    marginBottom: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    textAlign: "left",
  },
}));
