import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import ScribbleCompact from "@pictures/scribble_compact.svg";
import { ScribbleCompactImg, ScribbleImg } from "@pictures/scribbles.component";
import Image from "mui-image";

interface TitleProps {
  text: string;
  scribbleColor?: string;
  scribbleWidth?: string;
  scribbleVerticalOffset?: string;
  compact?: boolean;
  alignItems?: "center" | "right" | "left";
}

export const PageTitle = ({
  text,
  scribbleColor,
  scribbleWidth,
  scribbleVerticalOffset,
  compact,
  alignItems,
}: TitleProps) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      justifyContent="center"
      alignItems={alignItems ?? "center"}
      direction="column"
    >
      <Typography variant="h1" zIndex="10" id="page-title">
        {text}
      </Typography>
      {compact ? (
        <ScribbleCompactImg
          color={scribbleColor ?? theme.palette.green.light}
          style={{
            marginTop: isPhone ? "-55px" : scribbleVerticalOffset ?? "-60px",
            width: isPhone ? "150px" : scribbleWidth ?? "292px",
            height: "90px",
          }}
        />
      ) : (
        <ScribbleImg
          color={scribbleColor ?? theme.palette.green.light}
          style={{
            width: isPhone ? "260px" : scribbleWidth ?? "450px",
            marginTop: isPhone ? "-56px" : scribbleVerticalOffset ?? "-64px",
            height: "90px",
          }}
        />
      )}
    </Stack>
  );
};

export const SectionTitle = ({
  text,
  scribbleColor,
  scribbleWidth,
  scribbleVerticalOffset,
  compact,
}: TitleProps) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return compact ? (
    <Stack justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h2" zIndex="10">
        {text}
      </Typography>
      <Image
        src={ScribbleCompact}
        style={{ marginTop: scribbleVerticalOffset ?? "-40px" }}
        width="150px"
      />
    </Stack>
  ) : (
    <Stack justifyContent="center" alignItems="center" direction="column">
      <Typography variant="h2" zIndex="10">
        {text}
      </Typography>
      <ScribbleImg
        color={scribbleColor ?? theme.palette.green.light}
        style={{
          width: scribbleWidth ?? "250px",
          marginTop: scribbleVerticalOffset ?? isPhone ? "-32px" : "-42px",
        }}
      />
    </Stack>
  );
};
