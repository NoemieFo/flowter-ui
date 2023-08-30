import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { Box, Stack, SxProps, Typography } from "@mui/material";

interface MessageProps {
  sx?: SxProps;
  error: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
}

export const Message = ({ error, description, type, sx }: MessageProps) => {
  let backgroundColor;
  let borderColor;
  let icon;
  let desc = description ?? "";

  switch (type) {
    case "error":
      backgroundColor = "#FEE2E2";
      borderColor = "#F10B19";
      icon = <ErrorOutlineIcon />;
      desc =
        description ??
        "Rafraîchissez la page pour réessayer ou contactez un administrateur si le problème persiste";
      break;
    case "warning":
      backgroundColor = "#FCE5D5";
      borderColor = "#F16C0B";
      icon = <WarningAmberIcon />;
      desc =
        description ??
        "Rafraîchissez la page pour réessayer ou contactez un administrateur si le problème persiste";
      break;
    case "success":
      backgroundColor = "#D9F2D8";
      borderColor = "#3BC58B";
      icon = <CheckCircleOutlineIcon />;
      break;
    case "info":
      backgroundColor = "#DAF0F2";
      borderColor = "#0B9EF1";
      icon = <InfoOutlinedIcon />;
      break;
  }

  return (
    <Box
      bgcolor={backgroundColor}
      padding={"14px"}
      border={`1px solid ${borderColor}`}
      borderRadius={"4px"}
      sx={sx}
    >
      <Stack direction="column">
        <Box>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            {icon}
            <Typography variant="h4" color={"black"}>
              {error}
            </Typography>
          </Stack>
        </Box>
        <Typography variant="caption">{desc}</Typography>
      </Stack>
    </Box>
  );
};
