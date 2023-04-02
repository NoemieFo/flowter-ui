import { Button, styled } from "@mui/material";
import { ArrowIcon } from "pictures/icons/arrowIcon.component";
import { Link } from "react-router-dom";

export interface ButtonProps {
  disabled?: boolean;
  text: string;
  icon?: JSX.Element;
}

export const ButtonMainComponent = ({
  text,
  icon,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <Button color="primary" variant="contained" disabled={disabled}>
      {text}
      {icon}
    </Button>
  );
};

export interface ButtonSecondaryProps extends ButtonProps {
  color: any;
  path?: string;
}

export const ButtonSecondaryComponent = ({
  text,
  color,
  disabled,
  path,
}: ButtonSecondaryProps): JSX.Element => {
  return (
    <Link to={path ?? ""} style={{ textDecoration: "none" }}>
      <Button
        color={color}
        variant="outlined"
        disabled={disabled}
        sx={{ width: "fit-content" }}
      >
        {text}
      </Button>
    </Link>
  );
};

interface MoreInformationButtonProps {
  path: string;
}

export const MoreInformationButton = ({ path }: MoreInformationButtonProps) => {
  return (
    <LinkToPage to={path}>
      En savoir plus <ArrowIcon />
    </LinkToPage>
  );
};

const LinkToPage = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "black",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "16px",
  borderBottom: `2px solid ${theme.palette.green.main}`,
  width: "fit-content",
  margin: "30px auto",
  paddingBottom: "4px",

  [theme.breakpoints.down("sm")]: {
    margin: "30px 0px 0px 0px",
  },
}));
