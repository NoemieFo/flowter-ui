import { Company, company1, company2, company3 } from "./companies.constants";

export enum Roles {
  SuperAdmin = "SUPER_ADMIN",
  Admin = "ADMIN",
  User = "USER",
  Driver = "DRIVER",
}

export enum Rights {
  Read = "READ",
  Write = "WRITE",
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
  roles: [Roles.Admin, Roles.Driver, Roles.User],
  password: "password",
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
  roles: [Roles.Admin, Roles.Driver, Roles.User],
  password: "password",
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
  roles: [Roles.Admin, Roles.Driver, Roles.User],
  password: "password",
  firstname: "Cao-Son",
  lastname: "Tran",
  phone: "012345678",
  email: "cao-son.tran@campus-eni.fr",
  driverLicenceCheck: true,
  isDriver: true,
  company: company3,
};

export const user4: User = {
  id: 4,
  roles: [Roles.User],
  password: "password",
  lastname: "Bonsaké",
  firstname: "Bill",
  phone: "012345678",
  email: "bill-bonsake@campus-eni.fr",
  driverLicenceCheck: true,
  isDriver: false,
  company: company3,
};

export const allUsers = [user1, user2, user3, user4];
