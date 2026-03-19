import { Meta, StoryObj } from '@storybook/angular';
import { TechnologiesView } from './technologies.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<TechnologiesView> = {
  title: 'View/Main/Technologies',
  component: TechnologiesView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<TechnologiesView>;

export const Primary: Story = {};
