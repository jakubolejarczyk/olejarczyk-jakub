import { Meta, StoryObj } from '@storybook/angular';
import { CopyrightComponent } from './copyright.layout';

const meta: Meta<CopyrightComponent> = {
  title: 'layout/copyright',
  component: CopyrightComponent,
};
export default meta;
type Story = StoryObj<CopyrightComponent>;

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
