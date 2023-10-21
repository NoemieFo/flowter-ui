import { Car } from "./cars.constants";
import { Address } from "./reservations.constants";
import { User } from "./user.constants";

export interface Company {
  id: number;
  name: string;
  address: Address;
  cars: Car[];
  users: User[];
}

export const company1: Company = {
  id: 1,
  name: "ENI Chartres-de-Bretagne",
  address: {
    street: "ZAC de La Conterie, 8 Rue Léo Lagrange",
    postalCode: "35131",
    city: "Chartres-de-Bretagne",
  },
  cars: [],
  users: [],
};

export const company2: Company = {
  id: 2,
  name: "ENI Nantes",
  address: {
    street: "3 Rue Michael Faraday",
    postalCode: "44800",
    city: "Saint-Herblain",
  },
  cars: [],
  users: [],
};

export const company3: Company = {
  id: 3,
  name: "ENI Niort",
  address: {
    street: "19 Av. Léo Lagrange",
    postalCode: "79000",
    city: "Niort",
  },
  cars: [],
  users: [],
};

export const allCompanies = [company1, company2, company3];
