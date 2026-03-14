import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../app.config';
import { CopyrightComponent } from './copyright.component';

const meta: Meta<CopyrightComponent> = {
  title: 'CopyrightComponent',
  component: CopyrightComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<CopyrightComponent>;

export const Primary: Story = {};
