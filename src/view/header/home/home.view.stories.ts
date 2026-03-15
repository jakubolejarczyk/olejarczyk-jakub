import { Meta, StoryObj } from '@storybook/angular';

import { HomeView } from './home.view';

const meta: Meta<HomeView> = {
  title: 'View/Header/Home',
  component: HomeView,
};
export default meta;
type Story = StoryObj<HomeView>;

export const Primary: Story = {};
