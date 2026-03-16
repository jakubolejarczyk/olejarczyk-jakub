import { Meta, StoryObj } from '@storybook/angular';
import { ResumeView } from './resume.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<ResumeView> = {
  title: 'View/Main/Resume',
  component: ResumeView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<ResumeView>;

export const Primary: Story = {};
