import { Box, Container, styled, useMediaQuery, useTheme } from "@mui/material";
import { PropsWithChildren } from "react";
import { Footer } from "~/website/pages/home/elements/footer.component";

interface Props extends PropsWithChildren {}

export const PageContainer = ({ children }: Props) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BoxContainer>
      <Container
        maxWidth="lg"
        sx={{
          marginTop: isPhone ? "30px" : "50px",
          marginBottom: "50px",
          rowGap: "40px",
        }}
      >
        {children}
      </Container>
      <Footer />
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
}));
