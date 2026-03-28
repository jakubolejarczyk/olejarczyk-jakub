import { Meta, StoryObj } from '@storybook/angular';
import { CopyrightComponent } from './copyright.component';

const meta: Meta<CopyrightComponent> = {
  title: 'component/copyright',
  component: CopyrightComponent,
};
export default meta;
type Story = StoryObj<CopyrightComponent>;

export const Primary: Story = {
  args: {
    component: {
      kind: 'copyright',
      data: {
        symbol: '©',
        year: {
          kind: 'range',
          from: 2000,
          to: 2005,
        },
        ownerName: 'Jakub Olejarczyk',
        rightsStatements: 'All Rights Reserved',
      },
      metadata: {},
    },
  },
};
