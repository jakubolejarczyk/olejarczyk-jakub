import { Meta, StoryObj } from '@storybook/angular';
import { EducationView } from './education.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<EducationView> = {
  title: 'View/Main/Education',
  component: EducationView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<EducationView>;

export const Primary: Story = {};
