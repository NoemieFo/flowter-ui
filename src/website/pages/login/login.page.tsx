import { PageContainer } from "@common/pageContainer.component";
import { PageHeaderContainer } from "@common/pageHeaderContainer.component";
import { PageTitle } from "@common/titles.component";
import { Box, styled } from "@mui/material";
import { LoginForm } from "./elements/form.component";

export const LoginPage = (): JSX.Element => {
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

const LoginBox = styled(Box)(() => ({
  maxWidth: "500px",
  margin: "auto",
}));
