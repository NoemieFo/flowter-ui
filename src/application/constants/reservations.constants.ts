import { Car } from "./cars.constants";
import { User } from "./people.constants";
import { EniSchoolsNames } from "./places.constants";

export interface Reservation {
  id: number;
  dateOfLoan: string;
  dateOfReturn: string;
  users: User[];
  location: EniSchoolsNames;
  destination: string;
  car: Car;
}

export interface Motive {
  id: number;
  label: string;
}
