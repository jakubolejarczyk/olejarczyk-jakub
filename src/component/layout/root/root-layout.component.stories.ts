import { Meta, StoryObj } from '@storybook/angular';
import { RootLayoutComponent } from './root-layout.component';

const meta: Meta<RootLayoutComponent> = {
  title: 'component/layout/root',
  component: RootLayoutComponent,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<RootLayoutComponent>;

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
