import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { AboutMeComponent } from './about-me.component';
import { appConfig } from '../../app.config';

const meta: Meta<AboutMeComponent> = {
  title: 'AboutMeComponent',
  component: AboutMeComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<AboutMeComponent>;

export const Primary: Story = {};
