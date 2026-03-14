import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../app.config';
import { EducationComponent } from './education.component';

const meta: Meta<EducationComponent> = {
  title: 'EducationComponent',
  component: EducationComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<EducationComponent>;

export const Primary: Story = {};
