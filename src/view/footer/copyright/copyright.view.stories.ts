import { Meta, StoryObj } from '@storybook/angular';
import { CopyrightView } from './copyright.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<CopyrightView> = {
  title: 'View/Footer/Copyright',
  component: CopyrightView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<CopyrightView>;

export const Primary: Story = {};
