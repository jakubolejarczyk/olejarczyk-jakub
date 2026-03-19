import { Meta, StoryObj } from '@storybook/angular';
import { HomeView } from './home.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<HomeView> = {
  title: 'View/Header/Home',
  component: HomeView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<HomeView>;

export const Primary: Story = {};
