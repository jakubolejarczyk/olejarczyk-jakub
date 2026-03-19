import { Meta, StoryObj } from '@storybook/angular';
import { NavigationView } from './navigation.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<NavigationView> = {
  title: 'View/Header/Navigation',
  component: NavigationView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<NavigationView>;

export const Primary: Story = {};
