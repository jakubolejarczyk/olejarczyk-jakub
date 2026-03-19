import { Meta, StoryObj } from '@storybook/angular';
import { FooterView } from './footer.view';
import { StorybookUtil } from '../../util/storybook.util';

const meta: Meta<FooterView> = {
  title: 'View/Footer',
  component: FooterView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<FooterView>;

export const Primary: Story = {};
