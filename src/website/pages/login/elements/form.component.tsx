import { apps } from "@/application/constants/applications";
import {
  Rights,
  Roles,
  User,
  allUsers,
} from "@/application/constants/user.constants";
import {
  FormButtonGroupComponent,
  PrimaryFormButton,
  SecondaryFormButton,
} from "@common/buttons.component";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface LoginData {
  mail: string;
  password: string;
}

const initLoginData: LoginData = {
  mail: "",
  password: "",
};

export const LoginForm = () => {
  const [data, setData] = React.useState<LoginData>(initLoginData);
  const [connectedUser, setConnectedUser] = React.useState<User>({} as User);
  const [isConnectionError, setIsConnectionError] =
    React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const connectUser = () => {
    const connectedUser: User = allUsers.filter(
      (u: User) => u.email === data.mail && u.password === data.password
    )[0];

    if (!connectedUser || Object.keys(connectedUser).length === 0) {
      setIsConnectionError(true);
    }

    if (connectedUser && Object.keys(connectedUser).length > 0) {
      localStorage.setItem("userLastname", connectedUser.lastname);
      localStorage.setItem("userFirstname", connectedUser.firstname);
      localStorage.setItem(
        "userRights",
        connectedUser.roles.includes(Roles.Driver) ||
          connectedUser.roles.includes(Roles.Admin)
          ? Rights.Write
          : Rights.Read
      );

      const timer = setTimeout(() => {
        setIsConnectionError(false);
        return navigate(apps.reservations.subPages["myReservations"].path);
      }, 2000);
      return () => clearTimeout(timer);
    }
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
            error={isConnectionError}
          />
        </Grid>
        <Grid item xs={6} sm={5}>
          <FormControl fullWidth variant="outlined" error={isConnectionError}>
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
            {isConnectionError && (
              <FormHelperText>
                E-mail ou utilisateur invalide. Veuillez réessayer
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <FormButtonGroupComponent
          secondaryButton={
            <SecondaryFormButton
              // TODO: Reset password
              onClick={() => undefined}
              text="Mot de passe oublié ?"
            />
          }
          mainButton={
            <PrimaryFormButton
              text="Me connecter"
              disabled={!data.mail || !data.password}
              onValidate={() => connectUser()}
            />
          }
        />
      </Grid>
    </FormGroup>
  );
  return form;
};
