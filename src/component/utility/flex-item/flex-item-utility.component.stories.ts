import { Meta, StoryObj } from '@storybook/angular';
import { FlexItemUtilityComponent } from './flex-item-utility.component';

const meta: Meta<FlexItemUtilityComponent> = {
  title: 'component/utility/flex-item',
  component: FlexItemUtilityComponent,
};
export default meta;
type Story = StoryObj<FlexItemUtilityComponent>;

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
