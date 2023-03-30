import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./common/navbar.component";
import { ContactUsPage } from "./pages/contact-us/contact-us.page";
import { HomePage } from "./pages/home/home.page";
import { theme } from "./theme";

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
