import EmailIcon from "@mui/icons-material/Email";
import EuroIcon from "@mui/icons-material/Euro";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Groups2Icon from "@mui/icons-material/Groups2";
import HomeIcon from "@mui/icons-material/Home";

export interface RouteDetails {
  name: string;
  icon?: JSX.Element;
  path: string;
}

type RouteKey = "home" | "about" | "features" | "contact" | "prices";

export const websiteRoutes: Record<RouteKey, RouteDetails> = {
  home: {
    name: "Accueil",
    icon: <HomeIcon style={{ color: "white" }} />,
    path: "",
  },
  about: {
    name: "A propos",
    icon: <Groups2Icon style={{ color: "white" }} />,
    path: "/a-propos",
  },
  features: {
    name: "Fonctionnalités",
    icon: <FormatListBulletedIcon style={{ color: "white" }} />,
    path: "/fonctionnalites",
  },
  contact: {
    name: "Nous contacter",
    icon: <EmailIcon style={{ color: "white" }} />,
    path: "/nous-contacter",
  },
  prices: {
    name: "Tarifs",
    icon: <EuroIcon style={{ color: "white" }} />,
    path: "/tarifs",
  },
};
