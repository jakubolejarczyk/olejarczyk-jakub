import { Meta, StoryObj } from '@storybook/angular';
import { HeaderLayoutComponent } from './header-layout.component';

const meta: Meta<HeaderLayoutComponent> = {
  title: 'component/layout/header',
  component: HeaderLayoutComponent,
};
export default meta;
type Story = StoryObj<HeaderLayoutComponent>;

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
