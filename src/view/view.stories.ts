import { Meta, StoryObj } from '@storybook/angular';
import { View } from './view';
import { StorybookUtils } from '../utils/storybook.utils';

const meta: Meta<View> = {
  title: 'View',
  component: View,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<View>;

export const Primary: Story = {};
