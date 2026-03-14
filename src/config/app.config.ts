import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { aboutMeReducer } from '../state/about-me/about-me.reducer';
import { educationReducer } from '../state/education/education.reducer';
import { experienceReducer } from '../state/experience/experience.reducer';
import { homeReducer } from '../state/home/home.reducer';
import { personalReducer } from '../state/personal/personal.reducer';
import { resumeReducer } from '../state/resume/resume.reducer';
import { sectionReducer } from '../state/section/section.reducer';
import { skillReducer } from '../state/skill/skill.reducer';
import { technologyGroupReducer, technologyReducer } from '../state/technology/technology.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore(
      {
        personal: personalReducer,
        section: sectionReducer,
        home: homeReducer,
        aboutMe: aboutMeReducer,
        technologyGroup: technologyGroupReducer,
        technology: technologyReducer,
        skill: skillReducer,
        experience: experienceReducer,
        resume: resumeReducer,
        education: educationReducer,
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
