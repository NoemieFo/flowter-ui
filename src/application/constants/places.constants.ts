export enum EniSchoolsNames {
  DefaultEmpty = "",
  EniChartres = "ENI Chartres-de-Bretagne",
  EniNantes = "ENI Nantes",
  EniNiort = "ENI Niort",
  EniQuimper = "ENI Quimper",
}

export const eniSchoolsNames: EniSchoolsNames[] = [
  EniSchoolsNames.EniChartres,
  EniSchoolsNames.EniNantes,
  EniSchoolsNames.EniNiort,
  EniSchoolsNames.EniQuimper,
];

export interface EniSchoolDetails {
  address: string;
  postalcode: string;
  city: string;
}

const initEniSchools = (): Record<EniSchoolsNames, EniSchoolDetails> => {
  const init: Record<EniSchoolsNames, EniSchoolDetails> = {} as Record<
    EniSchoolsNames,
    EniSchoolDetails
  >;
  init[EniSchoolsNames.EniChartres] = {
    address: "8 rue Léo Lagrange",
    postalcode: "35131",
    city: "Chartres-de-Bretagne",
  };
  init[EniSchoolsNames.EniNiort] = {
    address: "19 avenue Léo Lagrange",
    postalcode: "79000",
    city: "Niort",
  };
  init[EniSchoolsNames.EniQuimper] = {
    address: "2, rue Georges Perros",
    postalcode: "29000",
    city: "Quimper",
  };
  init[EniSchoolsNames.EniNantes] = {
    address: "2B rue Benjamin Franklin",
    postalcode: "44800",
    city: "Saint-Herblain",
  };
  return init;
};

export const eniSchools: Record<EniSchoolsNames, EniSchoolDetails> =
  initEniSchools();
