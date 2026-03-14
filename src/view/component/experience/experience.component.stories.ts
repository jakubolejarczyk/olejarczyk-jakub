import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../../config/app.config';
import { ExperienceComponent } from './experience.component';

const meta: Meta<ExperienceComponent> = {
  title: 'ExperienceComponent',
  component: ExperienceComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<ExperienceComponent>;

export const Primary: Story = {};
