export interface Motive {
  id: number;
  label: string;
}

export const motive1: Motive = { id: 1, label: "Rendez-vous client" };
export const motive2: Motive = { id: 2, label: "Rendez-vous partenaire" };
export const motive3: Motive = { id: 3, label: "Visite d'un autre site" };

export const allMotives: Motive[] = [motive1, motive2, motive3];
