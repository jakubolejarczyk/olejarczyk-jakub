import { Meta, StoryObj } from '@storybook/angular';
import { AboutMeView } from './about-me.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<AboutMeView> = {
  title: 'View/Main/AboutMe',
  component: AboutMeView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<AboutMeView>;

export const Primary: Story = {};
