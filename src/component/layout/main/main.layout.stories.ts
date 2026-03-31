import { Meta, StoryObj } from '@storybook/angular';
import { MainLayout } from './main.layout';

const meta: Meta<MainLayout> = {
  title: 'layout/main',
  component: MainLayout,
};
export default meta;
type Story = StoryObj<MainLayout>;

export const Primary: Story = {
  args: {
    data: {
      base: {},
      extend: {},
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {},
    },
  },
};
