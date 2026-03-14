import { Meta, StoryObj } from '@storybook/angular';

import { HeaderView } from './header.view';

const meta: Meta<HeaderView> = {
  title: 'View/Header',
  component: HeaderView,
};
export default meta;
type Story = StoryObj<HeaderView>;

export const Primary: Story = {};
