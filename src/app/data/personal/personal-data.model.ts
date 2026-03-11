interface PersonalSocialMediaDataModel {
  label: string;
  url: string;
  order: number;
}

export interface PersonalDataModel {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  socialMedias: PersonalSocialMediaDataModel[];
}
