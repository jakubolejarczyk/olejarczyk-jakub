import { Meta, StoryObj } from '@storybook/angular';
import { HeaderView } from './header.view';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<HeaderView> = {
  title: 'View/Header',
  component: HeaderView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<HeaderView>;

export const Primary: Story = {};
