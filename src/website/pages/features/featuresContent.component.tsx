import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "mui-image";
import React from "react";
import { features } from "website/constants/features";

export const FeaturesContent = (): JSX.Element => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const isPair = (number: number) => {
    return number % 2 === 0;
  };

  const grid = (
    <Grid
      container
      spacing={isPhone ? 4 : 8}
      alignItems="center"
      columns={{ xs: 1, sm: 12 }}
    >
      {features.map((feature, index) => {
        const columnImg = (
          <Grid item xs={4} id={feature.id.toString()}>
            <Image
              src={feature.img.path}
              alt={feature.img.description}
              style={{ maxWidth: isPhone ? "180px" : "250px" }}
            />
          </Grid>
        );
        const columnDetails = (
          <Grid item xs={8}>
            <Typography gutterBottom variant="h2">
              {feature.title}
            </Typography>
            <Typography variant="body1">{feature.description}</Typography>
          </Grid>
        );

        return isPhone || isPair(index) ? (
          <React.Fragment key={index}>
            {columnImg}
            {columnDetails}
          </React.Fragment>
        ) : (
          <React.Fragment key={index}>
            {columnDetails}
            {columnImg}
          </React.Fragment>
        );
      })}
    </Grid>
  );

  return grid;
};
