import { Meta, StoryObj } from '@storybook/angular';

import { ProjectsView } from './projects.view';

const meta: Meta<ProjectsView> = {
  title: 'View/Main/Projects',
  component: ProjectsView,
};
export default meta;
type Story = StoryObj<ProjectsView>;

export const Primary: Story = {};
