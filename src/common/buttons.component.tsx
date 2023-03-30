import { Button } from "@mui/material";

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
}

export const ButtonSecondaryComponent = ({
  text,
  color,
  disabled,
}: ButtonSecondaryProps): JSX.Element => {
  return (
    <Button color={color} variant="outlined" disabled={disabled}>
      {text}
    </Button>
  );
};
