import { CarOptions } from "./categories.constants";

export interface Car {
  id: number;
  licensePlate: string;
  model: Model;
  gearbox: string;
  options: CarOptions[];
}

export interface Model {
  brand: string;
  label: string;
}
