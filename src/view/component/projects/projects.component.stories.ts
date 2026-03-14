import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../../config/app.config';
import { ProjectsComponent } from './projects.component';

const meta: Meta<ProjectsComponent> = {
  title: 'ProjectsComponent',
  component: ProjectsComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<ProjectsComponent>;

export const Primary: Story = {};
