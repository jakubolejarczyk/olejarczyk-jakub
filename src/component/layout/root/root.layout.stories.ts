import { Meta, StoryObj } from '@storybook/angular';
import { RootLayout } from './root.layout';

const meta: Meta<RootLayout> = {
  title: 'layout/root',
  component: RootLayout,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<RootLayout>;

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
