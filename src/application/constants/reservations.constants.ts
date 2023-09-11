import { Car } from "./cars.constants";
import { User } from "./people.constants";

export interface Reservation {
  id: number;
  dateOfLoan: string;
  dateOfReturn: string;
  users: User[];
  location: string;
  destination: Address;
  car: Car;
}

export interface Address {
  address: string;
  postalCode: string;
  city: string;
}

export interface Motive {
  id: number;
  label: string;
}

export interface Company {
  id: number;
  name: string;
  address: string;
  users: User[];
  cars: Car[];
}
