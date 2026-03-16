import { Meta, StoryObj } from '@storybook/angular';
import { TechnologiesView } from './technologies.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<TechnologiesView> = {
  title: 'View/Main/Technologies',
  component: TechnologiesView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<TechnologiesView>;

export const Primary: Story = {};
