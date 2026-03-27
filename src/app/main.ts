import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './config/config';
import { App } from './app';

bootstrapApplication(App, config).catch((err) => console.error(err));
