import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { personalReducer } from './state/personal/personal.reducer';
import { sectionReducer } from './state/section/section.reducer';
import { homeReducer } from './state/home/home.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideStore({
      personal: personalReducer,
      section: sectionReducer,
      home: homeReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
