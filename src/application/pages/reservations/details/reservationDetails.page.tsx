import { CarOptions } from "@application/constants/categories.constants";
import { Roles } from "@application/constants/people.constants";
import { Reservation } from "@application/constants/reservations.constants";
import { AppLayout } from "@application/pages/app.layout";
import { ErrorLayout } from "@application/pages/error.layout";
import { PageTitle } from "@common/titles.component";
import { useMediaQuery, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { ReservationDetailsPhoneComponent } from "./phone/reservationDetailsPhone.component";
import { ReservationDetailsComponent } from "./reservationDetails.component";

export const reservationTest: Reservation = {
  id: 123456,
  dateOfLoan: "2023-11-12 09:00",
  dateOfReturn: "2023-11-12 11:00",
  location: "ENI Chartres-de-Bretagne",
  destination: {
    address: "123 rue de Nantes Appartement 50 Batiment B",
    postalCode: "35000",
    city: "Rennes",
  },
  car: {
    id: 1,
    licensePlate: "AZ-123-ER",
    model: {
      brand: "Renault",
      label: "Megane",
    },
    gearbox: "automatique",
    options: [CarOptions.Bluetooth, CarOptions.GPS],
  },
  users: [],
};

export const reservationTest2: Reservation = {
  id: 654321,
  dateOfLoan: "2023-03-12 09:00",
  dateOfReturn: "2023-03-12 11:00",
  location: "ENI Nantes",
  destination: {
    address: "123 rue de Rennes",
    postalCode: "44000",
    city: "Nantes",
  },
  car: {
    id: 1,
    licensePlate: "AZ-123-ER",
    model: {
      brand: "Citroën",
      label: "C3 Aircross",
    },
    gearbox: "manuelle",
    options: [CarOptions.Bluetooth],
  },
  users: [
    {
      id: 2,
      roles: [Roles.admin, Roles.driver, Roles.user],
      password: "",
      firstName: "Fournier",
      lastName: "Pauline",
      phone: "012345678",
      email: "pauline.fournier@campus-eni.fr",
      driverLicenceCheck: false,
      isDriver: false,
      company: {
        id: 1,
        name: "ENI Chartres-de-Bretagne",
        address: "123 rue Test 35000 Chartres-de-Bretagne",
        cars: [],
        users: [],
      },
    },
    {
      id: 1,
      roles: [Roles.admin, Roles.driver, Roles.user],
      password: "",
      firstName: "Noémie",
      lastName: "Foufé",
      phone: "012345678",
      email: "noemie.foufe@campus-eni.fr",
      driverLicenceCheck: true,
      isDriver: true,
      company: {
        id: 1,
        name: "ENI Nantes",
        address: "123 rue Test 44000 Nantes",
        cars: [],
        users: [],
      },
    },
    {
      id: 2,
      roles: [Roles.admin, Roles.driver, Roles.user],
      password: "",
      firstName: "Cao-Son",
      lastName: "Tran",
      phone: "012345678",
      email: "cao-son.tran@campus-eni.fr",
      driverLicenceCheck: true,
      isDriver: true,
      company: {
        id: 1,
        name: "ENI Chartres-de-Bretagne",
        address: "123 rue Test 35000 Chartres-de-Bretagne",
        cars: [],
        users: [],
      },
    },
    {
      id: 3,
      roles: [Roles.admin, Roles.driver, Roles.user],
      password: "",
      firstName: "Mattéo",
      lastName: "Moisan",
      phone: "012345678",
      email: "matteo.moisan@campus-eni.fr",
      driverLicenceCheck: true,
      isDriver: true,
      company: {
        id: 1,
        name: "ENI Chartres-de-Bretagne",
        address: "123 rue Test 35000 Chartres-de-Bretagne",
        cars: [],
        users: [],
      },
    },
  ],
};

export const reservationTest3: Reservation = {
  id: 987654,
  dateOfLoan: "2023-09-13 12:00",
  dateOfReturn: "2023-09-15 17:00",
  location: "ENI Chartres-de-Bretagne",
  destination: {
    address: "123 rue de Nantes Appartement 50 Batiment B",
    postalCode: "35000",
    city: "Rennes",
  },
  car: {
    id: 1,
    licensePlate: "AZ-123-ER",
    model: {
      brand: "Renault",
      label: "Clio",
    },
    gearbox: "automatique",
    options: [CarOptions.Bluetooth, CarOptions.GPS],
  },
  users: [
    {
      id: 1,
      roles: [Roles.admin, Roles.driver, Roles.user],
      password: "",
      firstName: "Noémie",
      lastName: "Foufé",
      phone: "012345678",
      email: "noemie.foufe@campus-eni.fr",
      driverLicenceCheck: true,
      isDriver: true,
      company: {
        id: 1,
        name: "ENI Chartres-de-Bretagne",
        address: "123 rue Test 35000 Chartres-de-Bretagne",
        cars: [],
        users: [],
      },
    },
  ],
};

export const allReservations = [
  reservationTest,
  reservationTest2,
  reservationTest3,
];

export const ReservationDetailsPage = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const params = useParams();
  const id = params.id;

  if (isNaN(Number(id))) {
    return (
      <AppLayout>
        <ErrorLayout
          description={`L'identifiant de réservation "${id}" est invalide. Veuillez réessayer.`}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <PageTitle
        text={`Détails de ma réservation #${id}`}
        scribbleColor={theme.palette.orange.light}
        scribbleVerticalOffset={isPhone ? "-54px" : undefined}
      />
      {isTablet ? (
        <ReservationDetailsComponent reservation={reservationTest} />
      ) : (
        <ReservationDetailsPhoneComponent reservation={reservationTest} />
      )}
    </AppLayout>
  );
};
