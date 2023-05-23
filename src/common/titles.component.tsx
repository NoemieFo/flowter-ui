import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "mui-image";
import ScribbleCompact from "~/pictures/scribble_compact.svg";
import {
  ScribbleCompactImg,
  ScribbleImg,
} from "~/pictures/scribbles.component";

interface TitleProps {
  text: string;
  scribbleColor?: string;
  scribbleWidth?: string;
  scribbleVerticalOffset?: string;
  compact?: boolean;
}

export const PageTitle = ({
  text,
  scribbleColor,
  scribbleWidth,
  scribbleVerticalOffset,
  compact,
}: TitleProps) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TitleContainer component={"div"}>
      <TitleElements component={"div"}>
        <Typography variant="h1" zIndex="10">
          {text}
        </Typography>
        {compact ? (
          <ScribbleCompactImg
            color={scribbleColor ?? theme.palette.green.light}
            style={{
              marginTop: isPhone ? "-55px" : scribbleVerticalOffset ?? "-60px",
              width: isPhone ? "150px" : scribbleWidth ?? "220px",
              height: "90px",
            }}
          />
        ) : (
          <ScribbleImg
            color={scribbleColor ?? theme.palette.green.light}
            style={{
              width: scribbleWidth ?? "410px",
              marginTop: isPhone ? "-56px" : scribbleVerticalOffset ?? "-64px",
              height: "90px",
            }}
          />
        )}
      </TitleElements>
    </TitleContainer>
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
    <TitleElements component={"div"}>
      <Typography variant="h2" zIndex="10">
        {text}
      </Typography>
      <Image
        src={ScribbleCompact}
        style={{ marginTop: scribbleVerticalOffset ?? "-40px" }}
        width="150px"
      />
    </TitleElements>
  ) : (
    <TitleContainer component={"div"}>
      <TitleElements component={"div"}>
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
      </TitleElements>
    </TitleContainer>
  );
};

const TitleElements = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const TitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",

  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
  },
}));
