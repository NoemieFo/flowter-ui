import { Box, Grid, Typography } from "@mui/material";
import Construction1 from "@pictures/construction1.svg";
import Construction2 from "@pictures/construction2.svg";
import Construction3 from "@pictures/construction3.svg";
import Construction4 from "@pictures/construction4.svg";
import { AppLayout } from "./app.layout";

export const UnderConstruction = () => {
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
          <Box
            component="img"
            src={imagesSrc[getRandomInt(4)]}
            alt={"Page en construction"}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={6} md={8}>
          <Typography variant="h1">Page en construction</Typography>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
