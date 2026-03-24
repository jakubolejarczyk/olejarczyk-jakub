import { Meta, StoryObj } from '@storybook/angular';
import { ProjectsView } from './projects.view';
import { StorybookUtil } from '../../../util/storybook.util';

const meta: Meta<ProjectsView> = {
  title: 'View/Main/Projects',
  component: ProjectsView,
  decorators: StorybookUtil.getDecorators(),
};
export default meta;
type Story = StoryObj<ProjectsView>;

export const Primary: Story = {};
