import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import { AboutPage } from "./website/pages/about/about.page";
import { ContactUsPage } from "./website/pages/contact-us/contactUs.page";
import { FeaturesPage } from "./website/pages/features/features.page";
import { HomePage } from "./website/pages/home/home.page";
import { LoginPage } from "./website/pages/login/login.page";
import { PricesPage } from "./website/pages/prices/prices.page";

const App = () => {
  return (
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
      </Routes>
    </ThemeProvider>
  );
};

export default App;
