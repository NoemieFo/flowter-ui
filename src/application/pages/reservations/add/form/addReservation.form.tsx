import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import {
  CarCategories,
  CarOptions,
  carOptionsByCategory,
} from "~/application/constants/categories.constants";
import { Passenger } from "~/application/constants/people.constants";
import { EniSchoolsNames } from "~/application/constants/places.constants";
import OrderRide from "~/pictures/order_ride.svg";
import { AddReservationFormInput } from "../addReservation.constants";
import { AddReservationButtons } from "./buttons.component";
import { PassengersComponent } from "./passengers.component";
import { PickVehicleComponent } from "./pickVehicle.component";
import { TripDetailsComponent } from "./tripDetails.component";

// FIXME: add destination handling
export const AddReservationForm = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up("md"));

  const [category, setCategory] = React.useState<CarCategories>(
    CarCategories.All
  );

  const categoryOptions: Record<CarCategories, CarOptions[]> =
    carOptionsByCategory;
  const selectedCarOptions: CarOptions[] = category
    ? categoryOptions[category]
    : [];

  const [selectedOptions, setSelectedOptions] = React.useState<
    Record<CarOptions, boolean>
  >(
    category === CarCategories.All
      ? ({} as Record<CarOptions, boolean>)
      : selectedCarOptions.reduce((acc, option) => {
          return { ...acc, [option]: false };
        }, {} as Record<CarOptions, boolean>)
  );

  const [departureDate, setDepartureDate] = React.useState<Dayjs>(dayjs());
  const [returnDate, setReturnDate] = React.useState<string>(dayjs().format());
  const [departurePlace, setDeparturePlace] = React.useState<EniSchoolsNames>(
    EniSchoolsNames.DefaultEmpty
  );

  const updateCategory = (newCategory: CarCategories) => {
    setCategory(newCategory);
  };

  const updateOptions = (newOptions: Record<CarOptions, boolean>) => {
    setSelectedOptions(newOptions);
  };

  const updateDepartureDate = (newDate: Dayjs) => {
    setDepartureDate(newDate);
  };

  const updateReturnDate = (newDate: string) => {
    setReturnDate(newDate);
  };

  const [reasonId, setReason] = React.useState<number>(0);
  const updateReason = (newReason: number) => {
    setReason(newReason);
  };

  const updateDeparturePlace = (newPlace: EniSchoolsNames) => {
    setDeparturePlace(newPlace);
  };

  const [passengers, setPassengers] = React.useState<Passenger[]>([]);
  const isValid: boolean =
    category !== CarCategories.DefaultEmpty &&
    departureDate.format() !== "" &&
    departurePlace !== EniSchoolsNames.DefaultEmpty &&
    returnDate !== "" &&
    reasonId !== 0;

  const updatePassengers = (passengers: Passenger[]) => {
    setPassengers(passengers);
  };

  const clearForm = () => {
    const today = dayjs();
    setCategory(CarCategories.DefaultEmpty);
    setSelectedOptions({} as Record<CarOptions, boolean>);
    setDepartureDate(today);
    setDeparturePlace(EniSchoolsNames.DefaultEmpty);
    setReturnDate(today.format());
    setReason(0);
    setPassengers([]);
  };

  const validate = () => {
    const input: AddReservationFormInput = {
      category: category,
      options: selectedOptions,
      departure: {
        date: departureDate.format(),
        place: departurePlace,
      },
      returnDate,
      reasonId,
      passengers,
    };

    if (isValid) {
      // FIXME:send request
      console.log(input);
    }
  };

  return (
    <>
      <PickVehicleComponent
        selectedCategory={category}
        selectedCarOptions={selectedCarOptions}
        selectedOptions={selectedOptions}
        updateOptions={updateOptions}
        updateCategory={updateCategory}
      />
      <TripDetailsComponent
        departureDate={departureDate}
        departurePlace={departurePlace}
        updateDepartureDate={updateDepartureDate}
        updateDeparturePlace={updateDeparturePlace}
        updateReturnDate={updateReturnDate}
        updateReason={updateReason}
      />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            paddingRight: { md: "40px" },
          }}
        >
          <PassengersComponent updatePassengers={updatePassengers} />
          <AddReservationButtons
            validate={validate}
            isValid={isValid}
            clearForm={clearForm}
          />
        </Grid>
        {isTablet && (
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={OrderRide}
              alt="Réserver un véhicule"
              sx={{
                marginTop: "20px",
                width: { xs: "100%", sm: "300px", lg: "100%" },
              }}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};
