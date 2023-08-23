import { Box, SxProps, Typography } from "@mui/material";

export interface FormSectionTitleProps {
  icon: string;
  title: string;
  sx?: SxProps;
}

export const FormSectionTitle = ({
  icon,
  title,
  sx,
}: FormSectionTitleProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        columnGap: "6px",
        marginBottom: "18px",
        marginTop: "30px",
        ...sx,
      }}
    >
      <Box component="img" src={icon} sx={{ width: "25px" }} alt="Pin icône" />
      <Typography variant="h3">{title}</Typography>
    </Box>
  );
};
