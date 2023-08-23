import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { apps } from "./application/constants/applications";
import { AddCrashPage } from "./application/pages/addCrash.page";
import { DashboardPage } from "./application/pages/dashboard.page";
import { PlanningPage } from "./application/pages/planning.page";
import { AddReservationPage } from "./application/pages/reservations/add/addReservation.page";
import { AllReservationsPage } from "./application/pages/reservations/all/allReservations.page";
import { ReservationDetailsPage } from "./application/pages/reservations/details/reservationDetails.page";
import { EditReservationPage } from "./application/pages/reservations/edit/editReservation.page";
import { theme } from "./theme";
import { AboutPage } from "./website/pages/about/about.page";
import { ContactUsPage } from "./website/pages/contact-us/contactUs.page";
import { FeaturesPage } from "./website/pages/features/features.page";
import { HomePage } from "./website/pages/home/home.page";
import { LoginPage } from "./website/pages/login/login.page";
import { PricesPage } from "./website/pages/prices/prices.page";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Website */}
          <Route path="" element={<HomePage />} />
          <Route path="/fonctionnalites" element={<FeaturesPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/tarifs" element={<PricesPage />} />
          <Route path="/nous-contacter" element={<ContactUsPage />} />
          <Route path="/se-connecter" element={<LoginPage />} />
          {/* App */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path={apps.planning.subPages["myPlanning"].path}
            element={<PlanningPage />}
          />
          {/* Reservations */}
          <Route
            path={apps.reservations.subPages["myReservations"].path}
            element={<AllReservationsPage />}
          />
          <Route
            path={apps.reservations.subPages["addReservation"].path}
            element={<AddReservationPage />}
          />
          <Route
            path={apps.reservations.subPages["reservationDetails"].path}
            element={<ReservationDetailsPage />}
          />
          <Route
            path={apps.reservations.subPages["editReservation"].path}
            element={<EditReservationPage />}
          />
          <Route
            path={apps.crash.subPages["addCrash"].path}
            element={<AddCrashPage />}
          />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
