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
    },
    metadata: {
      base: {
        palette: 'primary',
      },
    },
  },
};
