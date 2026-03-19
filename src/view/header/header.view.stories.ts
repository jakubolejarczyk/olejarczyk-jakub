import { Meta, StoryObj } from '@storybook/angular';
import { HeaderView } from './header.view';
import { StorybookUtil } from '../../util/storybook.util';

const meta: Meta<HeaderView> = {
  title: 'View/Header',
  component: HeaderView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<HeaderView>;

export const Primary: Story = {};
