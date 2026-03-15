import { Meta, StoryObj } from '@storybook/angular';

import { TechnologiesView } from './technologies.view';

const meta: Meta<TechnologiesView> = {
  title: 'View/Main/Technologies',
  component: TechnologiesView,
};
export default meta;
type Story = StoryObj<TechnologiesView>;

export const Primary: Story = {};
