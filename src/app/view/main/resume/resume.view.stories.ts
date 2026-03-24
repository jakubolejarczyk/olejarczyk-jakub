import { Meta, StoryObj } from '@storybook/angular';
import { ResumeView } from './resume.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<ResumeView> = {
  title: 'View/Main/Resume',
  component: ResumeView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<ResumeView>;

export const Primary: Story = {};
