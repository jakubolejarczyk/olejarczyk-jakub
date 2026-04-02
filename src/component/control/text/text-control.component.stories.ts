import { Meta, StoryObj } from '@storybook/angular';
import { TextControlComponent } from './text-control.component';

const meta: Meta<TextControlComponent> = {
  title: 'component/control/text',
  component: TextControlComponent,
};
export default meta;
type Story = StoryObj<TextControlComponent>;

export const Small: Story = {
  args: {
    data: {
      base: {},
      extend: {
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor quis quam blandit placerat a a enim. Curabitur porta mauris velit, vel laoreet tortor imperdiet et. Sed lobortis fringilla finibus. Quisque ac malesuada nibh. Maecenas tristique auctor mauris sit amet consequat. Fusce sit amet enim et elit ultrices faucibus. Mauris vel malesuada ligula, vitae auctor elit. Cras pretium feugiat congue.',
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
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor quis quam blandit placerat a a enim. Curabitur porta mauris velit, vel laoreet tortor imperdiet et. Sed lobortis fringilla finibus. Quisque ac malesuada nibh. Maecenas tristique auctor mauris sit amet consequat. Fusce sit amet enim et elit ultrices faucibus. Mauris vel malesuada ligula, vitae auctor elit. Cras pretium feugiat congue.',
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
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor quis quam blandit placerat a a enim. Curabitur porta mauris velit, vel laoreet tortor imperdiet et. Sed lobortis fringilla finibus. Quisque ac malesuada nibh. Maecenas tristique auctor mauris sit amet consequat. Fusce sit amet enim et elit ultrices faucibus. Mauris vel malesuada ligula, vitae auctor elit. Cras pretium feugiat congue.',
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
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor quis quam blandit placerat a a enim. Curabitur porta mauris velit, vel laoreet tortor imperdiet et. Sed lobortis fringilla finibus. Quisque ac malesuada nibh. Maecenas tristique auctor mauris sit amet consequat. Fusce sit amet enim et elit ultrices faucibus. Mauris vel malesuada ligula, vitae auctor elit. Cras pretium feugiat congue.',
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
        value:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor quis quam blandit placerat a a enim. Curabitur porta mauris velit, vel laoreet tortor imperdiet et. Sed lobortis fringilla finibus. Quisque ac malesuada nibh. Maecenas tristique auctor mauris sit amet consequat. Fusce sit amet enim et elit ultrices faucibus. Mauris vel malesuada ligula, vitae auctor elit. Cras pretium feugiat congue.',
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
