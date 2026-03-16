import { Meta, StoryObj } from '@storybook/angular';
import { EducationView } from './education.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<EducationView> = {
  title: 'View/Main/Education',
  component: EducationView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<EducationView>;

export const Primary: Story = {};
