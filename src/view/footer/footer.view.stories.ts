import { Meta, StoryObj } from '@storybook/angular';
import { FooterView } from './footer.view';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<FooterView> = {
  title: 'View/Footer',
  component: FooterView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<FooterView>;

export const Primary: Story = {};
