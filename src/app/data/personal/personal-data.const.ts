import { PersonalDataModel } from './personal-data.model';

export const personalDataConst: PersonalDataModel = {
  firstname: 'Jakub',
  lastname: 'Olejarczyk',
  email: 'jakub.olejarczyk@outlook.com',
  phone: '+48 501 007 197',
  city: 'Kielce',
  country: 'Poland',
  socialMedias: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jakub-olejarczyk',
      order: 0,
    },
    {
      label: 'GitHub',
      url: 'https://github.com/jakubolejarczyk',
      order: 1,
    },
    {
      label: 'LeetCode',
      url: 'https://leetcode.com/u/JakubOlejarczyk',
      order: 2,
    },
  ],
};
