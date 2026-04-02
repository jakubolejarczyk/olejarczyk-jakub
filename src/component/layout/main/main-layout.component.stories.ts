import { Meta, StoryObj } from '@storybook/angular';
import { MainLayoutComponent } from './main-layout.component';

const meta: Meta<MainLayoutComponent> = {
  title: 'component/layout/main',
  component: MainLayoutComponent,
};
export default meta;
type Story = StoryObj<MainLayoutComponent>;

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
