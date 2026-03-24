import { bootstrapApplication } from '@angular/platform-browser';
import { View } from './view/view';
import { config } from './config/config';

bootstrapApplication(View, config).catch((err) => console.error(err));
