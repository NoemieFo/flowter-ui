import { useMediaQuery, useTheme } from "@mui/material";
import { CarOptions } from "~/application/constants/categories.constants";
import { Roles } from "~/application/constants/people.constants";
import {
  EniSchoolsNames,
  eniSchools,
} from "~/application/constants/places.constants";
import { Reservation } from "~/application/constants/reservations.constants";
import { PageTitle } from "~/common/titles.component";
import { AppLayout } from "../../app.layout";
import { ReservationDetailsPhoneComponent } from "./phone/reservationDetailsPhone.component";
import { ReservationDetailsComponent } from "./reservationDetails.component";

const reservationTest: Reservation = {
  id: 123456,
  dateOfLoan: "2023-11-12 09:00",
  dateOfReturn: "2023-11-12 11:00",
  location: EniSchoolsNames.EniChartres,
  destination: "123 rue de Nantes 35000 Rennes",
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
        name: EniSchoolsNames.EniChartres,
        address: `${eniSchools["ENI Chartres-de-Bretagne"].address} ${eniSchools["ENI Chartres-de-Bretagne"].postalcode} ${eniSchools["ENI Chartres-de-Bretagne"].city}`,
        cars: [],
        users: [],
      },
    },
  ],
};

export const ReservationDetailsPage = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppLayout>
      <PageTitle
        text={`Détails de ma réservation #${reservationTest.id}`}
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
