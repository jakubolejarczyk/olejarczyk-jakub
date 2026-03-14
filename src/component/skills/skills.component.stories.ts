import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../config/app.config';
import { SkillsComponent } from './skills.component';

const meta: Meta<SkillsComponent> = {
  title: 'SkillsComponent',
  component: SkillsComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<SkillsComponent>;

export const Primary: Story = {};
