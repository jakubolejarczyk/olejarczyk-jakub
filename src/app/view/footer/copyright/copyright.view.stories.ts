import { Meta, StoryObj } from '@storybook/angular';
import { CopyrightView } from './copyright.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<CopyrightView> = {
  title: 'View/Footer/Copyright',
  component: CopyrightView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<CopyrightView>;

export const Primary: Story = {};
