interface PersonalSocialMediaDataModel {
  label: string;
  url: string;
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
