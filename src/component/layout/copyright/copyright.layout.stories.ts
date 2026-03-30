import { Meta, StoryObj } from '@storybook/angular';
import { CopyrightLayout } from './copyright.layout';

const meta: Meta<CopyrightLayout> = {
  title: 'layout/copyright',
  component: CopyrightLayout,
};
export default meta;
type Story = StoryObj<CopyrightLayout>;

export const Primary: Story = {
  args: {
    data: {
      base: {},
      extend: {
        symbol: '©',
        year: {
          kind: 'current',
        },
        ownerName: 'Jakub Olejarczyk',
        rightsStatements: 'All rights reserved.',
      },
    },
    metadata: {
      base: {
        palette: 'primary',
      },
      extend: {},
    },
  },
};
