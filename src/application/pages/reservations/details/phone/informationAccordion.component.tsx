import { Reservation } from "@application/constants/reservations.constants";
import { FormSectionTitle } from "@application/elements/formSectionTitle.component";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import { CarInformationPhoneComponent } from "./carInformationPhone.component";
import { DateAndPlacePhoneComponent } from "./dateAndPlacePhone.component";
import { KilometersPhoneComponent } from "./kilometersPhone.component";
import { PassengersPhoneComponent } from "./passengersPhone.component";

interface InformationAccordionProps extends React.PropsWithChildren {
  icon: string;
  title: string;
  expanded?: boolean;
}

export const InformationAccordion = ({
  expanded,
  icon,
  title,
  children,
}: InformationAccordionProps) => {
  const theme = useTheme();

  return (
    <Accordion
      square
      elevation={0}
      disableGutters
      defaultExpanded={expanded}
      sx={{
        ":first-of-type": {
          borderTop: "1px solid black",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          borderBottom: "1px solid black",
          margin: "0px",
          ".MuiAccordionSummary-content": {
            margin: "0px",
          },
        }}
      >
        <FormSectionTitle icon={icon} title={title} sx={{ marginY: "18px" }} />
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: theme.palette.lightGrey.main,
          borderBottom: "1px solid black",
        }}
      >
        {children}
      </AccordionDetails>
    </Accordion>
  );
};

interface InformationProps {
  reservation: Reservation;
}

export const InformationComponent = ({ reservation }: InformationProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <DateAndPlacePhoneComponent reservation={reservation} />
      <CarInformationPhoneComponent car={reservation.car} />
      <PassengersPhoneComponent passengers={reservation?.users} />
      <KilometersPhoneComponent />
    </Box>
  );
};
