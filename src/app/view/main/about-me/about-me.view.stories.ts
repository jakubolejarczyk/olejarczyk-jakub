import { Meta, StoryObj } from '@storybook/angular';
import { AboutMeView } from './about-me.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<AboutMeView> = {
  title: 'View/Main/AboutMe',
  component: AboutMeView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<AboutMeView>;

export const Primary: Story = {};
