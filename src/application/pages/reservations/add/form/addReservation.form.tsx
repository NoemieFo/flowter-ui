import { Grid } from "@mui/material";
import dayjs from "dayjs";
import Image from "mui-image";
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

export const AddReservationForm = () => {
  const [category, setCategory] = React.useState<CarCategories>(
    CarCategories.Citadine
  );

  const updateCategory = (newCategory: CarCategories) => {
    setCategory(newCategory);
  };

  const categoryOptions: Record<CarCategories, CarOptions[]> =
    carOptionsByCategory();
  const selectedCarOptions: CarOptions[] = category
    ? categoryOptions[category]
    : [];

  const [selectedOptions, setSelectedOptions] = React.useState<
    Record<CarOptions, boolean>
  >(
    selectedCarOptions.reduce((acc, option) => {
      return { ...acc, [option]: false };
    }, {} as Record<CarOptions, boolean>)
  );

  const [departureDate, setDepartureDate] = React.useState<string>(
    dayjs().format()
  );
  const [returnDate, setReturnDate] = React.useState<string>(dayjs().format());
  const [departurePlace, setDeparturePlace] = React.useState<EniSchoolsNames>(
    EniSchoolsNames.DefaultEmpty
  );

  const updateOptions = (newOptions: Record<CarOptions, boolean>) => {
    setSelectedOptions(newOptions);
  };

  const updateDepartureDate = (newDate: string) => {
    setDepartureDate(newDate);
  };

  const updateReturnDate = (newDate: string) => {
    setReturnDate(newDate);
  };

  const [reason, setReason] = React.useState<string>("");
  const updateReason = (newReason: string) => {
    setReason(newReason);
  };

  const updateDeparturePlace = (newPlace: EniSchoolsNames) => {
    setDeparturePlace(newPlace);
  };

  const [passengers, setPassengers] = React.useState<Passenger[]>([]);
  const updatePassengers = (passengers: Passenger[]) => {
    setPassengers(passengers);
  };

  const validate = () => {
    const input: AddReservationFormInput = {
      category: category,
      options: selectedOptions,
      departure: {
        date: departureDate,
        place: departurePlace,
      },
      returnDate,
      reason,
      passengers,
    };

    console.log(input);
  };

  return (
    <>
      <PickVehicleComponent
        selectedCarOptions={selectedCarOptions}
        selectedOptions={selectedOptions}
        updateOptions={updateOptions}
        updateCategory={updateCategory}
      />
      <TripDetailsComponent
        updateDepartureDate={updateDepartureDate}
        updateDeparturePlace={updateDeparturePlace}
        updateReturnDate={updateReturnDate}
        updateReason={updateReason}
      />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            paddingRight: { sm: "40px" },
          }}
        >
          <PassengersComponent updatePassengers={updatePassengers} />
          <AddReservationButtons validate={validate} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image src={OrderRide} alt="Réserver un véhicule" duration={0} />
        </Grid>
      </Grid>
    </>
  );
};
