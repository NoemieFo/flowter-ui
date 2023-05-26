import AddToCalendarWhite from "~/pictures/icons/menu/add_to_calendar_white.svg";
import CalendarWhite from "~/pictures/icons/menu/calendar_white.svg";
import CarCrashWhite from "~/pictures/icons/menu/car_crash_white.svg";
import CarWhite from "~/pictures/icons/menu/car_white.svg";
import EditPasswordWhite from "~/pictures/icons/menu/edit_password_white.svg";
import EditProfileWhite from "~/pictures/icons/menu/edit_profile_white.svg";
import ListWhite from "~/pictures/icons/menu/list_white.svg";
import PlanningWhite from "~/pictures/icons/menu/planning_white.svg";
import ProfileDetailsWhite from "~/pictures/icons/menu/profile_details_white.svg";
import ProfileWhite from "~/pictures/icons/menu/profile_white.svg";
import SearchWhite from "~/pictures/icons/menu/search_white.svg";

export interface App {
  name: string;
  icon: string; // path
  subPages: Record<string, PageDetails>;
}

export interface PageDetails {
  name: string;
  icon: string; // path
  pathParameter?: string;
  path: string;
}

type AppName =
  | "dashboard"
  | "profile"
  | "planning"
  | "reservations"
  | "vehicles"
  | "crash";

export const apps: Record<AppName, App> = {
  dashboard: {
    name: "Tableau de bord",
    icon: "",
    subPages: {
      myDashBoard: {
        name: "Tableau de bord",
        icon: "",
        path: "",
      },
    },
  },
  profile: {
    name: "Mon profil",
    icon: ProfileWhite,
    subPages: {
      myProfile: {
        name: "Voir mon profil",
        icon: ProfileDetailsWhite,
        path: "/profil",
      },
      editProfile: {
        name: "Mettre à jour mon profil",
        icon: EditProfileWhite,
        path: "/profil/editer",
      },
      editPassword: {
        name: "Mettre à jour mon mot de passe",
        icon: EditPasswordWhite,
        path: "/profil/editer/mot-de-passe",
      },
    },
  },
  planning: {
    name: "Mon planning",
    icon: PlanningWhite,
    subPages: {
      myPlanning: {
        name: "Mon planning",
        icon: PlanningWhite,
        path: "/planning",
      },
    },
  },
  reservations: {
    name: "Réservations",
    icon: CalendarWhite,
    subPages: {
      myReservations: {
        name: "Mes réservations",
        icon: ListWhite,
        path: "/reservations",
      },
      addReservation: {
        name: "Ajouter une réservation",
        icon: AddToCalendarWhite,
        path: "/reservations/ajouter",
      },
      reservationDetails: {
        name: "Détails de ma réservation",
        icon: SearchWhite,
        path: "/reservations/:id/details",
      },
      editReservation: {
        name: "Modifier ma réservation",
        icon: CalendarWhite,
        path: "/reservations/:id/editer",
      },
    },
  },
  vehicles: {
    name: "Véhicules",
    icon: CarWhite,
    subPages: {
      searchVehicle: {
        name: "Rechercher un véhicule",
        icon: CarWhite,
        path: "/vehicules",
      },
      vehicleDetails: {
        name: "Détails d'un véhicule",
        icon: CarWhite,
        path: "/vehicules/:id/details",
      },
    },
  },
  crash: {
    name: "Signaler un sinistre/défaut",
    icon: CarCrashWhite,
    subPages: {
      addCrash: {
        name: "Signaler un sinistre/défaut",
        icon: CarCrashWhite,
        path: "/sinistre/ajouter",
      },
    },
  },
};
