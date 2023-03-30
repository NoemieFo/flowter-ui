import { createTheme } from "@mui/material/styles";

const mainBlue = "#35A3E7";
const lightGrey = "#F5F5F5";
const lightBlue = "#EBF0F4";
const darkBlue = "#455A64";

const secondaryPink = "#FF8BBD";
const secondaryPurple = "#C0A5FC";
const secondaryOrange = "#FFAF51";
const secondaryTurquoise = "#80E3B1";
const secondaryPinkLight = "#FFCEE3";
const secondaryPurpleLight = "#D9CBF7";
const secondaryOrangeLight = "#FFE3C2";
const secondaryTurquoiseLight = "#D9FFEC";
const secondaryGreen = "#BEEB3F";
const secondaryGreenLight = "#E4F7AE";

const success = "#30A373";
const error = "#F10B19";
const successLight = "#D9F2D8";
const errorLight = "#FEE2E2";

declare module "@mui/material/styles" {
  interface Palette {
    purple: Palette["primary"];
    orange: Palette["primary"];
    pink: Palette["primary"];
    turquoise: Palette["primary"];
    green: Palette["primary"];
  }

  interface PaletteOptions {
    purple: PaletteOptions["primary"];
    orange: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
    turquoise: PaletteOptions["primary"];
    green: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    purple: true;
    orange: true;
    pink: true;
    turquoise: true;
    green: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: mainBlue,
      dark: darkBlue,
      light: lightBlue,
    },
    purple: { main: secondaryPurple, light: secondaryPurpleLight },
    orange: { main: secondaryOrange, light: secondaryOrangeLight },
    turquoise: { main: secondaryTurquoise, light: secondaryTurquoiseLight },
    pink: { main: secondaryPink, light: secondaryPinkLight },
    green: { main: secondaryGreen, light: secondaryGreenLight },
  },
  typography: {
    fontFamily: ["Lato", "Arial", "sans-serif"].join(","),
    h1: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "40px",
      color: "black",
      lineHeight: "150%",
      "@media only screen and (max-width: 600px)": {
        fontSize: "22px",
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: () => ({
          backgroundColor: lightBlue,
          boxShadow: "none",
          fontFamily: "Poppins",
          fontWeight: "medium",
          fontSize: "18px",
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: () => ({
          display: "flex",
          flexGrow: "2",
          justifyContent: "space-between",
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // Special theme for main buttons
          ...(ownerState.variant === "contained" && {
            backgroundColor: secondaryGreen,
            ":hover": {
              background: secondaryGreen,
              boxShadow: "none",
            },
            ":disabled": {
              border: `2px solid ${secondaryGreen}`,
              backgroundColor: secondaryGreenLight,
              opacity: "50%",
            },
          }),
          // Special theme for secondary buttons
          ...(ownerState.variant === "outlined" && {
            ":hover": {
              backgroundColor: ownerState.color,
              border: `2px solid ${ownerState.color}`,
            },
            ":disabled": {
              opacity: "50%",
              border: `2px solid ${ownerState.color}`,
            },
          }),
          borderRadius: "50px",
          boxShadow: "none",
          textTransform: "none",
          padding: "0 50px",
          height: "42px",
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: "18px",
          borderWidth: "2px",
          color: "black",
          "@media only screen and (max-width: 600px)": {
            fontSize: "15px",
          },
        }),
      },
    },
  },
});
