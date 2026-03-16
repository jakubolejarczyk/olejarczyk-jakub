import { Meta, StoryObj } from '@storybook/angular';
import { NavigationView } from './navigation.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<NavigationView> = {
  title: 'View/Header/Navigation',
  component: NavigationView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<NavigationView>;

export const Primary: Story = {};
