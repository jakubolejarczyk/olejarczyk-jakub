import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config/app.config';
import { MainView } from './view/main.view';

bootstrapApplication(MainView, appConfig).catch((err) => console.error(err));
