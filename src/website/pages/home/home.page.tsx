import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import PricesMobile from "pictures/prices_mobile.svg";
import { FeaturesSection } from "./elements/features.component";
import { HeroComponent } from "./elements/hero.component";
import { PricesSection } from "./elements/prices.component";
import { WhatIsFlowter } from "./elements/whatIsFlowter.component";

export const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const isPhoneDisplay = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <HeroWrapper>
        <HeroComponent />
      </HeroWrapper>
      <WhatIsFlowter />
      <FeaturesSection />
      <PricesSection />
      {isPhoneDisplay && (
        <img
          src={PricesMobile}
          alt="tarifs"
          style={{
            width: "65%",
            position: "absolute",
            right: "0",
            marginTop: "-60px",
          }}
        />
      )}
    </>
  );
};

const HeroWrapper = styled(Box)(() => ({
  height: "calc(100vh - 64px)",
  width: "100%",
  maxWidth: "2000px",
  margin: "auto",

  "@media (max-width:960px)": {
    height: "auto",
  },
}));
