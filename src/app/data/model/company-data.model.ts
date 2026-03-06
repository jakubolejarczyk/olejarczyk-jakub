export namespace CompanyData {
  enum Enum {
    aprSystem = 'aprSystem',
    primaris = 'primaris',
  }

  export interface Model {
    name: string;
    url: string;
  }

  export type Type = Record<Enum, Model>;
}
