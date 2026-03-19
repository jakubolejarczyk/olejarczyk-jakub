import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  aboutMeReducer,
  companyReducer,
  educationReducer,
  experienceReducer,
  groupReducer,
  homeReducer,
  personalReducer,
  resumeReducer,
  sectionReducer,
  skillReducer,
} from '../store/store.reducer';
import { technologyGroupReducer, technologyReducer } from '../state/technology/technology.reducer';

export const config: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore({
      aboutMe: aboutMeReducer,
      company: companyReducer,
      education: educationReducer,
      experience: experienceReducer,
      home: homeReducer,
      personal: personalReducer,
      resume: resumeReducer,
      group: groupReducer,
      section: sectionReducer,
      skill: skillReducer,
      technologyGroup: technologyGroupReducer,
      technology: technologyReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
