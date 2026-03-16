import { Meta, StoryObj } from '@storybook/angular';
import { MainView } from './main.view';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<MainView> = {
  title: 'View/Main',
  component: MainView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<MainView>;

export const Primary: Story = {};
