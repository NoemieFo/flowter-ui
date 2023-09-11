import { Company } from "./reservations.constants";

export interface Passenger {
  name: string;
  firstname: string;
  school: string;
}

export const passengersTest: Passenger[] = [
  {
    name: "Miche",
    firstname: "Mitch",
    school: "ENI Chartres-de-Bretagne",
  },
  { name: "Bonsaké", firstname: "Bill", school: "ENI Nantes" },
  { name: "Bonsaké", firstname: "Bill", school: "ENI Niort" },
];

export enum Roles {
  superAdmin = "SUPER_ADMIN",
  admin = "ADMIN",
  user = "USER",
  driver = "DRIVER",
}

export interface User {
  id: number;
  roles: Roles[];
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  driverLicenceCheck: boolean;
  isDriver: boolean;
  company: Company;
}
