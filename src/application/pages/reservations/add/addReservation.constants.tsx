import {
  CarCategories,
  CarOptions,
} from "@application/constants/categories.constants";
import { Passenger } from "@application/constants/people.constants";

export interface AddReservationFormInput {
  category: CarCategories;
  options: Record<CarOptions, boolean>;
  departure: DepartureDetails;
  returnDate: string;
  reasonId: number;
  passengers?: Passenger[];
}

export interface DepartureDetails {
  date: string;
  departurePlaceId: number;
}
