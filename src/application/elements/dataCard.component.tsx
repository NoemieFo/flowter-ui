import { Box, Stack, SxProps, useTheme } from "@mui/material";
import { FormSectionTitle } from "./formSectionTitle.component";

interface DataCardProps extends React.PropsWithChildren {
  title: string;
  iconPath: string;
  sticker?: boolean;
  sx?: SxProps;
}

export const DataCardComponent = ({
  title,
  iconPath,
  sticker,
  sx,
  children,
}: DataCardProps) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor={sticker ? theme.palette.primary.light : "white"}
      borderRadius="8px"
      border={sticker ? "0px" : "1px solid black"}
      marginTop="30px"
      padding={"0px 40px 20px 40px"}
      width={"100%"}
      sx={sx}
    >
      <Stack direction={"column"} alignItems={"center"}>
        <FormSectionTitle
          icon={iconPath}
          title={title}
          sx={{
            backgroundColor: sticker ? "none" : "white",
            padding: "0px 10px",
            marginTop: "-14px",
            width: "fit-content",
          }}
        />
        {children}
      </Stack>
    </Box>
  );
};
