import { Box, Grid, Stack, Typography } from "@mui/material";
import Error from "@pictures/error.svg";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "./app.layout";

interface ErrorLayoutProps {
  description?: string;
  subtitle?: string;
  needRedirection?: boolean;
  path?: string; // should be set if needRedirection is true
}

export const ErrorLayout = ({
  description,
  subtitle,
  needRedirection,
  path,
}: ErrorLayoutProps) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (needRedirection) {
      const timer = setTimeout(() => {
        return navigate(path ?? "");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AppLayout>
      <Grid
        container
        spacing={4}
        alignItems="center"
        sx={{ width: "fit-content", margin: "auto" }}
      >
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={Error}
            alt={"Page d'erreur"}
            sx={{
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack>
            <Typography variant="h1">Erreur</Typography>
            {description && (
              <Typography variant="subtitle1">{description}</Typography>
            )}
            {subtitle && (
              <Typography marginTop="10px" variant="h4" color={"primary.dark"}>
                {subtitle}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
