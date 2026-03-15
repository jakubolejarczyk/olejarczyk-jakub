import { Meta, StoryObj } from '@storybook/angular';

import { SkillsView } from './skills.view';

const meta: Meta<SkillsView> = {
  title: 'View/Main/Skills',
  component: SkillsView,
};
export default meta;
type Story = StoryObj<SkillsView>;

export const Primary: Story = {};
