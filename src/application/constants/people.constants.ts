import { Company, EniSchoolsNames } from "./places.constants";

export interface Passenger {
  name: string;
  firstname: string;
  school: EniSchoolsNames;
}

export const passengersTest: Passenger[] = [
  {
    name: "Miche",
    firstname: "Mitch",
    school: EniSchoolsNames.EniChartres,
  },
  { name: "Bonsaké", firstname: "Bill", school: EniSchoolsNames.EniNantes },
  { name: "Bonsaké", firstname: "Bill", school: EniSchoolsNames.EniNiort },
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
