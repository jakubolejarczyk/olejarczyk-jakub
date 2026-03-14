import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../config/app.config';
import { SectionComponent } from './section.component';

const meta: Meta<SectionComponent> = {
  title: 'SectionComponent',
  component: SectionComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<SectionComponent>;

export const Primary: Story = {};
