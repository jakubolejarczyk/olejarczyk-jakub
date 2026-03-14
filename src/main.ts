import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config/app.config';
import { App } from './view/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
