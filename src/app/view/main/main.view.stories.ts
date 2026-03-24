import { Meta, StoryObj } from '@storybook/angular';
import { MainView } from './main.view';
import { StorybookUtil } from '../../util/storybook.util';

const meta: Meta<MainView> = {
  title: 'View/Main',
  component: MainView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<MainView>;

export const Primary: Story = {};
