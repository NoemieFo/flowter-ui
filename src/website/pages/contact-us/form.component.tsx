import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import {
  ButtonMainComponent,
  ClearFormButton,
  FormButtonGroupComponent,
} from "~/common/buttons.component";

interface MailData {
  name: string;
  firstname: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const emptyMailData: MailData = {
  name: "",
  firstname: "",
  company: "",
  email: "",
  phoneNumber: "",
  message: "",
};

export const ContactUsForm = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));

  const [data, setData] = React.useState<MailData>(emptyMailData);
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onClearForm = () => {
    setData(emptyMailData);
  };

  console.log(checked);
  const form = (
    <FormGroup>
      <Grid container spacing={2} columns={{ xs: 1, sm: 12 }}>
        <Grid item xs={6} sm={5}>
          <TextField
            fullWidth
            required
            value={data.name}
            label="Nom"
            name="name"
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            required
            value={data.firstname}
            label="Prénom"
            name="firstname"
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            value={data.company}
            label="Société"
            name="company"
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            required
            value={data.email}
            label="Email"
            name="email"
            margin="dense"
            type="email"
            onChange={handleChange}
          />
          <TextField
            fullWidth
            value={data.phoneNumber}
            label="Téléphone"
            name="phoneNumber"
            margin="dense"
            type="tel"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6} sm={7}>
          <TextField
            multiline
            required
            fullWidth
            value={data.message}
            label="Message"
            name="message"
            margin="dense"
            minRows={7}
            onChange={handleChange}
            sx={{ marginTop: isPhone ? "-8px" : undefined }}
          />
          <FormControlLabel
            sx={{
              [theme.breakpoints.down("sm")]: {
                marginTop: "14px",
                marginBottom: "6px",
              },
            }}
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                required
                name="conditions-checkbox"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                  "&.Mui-checked": {
                    color: theme.palette.primary.dark,
                  },
                }}
              />
            }
            label="En cochant cette case, je reconnais avoir lu et accepté blablablablablablabla."
          />
          <FormButtonGroupComponent
            secondaryButton={<ClearFormButton onClear={onClearForm} />}
            mainButton={
              <ButtonMainComponent
                text="Envoyer"
                disabled={
                  !data.name ||
                  !data.firstname ||
                  !data.email ||
                  !data.message ||
                  !checked
                }
              />
            }
          />
        </Grid>
      </Grid>
    </FormGroup>
  );

  return form;
};
