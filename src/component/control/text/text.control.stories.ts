import { Meta, StoryObj } from '@storybook/angular';
import { TextControl } from './text.control';

const meta: Meta<TextControl> = {
  title: 'control/text',
  component: TextControl,
};
export default meta;
type Story = StoryObj<TextControl>;

export const Primary: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value: 'Hello World',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {
        type: 'h1',
      },
    },
  },
};

// TODO: I am here
