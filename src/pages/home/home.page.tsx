import { styled } from "@mui/material";
import { HeroComponent } from "./elements/hero.component";

export const HomePage = (): JSX.Element => {
  return (
    <HeroWrapper>
      <HeroComponent />
    </HeroWrapper>
  );
};

const HeroWrapper = styled("div")(() => ({
  height: "calc(100vh - 64px)",
  width: "100%",

  "@media (min-width:600px) and (max-width:960px)": {
    height: "auto",
  },
}));
