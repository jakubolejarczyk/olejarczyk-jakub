import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../app.config';
import { SectionsComponent } from './sections.component';

const meta: Meta<SectionsComponent> = {
  title: 'SectionsComponent',
  component: SectionsComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<SectionsComponent>;

export const Primary: Story = {};
