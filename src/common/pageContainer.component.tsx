import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
import { Footer } from "website/pages/home/elements/footer.component";

interface Props extends PropsWithChildren {}

export const PageContainer = ({ children }: Props) => {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: "50px",
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
};
