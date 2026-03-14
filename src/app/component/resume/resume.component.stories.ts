import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../app.config';
import { ResumeComponent } from './resume.component';

const meta: Meta<ResumeComponent> = {
  title: 'ResumeComponent',
  component: ResumeComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<ResumeComponent>;

export const Primary: Story = {};
