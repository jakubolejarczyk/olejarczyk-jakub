import { Meta, StoryObj } from '@storybook/angular';
import { SkillsView } from './skills.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<SkillsView> = {
  title: 'View/Main/Skills',
  component: SkillsView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<SkillsView>;

export const Primary: Story = {};
