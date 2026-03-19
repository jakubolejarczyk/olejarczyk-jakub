import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { aboutMeReducer } from '../state/about-me/about-me.reducer';
import { educationReducer } from '../state/education/education.reducer';
import { experienceReducer } from '../state/experience/experience.reducer';
import { homeReducer } from '../state/home/home.reducer';
import { personalReducer } from '../state/personal/personal.reducer';
import { resumeReducer } from '../state/resume/resume.reducer';
import { groupReducer, sectionReducer } from '../store/store.reducer';
import { skillReducer } from '../state/skill/skill.reducer';
import { technologyGroupReducer, technologyReducer } from '../state/technology/technology.reducer';

export const config: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore({
      aboutMe: aboutMeReducer,
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
