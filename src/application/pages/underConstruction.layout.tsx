import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "mui-image";
import Construction1 from "~/pictures/construction1.svg";
import Construction2 from "~/pictures/construction2.svg";
import Construction3 from "~/pictures/construction3.svg";
import Construction4 from "~/pictures/construction4.svg";
import { AppLayout } from "./app.layout";

export const UnderConstruction = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const imagesSrc: string[] = [
    Construction1,
    Construction2,
    Construction3,
    Construction4,
  ];

  return (
    <AppLayout>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ width: "fit-content", margin: "auto" }}
      >
        <Grid item xs={6} md={4}>
          <Image
            src={imagesSrc[getRandomInt(4)]}
            alt={"Page en construction"}
            style={{ maxWidth: isPhone ? "180px" : "250px" }}
            duration={0}
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography variant="h1">Page en construction</Typography>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
