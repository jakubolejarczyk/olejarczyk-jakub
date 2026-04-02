import { Meta, StoryObj } from '@storybook/angular';
import { SectionLayoutComponent } from './section-layout.component';

const meta: Meta<SectionLayoutComponent> = {
  title: 'component/layout/section',
  component: SectionLayoutComponent,
};
export default meta;
type Story = StoryObj<SectionLayoutComponent>;

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
      extend: {
        id: 'hello',
      },
    },
  },
};
