interface SocialMediaModel {
  label: string;
  url: string;
}

export interface PersonalDataModel {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  socialMedias: SocialMediaModel[];
}
