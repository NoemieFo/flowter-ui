import { Box, Button, styled, useMediaQuery, useTheme } from "@mui/material";
import { ArrowIcon } from "@pictures/icons/arrowIcon.component";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
  color?: any;
  onClick?: () => any;
}

export const ButtonSecondaryComponent = ({
  text,
  color,
  disabled,
  path,
  onClick,
}: ButtonSecondaryProps): JSX.Element => {
  const button = (
    <Button
      color={color}
      variant="outlined"
      disabled={disabled}
      sx={{ width: { xs: "100%", sm: "fit-content" } }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
  return path ? (
    <Link to={path ?? ""} style={{ textDecoration: "none" }}>
      {button}
    </Link>
  ) : (
    button
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
  onValidate: (...args: any) => any;
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
  borderColor?: string;
}

export const SecondaryFormButton = ({
  onClick,
  text,
  borderColor,
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
        color: { xs: "black", md: "#666666" },
        width: "fit-content",
        borderRadius: "0",
        padding: "0px",
        height: "30px",
        ":hover": {
          background: "none",
          borderBottom: `2px solid ${borderColor ?? "#666666"}`,
        },
        borderBottom: {
          xs: `2px solid ${borderColor ?? "#666666"}`,
          md: "none",
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
  const theme = useTheme();
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
  path: string;
  text: string;
}

export const FooterButton = ({ path, text }: FooterButtonProps) => {
  return (
    <Link to={path ?? ""} style={{ textDecoration: "none" }}>
      <Button
        color="secondary"
        variant="text"
        sx={{
          minWidth: "0",
          fontFamily: "Lato",
          fontWeight: "500",
          fontSize: "18px",
          color: " #666666",
          borderRadius: "0",
          height: "30px",
          padding: "0px",

          ":hover": {
            background: "none",
            borderBottom: `2px solid #666666`,
          },
        }}
      >
        {text}
      </Button>
    </Link>
  );
};
