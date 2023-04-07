import { Container, useMediaQuery, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";
import { Footer } from "website/pages/home/elements/footer.component";

interface Props extends PropsWithChildren {}

export const PageContainer = ({ children }: Props) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
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
    </div>
  );
};
