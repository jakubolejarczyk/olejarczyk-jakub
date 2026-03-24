import { Injectable } from '@angular/core';
import { applicationConfig, Meta } from '@storybook/angular';
import { config } from '../config/config';

@Injectable({ providedIn: 'root' })
export class StorybookUtil {
  static getDecorators(): Meta['decorators'] {
    return [
      applicationConfig({
        providers: config.providers,
      }),
    ];
  }
}
