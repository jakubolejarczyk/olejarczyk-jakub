import { Meta, StoryObj } from '@storybook/angular';

import { MainView } from './main.view';

const meta: Meta<MainView> = {
  title: 'View/Main',
  component: MainView,
};
export default meta;
type Story = StoryObj<MainView>;

export const Primary: Story = {};
