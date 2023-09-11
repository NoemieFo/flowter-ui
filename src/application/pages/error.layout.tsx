import { Box, Grid, Stack, Typography } from "@mui/material";
import Error from "@pictures/error.svg";
import { AppLayout } from "./app.layout";

interface ErrorLayoutProps {
  description?: string;
}

export const ErrorLayout = ({ description }: ErrorLayoutProps) => {
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
          </Stack>
        </Grid>
      </Grid>
    </AppLayout>
  );
};
