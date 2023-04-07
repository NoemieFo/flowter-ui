import {
  Box,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "mui-image";
import { ScribbleImg } from "pictures/scribbleImg.component";
import ScribbleCompact from "pictures/scribble_compact.svg";

interface TitleProps {
  text: string;
  scribbleColor?: string;
  scribbleWidth?: string;
  scribbleVerticalOffset?: string;
}

export const PageTitle = ({
  text,
  scribbleColor,
  scribbleWidth,
  scribbleVerticalOffset,
}: TitleProps) => {
  const theme = useTheme();
  return (
    <TitleContainer component={"div"}>
      <TitleElements component={"div"}>
        <Typography variant="h1" zIndex="10">
          {text}
        </Typography>
        <ScribbleImg
          color={scribbleColor ?? theme.palette.green.light}
          style={{
            width: scribbleWidth ?? "410px",
            marginTop: scribbleVerticalOffset ?? "-64px",
          }}
        />
      </TitleElements>
    </TitleContainer>
  );
};

export const SectionTitle = ({
  text,
  scribbleColor,
  scribbleWidth,
  scribbleVerticalOffset,
}: TitleProps) => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <TitleContainer component={"div"}>
      <TitleElements component={"div"}>
        <Typography variant="h2" zIndex="10">
          {text}
        </Typography>
        <ScribbleImg
          color={scribbleColor ?? theme.palette.green.light}
          style={{
            width: scribbleWidth ?? "270px",
            marginTop: scribbleVerticalOffset ?? isPhone ? "-52px" : "-56px",
          }}
        />
      </TitleElements>
    </TitleContainer>
  );
};

export const SectionTitleCompact = ({
  text,
  scribbleVerticalOffset,
}: TitleProps) => {
  return (
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
