export enum CarCategories {
  Berline = "berline",
  Citadine = "citadine",
  SUV = "SUV",
}

export const carCategories: CarCategories[] = [
  CarCategories.Berline,
  CarCategories.Citadine,
  CarCategories.SUV,
];

export enum CarOptions {
  GPS = "gps",
  Bluetooth = "bluetooth",
  BoiteAuto = "boîte automatique",
}

export const carOptions = [
  CarOptions.GPS,
  CarOptions.Bluetooth,
  CarOptions.BoiteAuto,
];

export const carOptionsByCategory = (): Record<CarCategories, CarOptions[]> => {
  const map: Record<CarCategories, CarOptions[]> = {} as Record<
    CarCategories,
    CarOptions[]
  >;
  carCategories.forEach((c) => (map[c] = carOptions));
  console.log(map);
  return map;
};
