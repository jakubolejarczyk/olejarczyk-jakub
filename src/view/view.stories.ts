import { Meta, StoryObj } from '@storybook/angular';
import { View } from './view';
import { StorybookUtil } from '../util/storybook.util';

const meta: Meta<View> = {
  title: 'View',
  component: View,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<View>;

export const Primary: Story = {};
