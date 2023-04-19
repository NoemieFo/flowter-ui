import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { theme } from "./theme";
import { AboutPage } from "./website/pages/about/about.page";
import { ContactUsPage } from "./website/pages/contact-us/contactUs.page";
import { FeaturesPage } from "./website/pages/features/features.page";
import { Navbar } from "./website/pages/home/elements/navigation/navbar.component";
import { HomePage } from "./website/pages/home/home.page";
import { PricesPage } from "./website/pages/prices/prices.page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/fonctionnalites" element={<FeaturesPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/tarifs" element={<PricesPage />} />
        <Route path="/nous-contacter" element={<ContactUsPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
