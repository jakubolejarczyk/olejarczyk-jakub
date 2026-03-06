export namespace CompanyData {
  enum KindEnum {
    aprSystem = 'aprSystem',
    primaris = 'primaris',
  }

  interface Model {
    name: string;
    url: string;
  }

  export type Type = Record<KindEnum, Model>;
}
