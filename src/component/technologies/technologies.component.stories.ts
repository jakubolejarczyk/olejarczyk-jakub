import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../config/app.config';
import { TechnologiesComponent } from './technologies.component';

const meta: Meta<TechnologiesComponent> = {
  title: 'TechnologiesComponent',
  component: TechnologiesComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<TechnologiesComponent>;

export const Primary: Story = {};
