import {
  Car,
  GearboxTypes,
  allCars,
} from "@/application/constants/cars.constants";
import { Company } from "@/application/constants/companies.constants";
import { Motive } from "@/application/constants/motives.constants";
import {
  Address,
  Reservation,
  allReservations,
} from "@/application/constants/reservations.constants";
import { User } from "@/application/constants/user.constants";
import {
  CarCategories,
  CarOptions,
  carOptionsByCategory,
} from "@application/constants/categories.constants";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import OrderRide from "@pictures/order_ride.svg";
import dayjs, { Dayjs } from "dayjs";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddReservationButtons } from "./buttons.component";
import { PassengersComponent } from "./passengers.component";
import { PickVehicleComponent } from "./pickVehicle.component";
import { TripDetailsComponent } from "./tripDetails.component";

export interface ValidationError {
  field: string;
  description: string;
}

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
  const [returnDate, setReturnDate] = React.useState<Dayjs>(dayjs());

  const updateCategory = (newCategory: CarCategories) => {
    setCategory(newCategory);
  };

  const updateOptions = (newOptions: Record<CarOptions, boolean>) => {
    setSelectedOptions(newOptions);
  };

  const updateDepartureDate = (newDate: Dayjs) => {
    setDepartureDate(newDate);
  };

  const updateReturnDate = (newDate: Dayjs) => {
    setReturnDate(newDate);
  };

  const [reason, setReason] = React.useState<Motive>({} as Motive);
  const updateReason = (newReason: Motive) => {
    setReason(newReason);
  };

  // Use connected user by default
  const [departurePlace, setDeparturePlace] = React.useState<Company>(
    {} as Company
  );
  const updateDeparturePlace = (newDeparturePlace: Company) => {
    setDeparturePlace(newDeparturePlace);
  };

  const [destination, setDestination] = React.useState<Address>({} as Address);
  const updateDestination = (newDestination: Address) => {
    setDestination(newDestination);
  };

  const [isCarError, setIsCarError] = React.useState<boolean>(false);

  let isValid: boolean = !!(
    category !== CarCategories.DefaultEmpty &&
    departureDate.format() !== "" &&
    returnDate.format() !== "" &&
    returnDate > departureDate &&
    Object.keys(departurePlace).length > 0 &&
    Object.keys(destination).length > 0 &&
    Object.keys(reason).length > 0
  );

  const [passengers, setPassengers] = React.useState<User[]>([]);
  const updatePassengers = (passengers: User[]) => {
    setPassengers(passengers);
  };

  const [isSent, setIsSent] = React.useState<boolean>(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
        return navigate("/reservations");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  const clearForm = () => {
    const today = dayjs();
    setCategory(CarCategories.DefaultEmpty);
    setSelectedOptions({} as Record<CarOptions, boolean>);
    setDepartureDate(today);
    setDeparturePlace({} as Company);
    setDestination({} as Address);
    setReturnDate(today);
    setReason({} as Motive);
    setPassengers([]);
  };

  const validate = () => {
    setIsCarError(false); // cleanup value if not the first try

    // Filter the allCars array
    const filteredCars = allCars.filter((car) => {
      // Use the `every` function to check if all specified options match
      return Object.entries(selectedOptions).every(([option, value]) => {
        if (value) {
          return car.options.includes(option as CarOptions);
        }
        return true;
      });
    });

    if (filteredCars.length === 0) {
      setIsCarError(true);
      console.error("No car found matching criteria");
      isValid = false;
    }

    const needBoiteAuto = Object.keys(selectedOptions).includes(
      CarOptions.BoiteAuto
    );

    let cars = filteredCars;
    if (needBoiteAuto) {
      cars = filteredCars.filter((c: Car) => c.gearbox === GearboxTypes.Auto);
    }

    if (cars.length === 0) {
      setIsCarError(true);
      console.error("No car found matching criteria");
      isValid = false;
    }

    if (isValid && !isCarError) {
      const newReservation: Reservation = {
        id: allReservations[allReservations.length - 1].id + 1,
        dateOfLoan: departureDate.format(),
        dateOfReturn: returnDate.format(),
        users: passengers,
        location: departurePlace,
        destination,
        car: cars[0],
      };

      setIsSent(true);
      allReservations.push(newReservation);
    }
  };

  console.log(isSent);

  return (
    <>
      <PickVehicleComponent
        selectedCategory={category}
        selectedCarOptions={selectedCarOptions}
        selectedOptions={selectedOptions}
        updateOptions={updateOptions}
        updateCategory={updateCategory}
        isError={isCarError}
      />
      <TripDetailsComponent
        departureDate={departureDate}
        departurePlace={departurePlace}
        returnDate={returnDate}
        destination={destination}
        motive={reason}
        updateDepartureDate={updateDepartureDate}
        updateDeparturePlace={updateDeparturePlace}
        updateReturnDate={updateReturnDate}
        updateReason={updateReason}
        updateDestination={updateDestination}
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
          <PassengersComponent
            // passengers={passengers}
            updatePassengers={updatePassengers}
          />
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
