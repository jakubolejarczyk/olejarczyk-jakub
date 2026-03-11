import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { personalReducer } from './state/personal/personal.reducer';
import { sectionReducer } from './state/section/section.reducer';
import { homeReducer } from './state/home/home.reducer';
import { aboutMeReducer } from './state/about-me/about-me.reducer';
import { technologyGroupReducer, technologyReducer } from './state/technology/technology.reducer';
import { skillReducer } from './state/skill/skill.reducer';
import { experienceReducer } from './state/experience/experience.reducer';
import { resumeReducer } from './state/resume/resume.reducer';
import { educationReducer } from './state/education/education.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
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
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
