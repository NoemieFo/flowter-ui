import {
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FooterButton } from "~/common/buttons.component";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "~/pictures/icons/logo_social_network.component";
import { RouteDetails, websiteRoutes } from "~/website/constants/routes";

interface FooterProps {
  isHome: boolean;
}

export const Footer = ({ isHome }: FooterProps): JSX.Element => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      sx={{
        // position: "fixed",
        height: "250px",
        display: "flex",
        rowGap: "20px",
        backgroundColor: theme.palette.primary.light,
        flexDirection: "row",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
        [theme.breakpoints.down("sm")]: {
          marginTop: isHome ? "180px" : "0px",
        },
      }}
    >
      {isTablet && <FooterTablet isTablet={isTablet} />}
      {!isTablet && <FooterDesktop isTablet={isTablet} />}
    </Grid>
  );
};

interface FooterElementProps {
  isTablet: boolean;
}
const FooterTablet = ({ isTablet }: FooterElementProps): JSX.Element => {
  return (
    <GridTablet>
      <Title />
      <Logos isTablet={isTablet} />
      <Pages />
    </GridTablet>
  );
};

const FooterDesktop = ({ isTablet }: FooterElementProps): JSX.Element => {
  return (
    <>
      <GridLeftDesktop>
        <Title />
        <Pages />
      </GridLeftDesktop>
      <Logos isTablet={isTablet} />
    </>
  );
};

const Title = (): JSX.Element => {
  return <Typography variant="h2">Flowter</Typography>;
};

const Logos = ({ isTablet }: FooterElementProps): JSX.Element => {
  return (
    <GridLogo>
      <FacebookIcon isTablet={isTablet} />
      <InstagramIcon isTablet={isTablet} />
      <TwitterIcon isTablet={isTablet} />
    </GridLogo>
  );
};

const Pages = (): JSX.Element => {
  const items: {
    [k: string]: RouteDetails;
  } = Object.fromEntries(
    Object.entries(websiteRoutes).filter(([key, _]) => key !== "home")
  );
  return (
    <GridRoutes>
      {Object.values(items).map((item, index) => (
        <FooterButton text={item.name} path={item.path} />
      ))}
    </GridRoutes>
  );
};

const GridLeftDesktop = styled(Grid)(({ theme }) => ({
  flexDirection: "column",
  gridTemplateColumns: "repeat(auto-fill)",
  display: "grid",
  rowGap: "20px",
  padding: "40px",
  width: "50%",

  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));

const GridTablet = styled(Grid)(() => ({
  flexDirection: "column",
  gridTemplateColumns: "repeat(auto-fill)",
  display: "grid",
  rowGap: "20px",
  padding: "20px",
}));

const GridLogo = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  gridTemplateColumns: "repeat(auto-fit, 10%)",
  justifyContent: "flex-end",
  display: "grid",
  columnGap: "0px",
  rowGap: "0px",
  width: "50%",
  padding: "40px",

  [theme.breakpoints.down("md")]: {
    padding: "0px 0px 30px 0px",
    gridTemplateColumns: "repeat(auto-fill, 33%)",
    justifyContent: "flex-start",
  },
}));

const GridRoutes = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gridTemplateColumns: "repeat(auto-fill, 33%)",
  display: "grid",
  rowGap: "20px",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(auto-fill, 50%)",
    rowGap: "10px",
  },
}));
