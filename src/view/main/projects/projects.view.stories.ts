import { Meta, StoryObj } from '@storybook/angular';
import { ProjectsView } from './projects.view';
import { StorybookUtils } from '../../../utils/storybook.utils';

const meta: Meta<ProjectsView> = {
  title: 'View/Main/Projects',
  component: ProjectsView,
  decorators: StorybookUtils.getDecorators(),
};
export default meta;
type Story = StoryObj<ProjectsView>;

export const Primary: Story = {};
