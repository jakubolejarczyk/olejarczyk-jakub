import { Meta, StoryObj } from '@storybook/angular';
import { TextControl } from './text.control';

const meta: Meta<TextControl> = {
  title: 'control/text',
  component: TextControl,
};
export default meta;
type Story = StoryObj<TextControl>;

export const Small: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value: 'Hello World!',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {
        type: 'small',
      },
    },
  },
};

export const P: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value: 'Hello World!',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {
        type: 'p',
      },
    },
  },
};

export const H3: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value: 'Hello World!',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {
        type: 'h3',
      },
    },
  },
};

export const H2: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value: 'Hello World!',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {
        type: 'h2',
      },
    },
  },
};

export const H1: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value: 'Hello World!',
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
