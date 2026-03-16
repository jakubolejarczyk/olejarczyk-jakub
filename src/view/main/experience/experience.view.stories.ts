import { Meta, StoryObj } from '@storybook/angular';
import { ExperienceView } from './experience.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<ExperienceView> = {
  title: 'View/Main/Experience',
  component: ExperienceView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<ExperienceView>;

export const Primary: Story = {};
