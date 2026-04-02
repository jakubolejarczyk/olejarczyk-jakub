import { Meta, StoryObj } from '@storybook/angular';
import { FooterLayoutComponent } from './footer-layout.component';

const meta: Meta<FooterLayoutComponent> = {
  title: 'component/layout/footer',
  component: FooterLayoutComponent,
};
export default meta;
type Story = StoryObj<FooterLayoutComponent>;

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
