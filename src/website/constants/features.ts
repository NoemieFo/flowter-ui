import FollowMaintenance from "pictures/follow_maintenance.svg";
import HandleUsers from "pictures/handle_users.svg";
import ManageFleet from "pictures/manage_your_fleet.svg";
import PlanRides from "pictures/plan_rides.svg";
import VisualizeStats from "pictures/visualize_stats.svg";
import { websiteRoutes } from "./routes";

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

export const features: Feature[] = [
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
