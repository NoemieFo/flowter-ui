import { createTheme } from "@mui/material/styles";

export const lightGrey = "#F5F5F5";
const mainBlue = "#35A3E7";
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
    purple: Palette["secondary"];
    orange: Palette["secondary"];
    pink: Palette["secondary"];
    turquoise: Palette["secondary"];
    green: Palette["secondary"];
  }

  interface PaletteOptions {
    purple: PaletteOptions["secondary"];
    orange: PaletteOptions["secondary"];
    pink: PaletteOptions["secondary"];
    turquoise: PaletteOptions["secondary"];
    green: PaletteOptions["secondary"];
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

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

enum Breakpoints {
  xs = 0,
  sm = 600,
  md = 960,
  lg = 1200,
  xl = 1536,
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: Breakpoints.xs,
      sm: Breakpoints.sm,
      md: Breakpoints.md,
      lg: Breakpoints.lg,
      xl: Breakpoints.xl,
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
        fontSize: "24px",
      },
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "24px",
      color: "black",
      lineHeight: "150%",
      "@media only screen and (max-width: 600px)": {
        fontSize: "18px",
      },
    },
    h3: {
      fontFamily: "Poppins",
      fontWeight: "700",
      fontSize: "18px",
      color: "black",
      lineHeight: "150%",
      "@media only screen and (max-width: 600px)": {
        fontSize: "16px",
      },
    },
    body1: {
      fontFamily: "Lato",
      fontSize: "15px",
      fontWeight: "300",
      color: "black",
      lineHeight: "150%",
      opacity: "100%",
      "@media only screen and (max-width: 600px)": {
        fontSize: "15px",
      },
    },
    subtitle1: {
      fontFamily: "Lato",
      fontSize: "24px",
      lineHeight: "150%",
      "@media only screen and (max-width: 600px)": {
        width: "auto",
        fontSize: "18px",
      },
    },
    subtitle2: {
      fontFamily: "Lato",
      fontSize: "18px",
      lineHeight: "150%",
      textAlign: "center",
      "@media only screen and (max-width: 600px)": {
        width: "auto",
        fontSize: "16px",
        textAlign: "left",
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
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "purple" && {
              ":hover": {
                backgroundColor: secondaryPurpleLight,
                background: secondaryPurpleLight,
                border: `2px solid ${secondaryPurpleLight}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryPurpleLight}`,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "orange" && {
              ":hover": {
                backgroundColor: secondaryOrangeLight,
                background: secondaryOrangeLight,
                border: `2px solid ${secondaryOrangeLight}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryOrangeLight}`,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "pink" && {
              ":hover": {
                backgroundColor: secondaryPinkLight,
                background: secondaryPinkLight,
                border: `2px solid ${secondaryPinkLight}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryPinkLight}`,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "turquoise" && {
              ":hover": {
                backgroundColor: secondaryTurquoiseLight,
                background: secondaryTurquoiseLight,
                border: `2px solid ${secondaryTurquoiseLight}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryPinkLight}`,
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
