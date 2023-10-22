import FollowMaintenance from "@pictures/follow_maintenance.svg";
import FollowMaintenanceAvatar from "@pictures/follow_maintenance_avatar.svg";
import HandleUsers from "@pictures/handle_users.svg";
import HandleUsersAvatar from "@pictures/handle_users_avatar.svg";
import ManageFleetAvatar from "@pictures/manage_your_fleet_avatar.svg";
import MultipleDevices from "@pictures/multiple_devices.svg";
import MultipleDevicesAvatar from "@pictures/multiple_devices_avatar.svg";
import PlanRides from "@pictures/plan_rides.svg";
import PlanRidesAvatar from "@pictures/plan_rides_avatar.svg";
import VisualizeStats from "@pictures/visualize_stats.svg";
import VisualizeStatsAvatar from "@pictures/visualize_stats_avatar.svg";
import { websiteRoutes } from "./routes";

export interface Feature {
  id: number;
  title: string;
  avatar: FeatureImg;
  img: FeatureImg;
  descriptionShorten: string;
  description: string;
  path: string;
}

export interface FeatureImg {
  path: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Planifiez des trajets",
    avatar: { path: PlanRidesAvatar, description: "planification de trajets" },
    img: { path: PlanRides, description: "planification de trajets" },
    descriptionShorten:
      "Vos collaborateurs peuvent désormais planifier leurs déplacements professionnels en quelques clics.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    id: 2,
    title: "Gérez votre parc",
    avatar: { path: ManageFleetAvatar, description: "gestion de parc" },
    img: { path: ManageFleetAvatar, description: "gestion de parc" },
    descriptionShorten:
      "Optimisez vos dépenses, vous avez accès au suivi de l'état de vos véhicules de manière simple et efficace.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    id: 3,
    title: "Visualisez des statistiques",
    avatar: {
      path: VisualizeStatsAvatar,
      description: "visualisation de statistiques",
    },
    img: {
      path: VisualizeStats,
      description: "visualisation de statistiques",
    },
    descriptionShorten:
      "Prenez des décisions stratégiques en suivant l'utilisation de votre flotte en temps réel.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    id: 4,
    title: "Suivez l’entretien",
    avatar: {
      path: FollowMaintenanceAvatar,
      description: "suivi de l'entretien",
    },
    img: { path: FollowMaintenance, description: "suivi de l'entretien" },
    descriptionShorten:
      "L'entretien de vos véhicules est maintenant assisté et planifié à vue d'oeil.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    id: 5,
    title: "Gérez les utilisateurs",
    avatar: {
      path: HandleUsersAvatar,
      description: "gestion des utilisateurs",
    },
    img: { path: HandleUsers, description: "gestion des utilisateurs" },
    descriptionShorten:
      "Attribuez les droits d'accès à vos collaborateurs et révoquez les à n'importe quel moment.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
  {
    id: 6,
    title: "Une application multi-supports",
    avatar: { path: MultipleDevicesAvatar, description: "plusieurs supports" },
    img: { path: MultipleDevices, description: "plusieurs supports" },
    descriptionShorten:
      "Gardez tout à portée de main. La solution est adaptée aux ordinateurs et aux smartphones.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia enim sit amet tortor ullamcorper, vel tincidunt metus feugiat.",
    path: websiteRoutes["features"].path,
  },
];
