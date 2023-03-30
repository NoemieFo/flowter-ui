import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "website/pages/home/elements/navigation/navbar.component";
import { theme } from "./theme";
import { ContactUsPage } from "./website/pages/contact-us/contact-us.page";
import { HomePage } from "./website/pages/home/home.page";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        {/* <Route path="/a-propos" element={<ContactUsPage />} />
        <Route path="/fonctionnalites" element={<ContactUsPage />} />
        <Route path="/tarifs" element={<ContactUsPage />} /> */}
        <Route path="/nous-contacter" element={<ContactUsPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
