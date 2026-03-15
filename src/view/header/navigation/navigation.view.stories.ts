import { Meta, StoryObj } from '@storybook/angular';

import { NavigationView } from './navigation.view';

const meta: Meta<NavigationView> = {
  title: 'View/Header/Navigation',
  component: NavigationView,
};
export default meta;
type Story = StoryObj<NavigationView>;

export const Primary: Story = {};
