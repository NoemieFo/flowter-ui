import { Box, Typography, styled, useTheme } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  return (
    <FooterSection height="150px" bgcolor={theme.palette.primary.light}>
      <Typography variant="body1">Footer will come here!!</Typography>
    </FooterSection>
  );
};

const FooterSection = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginTop: "174px",
  },
}));
