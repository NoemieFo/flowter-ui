import { apps } from "@application/constants/applications";
import { AddCrashPage } from "@application/pages/addCrash.page";
import { DashboardPage } from "@application/pages/dashboard.page";
import { PlanningPage } from "@application/pages/planning.page";
import { EditPasswordPage } from "@application/pages/profile/editPassword.page";
import { EditProfilePage } from "@application/pages/profile/editProfile.page";
import { ProfileDetailsPage } from "@application/pages/profile/profileDetails.page";
import { AddReservationPage } from "@application/pages/reservations/add/addReservation.page";
import { AllReservationsPage } from "@application/pages/reservations/all/allReservations.page";
import { ReservationDetailsPage } from "@application/pages/reservations/details/reservationDetails.page";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AboutPage } from "@website/pages/about/about.page";
import { ContactUsPage } from "@website/pages/contact-us/contactUs.page";
import { FeaturesPage } from "@website/pages/features/features.page";
import { HomePage } from "@website/pages/home/home.page";
import { LoginPage } from "@website/pages/login/login.page";
import { PricesPage } from "@website/pages/prices/prices.page";
import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import { hasWriteRight } from "./application/constants/user.constants";
import { Page403 } from "./application/pages/403.page";
import { theme } from "./theme";

const App = () => {
  const queryClient = new QueryClient();
  const [isConnected, setIsConnected] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (localStorage?.getItem("userLastname")) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [localStorage]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
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
            element={isConnected ? <PlanningPage /> : <Page403 />}
          />
          {/* Profile */}
          <Route
            path={apps.profile.subPages["myProfile"].path}
            element={isConnected ? <ProfileDetailsPage /> : <Page403 />}
          />
          <Route
            path={apps.profile.subPages["editProfile"].path}
            element={isConnected ? <EditProfilePage /> : <Page403 />}
          />
          <Route
            path={apps.profile.subPages["editPassword"].path}
            element={isConnected ? <EditPasswordPage /> : <Page403 />}
          />
          {/* Reservations */}
          <Route
            path={apps.reservations.subPages["myReservations"].path}
            element={isConnected ? <AllReservationsPage /> : <Page403 />}
          />
          <Route
            path={apps.reservations.subPages["addReservation"].path}
            element={
              isConnected && hasWriteRight ? (
                <AddReservationPage />
              ) : (
                <Page403 />
              )
            }
          />
          <Route
            path={apps.reservations.subPages["reservationDetails"].path}
            element={isConnected ? <ReservationDetailsPage /> : <Page403 />}
          />
          <Route
            path={apps.crash.subPages["addCrash"].path}
            element={
              isConnected && hasWriteRight ? <AddCrashPage /> : <Page403 />
            }
          />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
