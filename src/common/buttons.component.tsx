import { Box, Button, styled, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowIcon } from "~/pictures/icons/arrowIcon.component";
import { theme } from "~/theme";

export interface ButtonProps {
  disabled?: boolean;
  text: string;
  icon?: JSX.Element;
  path?: string;
}

export const ButtonMainComponent = ({
  text,
  icon,
  disabled,
  path,
}: ButtonProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Link to={path ?? ""} style={{ textDecoration: "none" }}>
      <Button
        color="primary"
        variant="contained"
        disabled={disabled}
        sx={{
          width: "fit-content",
          ":hover": {
            backgroundColor: theme.palette.secondary.main,
            color: "white",
          },
        }}
      >
        {text}
        {icon}
      </Button>
    </Link>
  );
};

export interface ButtonSecondaryProps extends ButtonProps {
  color: any;
}

export const ButtonSecondaryComponent = ({
  text,
  color,
  disabled,
  path,
}: ButtonSecondaryProps): JSX.Element => {
  const button = (
    <Button
      color={color}
      variant="outlined"
      disabled={disabled}
      sx={{ width: "fit-content" }}
    >
      {text}
    </Button>
  );
  return (
    <Link to={path ?? ""} style={{ textDecoration: "none" }}>
      {button}
    </Link>
  );
};

interface MoreInformationButtonProps {
  path: string;
}

export const MoreInformationButtonWithAnchor = ({
  path,
}: MoreInformationButtonProps) => {
  return (
    <LinkWithAnchorButton to={path}>
      En savoir plus <ArrowIcon />
    </LinkWithAnchorButton>
  );
};

export const MoreInformationButton = ({ path }: MoreInformationButtonProps) => {
  return (
    <LinkButton to={path}>
      En savoir plus <ArrowIcon />
    </LinkButton>
  );
};

const linksStyle = {
  textDecoration: "none",
  color: "black",
  display: "flex",
  justifyContent: "center",
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "16px",
  width: "fit-content",
  margin: "30px auto",
  paddingBottom: "4px",
};

const LinkWithAnchorButton = styled(HashLink)(({ theme }) => ({
  ...linksStyle,
  borderBottom: `2px solid ${theme.palette.green.main}`,
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0px 0px 0px",
  },
}));

const LinkButton = styled(Link)(({ theme }) => ({
  ...linksStyle,
  borderBottom: `2px solid ${theme.palette.green.main}`,
  [theme.breakpoints.down("sm")]: {
    margin: "30px 0px 0px 0px",
  },
}));

interface PrimaryFormButtonProps {
  text: string;
  disabled?: boolean;
  onValidate: () => void;
}

export const PrimaryFormButton = ({
  text,
  disabled,
  onValidate,
}: PrimaryFormButtonProps): JSX.Element => {
  const theme = useTheme();
  return (
    <Button
      color="primary"
      variant="contained"
      disabled={disabled}
      sx={{
        width: "fit-content",
        ":hover": {
          backgroundColor: theme.palette.secondary.main,
          color: "white",
        },
      }}
      type="submit"
      onClick={onValidate}
    >
      {text}
    </Button>
  );
};

interface SecondaryFormButtonProps {
  onClick: () => void;
  text: string;
}

export const SecondaryFormButton = ({
  onClick,
  text,
}: SecondaryFormButtonProps) => {
  return (
    <Button
      color="secondary"
      variant="text"
      onClick={onClick}
      sx={{
        fontFamily: "Lato",
        fontWeight: "500",
        fontSize: "18px",
        color: " #666666",
        width: "fit-content",
        borderRadius: "0",
        padding: "0px",
        height: "30px",

        ":hover": {
          background: "none",
          borderBottom: `2px solid #666666`,
        },
      }}
    >
      {text}
    </Button>
  );
};

interface FormButtonGroupProps {
  mainButton: JSX.Element;
  secondaryButton: JSX.Element;
  centered?: boolean;
}

export const FormButtonGroupComponent = ({
  mainButton,
  secondaryButton,
  centered,
}: FormButtonGroupProps) => {
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  return isPhone ? (
    <FormButtonGroupPhone>
      {mainButton}
      {secondaryButton}
    </FormButtonGroupPhone>
  ) : (
    <FormButtonGroup
      columnGap={"20px"}
      sx={{ justifyContent: centered ? "center" : "flex-end" }}
    >
      {secondaryButton} {mainButton}
    </FormButtonGroup>
  );
};

const FormButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop: "20px",
  columnGap: "40px",

  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const FormButtonGroupPhone = styled(Box)(({ theme }) => ({
  paddingTop: "40px",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  alignItems: "center",
}));

interface FooterButtonProps {
  text: string;
  path: string;
}
export const FooterButton = ({
  text,
  path,
}: FooterButtonProps): JSX.Element => {
  return <Link to={path}>{text}</Link>;
};
