import { Container, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Footer } from "~/website/pages/home/elements/footer.component";
import { WebsiteLayout } from "~/website/pages/website.layout";

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
      <Footer />
    </WebsiteLayout>
  );
};
