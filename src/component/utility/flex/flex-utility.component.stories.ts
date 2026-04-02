import { Meta, StoryObj } from '@storybook/angular';
import { FlexUtilityComponent } from './flex-utility.component';

const meta: Meta<FlexUtilityComponent> = {
  title: 'component/utility/flex',
  component: FlexUtilityComponent,
};
export default meta;
type Story = StoryObj<FlexUtilityComponent>;

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
