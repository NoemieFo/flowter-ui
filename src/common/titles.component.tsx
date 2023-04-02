import { Box, Typography, styled, useTheme } from "@mui/material";
import Image from "mui-image";
import { ScribbleImg } from "pictures/scribbleImg.component";
import ScribbleCompact from "pictures/scribble_compact.svg";

interface TitleProps {
  text: string;
  scribbleColor?: string;
  scribbleWidth?: string;
  scribbleVerticalOffset?: string;
}

export const SectionTitle = ({
  text,
  scribbleColor,
  scribbleWidth,
  scribbleVerticalOffset,
}: TitleProps) => {
  const theme = useTheme();
  return (
    <TitleContainer component={"div"}>
      <TitleElements component={"div"}>
        <Typography variant="h2">{text}</Typography>
        <ScribbleImg
          color={scribbleColor ?? theme.palette.green.light}
          style={{
            width: scribbleWidth ?? "270px",
            marginTop: scribbleVerticalOffset ?? "-50px",
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
    // <TitleContainer component={"div"}>
    <TitleElements component={"div"}>
      <Typography variant="h2">{text}</Typography>
      <Image
        src={ScribbleCompact}
        style={{ marginTop: scribbleVerticalOffset ?? "-40px" }}
        width="150px"
      />
    </TitleElements>
    // </TitleContainer>
  );
};

const TitleElements = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  h2: {
    zIndex: 10,
  },
}));

const TitleContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
}));
