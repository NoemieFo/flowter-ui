import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ButtonMainComponent } from "common/buttons.component";
import Parking from "pictures/home_parking.svg";
import ArrowIcon from "pictures/icons/arrow.svg";
import TitleBg from "pictures/title_bg.svg";

export const HeroComponent = (): JSX.Element => {
  const theme = useTheme();
  const isPhoneDisplay = useMediaQuery(theme.breakpoints.down("sm"));
  const isHorizontalTabletDisplay = useMediaQuery(
    theme.breakpoints.between("md", "lg")
  );

  let headerContent;

  if (isPhoneDisplay) {
    headerContent = (
      <>
        La solution de gestion <br />
        de flotte de véhicules d'entreprise qu'il vous faut.
      </>
    );
  } else if (isHorizontalTabletDisplay) {
    headerContent = (
      <>
        La solution <br /> de gestion de flotte <br />
        de véhicules d'entreprise <br /> qu'il vous faut.
      </>
    );
  } else {
    headerContent = (
      <>
        La solution de gestion de flotte
        <br />
        de véhicules d'entreprise
        <br /> qu'il vous faut.
      </>
    );
  }

  const header = (
    <HeroHeader component={"div"}>
      <Typography variant="h1">{headerContent}</Typography>
      {!isPhoneDisplay && (
        <Box
          component={"img"}
          className="title-scribble-img"
          alt="Arrow icon"
          sx={{
            position: "absolute",
            bottom: "0",
            marginLeft: "-35px",
            zIndex: "-10",
          }}
          src={TitleBg}
        />
      )}
    </HeroHeader>
  );

  const subheader = (
    <HeroSubHeader component={"p"}>
      Gérez votre flotte automobile interne simplement et efficacement.
      <br />
      Découvrez Flowter.
    </HeroSubHeader>
  );

  return (
    <HeroGrid component={"div"}>
      <LeftColumn>
        <div>
          {header}
          {subheader}
          <ButtonMainComponent
            text="Découvrir"
            icon={
              <Box
                component={"img"}
                sx={{ marginLeft: "10px" }}
                src={ArrowIcon}
              />
            }
          />
        </div>
      </LeftColumn>
      <Box
        component={"img"}
        className="parking-img"
        alt="Voitures dans un parking"
        src={Parking}
        sx={{
          height: "90%",
          "@media only screen and (max-width: 600px)": {
            width: "100%",
            height: "auto",
            marginRight: "-150px",
            marginTop: "-100px",
          },
          "@media (min-width:600px) and (max-width:960px)": {
            marginRight: "-400px",
            marginTop: "-280px",
            width: "60%",
          },
          "@media (min-width:961px) and (max-width:1280px)": {
            width: "70%",
            marginRight: "-150px",
          },
        }}
      />
    </HeroGrid>
  );
};

const HeroHeader = styled(Box)(({ theme }) => ({
  maxWidth: "630px",
  position: "relative",
  paddingBottom: "18px",

  [theme.breakpoints.down("sm")]: {
    paddingBottom: "0",
  },
}));

const HeroSubHeader = styled(Box)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "150%",
  width: "450px",

  [theme.breakpoints.down("sm")]: {
    width: "auto",
    fontSize: "18px",
  },
}));

const LeftColumn = styled(Box)(({ theme }) => ({
  width: "65%",
  display: "flex",
  alignItems: "center",
  paddingLeft: "80px",

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "40px 20px",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    width: "100%",
    padding: "50px",
  },
}));

const HeroGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100%",
  alignItems: "center",
  overflow: "hidden",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));
