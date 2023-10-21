import { CarCategories, CarOptions } from "./categories.constants";

export interface Car {
  id: number;
  licensePlate: string;
  model: Model;
  gearbox: GearboxTypes;
  options: CarOptions[];
  type: CarCategories;
}

export enum GearboxTypes {
  Auto = "automatique",
  Manuelle = "manuelle",
}

export interface Model {
  brand: string;
  label: string;
}

export const car1: Car = {
  id: 1,
  licensePlate: "AZ-123-ER",
  model: {
    brand: "Renault",
    label: "Clio",
  },
  gearbox: GearboxTypes.Auto,
  options: [CarOptions.Bluetooth, CarOptions.GPS],
  type: CarCategories.Citadine,
};

export const car2: Car = {
  id: 2,
  licensePlate: "AZ-123-ER",
  model: {
    brand: "Citroën",
    label: "C3 Aircross",
  },
  gearbox: GearboxTypes.Manuelle,
  options: [CarOptions.Bluetooth],
  type: CarCategories.SUV,
};

export const car3: Car = {
  id: 3,
  licensePlate: "AZ-123-ER",
  model: {
    brand: "Renault",
    label: "Megane",
  },
  gearbox: GearboxTypes.Auto,
  options: [CarOptions.Bluetooth, CarOptions.GPS],
  type: CarCategories.Berline,
};

export const car4: Car = {
  id: 4,
  licensePlate: "AZ-123-ER",
  model: {
    brand: "DS",
    label: "4",
  },
  gearbox: GearboxTypes.Manuelle,
  options: [CarOptions.GPS],
  type: CarCategories.SUV,
};

export const allCars = [car1, car2, car3, car4];
