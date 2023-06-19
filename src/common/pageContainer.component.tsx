import { Container, useMediaQuery, useTheme } from "@mui/material";
import { WebsiteLayout } from "@website/pages/website.layout";
import React from "react";

export const PageContainer = ({ children }: React.PropsWithChildren) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <WebsiteLayout>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: isPhone ? "30px" : "50px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          rowGap: "40px",
        }}
      >
        {children}
      </Container>
    </WebsiteLayout>
  );
};
