import { Meta, StoryObj } from '@storybook/angular';
import { HomeView } from './home.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<HomeView> = {
  title: 'View/Header/Home',
  component: HomeView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<HomeView>;

export const Primary: Story = {};
