import { Breakpoints } from "@common/constants/breakpoints";
import { createTheme } from "@mui/material/styles";

const lightGrey = "#F5F5F5";
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
    lightGrey: Palette["secondary"];
  }

  interface PaletteOptions {
    purple: PaletteOptions["secondary"];
    orange: PaletteOptions["secondary"];
    pink: PaletteOptions["secondary"];
    turquoise: PaletteOptions["secondary"];
    green: PaletteOptions["secondary"];
    lightGrey: PaletteOptions["secondary"];
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

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
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

declare module "@mui/material/styles" {
  interface TypographyVariants {
    caption2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    caption2: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption2: true;
  }
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
    lightGrey: { main: lightGrey },
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
    h4: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "16px",
      color: "white",
      lineHeight: "150%",
    },
    h5: {
      fontFamily: "Lato",
      fontWeight: "500",
      fontSize: "16px",
      color: "white",
      lineHeight: "150%",
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: "600",
      fontSize: "14px",
      color: "black",
      lineHeight: "150%",
    },
    body1: {
      fontFamily: "Lato",
      fontSize: "16px",
      fontWeight: "300",
      color: "black",
      lineHeight: "150%",
      opacity: "100%",
    },
    body2: {
      fontFamily: "Lato",
      fontSize: "14px",
      fontWeight: "300",
      color: "black",
      lineHeight: "150%",
      opacity: "100%",
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
      fontSize: "20px",
      lineHeight: "150%",
      textAlign: "center",
      "@media only screen and (max-width: 600px)": {
        width: "auto",
        fontSize: "16px",
        textAlign: "left",
      },
    },
    caption: {
      fontFamily: "Lato",
      fontSize: "14px",
    },
    caption2: {
      fontFamily: "Poppins",
      fontSize: "12px",
      fontWeight: "300",
      color: "black",
      lineHeight: "150%",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: () => ({
          backgroundColor: lightBlue,
          boxShadow: "none",
          fontFamily: "Poppins",
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
    MuiListItemText: {
      styleOverrides: {
        primary: () => ({
          fontFamily: "Poppins, Arial",
          fontWeight: "bold",
          fontSize: "14px",
        }),
        secondary: () => ({ fontSize: "16px", color: "black" }),
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
              border: `2px solid ${secondaryPurple}`,
              ":hover": {
                backgroundColor: secondaryPurpleLight,
                background: secondaryPurpleLight,
                border: `2px solid ${secondaryPurple}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryPurple}`,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "orange" && {
              border: `2px solid ${secondaryOrange}`,
              ":hover": {
                backgroundColor: secondaryOrangeLight,
                background: secondaryOrangeLight,
                border: `2px solid ${secondaryOrange}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryOrange}`,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "pink" && {
              border: `2px solid ${secondaryPink}`,
              ":hover": {
                backgroundColor: secondaryPinkLight,
                background: secondaryPinkLight,
                border: `2px solid ${secondaryPink}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryPink}`,
              },
            }),
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "turquoise" && {
              border: `2px solid ${secondaryTurquoise}`,
              ":hover": {
                backgroundColor: secondaryTurquoiseLight,
                background: secondaryTurquoiseLight,
                border: `2px solid ${secondaryTurquoise}`,
              },
              ":disabled": {
                opacity: "50%",
                border: `2px solid ${secondaryTurquoise}`,
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
