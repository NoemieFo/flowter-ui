import { Car, car1, car2, car3 } from "./cars.constants";
import { Company, company1, company2 } from "./companies.constants";
import { User, user1, user2, user3, user4 } from "./user.constants";

export interface Reservation {
  id: number;
  dateOfLoan: string;
  dateOfReturn: string;
  users: User[];
  location: Company;
  destination: Address;
  car: Car;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
}

export const reservation1: Reservation = {
  id: 1,
  dateOfLoan: "2023-11-12 09:00",
  dateOfReturn: "2023-11-12 11:00",
  location: company1,
  destination: {
    street: "123 rue de Nantes Appartement 50 Batiment B",
    postalCode: "35000",
    city: "Rennes",
  },
  car: car3,
  users: [user4],
};

export const reservation2: Reservation = {
  id: 2,
  dateOfLoan: "2023-03-12 09:00",
  dateOfReturn: "2023-03-12 11:00",
  location: company2,
  destination: {
    street: "123 rue de Rennes",
    postalCode: "44000",
    city: "Nantes",
  },
  car: car2,
  users: [user1, user2, user3],
};

export const reservation3: Reservation = {
  id: 3,
  dateOfLoan: "2023-09-13 12:00",
  dateOfReturn: "2023-09-15 17:00",
  location: company1,
  destination: {
    street: "123 rue de Nantes Appartement 50 Batiment B",
    postalCode: "35000",
    city: "Rennes",
  },
  car: car1,
  users: [user1],
};

export let allReservations: Reservation[] = [
  reservation1,
  reservation2,
  reservation3,
];
