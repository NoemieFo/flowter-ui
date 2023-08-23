export enum CarCategories {
  DefaultEmpty = "",
  All = "tous",
  Berline = "berline",
  Citadine = "citadine",
  SUV = "SUV",
}

export const carCategories: CarCategories[] = [
  CarCategories.All,
  CarCategories.Berline,
  CarCategories.Citadine,
  CarCategories.SUV,
];

export enum CarOptions {
  GPS = "gps",
  Bluetooth = "bluetooth",
  BoiteAuto = "boîte automatique",
}

export const carOptionsByCategory: Record<CarCategories, CarOptions[]> = {
  [CarCategories.DefaultEmpty]: [],
  [CarCategories.All]: [
    CarOptions.Bluetooth,
    CarOptions.BoiteAuto,
    CarOptions.GPS,
  ],
  [CarCategories.Berline]: [CarOptions.Bluetooth, CarOptions.BoiteAuto],
  [CarCategories.Citadine]: [CarOptions.GPS, CarOptions.BoiteAuto],
  [CarCategories.SUV]: [
    CarOptions.Bluetooth,
    CarOptions.BoiteAuto,
    CarOptions.GPS,
  ],
};

// export const carOptionsByCategory = (): Record<CarCategories, CarOptions[]> => {
// //   const map: Record<CarCategories, CarOptions[]> = {} as Record<
// //     CarCategories,
// //     CarOptions[]
// //   >;

// //   carCategories.forEach(
// //     (c) => (map[c] = c === CarCategories.All ? [CarOptions.GPS] : carOptions)
// //   );
//   return map;
// };
