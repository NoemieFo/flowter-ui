import {
  CarCategories,
  CarOptions,
} from "~/application/constants/categories.constants";
import { Passenger } from "~/application/constants/people.constants";
import { EniSchoolsNames } from "~/application/constants/places.constants";

export interface AddReservationFormInput {
  category: CarCategories;
  options: Record<CarOptions, boolean>;
  departure: DepartureDetails;
  returnDate: string;
  reason: string;
  passengers?: Passenger[];
}

export interface DepartureDetails {
  date: string;
  place: EniSchoolsNames;
}
