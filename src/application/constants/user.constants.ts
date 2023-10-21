import { Company, company1, company2, company3 } from "./companies.constants";

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
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  driverLicenceCheck: boolean;
  isDriver: boolean;
  company: Company;
}

export const user1: User = {
  id: 1,
  roles: [Roles.admin, Roles.driver, Roles.user],
  password: "",
  firstname: "Noémie",
  lastname: "Foufé",
  phone: "012345678",
  email: "noemie.foufe@campus-eni.fr",
  driverLicenceCheck: true,
  isDriver: true,
  company: company1,
};

export const user2: User = {
  id: 2,
  roles: [Roles.admin, Roles.driver, Roles.user],
  password: "",
  firstname: "Fournier",
  lastname: "Pauline",
  phone: "012345678",
  email: "pauline.fournier@campus-eni.fr",
  driverLicenceCheck: false,
  isDriver: false,
  company: company2,
};

export const user3: User = {
  id: 3,
  roles: [Roles.admin, Roles.driver, Roles.user],
  password: "",
  firstname: "Cao-Son",
  lastname: "Tran",
  phone: "012345678",
  email: "cao-son.tran@campus-eni.fr",
  driverLicenceCheck: true,
  isDriver: true,
  company: company3,
};
