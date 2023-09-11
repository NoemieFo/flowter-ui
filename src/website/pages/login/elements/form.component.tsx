import {
  ButtonMainComponent,
  FormButtonGroupComponent,
  SecondaryFormButton,
} from "@common/buttons.component";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

interface LoginData {
  mail: string;
  password: string;
}

const initLoginData: LoginData = {
  mail: "",
  password: "",
};

export const LoginForm = () => {
  const onForgotPassword = () => {};

  const [data, setData] = React.useState<LoginData>(initLoginData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const form = (
    <FormGroup>
      <Grid
        container
        spacing={2}
        direction={"column"}
        columns={{ xs: 1, sm: 12 }}
      >
        <Grid item xs={6} sm={12}>
          <TextField
            fullWidth
            required
            value={data.mail}
            label="E-mail"
            name="mail"
            margin="dense"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <FormControl fullWidth variant="outlined">
            <InputLabel required htmlFor="outlined-adornment-password">
              Mot de passe
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              name="password"
              margin="dense"
              label="Mot de passe"
              fullWidth
              value={data.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <FormButtonGroupComponent
          secondaryButton={
            <SecondaryFormButton
              onClick={onForgotPassword}
              text="Mot de passe oublié ?"
            />
          }
          mainButton={
            <ButtonMainComponent
              text="Me connecter"
              disabled={!data.mail || !data.password}
            />
          }
        />
      </Grid>
    </FormGroup>
  );
  return form;
};
