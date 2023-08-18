import { EniSchoolsNames } from "./places.constants";

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
