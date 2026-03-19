import { Meta, StoryObj } from '@storybook/angular';
import { ExperienceView } from './experience.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<ExperienceView> = {
  title: 'View/Main/Experience',
  component: ExperienceView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<ExperienceView>;

export const Primary: Story = {};
