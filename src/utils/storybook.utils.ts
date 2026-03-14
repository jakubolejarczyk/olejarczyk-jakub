import { Injectable } from '@angular/core';
import { applicationConfig, Meta } from '@storybook/angular';
import { appConfig } from '../app/app.config';

@Injectable({ providedIn: 'root' })
export class StorybookUtils {
  static getDecorators(): Meta['decorators'] {
    return [
      applicationConfig({
        providers: appConfig.providers,
      }),
    ];
  }
}
