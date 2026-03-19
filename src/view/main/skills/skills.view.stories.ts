import { Meta, StoryObj } from '@storybook/angular';
import { SkillsView } from './skills.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<SkillsView> = {
  title: 'View/Main/Skills',
  component: SkillsView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<SkillsView>;

export const Primary: Story = {};
