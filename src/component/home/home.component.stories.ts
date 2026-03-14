import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { appConfig } from '../../config/app.config';
import { HomeComponent } from './home.component';

const meta: Meta<HomeComponent> = {
  title: 'HomeComponent',
  component: HomeComponent,
  decorators: [
    applicationConfig({
      providers: appConfig.providers,
    }),
  ],
};
export default meta;
type Story = StoryObj<HomeComponent>;

export const Primary: Story = {};
