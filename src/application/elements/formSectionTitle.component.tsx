import { Box, Typography } from "@mui/material";
import Image from "mui-image";

export interface FormSectionTitleProps {
  icon: string;
  title: string;
}

export const FormSectionTitle = ({ icon, title }: FormSectionTitleProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "6px",
        marginBottom: "18px",
        marginTop: "30px",
      }}
    >
      <Image src={icon} width={"25px"} duration={0} />
      <Typography variant="h6">{title}</Typography>
    </Box>
  );
};
