import { Meta, StoryObj } from '@storybook/angular';

import { AboutMeView } from './about-me.view';

const meta: Meta<AboutMeView> = {
  title: 'View/Main/AboutMe',
  component: AboutMeView,
};
export default meta;
type Story = StoryObj<AboutMeView>;

export const Primary: Story = {};
