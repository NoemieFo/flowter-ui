import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import PricesMobile from "~/pictures/prices_mobile.svg";
import { FeaturesSection } from "./elements/features.component";
import { HeroComponent } from "./elements/hero.component";
import { PricesSection } from "./elements/prices.component";
import { WhatIsFlowter } from "./elements/whatIsFlowter.component";

export const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        height={isDesktop ? "calc(100vh - 64px)" : "auto"}
        width="100%"
        maxWidth="2000px"
        margin="auto"
      >
        <HeroComponent />
      </Box>
      <WhatIsFlowter />
      <FeaturesSection />
      <PricesSection />
      {isPhone && (
        <img
          src={PricesMobile}
          alt="tarifs"
          style={{
            width: "245px",
            position: "absolute",
            right: "0",
            marginTop: "-60px",
          }}
        />
      )}
      {/* TODO: use generic footer once done */}
      <Box
        height="150px"
        bgcolor={theme.palette.primary.light}
        sx={{
          [theme.breakpoints.down("sm")]: {
            marginTop: "174px",
          },
        }}
      >
        <Typography variant="body1">Footer will come here!!</Typography>
      </Box>
    </>
  );
};
