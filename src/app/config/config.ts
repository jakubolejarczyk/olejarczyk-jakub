import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  aboutMeReducer,
  companyReducer,
  educationReducer,
  experienceReducer,
  homeReducer,
  personalReducer,
  resumeReducer,
  groupReducer,
  sectionReducer,
  skillReducer,
  technologyGroupReducer,
  technologyReducer,
} from '../store/store.reducer';

import '../../component';

export const config: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore(
      {
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
      },
      {
        runtimeChecks: {
          strictStateImmutability: false,
        },
      },
    ),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
