import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './config/app.config';
import { View } from './view/view';

bootstrapApplication(View, appConfig).catch((err) => console.error(err));
