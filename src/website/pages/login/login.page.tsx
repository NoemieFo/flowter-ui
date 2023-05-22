import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { PageContainer } from "~/common/pageContainer.component";
import { PageHeaderContainer } from "~/common/pageHeaderContainer.component";
import { PageTitle } from "~/common/titles.component";
import { LoginForm } from "./elements/form.component";

export const LoginPage = (): JSX.Element => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <PageContainer>
      <PageHeaderContainer>
        <PageTitle text="Se connecter" />
      </PageHeaderContainer>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </PageContainer>
  );
};

const LoginBox = styled(Box)(({ theme }) => ({
  maxWidth: "500px",
  margin: "auto",
}));
